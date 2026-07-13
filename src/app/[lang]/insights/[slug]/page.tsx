import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { buildLocaleMetadata } from "@/lib/metadata";
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
  const { slug } = await params;
  const article = findArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <ArticleDetail article={article} />
      </main>
      <Footer />
    </div>
  );
}
