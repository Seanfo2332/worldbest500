import { insights } from "@/data/insights";
import { coverStories } from "@/data/cover-stories";

/**
 * A single shape both `insights` entries and `coverStories` entries can be
 * normalized into, so the /insights/[slug] article template can render
 * either kind of content without knowing which dataset it came from.
 */
export interface Article {
  slug: string;
  href: string;
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  date: string;
  /** Short summary, used for the SEO meta description. */
  excerpt: string;
  excerptEn: string;
  /** Full multi-paragraph article body, rendered on the detail page. */
  body: string[];
  bodyEn: string[];
  /** Image path for insights entries, or a cover-stories domain-derived path. */
  image: string;
}

function slugFromHref(href: string): string {
  return href.replace(/^\/insights\//, "");
}

function buildArticleIndex(): Map<string, Article> {
  const bySlug = new Map<string, Article>();

  for (const item of insights) {
    const slug = slugFromHref(item.href);
    bySlug.set(slug, {
      slug,
      href: item.href,
      category: item.category,
      categoryEn: item.categoryEn,
      title: item.title,
      titleEn: item.titleEn,
      date: item.date,
      excerpt: item.excerpt,
      excerptEn: item.excerptEn,
      body: item.body,
      bodyEn: item.bodyEn,
      image: item.image,
    });
  }

  for (const story of coverStories) {
    const slug = slugFromHref(story.href);
    bySlug.set(slug, {
      slug,
      href: story.href,
      category: story.categoryCn,
      categoryEn: story.categoryEn,
      title: story.headlineCn,
      titleEn: story.headlineEn,
      date: story.date,
      excerpt: story.excerptCn,
      excerptEn: story.excerptEn,
      body: story.bodyCn,
      bodyEn: story.bodyEn,
      image: `/cover-stories/${story.domain.replace(".com", "")}.png`,
    });
  }

  return bySlug;
}

const articleIndex = buildArticleIndex();

export function findArticleBySlug(slug: string): Article | undefined {
  return articleIndex.get(slug);
}

export function getAllArticleSlugs(): string[] {
  return Array.from(articleIndex.keys());
}

/** Other articles, excluding the current one, for a "related reading" section. */
export function getRelatedArticles(currentSlug: string, count: number): Article[] {
  return Array.from(articleIndex.values())
    .filter((article) => article.slug !== currentSlug)
    .slice(0, count);
}
