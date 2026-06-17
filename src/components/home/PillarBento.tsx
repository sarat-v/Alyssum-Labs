import { home } from "@/lib/content";

export function PillarBento() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Vibrant ambient glow fields */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 75% at 5% 25%, rgba(171,182,159,0.48), transparent 52%),
            radial-gradient(ellipse 75% 65% at 95% 50%, rgba(28,63,64,0.30), transparent 48%),
            radial-gradient(ellipse 65% 55% at 40% 90%, rgba(127,198,178,0.22), transparent 48%),
            radial-gradient(ellipse 55% 45% at 72% 10%, rgba(227,201,184,0.32), transparent 48%)
          `,
        }}
        aria-hidden
      />
      {/* Static wave pattern overlay */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045]"
        aria-hidden
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        fill="none"
      >
        <path
          d="M0 400c240-80 480 40 720 0s480-100 720-20v420H0z"
          fill="url(#wave-olive)"
        />
        <path
          d="M0 500c200-60 400 50 600 10s400-70 600-10l240 30v270H0z"
          fill="url(#wave-emerald)"
        />
        <path
          d="M0 600c180 30 360-40 540 0s360 50 540 10l360-20v210H0z"
          fill="url(#wave-warm)"
        />
        <defs>
          <linearGradient id="wave-olive" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#abb69f" />
            <stop offset="100%" stopColor="#7fc49c" />
          </linearGradient>
          <linearGradient id="wave-emerald" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1c3f40" />
            <stop offset="100%" stopColor="#3d9f8b" />
          </linearGradient>
          <linearGradient id="wave-warm" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e3c9b8" />
            <stop offset="100%" stopColor="#f0c6aa" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-5xl">
          <div className="heading-accent mb-5" aria-hidden />
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-accent-muted">Our Approach</p>
          <p className="mt-4 max-w-5xl font-serif text-3xl leading-tight tracking-tight text-text-primary lg:text-5xl">
            Embedded intelligence, built for consequence
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16">
          {home.pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="flex min-h-68 flex-col rounded-2xl border border-white/70 bg-white/50 p-8 shadow-[0_4px_24px_-4px_rgba(28,63,64,0.08),0_0_0_1px_rgba(255,255,255,0.6)_inset] backdrop-blur-2xl backdrop-saturate-150 lg:p-9"
            >
              <span className="inline-flex w-fit items-center rounded-full border border-olive/20 bg-olive/8 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-accent-muted">
                Pillar 0{i + 1}
              </span>
              <h3 className="mt-5 font-serif text-[1.35rem] leading-tight text-text-primary">
                {pillar.title}
              </h3>
              <p className="mt-4 flex-1 text-[0.92rem] leading-relaxed text-text-secondary">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
