import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { HomePageBackdrop } from "@/components/home/HomePageBackdrop";
import { PillarBento } from "@/components/home/PillarBento";
import {
  CompanyStatement,
  SectorPanels,
} from "@/components/home/SectorPanels";

export const metadata: Metadata = {
  description:
    "Alyssum Labs builds advanced technology intelligence systems for life sciences and private capital programmes where precision and governance are non-negotiable.",
};

export default function HomePage() {
  return (
    <div className="page-atmosphere relative">
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
