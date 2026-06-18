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

function WaveTransition({
  fill,
  direction,
}: {
  fill: string;
  direction: "down" | "up";
}) {
  const paths =
    direction === "down"
      ? [
          "M0,0 C180,85 420,15 660,65 C900,115 1080,25 1320,55 C1400,68 1440,42 1440,42 L1440,120 L0,120 Z",
          "M0,10 C280,95 520,30 760,72 C1000,108 1160,38 1380,62 C1420,66 1440,52 1440,52 L1440,120 L0,120 Z",
        ]
      : [
          "M0,120 C60,120 280,28 520,65 C760,102 960,18 1200,52 C1360,72 1440,32 1440,32 L1440,0 L0,0 Z",
          "M0,120 C120,115 340,40 580,70 C820,96 1020,28 1260,58 C1380,70 1440,42 1440,42 L1440,0 L0,0 Z",
        ];

  return (
    <div className="relative -mt-1 -mb-1 w-full" aria-hidden>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-14 w-full lg:h-24"
      >
        <path d={paths[1]} fill={fill} opacity="0.6" />
        <path d={paths[0]} fill={fill} />
      </svg>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="page-atmosphere relative">
      <HomePageBackdrop />
      <div className="relative">
        <Hero />
        <PillarBento />

        <WaveTransition fill="var(--emerald)" direction="down" />
        <CompanyStatement />
        <WaveTransition fill="var(--emerald)" direction="up" />

        <SectorPanels />
      </div>
    </div>
  );
}
