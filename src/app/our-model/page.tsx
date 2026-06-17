import type { Metadata } from "next";
import { clsx } from "clsx";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ourModel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Model",
  description:
    "Program-level partnerships, continuous development, and commercial structures aligned to long-term outcomes.",
};

export default function OurModelPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Operate"
        title="Our Model"
        description="How we work, how we engage, and how our arrangements are structured for the long term."
        band="warm"
      />

      <section className="section-band-neutral section-shell">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="section-reveal max-w-5xl">
            <div className="heading-accent mb-6" aria-hidden />
            <p className="font-serif text-2xl leading-snug text-text-primary lg:text-[2rem] lg:leading-[1.35]">
              {ourModel.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="section-band-olive section-shell">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Process">How We Work</SectionHeading>
          <div className="relative mt-12 lg:mt-16">
            <div className="tech-divider absolute left-0 right-0 top-5 hidden lg:block" aria-hidden />
            <ol className="grid gap-8 lg:grid-cols-3">
              {ourModel.howWeWork.map((item, i) => (
                <li key={item.title} className="section-reveal list-none pt-3 lg:pt-0">
                  <article className="relative h-full pt-10">
                    <div
                      className={clsx(
                        "absolute left-6 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border text-lg font-serif lg:left-1/2 lg:-translate-x-1/2",
                        i % 2 === 0
                          ? "border-olive/45 bg-olive/30 text-emerald/75"
                          : "border-persian-orange/50 bg-persian-orange/30 text-emerald/75",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="surface-card-elevated h-full rounded-2xl border-t-4 border-t-olive/70 p-7 lg:p-9">
                      <h3 className="font-serif text-2xl leading-snug text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-text-secondary">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-band-warm section-shell">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Engagement">How We Engage</SectionHeading>
          <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-3">
            {ourModel.howWeEngage.map((item, i) => (
              <article
                key={item.title}
                className="section-reveal surface-card-elevated rounded-2xl border-t-4 border-t-persian-orange/80 p-8 transition-transform duration-500 hover:-translate-y-1 lg:p-9"
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

      <section className="section-band-neutral section-shell">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Outcomes">Aligned to What We Build</SectionHeading>
          <p className="section-reveal mt-6 max-w-3xl font-serif text-lg italic leading-relaxed text-text-secondary lg:text-xl">
            {ourModel.outcomes.framing}
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14">
            {ourModel.outcomes.items.map((item, i) => (
              <article
                key={item.title}
                className="section-reveal surface-card-elevated rounded-2xl border border-border-subtle/80 border-t-4 border-t-olive/70 bg-bg-band-olive/40 p-8 lg:p-9"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h3 className="font-serif text-2xl text-text-primary">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary lg:text-base">
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
