"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

const TRACKS = [
  {
    numeral: "I",
    titleKey: "nomination.t1.title",
    descKey: "nomination.t1.desc",
  },
  {
    numeral: "II",
    titleKey: "nomination.t2.title",
    descKey: "nomination.t2.desc",
  },
  {
    numeral: "III",
    titleKey: "nomination.t3.title",
    descKey: "nomination.t3.desc",
  },
] as const;

export function NominationCTA() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-hairline px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <Reveal className="grid grid-cols-1 gap-8 border-b border-hairline pb-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="block h-px w-16 bg-gold" />
            <h2 className="font-serif-cn mt-6 text-3xl font-black text-ivory md:text-4xl">
              {t("nomination.heading")}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:mt-1">
            <p className="font-sans-cn text-sm leading-7 text-ivory/60 md:text-base">
              {t("nomination.subheading")}
            </p>
          </div>
        </Reveal>

        {/* Nomination tracks */}
        <div className="mt-10 grid grid-cols-1 gap-px bg-hairline md:grid-cols-3">
          {TRACKS.map(({ numeral, titleKey, descKey }, i) => (
            <Reveal key={titleKey} delay={i * 0.08}>
              <div className="flex h-full flex-col bg-ink-soft p-8 md:p-10">
                <span className="font-display text-3xl font-bold text-wine/50">
                  {numeral}
                </span>
                <span className="mt-2 block h-px w-10 bg-gold/30" />
                <h3 className="font-serif-cn mt-6 text-xl font-black text-ivory">
                  {t(titleKey)}
                </h3>
                <p className="font-sans-cn mt-4 flex-1 text-sm leading-7 text-ivory/60">
                  {t(descKey)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA buttons + organizer placeholder */}
        <Reveal delay={0.1} className="mt-10 flex flex-col gap-6 border-t border-hairline pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/nomination"
              className="inline-flex items-center justify-center gap-2 bg-ivory px-8 py-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-gold-bright"
            >
              {t("nomination.cta")} <span aria-hidden="true">→</span>
            </a>
            <a
              href="/nomination#criteria"
              className="inline-flex items-center justify-center gap-2 border border-hairline px-8 py-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-ivory/70 transition-colors duration-300 hover:border-ivory/40 hover:text-ivory"
            >
              {t("nomination.criteria")}
            </a>
          </div>
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-stone">
            {t("nomination.organizer")}
          </p>
        </Reveal>

      </div>
    </section>
  );
}
