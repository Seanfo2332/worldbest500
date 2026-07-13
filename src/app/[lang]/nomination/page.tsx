import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { buildLocaleMetadata } from "@/lib/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NominationCTA } from "@/components/NominationCTA";
import { NominationDetails } from "@/components/NominationDetails";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const resolvedLang: Lang = isEn ? "en" : "zh";
  return {
    title: isEn ? "Apply for Nomination · World Best 500" : "申请入选 · 寰球 500",
    description: isEn
      ? "Company self-nomination, individual leader nomination, and third-party recommendation channels for World Best 500."
      : "寰球 500 的企业自荐、个人提名及第三方推荐通道。",
    ...buildLocaleMetadata(resolvedLang, "/nomination"),
  };
}

export default function NominationPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 pt-32 md:pt-40">
        <NominationCTA />
        <NominationDetails />
      </main>
      <Footer />
    </div>
  );
}
