"use client";

import { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { whatWeDo } from "@/lib/content";

export function SectorTabs() {
  const [active, setActive] = useState<"ls" | "pe">("ls");

  return (
    <>
      <div className="sticky top-16 z-40 border-b border-border-subtle bg-bg-base/90 backdrop-blur-xl lg:top-20">
        <div className="mx-auto flex max-w-7xl gap-2 px-6 py-4 lg:px-8">
          {(
            [
              { id: "ls" as const, label: whatWeDo.lifeSciences.title },
              { id: "pe" as const, label: whatWeDo.financialMarkets.title },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={clsx(
                "relative rounded-full px-5 py-2.5 text-sm transition-colors",
                active === tab.id
                  ? "text-emerald"
                  : "text-text-secondary hover:text-text-primary",
              )}
            >
              {active === tab.id && (
                <motion.span
                  layoutId="sector-pill"
                  className={clsx(
                    "absolute inset-0 rounded-full",
                    tab.id === "ls" ? "bg-olive/45" : "bg-persian-orange/50",
                  )}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {active === "ls" ? (
          <SectorSection
            id="life-sciences"
            accent="ls"
            title={whatWeDo.lifeSciences.title}
            intro={whatWeDo.lifeSciences.intro}
            capabilities={whatWeDo.lifeSciences.capabilities}
            showSequence
          />
        ) : (
          <SectorSection
            id="financial-markets"
            accent="pe"
            title={whatWeDo.financialMarkets.title}
            intro={whatWeDo.financialMarkets.intro}
            capabilities={whatWeDo.financialMarkets.capabilities}
            bannerImage="/images/private-equity.png"
          />
        )}
      </motion.div>
    </>
  );
}

function SectorSection({
  id,
  accent,
  title,
  intro,
  capabilities,
  showSequence,
  bannerImage,
}: {
  id: string;
  accent: "ls" | "pe";
  title: string;
  intro: string[];
  capabilities: { title: string; body: string }[];
  showSequence?: boolean;
  bannerImage?: string;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-muted">
          Sector
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-text-primary lg:text-4xl">
          {title}
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary lg:text-lg">
          {intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        {showSequence && (
          <div className="section-reveal mt-16 overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface">
            <div className="relative aspect-[21/9]">
              <Image
                src="/images/pipeline-sequence.png"
                alt="Abstract visualization of data resolving into structured intelligence"
                fill
                className="object-cover opacity-70 img-sector-tone"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 lg:p-10">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-ls">
                  Intelligence pipeline
                </p>
                <p className="mt-2 max-w-lg font-serif text-2xl text-text-primary">
                  From multimodal data to translational clarity
                </p>
              </div>
            </div>
          </div>
        )}

        {bannerImage && !showSequence && (
          <div className="section-reveal mt-16 overflow-hidden rounded-2xl border border-border-subtle">
            <div className="relative aspect-[21/9]">
              <Image
                src={bannerImage}
                alt=""
                fill
                className="object-cover opacity-70 img-sector-tone"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bg-base/90 via-transparent to-transparent" />
            </div>
          </div>
        )}

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {capabilities.map((cap, i) => (
            <article
              key={cap.title}
              className={clsx(
                "section-reveal group relative overflow-hidden rounded-2xl border border-border-subtle/80 border-t-[3px] bg-off-white/70 p-6 backdrop-blur-[2px] transition-all duration-500 hover:-translate-y-1 lg:p-8",
                accent === "ls" ? "border-t-olive/55" : "border-t-persian-orange/60",
              )}
            >
              <div className="relative">
              <p className="font-mono text-xs text-accent-muted/70">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-xl text-text-primary">
                {cap.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {cap.body}
              </p>
              <div className="mt-6 h-px w-12 bg-border-subtle transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
