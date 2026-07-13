"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  // "zh" is served at "/" (no prefix), "en" is served at "/en".
  const prefix = isEn ? "/en" : "";
  const homeHref = isEn ? "/en" : "/";

  const NAV_ITEMS = [
    { label: t("nav.rankings"),    href: `${prefix}/the-500` },
    { label: t("nav.companies"),   href: `${prefix}/companies` },
    { label: t("nav.industries"),  href: `${prefix}/industries` },
    { label: t("nav.insights"),    href: `${prefix}/insights` },
    { label: t("nav.methodology"), href: `${prefix}/methodology` },
    { label: t("nav.about"),       href: `${prefix}/about` },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-500 ${
        isScrolled || isMenuOpen
          ? "border-hairline bg-ink/70 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10 md:py-4">

        {/* Logo — increased from h-12 to h-20/h-24 to compensate for PNG whitespace.
            touch-action: manipulation removes the mobile double-tap-to-zoom delay that
            can otherwise swallow taps on a fixed header during/after scroll gestures. */}
        <Link
          href={homeHref}
          className="relative z-10 inline-flex shrink-0 touch-manipulation"
          aria-label="寰球 500 · World Best 500"
        >
          <Image
            src="/logo.png"
            alt="World Best 500 · 寰球 500"
            width={280}
            height={112}
            priority
            className="h-20 w-auto object-contain md:h-24"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-xs uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          {/* Language switch — real links to /(zh) and /en so each locale is a
              crawlable, shareable URL rather than a client-only toggle. */}
          <div className="hidden items-center gap-2 font-sans text-xs uppercase tracking-[0.18em] sm:flex">
            <Link
              href="/"
              hrefLang="zh-CN"
              aria-current={!isEn ? "page" : undefined}
              className={`transition-colors duration-300 ${
                !isEn ? "text-gold" : "text-ivory hover:text-gold"
              }`}
            >
              中
            </Link>
            <span className="text-stone">/</span>
            <Link
              href="/en"
              hrefLang="en"
              aria-current={isEn ? "page" : undefined}
              className={`transition-colors duration-300 ${
                isEn ? "text-gold" : "text-ivory hover:text-gold"
              }`}
            >
              EN
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={t("header.menu")}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="touch-manipulation font-sans text-xs uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:text-gold lg:hidden"
          >
            {isMenuOpen ? t("header.close") : t("header.menu")}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <nav
        className={`grid border-t border-hairline transition-[grid-template-rows] duration-300 ease-[var(--ease-editorial)] lg:hidden ${
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 md:px-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-b border-hairline last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="touch-manipulation block py-4 font-sans text-xs uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-b border-hairline py-4 last:border-b-0">
              <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-[0.18em]">
                <Link
                  href="/"
                  hrefLang="zh-CN"
                  onClick={() => setIsMenuOpen(false)}
                  className={!isEn ? "text-gold" : "text-ivory hover:text-gold transition-colors"}
                >
                  中文
                </Link>
                <span className="text-stone">/</span>
                <Link
                  href="/en"
                  hrefLang="en"
                  onClick={() => setIsMenuOpen(false)}
                  className={isEn ? "text-gold" : "text-ivory hover:text-gold transition-colors"}
                >
                  English
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
