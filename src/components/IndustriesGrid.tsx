"use client";

import { useLanguage } from "@/context/LanguageContext";
import { industries } from "@/data/companies";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

export function IndustriesGrid() {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  return (
    <>
      <PageHero
        eyebrow={t("nav.industries")}
        title={t("nav.industries")}
        subtitle={t("industriespage.subtitle")}
      />

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.nameEn} delay={i * 0.05} className="flex h-full flex-col gap-3 bg-ink-soft p-8">
                <p className="font-serif-cn text-lg font-bold text-ivory">
                  {isEn ? industry.nameEn : industry.nameCn}
                </p>
                <p className="font-sans-cn flex-1 text-sm leading-6 text-ivory/60">
                  {isEn ? industry.descriptionEn : industry.description}
                </p>
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-stone">
                  {industry.companyCount} {t("industriespage.companiesSuffix")}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
