import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Designing Intelligence for Drug Development Programmes",
  description:
    "Why data architecture, operating workflow, and translational context are central to AI outcomes in drug development.",
};

export default function DrugDevelopmentInsightPage() {
  return (
    <section className="section-band-neutral section-shell">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-muted">Insights</p>
        <h1 className="mt-4 font-serif text-4xl text-text-primary lg:text-5xl">
          Designing Intelligence for Drug Development Programmes
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-text-secondary">
          <p>
            In drug development, model quality is constrained by programme design. Fragmented
            biological and chemistry datasets, inconsistent annotations, and disconnected workflows
            often create larger failure modes than the choice of model architecture.
          </p>
          <p>
            The practical shift is to treat intelligence as programme infrastructure: data
            standards, validation routines, decision checkpoints, and feedback loops that improve
            model behaviour as programmes progress.
          </p>
          <p>
            This is where AI systems become durable. Instead of isolated model outputs, teams gain
            continuously improving decision support grounded in translational and regulatory
            realities.
          </p>
        </div>
        <Link href="/insights" className="mt-8 inline-block text-sm text-accent-core hover:underline">
          ← Back to Insights
        </Link>
      </article>
    </section>
  );
}
