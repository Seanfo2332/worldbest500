import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { buildLocaleMetadata } from "@/lib/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompaniesGrid } from "@/components/CompaniesGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const resolvedLang: Lang = isEn ? "en" : "zh";
  return {
    title: isEn ? "Companies · World Best 500" : "企业 · 寰球 500",
    description: isEn
      ? "Leading global companies featured across the World Best 500 ranking, organized by industry and headquarters."
      : "寰球 500 榜单收录的全球领先企业，按行业与总部所在地分类呈现。",
    ...buildLocaleMetadata(resolvedLang, "/companies"),
  };
}

export default function CompaniesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <CompaniesGrid />
      </main>
      <Footer />
    </div>
  );
}
