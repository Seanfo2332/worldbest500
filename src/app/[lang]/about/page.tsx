import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { buildLocaleMetadata } from "@/lib/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutContent } from "@/components/AboutContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const resolvedLang: Lang = isEn ? "en" : "zh";
  return {
    title: isEn ? "About · World Best 500" : "关于我们 · 寰球 500",
    description: isEn
      ? "About World Best 500: an independent, Chinese-language global corporate ranking, and our editorial standards."
      : "关于寰球 500：一份独立的中文视角全球企业评选，及我们的编辑准则。",
    ...buildLocaleMetadata(resolvedLang, "/about"),
  };
}

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
