"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getRelatedArticles, type Article } from "@/lib/articles";
import { Reveal } from "./Reveal";

interface ArticleDetailProps {
  article: Article;
}

const RELATED_COUNT = 3;

export function ArticleDetail({ article }: ArticleDetailProps) {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";
  const prefix = isEn ? "/en" : "";
  const related = getRelatedArticles(article.slug, RELATED_COUNT);

  return (
    <article className="px-6 pb-20 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Link
            href={`${prefix}/insights`}
            className="font-sans text-xs uppercase tracking-[0.18em] text-stone transition-colors duration-300 hover:text-gold"
          >
            {t("article.backToInsights")}
          </Link>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone">
              {isEn ? article.categoryEn : article.category}
            </span>
            <span className="text-stone">·</span>
            <span className="font-sans text-[11px] text-stone">{article.date}</span>
          </div>

          <h1
            className={`mt-4 font-black leading-tight text-ivory ${
              isEn ? "font-display text-4xl md:text-6xl" : "font-serif-cn text-3xl md:text-5xl"
            }`}
          >
            {isEn ? article.titleEn : article.title}
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-10 aspect-[16/9] overflow-hidden bg-ink-soft">
          <Image
            src={article.image}
            alt={isEn ? article.titleEn : article.title}
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 768px"
            unoptimized
          />
        </Reveal>

        <Reveal
          delay={0.15}
          className="font-sans-cn mt-10 space-y-5 text-sm leading-7 text-ivory/80 md:text-base"
        >
          {(isEn ? article.bodyEn : article.body).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="mx-auto mt-16 max-w-5xl border-t border-hairline pt-10">
          <Reveal>
            <h2 className="font-sans text-xs uppercase tracking-[0.18em] text-gold">
              {t("article.relatedHeading")}
            </h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-px bg-hairline sm:grid-cols-3">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.06}>
                <Link
                  href={`${prefix}/insights/${item.slug}`}
                  className="group flex h-full flex-col gap-3 bg-ink-soft p-6 transition-colors duration-300 hover:bg-ink"
                >
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone">
                    {isEn ? item.categoryEn : item.category}
                  </span>
                  <span className="font-serif-cn flex-1 text-sm font-bold leading-snug text-ivory transition-colors duration-300 group-hover:text-gold">
                    {isEn ? item.titleEn : item.title}
                  </span>
                  <span className="text-stone transition-colors duration-300 group-hover:text-gold">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
