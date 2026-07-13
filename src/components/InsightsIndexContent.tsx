"use client";

import { useLanguage } from "@/context/LanguageContext";
import { PageHero } from "./PageHero";
import { CoverStories } from "./CoverStories";
import { Insights } from "./Insights";

export function InsightsIndexContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("footer.col4.title")}
        title={t("insights.heading")}
        subtitle={t("insightspage.subtitle")}
      />
      <CoverStories />
      <Insights />
    </>
  );
}
