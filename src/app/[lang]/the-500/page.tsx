import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { buildLocaleMetadata } from "@/lib/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheFullRanking } from "@/components/TheFullRanking";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const resolvedLang: Lang = isEn ? "en" : "zh";
  return {
    title: isEn ? "The 500 · World Best 500" : "The 500 · 寰球 500",
    description: isEn
      ? "The full World Best 500 ranking, including the Curated Six enterprise sub-lists and the Individual Three leadership sub-lists."
      : "寰球 500 完整榜单，涵盖六个企业子榜与三个个人子榜。",
    ...buildLocaleMetadata(resolvedLang, "/the-500"),
  };
}

export default function The500Page() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <TheFullRanking />
      </main>
      <Footer />
    </div>
  );
}
