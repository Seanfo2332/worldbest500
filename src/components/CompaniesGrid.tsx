"use client";

import { useLanguage } from "@/context/LanguageContext";
import { companies } from "@/data/companies";
import { LogoImage } from "./LogoImage";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

export function CompaniesGrid() {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  return (
    <>
      <PageHero
        eyebrow={t("footer.col2.l1")}
        title={t("nav.companies")}
        subtitle={t("companiespage.subtitle")}
      />

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, i) => (
              <Reveal
                key={company.domain}
                delay={i * 0.05}
                className="flex h-full flex-col gap-4 bg-ink-soft p-6"
              >
                <div className="flex items-start gap-4">
                  <LogoImage domain={company.domain} nameEn={company.nameEn} />
                  <div>
                    <p className="font-serif-cn text-base font-bold text-ivory">
                      {isEn ? company.nameEn : company.nameCn}
                    </p>
                    <p className="font-sans text-xs text-stone">
                      {isEn ? company.nameCn : company.nameEn}
                    </p>
                  </div>
                </div>

                <p className="font-sans-cn flex-1 text-sm leading-6 text-ivory/70">
                  {isEn ? company.blurbEn : company.blurb}
                </p>

                <div className="flex items-center justify-between border-t border-hairline pt-3 font-sans text-[11px] uppercase tracking-[0.14em] text-stone">
                  <span>{isEn ? company.industryEn : company.industry}</span>
                  <span>{isEn ? company.headquartersEn : company.headquarters}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
