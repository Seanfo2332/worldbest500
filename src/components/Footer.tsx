"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const FOOTER_COLUMNS = [
    {
      title: t("footer.col1.title"),
      links: [t("footer.col1.l1"), t("footer.col1.l2"), t("footer.col1.l3")],
    },
    {
      title: t("footer.col2.title"),
      links: [t("footer.col2.l1"), t("footer.col2.l2"), t("footer.col2.l3")],
    },
    {
      title: t("footer.col3.title"),
      links: [t("footer.col3.l1"), t("footer.col3.l2"), t("footer.col3.l3")],
    },
    {
      title: t("footer.col4.title"),
      links: [t("footer.col4.l1"), t("footer.col4.l2"), t("footer.col4.l3")],
    },
    {
      title: t("footer.col5.title"),
      links: [t("footer.col5.l1"), t("footer.col5.l2"), t("footer.col5.l3")],
    },
  ];

  return (
    <footer className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-xs uppercase tracking-[0.18em] text-gold">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans-cn text-sm text-ivory/70 transition-colors duration-300 hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h3 className="font-sans text-xs uppercase tracking-[0.18em] text-gold">
              {t("footer.newsletter.title")}
            </h3>
            <form className="mt-4 flex border border-hairline">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="font-sans-cn w-full bg-transparent px-3 py-2 text-sm text-ivory placeholder:text-stone focus:outline-none"
              />
              <button
                type="submit"
                aria-label={t("footer.newsletter.title")}
                className="px-4 text-ivory/70 transition-colors duration-300 hover:text-gold"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-hairline pt-8 md:flex-row md:items-center">

          {/* Logo image — invert to white for dark footer; sized up from h-11 for legibility */}
          <Image
            src="/logo.png"
            alt="World Best 500 · 寰球 500"
            width={220}
            height={88}
            className="h-16 w-auto object-contain md:h-20"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
          />

          <p className="font-sans-cn text-xs text-stone">
            © {currentYear} {t("footer.copyright")}
          </p>

          <div className="font-sans flex gap-6 text-xs uppercase tracking-[0.18em] text-stone">
            <a href="#" className="transition-colors duration-300 hover:text-gold">
              {t("footer.privacy")}
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-gold">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
