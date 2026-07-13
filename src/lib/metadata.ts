import type { Metadata } from "next";
import type { Lang } from "./i18n";

export const SITE_URL = "https://worldbest500.vercel.app";

/**
 * Build correct canonical + hreflang alternate metadata for a given page.
 *
 * `path` must be the lang-neutral path with NO "/en" prefix (e.g. "/the-500",
 * "/insights/apple-moat", or "/" for the homepage) — this derives both the
 * unprefixed zh URL and the "/en"-prefixed URL from it.
 *
 * Every page's generateMetadata should spread this in, otherwise it silently
 * inherits the root layout's canonical/hreflang (which points at "/" and
 * "/en"), incorrectly telling search engines every sub-page is a duplicate
 * of the homepage.
 */
export function buildLocaleMetadata(
  lang: Lang,
  path: string
): Pick<Metadata, "alternates" | "openGraph"> {
  const zhPath = path;
  const enPath = path === "/" ? "/en" : `/en${path}`;
  const canonical = lang === "en" ? enPath : zhPath;

  return {
    alternates: {
      canonical,
      languages: {
        "zh-CN": zhPath,
        en: enPath,
      },
    },
    openGraph: {
      locale: lang === "en" ? "en_US" : "zh_CN",
      alternateLocale: lang === "en" ? "zh_CN" : "en_US",
      type: "website",
    },
  };
}
