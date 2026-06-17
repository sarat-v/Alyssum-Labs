import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Intelligence in Private Capital",
  description:
    "A short perspective on building portfolio intelligence platforms for private capital from fragmented data realities.",
};

export default function PortfolioInsightPage() {
  return (
    <section className="section-band-neutral section-shell">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-muted">Insights</p>
        <h1 className="mt-4 font-serif text-4xl text-text-primary lg:text-5xl">
          Portfolio Intelligence in Private Capital
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-text-secondary">
          <p>
            Private capital portfolios frequently operate with heterogeneous data, asynchronous
            update cycles, and reporting structures that were not designed for integrated analysis.
          </p>
          <p>
            The core opportunity is not incremental dashboarding; it is platform architecture that
            normalises input quality, aligns workflow cadence, and provides portfolio-level context
            that investment and operating teams can trust.
          </p>
          <p>
            Over time, this shifts portfolio management from retrospective reporting to structured,
            continuously improving intelligence.
          </p>
        </div>
        <Link href="/insights" className="mt-8 inline-block text-sm text-accent-core hover:underline">
          ← Back to Insights
        </Link>
      </article>
    </section>
  );
}
