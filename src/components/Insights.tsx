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
//
// limit: max cards to render, applied AFTER the newest-first sort so the newest always win.
// The homepage passes 6 — exactly two full rows of the 3-col desktop grid (3x2), so it never
// shows a ragged trailing row and never grows unbounded as the weekly crawl adds articles.
// /insights passes no limit: it is the archive, and capping it would orphan older pieces.
export function Insights({
  variant = "home",
  limit,
}: {
  variant?: "home" | "index";
  limit?: number;
}) {
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

  const visible = typeof limit === "number" ? merged.slice(0, limit) : merged;

  return (
    <section className="border-b border-hairline px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <InsightsGrid insights={visible} variant={variant} />
      </div>
    </section>
  );
}
