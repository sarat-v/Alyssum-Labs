import { home } from "@/lib/content";
import { clsx } from "clsx";

const pillarAccents = [
  "border-t-olive/70",
  "border-t-emerald/50",
  "border-t-persian-orange/80",
] as const;

export function PillarBento() {
  return (
    <section className="bg-off-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="section-reveal font-mono text-xs uppercase tracking-[0.2em] text-accent-muted">
          Our Approach
        </p>
        <h2 className="section-reveal mt-4 max-w-2xl font-serif text-3xl tracking-tight text-text-primary lg:text-4xl">
          Embedded intelligence, built for consequence
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {home.pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className={clsx(
                "section-reveal flex flex-col rounded-2xl border border-border-subtle/80 border-t-[3px] bg-off-white/80 p-8 backdrop-blur-[2px] transition-transform duration-500 hover:-translate-y-1 lg:p-9",
                pillarAccents[i % pillarAccents.length],
              )}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-text-secondary">
                Pillar 0{i + 1}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-text-primary">
                {pillar.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-text-secondary">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
