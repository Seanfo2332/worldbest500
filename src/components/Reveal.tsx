"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  delay?: number;
  from?: "bottom" | "left";
  as?: "div" | "li";
  className?: string;
}

export function Reveal({ children, delay = 0, from = "bottom", as = "div", className }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          fullMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean };

          if (reduceMotion) {
            gsap.set(el, { autoAlpha: 1, x: 0, y: 0 });
            return;
          }

          const fromVars =
            from === "left"
              ? { autoAlpha: 0, x: -160, y: 0 }
              : { autoAlpha: 0, x: 0, y: 70 };

          gsap.set(el, fromVars);

          gsap.to(el, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: from === "left" ? 0.9 : 1.0,
            delay,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: ref }
  );

  if (as === "li") {
    return (
      <li ref={ref as unknown as React.RefObject<HTMLLIElement | null>} className={className}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref as unknown as React.RefObject<HTMLDivElement | null>} className={className}>
      {children}
    </div>
  );
}
