import type { Metadata } from "next";
import Link from "next/link";
import { clsx } from "clsx";
import { PageHero } from "@/components/ui/PageHero";

const insightStubs = [
  {
    slug: "designing-intelligence-for-drug-development",
    sector: "Life Sciences",
    accent: "ls",
    title: "Designing Intelligence for Drug Development Programmes",
    excerpt:
      "A short perspective on why model quality in life sciences depends as much on programme design and data structure as it does on algorithm choice.",
  },
  {
    slug: "portfolio-intelligence-in-private-capital",
    sector: "Private Capital",
    accent: "pe",
    title: "Portfolio Intelligence in Private Capital",
    excerpt:
      "How private capital platforms can evolve from fragmented reporting workflows into continuously improving intelligence infrastructure.",
  },
] as const;

const insightsIntro =
  "Considered perspectives from Alyssum Labs on the sectors we work across, the technology shaping them, and the practical questions our partners are navigating. Published periodically rather than on a fixed cadence, with depth prioritised over frequency.";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Considered perspectives from Alyssum Labs on the sectors we work across, the technology shaping them, and practical questions our partners are navigating.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Perspectives from Alyssum Labs"
        title="Insights"
        accent="dual"
      />
      <section className="section-band-neutral section-shell">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="section-reveal max-w-5xl font-serif text-2xl leading-snug text-text-primary lg:text-[2rem] lg:leading-[1.35]">
            {insightsIntro}
          </p>
          <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2">
            {insightStubs.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className={clsx(
                  "group section-reveal surface-card-flat flex flex-col rounded-2xl border-t-4 p-8 transition-transform duration-500 hover:-translate-y-1 lg:p-9",
                  item.accent === "ls" ? "border-t-olive/70" : "border-t-accent-pe/75",
                )}
              >
                <span
                  className={clsx(
                    "mb-5 w-fit rounded-full px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-text-secondary",
                    item.accent === "ls" ? "bg-olive/20" : "bg-persian-orange/28",
                  )}
                >
                  {item.sector}
                </span>
                <h2 className="font-serif text-2xl text-text-primary">{item.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">{item.excerpt}</p>
                <span className="mt-6 inline-block text-sm font-medium text-accent-core underline-offset-4 transition-[color,text-decoration] duration-300 group-hover:underline">
                  Read note
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
