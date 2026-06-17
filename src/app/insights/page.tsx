import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

const insightStubs = [
  {
    slug: "designing-intelligence-for-drug-development",
    title: "Designing Intelligence for Drug Development Programmes",
    excerpt:
      "A short perspective on why model quality in life sciences depends as much on programme design and data structure as it does on algorithm choice.",
  },
  {
    slug: "portfolio-intelligence-in-private-capital",
    title: "Portfolio Intelligence in Private Capital",
    excerpt:
      "How private capital platforms can evolve from fragmented reporting workflows into continuously improving intelligence infrastructure.",
  },
] as const;

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Editorial insights from Alyssum Labs on technology intelligence in life sciences and private capital.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Editorial"
        title="Insights"
        description="Perspectives on intelligence infrastructure, programme design, and technology strategy across our sectors."
        band="neutral"
      />
      <section className="section-band-neutral section-shell pt-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {insightStubs.map((item) => (
              <article
                key={item.slug}
                className="section-reveal surface-card-elevated rounded-2xl border-t-4 border-t-olive/70 p-8"
              >
                <h2 className="font-serif text-2xl text-text-primary">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">{item.excerpt}</p>
                <Link
                  href={`/insights/${item.slug}`}
                  className="mt-6 inline-block text-sm text-accent-core underline-offset-4 hover:underline"
                >
                  Read note
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
