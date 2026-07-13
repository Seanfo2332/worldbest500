import { insights } from "@/data/insights";
import { InsightsGrid } from "./InsightsGrid";

export function Insights() {
  return (
    <section className="border-b border-hairline px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <InsightsGrid insights={insights} />
      </div>
    </section>
  );
}
