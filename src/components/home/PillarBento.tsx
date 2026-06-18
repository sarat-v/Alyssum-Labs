import { home } from "@/lib/content";

export function PillarBento() {
  return (
    <section className="grain-overlay relative overflow-hidden pb-24 pt-10 lg:pb-32 lg:pt-16">
      {/* Soft ambient wash so backdrop-blur has depth to refract */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 45% at 78% 28%, rgba(127,198,178,0.14), transparent 52%),
            radial-gradient(ellipse 50% 40% at 18% 55%, rgba(171,182,159,0.16), transparent 50%),
            radial-gradient(ellipse 45% 35% at 55% 75%, rgba(227,201,184,0.12), transparent 48%)
          `,
        }}
        aria-hidden
      />

      <div className="relative z-2 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-5xl">
          <div className="heading-accent mb-5" aria-hidden />
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-accent-muted">
            Our Approach
          </p>
          <p className="mt-4 max-w-5xl font-serif text-3xl leading-tight tracking-tight text-text-primary lg:text-5xl">
            Embedded intelligence, built for consequence
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16">
          {home.pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="surface-card-elevated relative flex min-h-68 flex-col rounded-2xl p-8 lg:p-9"
            >
              <span className="relative z-1 inline-flex w-fit items-center rounded-full border border-white/50 bg-white/35 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-accent-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md">
                Pillar 0{i + 1}
              </span>
              <h3 className="relative z-1 mt-5 font-serif text-[1.35rem] leading-tight text-text-primary">
                {pillar.title}
              </h3>
              <p className="relative z-1 mt-4 flex-1 text-[0.92rem] leading-relaxed text-text-secondary">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
