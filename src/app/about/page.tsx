import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Alyssum Labs — a Singapore-based technology intelligence company founded on domain depth, structural discipline, and governance by design.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About Alyssum Labs"
        description="A technology intelligence company built for complexity, governance, and the long term."
      />

      {/* Founding conviction — dark band */}
      <section className="bg-emerald py-24 lg:py-36">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="section-reveal font-serif text-2xl italic leading-relaxed text-persian-orange lg:text-[1.875rem] lg:leading-[1.7]">
            {about.intro[0]}
          </p>
        </div>
      </section>

      {/* Founder — editorial layout */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        {/* Decorative background number */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-2 top-4 select-none font-serif text-[8rem] leading-none text-olive/[0.07] lg:right-10 lg:top-8 lg:text-[16rem]"
        >
          01
        </span>

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="section-reveal">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-olive">
              Founder
            </p>
            <h2 className="mt-3 font-serif text-5xl tracking-tight text-text-primary lg:text-6xl">
              {about.founder.name}
            </h2>
          </div>

          <div className="section-reveal mt-14 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-14 lg:gap-20">
            <figure className="mx-auto shrink-0 sm:mx-0">
              <Image
                src={about.founder.portrait}
                alt={about.founder.name}
                width={about.founder.portraitWidth}
                height={about.founder.portraitHeight}
                className="h-auto w-64 rounded-2xl sm:w-72 lg:w-[300px]"
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 300px"
                priority
              />
            </figure>
            <div className="min-w-0 flex-1 space-y-5 sm:pt-2">
              {about.founder.bio.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-relaxed text-text-secondary lg:text-[1.0625rem] lg:leading-[1.8]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Foundation — warm surface, principle cards */}
      <section className="bg-bg-surface/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Principles">Our Foundation</SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14">
            {about.foundation.map((item, i) => (
              <article
                key={item.title}
                className="section-reveal flex flex-col rounded-2xl border border-border-subtle border-t-[3px] border-t-olive/70 bg-off-white/70 p-8 backdrop-blur-[2px] transition-transform duration-500 hover:-translate-y-1 lg:p-9"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <p className="font-serif text-4xl text-accent-muted/50">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-serif text-xl text-text-primary lg:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary lg:text-base lg:leading-[1.7]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
