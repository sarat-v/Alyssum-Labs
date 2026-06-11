import type { Metadata } from "next";
import { clsx } from "clsx";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ourModel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Model",
  description:
    "Program-level embedding, continuous learning systems, and commercial models aligned to long-term outcomes.",
};

export default function OurModelPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Operate"
        title="Our Model"
        description="How we work, how we create value, and how we participate in the outcomes our technology enables."
      />

      {/* Lead statement */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <p className="section-reveal max-w-3xl font-serif text-2xl leading-snug text-text-primary lg:text-[1.75rem] lg:leading-normal">
          {ourModel.intro}
        </p>
      </section>

      {/* How We Work — surface band, step cards */}
      <section className="bg-bg-surface/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Process">How We Work</SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14">
            {ourModel.howWeWork.map((item, i) => (
              <article
                key={item.title}
                className="section-reveal flex flex-col rounded-2xl border border-border-subtle border-t-[3px] border-t-olive/70 bg-off-white/70 p-8 backdrop-blur-[2px] transition-transform duration-500 hover:-translate-y-1 lg:p-9"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <p className="font-serif text-4xl text-accent-muted/50">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-serif text-2xl text-text-primary">
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

      {/* Commercial Model */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="Commercial">Our Commercial Model</SectionHeading>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {ourModel.commercial.map((item) => (
            <article
              key={item.title}
              className={clsx(
                "section-reveal flex flex-col rounded-2xl p-8 transition-transform duration-500 hover:-translate-y-1 lg:p-9",
                item.featured
                  ? "bg-emerald text-off-white"
                  : "border border-border-subtle bg-bg-surface/60 text-text-primary",
              )}
            >
              <h3
                className={clsx(
                  "font-serif text-xl",
                  item.featured ? "text-off-white" : "text-text-primary",
                )}
              >
                {item.title}
              </h3>
              <p
                className={clsx(
                  "mt-4 flex-1 text-sm leading-relaxed",
                  item.featured ? "text-off-white/85" : "text-text-secondary",
                )}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
