import { getSupabase, SITE_CODE } from "./supabaseClient";
import type { InsightEntry } from "@/data/insights";
import type { Article } from "./articles";

// Auto-crawled 洞察 for World Best 500 live in the shared `articles` table (country_code=WB500)
// and are written by scripts/crawler/. They are Chinese-only: every English field falls back to
// the Chinese text so the existing bilingual components render without special-casing.
//
// The `public_articles` view exposes: slug, title, category, meta_title, meta_description,
// excerpt, publish_date, body (jsonb string[]), image_url, source, source_url, standfirst,
// sections ({heading, paragraphs}[]), faq_items, article_table, focus_keyphrase.

interface Section {
  heading: string;
  paragraphs: string[];
}

function asStrings(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === "string") : [];
}

function sectionsOf(value: unknown): Section[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((s) => ({
      heading: typeof s?.heading === "string" ? s.heading.trim() : "",
      paragraphs: asStrings(s?.paragraphs).map((p) => p.trim()).filter(Boolean),
    }))
    .filter((s) => s.heading && s.paragraphs.length > 0);
}

/** Flat reading body: standfirst, then each section as a heading paragraph + its paragraphs. */
function bodyFrom(row: Record<string, unknown>): string[] {
  const standfirst = typeof row.standfirst === "string" ? row.standfirst.trim() : "";
  const sections = sectionsOf(row.sections);
  if (sections.length === 0) return [standfirst, ...asStrings(row.body)].filter(Boolean);
  const out: string[] = [];
  if (standfirst) out.push(standfirst);
  for (const s of sections) out.push(s.heading, ...s.paragraphs);
  return out;
}

/** "YYYY-MM-DD" or "YYYY.MM.DD" -> "YYYY.MM.DD" to match the curated data's format. */
function normalizeDate(value: unknown): string {
  return String(value ?? "").replace(/-/g, ".");
}

function toArticle(row: Record<string, unknown>): Article {
  const slug = String(row.slug ?? "");
  const title = String(row.title ?? "");
  const excerpt = String(row.excerpt ?? row.meta_description ?? "");
  const category = String(row.category ?? "企业聚焦");
  const body = bodyFrom(row);
  return {
    slug,
    href: `/insights/${slug}`,
    category,
    categoryEn: category,
    title,
    titleEn: title,
    date: normalizeDate(row.publish_date),
    excerpt,
    excerptEn: excerpt,
    body,
    bodyEn: body,
    image: (row.image_url as string) || "/insights/trends.png",
  };
}

function toInsightEntry(row: Record<string, unknown>): InsightEntry {
  const a = toArticle(row);
  return {
    category: a.category,
    categoryEn: a.categoryEn,
    title: a.title,
    titleEn: a.titleEn,
    date: a.date,
    href: a.href,
    image: a.image,
    excerpt: a.excerpt,
    excerptEn: a.excerptEn,
    body: a.body,
    bodyEn: a.bodyEn,
  };
}

const MAX = 60;

/** Crawled insight cards, newest first. Returns [] on any failure or if Supabase isn't set. */
export async function fetchCrawledInsights(): Promise<InsightEntry[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from("public_articles")
      .select("*")
      .eq("country_code", SITE_CODE)
      .order("created_at", { ascending: false })
      .limit(MAX);
    if (error) {
      console.error("[wb500] failed to load crawled insights:", error.message);
      return [];
    }
    return (data ?? []).map(toInsightEntry);
  } catch (err) {
    console.error("[wb500] failed to load crawled insights:", err);
    return [];
  }
}

/** One crawled article by slug (site-scoped), or null. Used by the /insights/[slug] detail page. */
export async function findCrawledArticle(slug: string): Promise<Article | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from("public_articles")
      .select("*")
      .eq("country_code", SITE_CODE)
      .eq("slug", slug)
      .maybeSingle();
    if (error || !data) return null;
    return toArticle(data);
  } catch (err) {
    console.error("[wb500] failed to load crawled article:", err);
    return null;
  }
}
