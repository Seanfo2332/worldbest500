"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ranking2025Preview } from "@/data/ranking";
import { CURATED_SIX, INDIVIDUAL_THREE } from "@/data/lists";
import { leaders } from "@/data/leaders";
import { LogoImage } from "./LogoImage";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

export function TheFullRanking() {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";
  const companyByDomain = new Map(ranking2025Preview.map((c) => [c.domain, c]));

  return (
    <>
      <PageHero
        eyebrow={t("the500page.eyebrow")}
        title={t("lists.main.title")}
        subtitle={t("lists.main.desc")}
      />

      {/* ── Full ranking table ── */}
      <section className="border-b border-hairline px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-stone">
            {t("the500page.previewNote")}
          </p>

          <div className="mt-8 hidden grid-cols-[80px_56px_2fr_1.4fr_1fr_140px] gap-6 bg-ink-soft px-4 py-3 font-sans text-xs uppercase tracking-[0.18em] text-stone md:grid">
            <span>{t("ranking.col.rank")}</span>
            <span />
            <span>{t("ranking.col.name")}</span>
            <span>{t("ranking.col.industry")}</span>
            <span>{t("ranking.col.hq")}</span>
            <span className="text-right">{t("ranking.col.score")}</span>
          </div>

          <ul className="mt-4 md:mt-0">
            {ranking2025Preview.map((entry, i) => (
              <Reveal key={entry.rank} as="li" delay={i * 0.05} className="border-b border-hairline">
                <div className="grid grid-cols-[56px_48px_1fr] items-center gap-4 px-4 py-7 md:grid-cols-[80px_56px_2fr_1.4fr_1fr_140px] md:gap-6 md:py-8">
                  <span className="font-display text-3xl font-bold leading-none text-wine md:text-4xl">
                    {String(entry.rank).padStart(2, "0")}
                  </span>
                  <LogoImage domain={entry.domain} nameEn={entry.nameEn} />
                  <div>
                    <p className="font-serif-cn text-lg font-bold text-ivory md:text-xl">
                      {isEn ? entry.nameEn : entry.nameCn}
                    </p>
                    <p className="font-sans text-xs text-stone">
                      {isEn ? entry.nameCn : entry.nameEn}
                    </p>
                  </div>
                  <p className="font-sans-cn col-span-3 mt-3 text-sm text-ivory/70 md:col-span-1 md:mt-0">
                    {isEn ? entry.industryEn : entry.industry}
                  </p>
                  <p className="font-sans-cn hidden text-sm text-ivory/70 md:block">
                    {isEn ? entry.headquartersEn : entry.headquarters}
                  </p>
                  <p className="font-display hidden text-right text-2xl font-bold text-ivory md:block md:text-3xl">
                    {entry.score.toFixed(1)}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── The Curated Six ── */}
      <section id="curated-six" className="border-b border-hairline px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif-cn text-2xl font-black text-ivory md:text-3xl">
              {t("lists.curated.label")}
            </h2>
            <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-stone">
              {t("lists.curated.sublabel")}
            </span>
          </Reveal>
          <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {CURATED_SIX.map(({ num, enKey, cnKey, descKey, exampleDomains }, i) => {
              const examples = exampleDomains
                .map((domain) => companyByDomain.get(domain))
                .filter((c): c is NonNullable<typeof c> => Boolean(c));

              return (
                <Reveal key={enKey} delay={i * 0.05} className="relative overflow-hidden bg-ink-soft p-6">
                  <div className="relative flex h-full min-h-[200px] flex-col gap-2">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-0 bottom-0 select-none font-display text-6xl font-black leading-none text-white/[0.04]"
                    >
                      {num}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone">
                      {isEn ? t(cnKey) : t(enKey)}
                    </span>
                    <span
                      className={`mt-1 text-base font-bold text-ivory/80 ${
                        isEn ? "font-sans uppercase tracking-[0.04em]" : "font-serif-cn"
                      }`}
                    >
                      {isEn ? t(enKey) : t(cnKey)}
                    </span>
                    <span className="font-sans-cn relative flex-1 text-xs leading-5 text-ivory/50">
                      {t(descKey)}
                    </span>

                    {examples.length > 0 && (
                      <div className="relative mt-1 border-t border-hairline pt-3">
                        <span className="font-sans block text-[9px] uppercase tracking-[0.14em] text-gold">
                          {t("the500page.curatedExamplesLabel")}
                        </span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {examples.map((company) => (
                            <span
                              key={company.domain}
                              className="font-sans-cn text-[11px] text-ivory/70"
                            >
                              {isEn ? company.nameEn : company.nameCn}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The Individual Three ── */}
      <section id="individual-three" className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif-cn text-2xl font-black text-ivory md:text-3xl">
              {t("lists.individual.label")}
            </h2>
            <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-stone">
              {t("lists.individual.sublabel")}
            </span>
          </Reveal>
          <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-3">
            {INDIVIDUAL_THREE.map(({ num, enKey, cnKey, descKey }, i) => (
              <Reveal key={enKey} delay={i * 0.06} className="bg-ink-soft p-8">
                <div className="flex h-full min-h-[180px] flex-col">
                  <span className="font-display text-3xl font-bold text-wine/50">{num}</span>
                  <span className="font-sans mt-3 text-[10px] uppercase tracking-[0.2em] text-stone">
                    {isEn ? t(cnKey) : t(enKey)}
                  </span>
                  <span
                    className={`mt-2 text-lg font-black text-ivory/80 ${
                      isEn ? "font-sans uppercase tracking-[0.04em]" : "font-serif-cn"
                    }`}
                  >
                    {isEn ? t(enKey) : t(cnKey)}
                  </span>
                  <span className="font-sans-cn mt-2 flex-1 text-xs leading-5 text-ivory/50">
                    {t(descKey)}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notable leaders (illustrative examples) ── */}
      <section className="border-t border-hairline px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-2">
            <h2 className="font-serif-cn text-2xl font-black text-ivory md:text-3xl">
              {t("the500page.leadersHeading")}
            </h2>
          </Reveal>
          <Reveal delay={0.03}>
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-stone">
              {t("the500page.leadersNote")}
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader, i) => (
              <Reveal key={leader.nameEn} delay={i * 0.05} className="flex h-full flex-col gap-4 bg-ink-soft p-6">
                <div className="flex items-start gap-3">
                  <LogoImage domain={leader.domain} nameEn={leader.nameEn} />
                  <div>
                    <p className="font-serif-cn text-base font-bold text-ivory">
                      {isEn ? leader.nameEn : leader.nameCn}
                    </p>
                    <p className="font-sans text-xs text-stone">
                      {isEn ? leader.roleEn : leader.roleCn}
                    </p>
                  </div>
                </div>
                <p className="font-sans-cn flex-1 text-xs leading-6 text-ivory/60">
                  {isEn ? leader.blurbEn : leader.blurb}
                </p>
                <span className="font-sans border-t border-hairline pt-3 text-[10px] uppercase tracking-[0.14em] text-gold">
                  {isEn ? leader.categoryEn : leader.categoryCn}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
