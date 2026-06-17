"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatWeDo } from "@/lib/content";

type SectorTab = "ls" | "pe";

function tabFromHash(hash: string): SectorTab {
  const normalized = hash.toLowerCase();
  return normalized === "#private-capital" || normalized === "#financial-markets" ? "pe" : "ls";
}

function hashFromTab(tab: SectorTab): string {
  return tab === "pe" ? "#private-capital" : "#life-sciences";
}

export function SectorTabs() {
  const pathname = usePathname();
  const [active, setActive] = useState<SectorTab>("ls");

  const syncFromHash = useCallback(() => {
    setActive(tabFromHash(window.location.hash));
  }, []);

  useLayoutEffect(() => {
    syncFromHash();
  }, [pathname, syncFromHash]);

  useEffect(() => {
    syncFromHash();
    const retry = window.setTimeout(syncFromHash, 0);

    window.addEventListener("hashchange", syncFromHash);
    return () => {
      window.clearTimeout(retry);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [pathname, syncFromHash]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash || tabFromHash(`#${hash}`) !== active) return;

    const frame = requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "auto", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [active, pathname]);

  const selectTab = (tab: SectorTab) => {
    setActive(tab);
    const hash = hashFromTab(tab);
    const url = `${pathname}${hash}`;
    if (`${window.location.pathname}${window.location.hash}` !== url) {
      window.history.replaceState(null, "", url);
    }
  };

  return (
    <>
      <div className="sticky top-16 z-40 border-b border-border-subtle/80 section-band-neutral backdrop-blur-xl lg:top-20">
        <div className="mx-auto flex max-w-7xl gap-2 px-6 py-4 lg:px-8">
          {(
            [
              { id: "ls" as const, label: whatWeDo.lifeSciences.title },
              { id: "pe" as const, label: whatWeDo.privateCapital.title },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => selectTab(tab.id)}
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
                    tab.id === "ls" ? "bg-olive/50" : "bg-persian-orange/55",
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
            band="olive"
            title={whatWeDo.lifeSciences.title}
            intro={whatWeDo.lifeSciences.intro}
            capabilities={whatWeDo.lifeSciences.capabilities}
            banner={{
              src: "/images/pipeline-sequence.png",
              alt: "Abstract visualization of data resolving into structured intelligence",
              eyebrow: "Intelligence pipeline",
              title: "From multimodal data to translational clarity",
            }}
          />
        ) : (
          <SectorSection
            id="private-capital"
            accent="pe"
            band="warm"
            title={whatWeDo.privateCapital.title}
            intro={whatWeDo.privateCapital.intro}
            capabilities={whatWeDo.privateCapital.capabilities}
            banner={{
              src: "/images/private-equity.png",
              alt: "Abstract visualization of portfolio intelligence infrastructure",
              eyebrow: "Portfolio intelligence",
              title: "From fragmented data to portfolio clarity",
            }}
          />
        )}
      </motion.div>
    </>
  );
}

function SectorSection({
  id,
  accent,
  band,
  title,
  intro,
  capabilities,
  banner,
}: {
  id: string;
  accent: "ls" | "pe";
  band: "olive" | "warm";
  title: string;
  intro: string[];
  capabilities: { title: string; body: string }[];
  banner?: {
    src: string;
    alt: string;
    eyebrow: string;
    title: string;
  };
}) {
  const bandClass = band === "olive" ? "section-band-olive" : "section-band-warm";
  const accentBorder =
    accent === "ls" ? "border-t-olive/80" : "border-t-persian-orange/85";

  return (
    <section id={id} className={clsx("scroll-mt-32", bandClass, "section-shell")}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Sector">{title}</SectionHeading>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary lg:text-lg">
          {intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        {banner && (
          <div className="section-reveal surface-card-elevated mt-16 overflow-hidden rounded-2xl">
            <div className="relative aspect-[21/9] bg-bg-surface">
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-cover img-brand-tone"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
            <div className={clsx("border-t-[5px] px-8 py-6 lg:px-10 lg:py-8", accentBorder)}>
              <p className="font-mono text-xs uppercase tracking-widest text-accent-muted">
                {banner.eyebrow}
              </p>
              <p className="mt-2 max-w-2xl font-serif text-2xl leading-snug text-text-primary lg:text-[1.75rem]">
                {banner.title}
              </p>
            </div>
          </div>
        )}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14">
          {capabilities.map((cap, i) => (
            <article
              key={cap.title}
              className={clsx(
                "section-reveal group surface-card-elevated relative overflow-hidden rounded-2xl border-t-[4px] p-6 transition-all duration-500 hover:-translate-y-1 lg:p-8",
                accentBorder,
              )}
            >
              <p className="font-mono text-xs text-accent-muted">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-xl text-text-primary">
                {cap.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {cap.body}
              </p>
              <div className="mt-6 h-px w-12 bg-linear-to-r from-olive/40 to-persian-orange/40 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
