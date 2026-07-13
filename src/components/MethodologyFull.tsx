"use client";

import { useLanguage } from "@/context/LanguageContext";
import { METHODOLOGY_DIMENSIONS } from "@/data/methodology";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

export function MethodologyFull() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("nav.methodology")}
        title={t("methodology.heading")}
        subtitle={t("methodology.subheading")}
      />

      {/* ── Dimension cards ── */}
      <section className="border-b border-hairline px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {METHODOLOGY_DIMENSIONS.map(({ num, titleKey, bodyKey }, i) => (
              <Reveal
                key={titleKey}
                delay={i * 0.07}
                className="flex h-full flex-col bg-ink-soft p-6 md:p-8"
              >
                <span className="font-display text-3xl font-bold text-wine/60">{num}</span>
                <span className="mt-1 block h-px w-10 bg-gold/40" />
                <h2 className="font-serif-cn mt-5 text-lg font-black text-ivory">{t(titleKey)}</h2>
                <p className="font-sans-cn mt-3 flex-1 text-sm leading-7 text-ivory/60">
                  {t(bodyKey)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scoring weights ── */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-serif-cn text-2xl font-black text-ivory md:text-3xl">
              {t("methodologypage.weightsHeading")}
            </h2>
            <p className="font-sans-cn mt-3 max-w-2xl text-sm leading-7 text-ivory/60">
              {t("methodologypage.weightsNote")}
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {METHODOLOGY_DIMENSIONS.map(({ num, titleKey, weight }, i) => (
              <Reveal key={titleKey} delay={i * 0.05}>
                <div className="flex items-center gap-4">
                  <span className="font-sans w-8 shrink-0 text-xs text-stone">{num}</span>
                  <span className="font-sans-cn w-32 shrink-0 text-sm text-ivory/80 md:w-56">
                    {t(titleKey)}
                  </span>
                  <div className="h-2 flex-1 bg-ink-soft">
                    <div className="h-full bg-gold" style={{ width: `${weight}%` }} />
                  </div>
                  <span className="font-display w-14 shrink-0 text-right text-lg font-bold text-ivory">
                    {weight}%
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
