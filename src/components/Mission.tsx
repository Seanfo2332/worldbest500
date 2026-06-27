"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { useLanguage } from "@/context/LanguageContext";

export function Mission() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
          if (reduceMotion) return;

          gsap.to("[data-mission-graphic]", {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        },
        rootRef
      );

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="border-b border-hairline px-6 py-20 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <div className="overflow-hidden">
            <div data-mission-graphic className="scale-110">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/mission-building.png"
                  alt={t("mission.imgAlt")}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 lg:mt-12">
          <span className="block h-px w-16 bg-gold" />
          <h2 className="font-serif-cn mt-6 text-3xl font-black text-ivory md:text-4xl">
            {t("mission.heading")}
          </h2>

          <div className="font-sans-cn mt-6 space-y-5 text-sm leading-7 text-ivory/70 md:text-base">
            <p>{t("mission.p1")}</p>
            <p>{t("mission.p2")}</p>
            <p>{t("mission.p3")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
