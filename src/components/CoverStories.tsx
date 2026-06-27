"use client";

import Image from "next/image";
import { coverStories } from "@/data/cover-stories";
import { Reveal } from "./Reveal";
import { useLanguage } from "@/context/LanguageContext";

export function CoverStories() {
  const { lang, t } = useLanguage();
  const isZh = lang === "zh";

  return (
    <section className="border-b border-hairline px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <Reveal className="flex flex-wrap items-baseline justify-between gap-4 border-b border-hairline pb-6">
          <h2 className="font-serif-cn text-3xl font-black text-ivory md:text-4xl">
            {t("coverstories.heading")}
          </h2>
          <a
            href="/insights"
            className="font-sans shrink-0 text-xs uppercase tracking-[0.18em] text-stone transition-colors duration-300 hover:text-gold"
          >
            {t("coverstories.viewAll")} →
          </a>
        </Reveal>

        {/* Featured story — large */}
        {coverStories[0] && (
          <Reveal delay={0.05} className="mt-10">
            <a
              href={coverStories[0].href}
              className="group grid grid-cols-1 gap-0 border border-hairline lg:grid-cols-[1fr_420px]"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-ink-soft lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src={`/cover-stories/${coverStories[0].domain.replace(".com", "")}.png`}
                  alt={isZh ? coverStories[0].nameCn : coverStories[0].nameEn}
                  fill
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  unoptimized
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/60 lg:block hidden" />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between border-t border-hairline p-8 lg:border-t-0 lg:border-l lg:p-10">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-4xl font-bold text-wine">
                      {String(coverStories[0].rank).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone">
                      {isZh ? coverStories[0].categoryCn : coverStories[0].categoryEn}
                    </span>
                  </div>

                  <h3 className="font-serif-cn mt-4 text-xl font-black leading-snug text-ivory transition-colors duration-300 group-hover:text-gold md:text-2xl">
                    {isZh ? coverStories[0].nameCn : coverStories[0].nameEn}
                  </h3>

                  <p className="font-serif-cn mt-3 text-base font-bold leading-snug text-ivory/80 md:text-lg">
                    {isZh ? coverStories[0].headlineCn : coverStories[0].headlineEn}
                  </p>

                  <p className="font-sans-cn mt-4 text-sm leading-7 text-ivory/60">
                    {isZh ? coverStories[0].excerptCn : coverStories[0].excerptEn}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-hairline pt-6">
                  <span className="font-sans text-[11px] text-stone">
                    {coverStories[0].date}
                  </span>
                  <span className="font-sans text-xs uppercase tracking-[0.18em] text-stone transition-colors duration-300 group-hover:text-gold">
                    {t("coverstories.readmore")} →
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        )}

        {/* Secondary stories */}
        <div className="mt-px grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2">
          {coverStories.slice(1).map((story, i) => (
            <Reveal key={story.href} delay={0.1 + i * 0.08}>
              <a
                href={story.href}
                className="group flex h-full flex-col bg-ink-soft transition-colors duration-300 hover:bg-ink"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden bg-ink">
                  <Image
                    src={`/cover-stories/${story.domain.replace(".com", "")}.png`}
                    alt={isZh ? story.nameCn : story.nameEn}
                    fill
                    className="object-cover grayscale transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    unoptimized
                  />
                </div>

                {/* Text */}
                <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl font-bold text-wine">
                      {String(story.rank).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone">
                      {isZh ? story.categoryCn : story.categoryEn}
                    </span>
                  </div>

                  <p className="font-serif-cn text-lg font-black leading-snug text-ivory transition-colors duration-300 group-hover:text-gold">
                    {isZh ? story.nameCn : story.nameEn}
                  </p>

                  <p className="font-serif-cn flex-1 text-sm font-bold leading-snug text-ivory/70">
                    {isZh ? story.headlineCn : story.headlineEn}
                  </p>

                  <div className="flex items-center justify-between border-t border-hairline pt-4">
                    <span className="font-sans text-[11px] text-stone">{story.date}</span>
                    <span className="text-stone transition-colors duration-300 group-hover:text-gold">
                      →
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
