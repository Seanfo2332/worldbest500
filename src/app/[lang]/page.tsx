import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ListsArchitecture } from "@/components/ListsArchitecture";
import { RankingTable } from "@/components/RankingTable";
import { CoverStories } from "@/components/CoverStories";
import { Mission } from "@/components/Mission";
import { MethodologyStrip } from "@/components/MethodologyStrip";
import { Stats } from "@/components/Stats";
import { Insights } from "@/components/Insights";
import { NominationCTA } from "@/components/NominationCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ListsArchitecture />
        <RankingTable />
        <CoverStories />
        <Mission />
        <MethodologyStrip />
        <Stats />
        <Insights />
        <NominationCTA />
      </main>
      <Footer />
    </div>
  );
}
