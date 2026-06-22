import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ourApproach } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Alyssum Labs works: domain-specific technology systems, programme-level engagement, continuous development, and durable commercial structures.",
};

export default function OurApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Think and How We Work"
        title="Our Approach"
      />

      {/* Intro — dark olive statement (mirrors About's founding statement) */}
      <section
        className="relative overflow-hidden pb-30 pt-18 lg:pb-38 lg:pt-24"
        style={{ backgroundColor: "var(--hero-olive-dark)" }}
      >
        <div className="relative z-1 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <blockquote className="section-reveal relative mx-auto max-w-3xl accent-border-left-olive text-left">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-3 -top-14 select-none font-serif text-[6rem] leading-none text-off-white/18 lg:-left-10 lg:-top-18 lg:text-[9rem]"
            >
              &ldquo;
            </span>

            <p className="font-serif text-xl italic leading-relaxed text-persian-orange lg:text-[1.65rem] lg:leading-[1.68]">
              {ourApproach.intro}
            </p>

            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -right-3 select-none font-serif text-[6rem] leading-none text-off-white/14 lg:-bottom-20 lg:-right-10 lg:text-[9rem]"
            >
              &rdquo;
            </span>
          </blockquote>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 -mb-px" aria-hidden>
          <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="block h-16 w-full lg:h-24">
            <path
              d="M0,0 C180,18 330,102 560,94 C790,86 930,18 1160,32 C1300,40 1384,92 1440,112 L1440,140 L0,140 Z"
              fill="var(--off-white)"
              opacity="0.72"
            />
            <path
              d="M0,24 C210,40 340,118 584,108 C828,98 986,26 1202,42 C1328,52 1404,94 1440,116 L1440,140 L0,140 Z"
              fill="var(--off-white)"
            />
          </svg>
        </div>
      </section>

      {/* What Sets Us Apart — neutral cards */}
      <section className="section-band-neutral pb-24 pt-10 lg:pb-32 lg:pt-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="What Sets Us Apart">
            Technology work shaped for serious operating environments.
          </SectionHeading>

          <div className="mt-12 space-y-5 lg:mt-14">
            {ourApproach.differentiators.map((item, i) => (
              <article
                key={item.title}
                className="section-reveal surface-card-flat rounded-2xl p-8 lg:p-10"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="accent-icon-badge accent-icon-badge-olive shrink-0">
                    <span className="font-mono text-[11px] tracking-[0.06em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-2xl text-text-primary heading-architectural lg:text-[1.75rem] lg:leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-text-secondary">
                      {item.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work — dark olive heading strip + neutral cards (mirrors About's Foundation pattern) */}
      <section className="grain-overlay section-band-about-foundation relative overflow-hidden">
        <div className="relative z-1 pt-14 pb-10 lg:pt-16 lg:pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading eyebrow="How We Work" tone="light">
              Systems designed to improve through use.
            </SectionHeading>
          </div>
        </div>
      </section>

      <section className="section-band-neutral relative pb-20 pt-6 lg:pb-28 lg:pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {ourApproach.howWeWork.map((item, i) => (
              <article
                key={item.title}
                className="section-reveal surface-card-flat flex flex-col rounded-2xl border-t-4 border-t-olive/80 p-8 transition-transform duration-500 hover:-translate-y-1 lg:p-9"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="accent-icon-badge accent-icon-badge-olive">
                  <span className="font-mono text-[11px] tracking-[0.06em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-text-primary heading-architectural">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-text-secondary">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Engage — dark olive heading strip + neutral cards */}
      <section className="grain-overlay section-band-about-foundation relative overflow-hidden">
        <div className="relative z-1 pt-14 pb-10 lg:pt-16 lg:pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading eyebrow="How We Engage" tone="light">
              Programme-level partnerships, not point projects.
            </SectionHeading>
          </div>
        </div>
      </section>

      <section className="section-band-neutral relative pb-20 pt-6 lg:pb-28 lg:pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {ourApproach.howWeEngage.map((item, i) => (
              <article
                key={item.title}
                className="section-reveal surface-card-flat flex flex-col rounded-2xl border-t-4 border-t-olive/80 p-8 transition-transform duration-500 hover:-translate-y-1 lg:p-9"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="accent-icon-badge accent-icon-badge-olive">
                  <span className="font-mono text-[11px] tracking-[0.06em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <h3 className="mt-4 font-serif text-xl text-text-primary heading-architectural lg:text-2xl">
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

      {/* Aligned to What We Build — dark olive heading strip + neutral cards */}
      <section className="grain-overlay section-band-about-foundation relative overflow-hidden">
        <div className="relative z-1 pt-14 pb-10 lg:pt-16 lg:pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading eyebrow="Aligned to What We Build" tone="light">
              Engagements structured for long-term value.
            </SectionHeading>
          </div>
        </div>
      </section>

      <section className="section-band-neutral relative pb-20 pt-6 lg:pb-28 lg:pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="section-reveal mx-auto max-w-3xl text-center font-serif text-lg italic leading-relaxed text-text-secondary lg:text-xl">
            {ourApproach.outcomes.framing}
          </p>

          <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-3">
            {ourApproach.outcomes.items.map((item, i) => (
              <article
                key={item.title}
                className="section-reveal surface-card-flat flex flex-col rounded-2xl border-t-4 border-t-olive/80 p-8 transition-transform duration-500 hover:-translate-y-1 lg:p-9"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="accent-icon-badge accent-icon-badge-olive">
                  <span className="font-mono text-[11px] tracking-[0.06em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-text-primary heading-architectural">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-text-secondary">
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
