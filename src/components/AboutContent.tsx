"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/lib/i18n";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

const STANDARDS: { titleKey: TranslationKey; bodyKey: TranslationKey }[] = [
  { titleKey: "aboutpage.standard1.title", bodyKey: "aboutpage.standard1.body" },
  { titleKey: "aboutpage.standard2.title", bodyKey: "aboutpage.standard2.body" },
  { titleKey: "aboutpage.standard3.title", bodyKey: "aboutpage.standard3.body" },
];

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero eyebrow={t("footer.col5.l1")} title={t("aboutpage.title")} />

      {/* ── Why we exist ── */}
      <section className="border-b border-hairline px-6 py-16 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal className="space-y-5 font-sans-cn text-sm leading-7 text-ivory/70 md:text-base">
            <p>{t("mission.p1")}</p>
            <p>{t("mission.p2")}</p>
            <p>{t("mission.p3")}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Our standards ── */}
      <section className="px-6 py-16 md:px-10">
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
    </>
  );
}
