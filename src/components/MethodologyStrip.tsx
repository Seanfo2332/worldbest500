"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { METHODOLOGY_DIMENSIONS } from "@/data/methodology";
import { Reveal } from "./Reveal";

export function MethodologyStrip() {
  const { lang, t } = useLanguage();
  const prefix = lang === "en" ? "/en" : "";

  return (
    <section className="border-b border-hairline px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <Reveal className="grid grid-cols-1 gap-8 border-b border-hairline pb-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="block h-px w-16 bg-gold" />
            <h2 className="font-serif-cn mt-6 text-3xl font-black text-ivory md:text-4xl">
              {t("methodology.heading")}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:mt-1">
            <p className="font-sans-cn text-sm leading-7 text-ivory/60 md:text-base">
              {t("methodology.subheading")}
            </p>
            <Link
              href={`${prefix}/methodology`}
              className="font-sans mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone transition-colors duration-300 hover:text-gold"
            >
              {t("methodology.cta")} →
            </Link>
          </div>
        </Reveal>

        {/* Dimension cards */}
        <div className="mt-10 grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {METHODOLOGY_DIMENSIONS.map(({ num, titleKey, bodyKey }, i) => (
            <Reveal key={titleKey} delay={i * 0.07}>
              <div className="flex h-full flex-col bg-ink-soft p-6 md:p-8">
                <span className="font-display text-3xl font-bold text-wine/60">
                  {num}
                </span>
                <span className="block mt-1 h-px w-10 bg-gold/40" />
                <h3 className="font-serif-cn mt-5 text-lg font-black text-ivory">
                  {t(titleKey)}
                </h3>
                <p className="font-sans-cn mt-3 flex-1 text-sm leading-7 text-ivory/60">
                  {t(bodyKey)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
