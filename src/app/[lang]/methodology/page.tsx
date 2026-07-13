import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { buildLocaleMetadata } from "@/lib/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MethodologyFull } from "@/components/MethodologyFull";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const resolvedLang: Lang = isEn ? "en" : "zh";
  return {
    title: isEn ? "Methodology · World Best 500" : "评选方法论 · 寰球 500",
    description: isEn
      ? "How World Best 500 ranks companies: revenue scale, global reach, industry influence, and independent editorial review."
      : "寰球 500 的评选方法：营收规模、全球辐射、行业影响力，以及独立的编辑委员会复核。",
    ...buildLocaleMetadata(resolvedLang, "/methodology"),
  };
}

export default function MethodologyPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <MethodologyFull />
      </main>
      <Footer />
    </div>
  );
}
