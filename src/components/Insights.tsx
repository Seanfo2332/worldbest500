"use client";

import { useEffect, useState } from "react";
import { insights as curatedInsights, type InsightEntry } from "@/data/insights";
import { fetchCrawledInsights } from "@/lib/crawledInsights";
import { InsightsGrid } from "./InsightsGrid";

// Curated insights (src/data/insights.ts) merged with the auto-crawled ones from Supabase
// (country_code=WB500, written by scripts/crawler/). Curated shows immediately; crawled are
// appended once the query resolves, newest-first by publish date. Same "curated + crawled,
// merged at read time" pattern the MCN Group sites use.
//
// variant: "home" shows the full header (heading + "View All Insights →" CTA to /insights);
// "index" is the /insights page itself, where PageHero already carries the heading and a
// "View All" link would just point back to the current page (the reported dead link).
export function Insights({ variant = "home" }: { variant?: "home" | "index" }) {
  const [merged, setMerged] = useState<InsightEntry[]>(curatedInsights);

  useEffect(() => {
    let active = true;
    fetchCrawledInsights().then((crawled) => {
      if (!active || crawled.length === 0) return;
      const seen = new Set(curatedInsights.map((i) => i.href));
      const extra = crawled.filter((i) => !seen.has(i.href));
      setMerged(
        [...curatedInsights, ...extra].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)),
      );
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="border-b border-hairline px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <InsightsGrid insights={merged} variant={variant} />
      </div>
    </section>
  );
}
