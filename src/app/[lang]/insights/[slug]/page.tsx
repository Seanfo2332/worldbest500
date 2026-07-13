import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { buildLocaleMetadata, SITE_URL } from "@/lib/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleDetail } from "@/components/ArticleDetail";
import { findArticleBySlug, getAllArticleSlugs } from "@/lib/articles";

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const article = findArticleBySlug(slug);
  if (!article) return {};

  const isEn = lang === "en";
  const resolvedLang: Lang = isEn ? "en" : "zh";
  return {
    title: `${isEn ? article.titleEn : article.title} · World Best 500`,
    description: isEn ? article.excerptEn : article.excerpt,
    ...buildLocaleMetadata(resolvedLang, `/insights/${slug}`),
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const article = findArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const isEn = lang === "en";
  const prefix = isEn ? "/en" : "";

  // Article JSON-LD so search/AI answer engines can surface this as a
  // proper article, not just an unstructured page.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isEn ? article.titleEn : article.title,
    description: isEn ? article.excerptEn : article.excerpt,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.date.replaceAll(".", "-"),
    author: {
      "@type": "Organization",
      name: "World Best 500",
    },
    publisher: {
      "@type": "Organization",
      name: "World Best 500",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}${prefix}/insights/${slug}`,
  };

  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="flex-1">
        <ArticleDetail article={article} />
      </main>
      <Footer />
    </div>
  );
}
