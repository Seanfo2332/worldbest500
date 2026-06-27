"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          fullMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion: boolean;
          };

          const rule = "[data-hero-rule]";
          const lines = gsap.utils.toArray<HTMLElement>("[data-hero-line]");
          const reveals = "[data-hero-reveal]";

          if (reduceMotion) {
            gsap.set([rule, reveals], { autoAlpha: 1, y: 0, scaleX: 1 });
            gsap.set(lines, { yPercent: 0 });
            return;
          }

          gsap.set(rule, { scaleX: 0, transformOrigin: "left center" });
          gsap.set(lines, { yPercent: 100 });
          gsap.set(reveals, { autoAlpha: 0, y: 24 });

          const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.3 });

          tl.to(rule, { scaleX: 1, duration: 0.8, ease: "expo.out" })
            .to(
              lines,
              { yPercent: 0, duration: 0.9, stagger: 0.12, ease: "expo.out" },
              "-=0.4"
            )
            .to(
              reveals,
              { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1 },
              "-=0.5"
            );
        },
        rootRef
      );

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  const isEn = lang === "en";

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-hairline pointer-events-none" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pt-20 md:px-10">

        <div className="flex-1" />

        {/* Editorial bottom block */}
        <div className="pb-16 md:pb-24 lg:max-w-[56rem]">
          <div
            data-hero-rule
            className="mb-8 h-px w-24 origin-left bg-gold"
          />

          <h1
            className={`${
              isEn
                ? "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                : "font-serif-cn text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            } font-black leading-[1.1] tracking-tight text-ivory`}
          >
            <span className="block overflow-hidden">
              <span data-hero-line className="block will-change-transform">
                {t("hero.headline1")}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block will-change-transform">
                {t("hero.headline2")}
              </span>
            </span>
          </h1>

          <div
            data-hero-reveal
            className="mt-6 flex flex-wrap items-center gap-3 font-sans text-xs uppercase tracking-[0.18em] text-stone"
          >
            <span>{t("hero.meta1")}</span>
            <span aria-hidden="true" className="text-gold">/</span>
            <span>{t("hero.meta2")}</span>
          </div>

          <p
            data-hero-reveal
            className="font-sans-cn mt-5 max-w-xl text-sm leading-7 text-ivory/80 md:text-base"
          >
            {t("hero.body")}
          </p>

          <div
            data-hero-reveal
            className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="/the-500"
              className="inline-flex items-center justify-center gap-2 bg-ivory px-8 py-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-gold-bright"
            >
              {t("hero.cta1")} <span aria-hidden="true">→</span>
            </a>
            <a
              href="/methodology"
              className="inline-flex items-center justify-center gap-2 border border-ivory px-8 py-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:bg-ivory hover:text-ink"
            >
              {t("hero.cta2")} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
