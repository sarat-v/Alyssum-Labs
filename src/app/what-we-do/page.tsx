import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectorTabs } from "@/components/what-we-do/SectorTabs";
import { whatWeDo } from "@/lib/content";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "AI-driven intelligence systems for complex, high-stakes programmes in life sciences and private capital.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="What We Do"
        accent="dual"
      />
      <section className="section-band-neutral border-t border-border-subtle/70 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="section-reveal mx-auto max-w-4xl text-center font-serif text-2xl leading-snug text-text-primary heading-architectural lg:text-[2rem] lg:leading-[1.35]">
            {whatWeDo.intro}
          </p>
        </div>
      </section>
      <SectorTabs />
    </>
  );
}
