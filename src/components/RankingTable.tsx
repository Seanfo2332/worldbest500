"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ranking2025Preview } from "@/data/ranking";
import { LogoImage } from "./LogoImage";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export function RankingTable() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();
  const prefix = lang === "en" ? "/en" : "";

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          fullMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean };

          const rows = gsap.utils.toArray<HTMLElement>("[data-rank-row]", rootRef.current!);
          const ranks = gsap.utils.toArray<HTMLElement>("[data-rank-num]", rootRef.current!);
          const scores = gsap.utils.toArray<HTMLElement>("[data-rank-score]", rootRef.current!);

          if (reduceMotion) {
            gsap.set(rows, { autoAlpha: 1, x: 0 });
            gsap.set(ranks, { autoAlpha: 1, scale: 1 });
            scores.forEach((el) => {
              el.textContent = parseFloat(el.dataset.score ?? "0").toFixed(1);
            });
            return;
          }

          gsap.set(rows, { autoAlpha: 0, x: -220 });
          gsap.set(ranks, { autoAlpha: 0, scale: 0.4 });

          gsap.to(rows, {
            autoAlpha: 1,
            x: 0,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.13,
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 75%",
              once: true,
            },
          });

          gsap.to(ranks, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.8)",
            stagger: 0.13,
            delay: 0.15,
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 75%",
              once: true,
            },
          });

          scores.forEach((el, i) => {
            const target = parseFloat(el.dataset.score ?? "0");
            const proxy = { val: 0 };
            gsap.to(proxy, {
              val: target,
              duration: 1.8,
              delay: 0.4 + i * 0.13,
              ease: "power2.out",
              onUpdate() {
                el.textContent = proxy.val.toFixed(1);
              },
              scrollTrigger: {
                trigger: rootRef.current,
                start: "top 75%",
                once: true,
              },
            });
          });
        }
      );

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section className="border-b border-hairline px-6 py-20 md:px-10" ref={rootRef}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-hairline pb-6">
          <h2 className="font-serif-cn text-3xl font-black text-ivory md:text-4xl">
            {t("ranking.heading")}
          </h2>
          <Link
            href={`${prefix}/the-500`}
            className="font-sans shrink-0 text-xs uppercase tracking-[0.18em] text-stone transition-colors duration-300 hover:text-gold"
          >
            {t("ranking.viewAll")} →
          </Link>
        </div>

        <div className="hidden grid-cols-[80px_56px_2fr_1.4fr_1fr_140px] gap-6 bg-ink-soft px-4 py-3 font-sans text-xs uppercase tracking-[0.18em] text-stone md:grid">
          <span>{t("ranking.col.rank")}</span>
          <span />
          <span>{t("ranking.col.name")}</span>
          <span>{t("ranking.col.industry")}</span>
          <span>{t("ranking.col.hq")}</span>
          <span className="text-right">{t("ranking.col.score")}</span>
        </div>

        <ul>
          {/* Homepage teaser shows only the top highlights; the full list lives on /the-500 */}
          {ranking2025Preview.slice(0, 5).map((entry) => (
            <li key={entry.rank} data-rank-row className="border-b border-hairline">
              <div className="grid grid-cols-[56px_48px_1fr] items-center gap-4 px-4 py-7 md:grid-cols-[80px_56px_2fr_1.4fr_1fr_140px] md:gap-6 md:py-8">
                <span
                  data-rank-num
                  className="font-display text-3xl font-bold leading-none text-wine md:text-4xl"
                >
                  {String(entry.rank).padStart(2, "0")}
                </span>

                <LogoImage domain={entry.domain} nameEn={entry.nameEn} />

                <div>
                  <p className="font-serif-cn text-lg font-bold text-ivory md:text-xl">
                    {lang === "zh" ? entry.nameCn : entry.nameEn}
                  </p>
                  <p className="font-sans text-xs text-stone">
                    {lang === "zh" ? entry.nameEn : entry.nameCn}
                  </p>
                </div>

                <p className="font-sans-cn col-span-3 mt-3 text-sm text-ivory/70 md:col-span-1 md:mt-0">
                  {lang === "zh" ? entry.industry : entry.industryEn}
                </p>

                <p className="font-sans-cn hidden text-sm text-ivory/70 md:block">
                  {lang === "zh" ? entry.headquarters : entry.headquartersEn}
                </p>

                <p
                  data-rank-score
                  data-score={entry.score}
                  className="font-display hidden text-right text-2xl font-bold text-ivory md:block md:text-3xl"
                >
                  {entry.score.toFixed(1)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
