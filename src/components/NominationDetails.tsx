"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const ELIGIBILITY_KEYS: TranslationKey[] = [
  "nominationpage.eligibility1",
  "nominationpage.eligibility2",
  "nominationpage.eligibility3",
  "nominationpage.eligibility4",
];

const PROCESS_STEPS: { titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { titleKey: "nominationpage.process1.title", descKey: "nominationpage.process1.desc" },
  { titleKey: "nominationpage.process2.title", descKey: "nominationpage.process2.desc" },
  { titleKey: "nominationpage.process3.title", descKey: "nominationpage.process3.desc" },
  { titleKey: "nominationpage.process4.title", descKey: "nominationpage.process4.desc" },
];

export function NominationDetails() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-hairline px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Eligibility */}
        <div>
          <Reveal>
            <h2 className="font-serif-cn text-2xl font-black text-ivory md:text-3xl">
              {t("nominationpage.eligibilityHeading")}
            </h2>
          </Reveal>
          <ul className="mt-6 divide-y divide-hairline">
            {ELIGIBILITY_KEYS.map((key, i) => (
              <Reveal
                key={key}
                as="li"
                delay={i * 0.05}
                className="font-sans-cn py-4 text-sm leading-6 text-ivory/70 first:pt-0 md:text-base"
              >
                {t(key)}
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div>
          <Reveal>
            <h2 className="font-serif-cn text-2xl font-black text-ivory md:text-3xl">
              {t("nominationpage.processHeading")}
            </h2>
          </Reveal>
          <ol className="mt-6 space-y-6">
            {PROCESS_STEPS.map(({ titleKey, descKey }, i) => (
              <Reveal key={titleKey} delay={i * 0.06} className="flex gap-4">
                <span className="font-display shrink-0 text-2xl font-bold text-wine/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif-cn text-base font-bold text-ivory">{t(titleKey)}</h3>
                  <p className="font-sans-cn mt-1 text-sm leading-6 text-ivory/60">{t(descKey)}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
