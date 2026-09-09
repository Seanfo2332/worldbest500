"use client";

import Image from "next/image";
import Link from "next/link";
import { type InsightEntry } from "@/data/insights";
import { Reveal } from "./Reveal";
import { useLanguage } from "@/context/LanguageContext";

interface InsightsGridProps {
  insights: InsightEntry[];
  /**
   * "home": full header — "洞察与观点" heading + "View All Insights →" CTA to /insights.
   * "index": on the /insights page itself. PageHero already carries "洞察与观点", so the grid
   *   gets its own distinct label ("最新洞察") and no link — pointing "View All" back at the
   *   page you're already on was the reported dead link.
   */
  variant?: "home" | "index";
}

export function InsightsGrid({ insights, variant = "home" }: InsightsGridProps) {
  const { lang, t } = useLanguage();
  const prefix = lang === "en" ? "/en" : "";
  const heading = variant === "index" ? t("insights.latestHeading") : t("insights.heading");

  return (
    <>
      <Reveal className="flex flex-wrap items-baseline justify-between gap-4 border-b border-hairline pb-6">
        <h2 className="font-serif-cn text-3xl font-black text-ivory md:text-4xl">{heading}</h2>
        {variant === "home" && (
          <Link
            href={`${prefix}/insights`}
            className="font-sans shrink-0 text-xs uppercase tracking-[0.18em] text-stone transition-colors duration-300 hover:text-gold"
          >
            {t("insights.viewAll")} →
          </Link>
        )}
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((item, i) => (
          <Reveal
            key={item.href}
            delay={i * 0.07}
            className="border border-hairline bg-ink-soft transition-colors duration-300 hover:border-stone/40"
          >
            <Link href={`${prefix}${item.href}`} className="group flex h-full flex-col">
              <div className="overflow-hidden">
                <div className="relative aspect-[3/2] w-full transition-transform duration-700 group-hover:scale-[1.04]">
                  <Image
                    src={item.image}
                    alt={lang === "zh" ? item.title : item.titleEn}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone">
                  {lang === "zh" ? item.category : item.categoryEn}
                </p>
                <h3 className="font-serif-cn flex-1 text-[15px] font-bold leading-snug text-ivory transition-colors duration-300 group-hover:text-gold">
                  {lang === "zh" ? item.title : item.titleEn}
                </h3>
                <div className="flex items-center justify-between pt-3">
                  <span className="font-sans text-[11px] text-stone">{item.date}</span>
                  <span className="text-stone transition-colors duration-300 group-hover:text-gold">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
