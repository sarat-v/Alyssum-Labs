import { Hero } from "@/components/home/Hero";
import { HomePageBackdrop } from "@/components/home/HomePageBackdrop";
import { PillarBento } from "@/components/home/PillarBento";
import {
  CompanyStatement,
  SectorPanels,
} from "@/components/home/SectorPanels";

export default function HomePage() {
  return (
    <div className="relative">
      <HomePageBackdrop />
      <div className="relative">
        <Hero />
        <PillarBento />
        <CompanyStatement />
        <SectorPanels />
      </div>
    </div>
  );
}
