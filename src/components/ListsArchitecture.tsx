"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useLanguage } from "@/context/LanguageContext";
import { CURATED_SIX, INDIVIDUAL_THREE } from "@/data/lists";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export function ListsArchitecture() {
  const rootRef    = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const { lang, t } = useLanguage();
  const isEn = lang === "en";
  const prefix = isEn ? "/en" : "";

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          fullMotion:   "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean };

          /* ── Counter 0 → 500 ── */
          if (counterRef.current) {
            if (reduceMotion) {
              counterRef.current.textContent = "500";
            } else {
              const proxy = { val: 0 };
              gsap.to(proxy, {
                val: 500,
                duration: 2.5,
                ease: "power2.out",
                onUpdate() {
                  if (counterRef.current)
                    counterRef.current.textContent = Math.round(proxy.val).toString();
                },
                scrollTrigger: {
                  trigger: counterRef.current,
                  start: "top 85%",
                  once: true,
                },
              });
            }
          }

          /* ── Curated Six stagger ── */
          const curatedCards = gsap.utils.toArray<HTMLElement>(
            "[data-curated-card]",
            rootRef.current!
          );

          if (reduceMotion) {
            gsap.set(curatedCards, { autoAlpha: 1, y: 0 });
          } else if (curatedCards.length) {
            gsap.from(curatedCards, {
              autoAlpha: 0,
              y: 50,
              duration: 0.9,
              ease: "expo.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: curatedCards[0],
                start: "top 85%",
                once: true,
              },
            });
          }

          /* ── Individual Three stagger ── */
          const individualCards = gsap.utils.toArray<HTMLElement>(
            "[data-individual-card]",
            rootRef.current!
          );

          if (reduceMotion) {
            gsap.set(individualCards, { autoAlpha: 1, y: 0 });
          } else if (individualCards.length) {
            gsap.from(individualCards, {
              autoAlpha: 0,
              y: 50,
              duration: 0.9,
              ease: "expo.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: individualCards[0],
                start: "top 85%",
                once: true,
              },
            });
          }
        }
      );

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section className="border-b border-hairline px-6 py-20 md:px-10" ref={rootRef}>
      <div className="mx-auto max-w-7xl">

        {/* ── Section header ── */}
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-hairline pb-10">
          <div>
            <span className="block h-px w-16 bg-gold" />
            <h2 className="font-serif-cn mt-6 text-3xl font-black text-ivory md:text-4xl">
              {t("lists.heading")}
            </h2>
            <p className="font-sans-cn mt-4 max-w-2xl text-sm leading-7 text-ivory/60 md:text-base">
              {t("lists.subheading")}
            </p>
          </div>
          <Link
            href={`${prefix}/the-500`}
            className="font-sans shrink-0 text-xs uppercase tracking-[0.18em] text-stone transition-colors duration-300 hover:text-gold"
          >
            {t("lists.viewAll")} →
          </Link>
        </Reveal>

        {/* ── Main List — The 500 ── */}
        <Reveal delay={0.05} className="mt-10">
          <div className="group relative overflow-hidden border border-gold/30 bg-ink-soft transition-colors duration-500 hover:border-gold/60 hover:bg-ink">

            {/* Ghost "500" watermark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -bottom-4 select-none font-display text-[10rem] font-black leading-none text-white/[0.03] md:text-[16rem]"
            >
              500
            </span>

            <div className="relative grid grid-cols-1 md:grid-cols-[240px_1fr]">

              {/* Left — animated counter */}
              <div className="flex flex-col items-start justify-center gap-3 border-b border-gold/20 p-8 md:border-b-0 md:border-r md:p-12">
                <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold">
                  {t("lists.main.badge")}
                </span>
                <span
                  ref={counterRef}
                  className="font-display text-7xl font-black leading-none text-wine md:text-8xl"
                >
                  0
                </span>
                <span className="font-sans text-xs uppercase tracking-[0.18em] text-stone">
                  {t("lists.main.count")}
                </span>
              </div>

              {/* Right — title + desc */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="font-display text-3xl font-bold text-ivory md:text-4xl">
                  {t("lists.main.title")}
                </p>
                <p className="font-sans-cn mt-5 max-w-lg text-sm leading-7 text-ivory/60 md:text-base">
                  {t("lists.main.desc")}
                </p>
                <Link
                  href={`${prefix}/the-500`}
                  className="group/link mt-8 inline-flex w-fit items-center gap-3 font-sans text-xs uppercase tracking-[0.18em] text-stone transition-colors duration-300 hover:text-gold"
                >
                  <span>{isEn ? "Explore The 500" : "探索完整榜单"}</span>
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── The Curated Six ── */}
        <div className="mt-14">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-sans text-xs uppercase tracking-[0.18em] text-gold">
                {t("lists.curated.label")}
              </h3>
              <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-stone">
                {t("lists.curated.sublabel")}
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {CURATED_SIX.map(({ num, enKey, cnKey }) => (
              <Link
                key={enKey}
                data-curated-card
                href={`${prefix}/the-500#curated-six`}
                className="group relative overflow-hidden bg-ink-soft p-6 transition-colors duration-300 hover:bg-ink"
              >
                {/* Gold left-border sweep */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
                />

                {/* Ghost index number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 bottom-3 select-none font-display text-6xl font-black text-white/[0.04]"
                >
                  {num}
                </span>

                <div className="relative flex h-full min-h-[120px] flex-col gap-2">
                  {/* Small subtitle: opposite-language label */}
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone transition-colors duration-300 group-hover:text-gold">
                    {isEn ? t(cnKey) : t(enKey)}
                  </span>
                  {/* Primary name: current language, prominent */}
                  <span
                    className={`mt-1 flex-1 text-base font-bold text-ivory/80 transition-colors duration-300 group-hover:text-ivory ${
                      isEn ? "font-sans uppercase tracking-[0.04em]" : "font-serif-cn"
                    }`}
                  >
                    {isEn ? t(enKey) : t(cnKey)}
                  </span>
                  <span className="mt-4 inline-block translate-x-0 text-stone transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-gold">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── The Individual Three ── */}
        <div className="mt-14">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-sans text-xs uppercase tracking-[0.18em] text-gold">
                {t("lists.individual.label")}
              </h3>
              <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-stone">
                {t("lists.individual.sublabel")}
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-3">
            {INDIVIDUAL_THREE.map(({ num, enKey, cnKey }) => (
              <Link
                key={enKey}
                data-individual-card
                href={`${prefix}/the-500#individual-three`}
                className="group relative overflow-hidden bg-ink-soft p-8 transition-colors duration-300 hover:bg-ink"
              >
                {/* Gold left-border sweep */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
                />

                {/* Ghost roman numeral */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 bottom-4 select-none font-display text-5xl font-black text-white/[0.04]"
                >
                  {num}
                </span>

                <div className="relative flex h-full min-h-[160px] flex-col">
                  {/* Prominent roman numeral */}
                  <span className="font-display text-3xl font-bold text-wine/50 transition-colors duration-300 group-hover:text-wine">
                    {num}
                  </span>
                  {/* Small subtitle: opposite-language label */}
                  <span className="font-sans mt-3 text-[10px] uppercase tracking-[0.2em] text-stone transition-colors duration-300 group-hover:text-gold">
                    {isEn ? t(cnKey) : t(enKey)}
                  </span>
                  {/* Primary name: current language, prominent */}
                  <span
                    className={`mt-2 flex-1 text-lg font-black text-ivory/80 transition-colors duration-300 group-hover:text-ivory ${
                      isEn ? "font-sans uppercase tracking-[0.04em]" : "font-serif-cn"
                    }`}
                  >
                    {isEn ? t(enKey) : t(cnKey)}
                  </span>
                  <span className="mt-5 inline-block translate-x-0 text-stone transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-gold">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
