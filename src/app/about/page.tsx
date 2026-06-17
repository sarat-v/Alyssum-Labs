import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        description="A Singapore-based technology intelligence company for environments where data is dense, decisions carry weight, and governance standards are exacting."
        band="olive"
      />

      <section className="bg-emerald py-24 lg:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="section-reveal font-serif text-2xl italic leading-relaxed text-persian-orange lg:text-[1.875rem] lg:leading-[1.7]">
            {about.intro[0]}
          </p>
        </div>
      </section>

      <section className="section-band-neutral section-shell relative overflow-hidden">
        <span
          aria-hidden
          className="pointer-events-none absolute right-2 top-4 select-none font-serif text-[8rem] leading-none text-olive/[0.07] lg:right-10 lg:top-8 lg:text-[16rem]"
        >
          01
        </span>

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="section-reveal">
            <div className="heading-accent mb-4" aria-hidden />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-muted">
              Founder
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <h2 className="font-serif text-5xl tracking-tight text-text-primary lg:text-6xl">
                {about.founder.name}
              </h2>
              {about.founder.linkedinUrl ? (
                <Link
                  href={about.founder.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${about.founder.name} on LinkedIn`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-text-secondary transition-colors hover:border-emerald/35 hover:text-accent-core"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </Link>
              ) : null}
            </div>
          </div>

          <div className="section-reveal mt-14 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-14 lg:gap-20">
            <figure className="mx-auto shrink-0 sm:mx-0">
              <Image
                src={about.founder.portrait}
                alt={about.founder.name}
                width={about.founder.portraitWidth}
                height={about.founder.portraitHeight}
                className="h-auto w-64 rounded-2xl ring-1 ring-olive/25 sm:w-72 lg:w-[300px]"
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

      <section className="section-band-olive section-shell">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Principles">Our Foundation</SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14">
            {about.foundation.map((item, i) => (
              <article
                key={item.title}
                className="section-reveal surface-card-elevated flex flex-col rounded-2xl border-t-4 border-t-olive/80 p-8 transition-transform duration-500 hover:-translate-y-1 lg:p-9"
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

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
