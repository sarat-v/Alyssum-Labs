import Image from "next/image";
import Link from "next/link";
import { home } from "@/lib/content";
import { clsx } from "clsx";

const sectorAccents = {
  ls: "border-t-olive/55",
  pe: "border-t-persian-orange/60",
} as const;

export function SectorPanels() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="section-reveal font-mono text-xs uppercase tracking-[0.2em] text-accent-muted">
          Where We Apply Intelligence
        </p>
        <h2 className="section-reveal mt-4 font-serif text-3xl tracking-tight text-text-primary lg:text-4xl">
          Two sectors. One intelligence core.
        </h2>

        <div className="mt-12 flex items-stretch gap-5 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0">
          {home.sectors.map((sector) => (
            <Link
              key={sector.id}
              href={sector.href}
              className="group flex min-h-[28rem] w-[85vw] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-border-subtle/80 bg-off-white/70 backdrop-blur-[2px] transition-transform duration-500 hover:-translate-y-1 sm:w-[70vw] lg:min-h-0 lg:w-auto"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-bg-surface">
                <Image
                  src={sector.image}
                  alt=""
                  fill
                  className="object-cover opacity-75 img-sector-tone transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 70vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-off-white/50 via-off-white/10 to-[#f7f4ef00]" />
              </div>
              <div
                className={clsx(
                  "flex min-h-[14rem] flex-1 flex-col border-t border-border-subtle/60 border-t-[3px] p-8 lg:min-h-[15rem] lg:p-10",
                  sectorAccents[sector.accent],
                )}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-accent-muted">
                  {sector.title}
                </p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-text-secondary">
                  {sector.body}
                </p>
                <span className="mt-6 inline-flex text-sm font-medium text-text-primary transition-transform group-hover:translate-x-1">
                  Explore {sector.title} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompanyStatement() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      <blockquote className="section-reveal mx-auto max-w-3xl border-l-2 border-emerald/20 pl-8">
        <p className="font-serif text-2xl leading-relaxed text-text-primary lg:text-3xl">
          {home.statement}
        </p>
      </blockquote>
    </section>
  );
}
