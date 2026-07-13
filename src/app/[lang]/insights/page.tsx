import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { buildLocaleMetadata } from "@/lib/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InsightsIndexContent } from "@/components/InsightsIndexContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const resolvedLang: Lang = isEn ? "en" : "zh";
  return {
    title: isEn ? "Insights · World Best 500" : "洞察 · 寰球 500",
    description: isEn
      ? "Ranking analysis, industry insight, and company-focus reporting from World Best 500."
      : "来自寰球 500 的榜单解读、行业洞察与企业聚焦报道。",
    ...buildLocaleMetadata(resolvedLang, "/insights"),
  };
}

export default function InsightsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <InsightsIndexContent />
      </main>
      <Footer />
    </div>
  );
}
