import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Noto_Serif_SC, Noto_Sans_SC, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";
import { Providers } from "@/app/providers";
import type { Lang } from "@/lib/i18n";

/* ── Chinese fonts ── */
const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500"],
});

/* ── English display — Cormorant Garamond (editorial luxury serif) ── */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

/* ── English UI — DM Sans (clean, refined, not generic) ── */
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

/* ── Supported locales — "zh" is served at "/" via a rewrite in next.config.ts,
   "en" is served at "/en". Keep in sync with next.config.ts + LanguageContext. ── */
export const SUPPORTED_LANGS: Lang[] = ["zh", "en"];

const SITE_URL = "https://worldbest500.vercel.app";

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

function isSupportedLang(value: string): value is Lang {
  return (SUPPORTED_LANGS as string[]).includes(value);
}

const METADATA_BY_LANG: Record<Lang, Metadata> = {
  zh: {
    title: "寰球 500 · WORLD BEST 500",
    description:
      "「寰球 500」是从中文视角出发的年度全球企业与商业领袖排行榜，记录世界经济的演变格局，见证全球商业的长期价值。",
    alternates: {
      canonical: "/",
      languages: {
        "zh-CN": "/",
        en: "/en",
      },
    },
    openGraph: {
      title: "寰球 500 · WORLD BEST 500",
      description:
        "「寰球 500」是从中文视角出发的年度全球企业与商业领袖排行榜，记录世界经济的演变格局，见证全球商业的长期价值。",
      locale: "zh_CN",
      alternateLocale: "en_US",
      type: "website",
    },
  },
  en: {
    title: "World Best 500 · 寰球 500",
    description:
      'An annual global corporate and business leader ranking from a Chinese perspective: documenting the evolving forces of the world economy and the long-term value of global commerce.',
    alternates: {
      canonical: "/en",
      languages: {
        "zh-CN": "/",
        en: "/en",
      },
    },
    openGraph: {
      title: "World Best 500 · 寰球 500",
      description:
        "An annual global corporate and business leader ranking from a Chinese perspective.",
      locale: "en_US",
      alternateLocale: "zh_CN",
      type: "website",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const resolvedLang: Lang = isSupportedLang(lang) ? lang : "zh";

  return {
    metadataBase: new URL(SITE_URL),
    ...METADATA_BY_LANG[resolvedLang],
  };
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const htmlLang = lang === "zh" ? "zh-CN" : "en";

  return (
    <html
      lang={htmlLang}
      data-scroll-behavior="smooth"
      className={`${notoSerifSC.variable} ${notoSansSC.variable} ${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-ink text-ivory"
        suppressHydrationWarning
      >
        <Providers initialLang={lang}>{children}</Providers>
      </body>
    </html>
  );
}
