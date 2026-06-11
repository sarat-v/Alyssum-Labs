import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectorTabs } from "@/components/what-we-do/SectorTabs";
import { whatWeDo } from "@/lib/content";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "AI-driven intelligence systems embedded in life sciences and financial markets programmes.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="What We Do"
        description={whatWeDo.intro}
      />
      <SectorTabs />
    </>
  );
}
