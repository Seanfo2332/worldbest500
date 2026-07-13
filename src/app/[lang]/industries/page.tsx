import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { buildLocaleMetadata } from "@/lib/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IndustriesGrid } from "@/components/IndustriesGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const resolvedLang: Lang = isEn ? "en" : "zh";
  return {
    title: isEn ? "Industries · World Best 500" : "行业 · 寰球 500",
    description: isEn
      ? "The industry categories covered by World Best 500, reflecting the current sector distribution of ranked companies."
      : "寰球 500 覆盖的行业分类，反映当前榜单企业的行业分布。",
    ...buildLocaleMetadata(resolvedLang, "/industries"),
  };
}

export default function IndustriesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <IndustriesGrid />
      </main>
      <Footer />
    </div>
  );
}
