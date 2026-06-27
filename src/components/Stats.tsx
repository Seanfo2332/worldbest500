"use client";

import { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { IconCalendar, IconGlobe, IconIndustry, IconLocation } from "./icons";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export function Stats() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const STATS = useMemo(
    () => [
      { icon: IconGlobe,    numeric: 500,  display: "500",            suffix: "",  label: t("stats.s1.label") },
      { icon: IconIndustry, numeric: 50,   display: "50+",            suffix: "+", label: t("stats.s2.label") },
      { icon: IconLocation, numeric: 100,  display: "100+",           suffix: "+", label: t("stats.s3.label") },
      { icon: IconCalendar, numeric: null, display: t("stats.s4.display"), suffix: "", label: t("stats.s4.label") },
    ],
    [t]
  );

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

          const cards = gsap.utils.toArray<HTMLElement>("[data-stat-card]", rootRef.current!);
          const counters = gsap.utils.toArray<HTMLElement>("[data-stat-num]", rootRef.current!);

          if (reduceMotion) {
            gsap.set(cards, { autoAlpha: 1, y: 0 });
            counters.forEach((el) => {
              const target = el.dataset.target;
              const suffix = el.dataset.suffix ?? "";
              if (target) el.textContent = parseInt(target).toLocaleString() + suffix;
            });
            return;
          }

          gsap.from(cards, {
            autoAlpha: 0,
            y: 80,
            duration: 1.0,
            ease: "expo.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 80%",
              once: true,
            },
          });

          counters.forEach((el, i) => {
            const target = parseInt(el.dataset.target ?? "0");
            const suffix = el.dataset.suffix ?? "";
            if (!target) return;

            const proxy = { val: 0 };
            gsap.to(proxy, {
              val: target,
              duration: 2.0,
              delay: 0.3 + i * 0.12,
              ease: "power2.out",
              onUpdate() {
                el.textContent = Math.round(proxy.val) + suffix;
              },
              scrollTrigger: {
                trigger: rootRef.current,
                start: "top 80%",
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
    <section className="border-b border-hairline px-6 py-16 md:px-10" ref={rootRef}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 border-t border-l border-hairline md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              data-stat-card
              className="border-r border-b border-hairline p-6 md:p-8"
            >
              <stat.icon className="text-ivory/70" />
              <p
                data-stat-num
                data-target={stat.numeric ?? ""}
                data-suffix={stat.suffix}
                className="font-display mt-6 text-4xl font-bold text-ivory md:text-5xl"
              >
                {stat.display}
              </p>
              <p className="font-sans-cn mt-2 text-sm text-stone">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
