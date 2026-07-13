"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/lib/i18n";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

const FACTS: { labelKey: TranslationKey; valueKey: TranslationKey }[] = [
  { labelKey: "aboutpage.fact1.label", valueKey: "aboutpage.fact1.value" },
  { labelKey: "aboutpage.fact2.label", valueKey: "aboutpage.fact2.value" },
  { labelKey: "aboutpage.fact3.label", valueKey: "aboutpage.fact3.value" },
  { labelKey: "aboutpage.fact4.label", valueKey: "aboutpage.fact4.value" },
  { labelKey: "aboutpage.fact5.label", valueKey: "aboutpage.fact5.value" },
];

const STANDARDS: { titleKey: TranslationKey; bodyKey: TranslationKey }[] = [
  { titleKey: "aboutpage.standard1.title", bodyKey: "aboutpage.standard1.body" },
  { titleKey: "aboutpage.standard2.title", bodyKey: "aboutpage.standard2.body" },
  { titleKey: "aboutpage.standard3.title", bodyKey: "aboutpage.standard3.body" },
];

const PROCESS_STEPS: { titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { titleKey: "aboutpage.process1.title", descKey: "aboutpage.process1.desc" },
  { titleKey: "aboutpage.process2.title", descKey: "aboutpage.process2.desc" },
  { titleKey: "aboutpage.process3.title", descKey: "aboutpage.process3.desc" },
];

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero eyebrow={t("footer.col5.l1")} title={t("aboutpage.title")} />

      {/* ── Publication facts (masthead strip) ── */}
      <section className="border-b border-hairline px-6 py-8 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="font-sans block text-[10px] uppercase tracking-[0.2em] text-gold">
              {t("aboutpage.factsHeading")}
            </span>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-5">
              {FACTS.map(({ labelKey, valueKey }) => (
                <div key={labelKey}>
                  <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-stone">
                    {t(labelKey)}
                  </p>
                  <p className="font-sans-cn mt-1.5 text-sm text-ivory/80">{t(valueKey)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why we exist ──
          Stacked layout (image full-width on top, text below) rather than a
          side-by-side grid: with 5 paragraphs the text column runs far taller
          than a single static image, which left a large empty gap under the
          image in the two-column version. Stacking avoids that height mismatch
          regardless of how much copy this section ever grows to. ── */}
      <section className="border-b border-hairline px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="relative aspect-[1024/559] w-full overflow-hidden">
              <Image
                src="/about/about-building.png"
                alt={t("aboutpage.imgAlt")}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mt-10 space-y-5 font-sans-cn text-sm leading-7 text-ivory/70 md:text-base"
          >
            <p>{t("mission.p1")}</p>
            <p>{t("mission.p2")}</p>
            <p>{t("mission.p3")}</p>
            <p>{t("aboutpage.extended.p1")}</p>
            <p>{t("aboutpage.extended.p2")}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Our standards ── */}
      <section className="border-b border-hairline px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-serif-cn text-2xl font-black text-ivory md:text-3xl">
              {t("aboutpage.standardsHeading")}
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px bg-hairline md:grid-cols-3">
            {STANDARDS.map(({ titleKey, bodyKey }, i) => (
              <Reveal key={titleKey} delay={i * 0.08} className="bg-ink-soft p-8">
                <span className="font-display text-2xl font-bold text-wine/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif-cn mt-4 text-lg font-black text-ivory">{t(titleKey)}</h3>
                <p className="font-sans-cn mt-3 text-sm leading-7 text-ivory/60">{t(bodyKey)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-serif-cn text-2xl font-black text-ivory md:text-3xl">
              {t("aboutpage.processHeading")}
            </h2>
          </Reveal>
          <ol className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {PROCESS_STEPS.map(({ titleKey, descKey }, i) => (
              <Reveal key={titleKey} delay={i * 0.08}>
                <span className="font-display text-2xl font-bold text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif-cn mt-4 text-lg font-black text-ivory">{t(titleKey)}</h3>
                <p className="font-sans-cn mt-3 text-sm leading-7 text-ivory/60">{t(descKey)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
