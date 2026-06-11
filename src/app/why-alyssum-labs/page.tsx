import type { Metadata } from "next";
import { clsx } from "clsx";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyAlyssum } from "@/lib/content";

const panelStyles = [
  "bg-olive/45",
  "bg-persian-orange/55",
  "bg-olive/35",
  "bg-persian-orange/45",
] as const;

export const metadata: Metadata = {
  title: "Why Alyssum Labs",
  description:
    "Domain-specific technology intelligence, programme-level embedding, lifecycle alignment, and governance built in from inception.",
};

export default function WhyAlyssumPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Us"
        title="Why Alyssum Labs"
        highlights={whyAlyssum.highlights}
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Positioning">Our Positioning</SectionHeading>
          <div className="mt-12 space-y-5 lg:mt-14">
            {whyAlyssum.positioning.map((item, i) => (
              <article
                key={item.title}
                className="section-reveal overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface"
              >
              <div className="grid lg:grid-cols-[minmax(9rem,14rem)_1fr]">
                <PositioningPanel index={i} />
                <div className="flex flex-col justify-center border-t border-border-subtle p-8 lg:border-t-0 lg:border-l lg:p-10 xl:p-12">
                  <h3 className="font-serif text-2xl text-text-primary lg:text-[1.75rem] lg:leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PositioningPanel({ index }: { index: number }) {
  const panel = panelStyles[index % panelStyles.length];

  return (
    <div
      className={clsx(
        "relative flex min-h-[7.5rem] items-center justify-center overflow-hidden lg:min-h-0",
        panel,
      )}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(28,63,64,0.08) 0, rgba(28,63,64,0.08) 1px, transparent 1px, transparent 12px)",
        }}
      />
      <div
        className="absolute inset-4 rounded-full border border-emerald/15"
        style={{ clipPath: "inset(0 0 0 0 round 9999px)" }}
      />
      <span className="relative select-none font-serif text-6xl leading-none text-emerald/20 lg:text-7xl">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}
