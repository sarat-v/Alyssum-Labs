"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { home } from "@/lib/content";

const sectorAccents = {
  ls: "border-t-olive/80",
  pe: "border-t-persian-orange/85",
} as const;

export function SectorPanelsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const syncActiveIndex = useCallback(() => {
    const root = scrollRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-sector-index]"));
    if (cards.length === 0) return;

    const rootRect = root.getBoundingClientRect();
    const rootCenter = rootRect.left + rootRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(cardCenter - rootCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = Number(card.dataset.sectorIndex);
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    syncActiveIndex();
    root.addEventListener("scroll", syncActiveIndex, { passive: true });
    window.addEventListener("resize", syncActiveIndex);

    return () => {
      root.removeEventListener("scroll", syncActiveIndex);
      window.removeEventListener("resize", syncActiveIndex);
    };
  }, [syncActiveIndex]);

  const scrollToIndex = (index: number) => {
    const root = scrollRef.current;
    if (!root) return;

    const card = root.querySelector<HTMLElement>(`[data-sector-index="${index}"]`);
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveIndex(index);
  };

  return (
    <div className="relative mt-12 lg:mt-14">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-text-secondary lg:hidden">
        Swipe to explore both sectors
      </p>

      <div
        ref={scrollRef}
        className="flex items-stretch gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [-mx-6] px-6 lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {home.sectors.map((sector, index) => (
          <Link
            key={sector.id}
            href={sector.href}
            data-sector-index={index}
            className="group surface-card-elevated flex min-h-112 w-[80vw] max-w-[340px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1 sm:w-[72vw] lg:min-h-0 lg:w-auto lg:max-w-none lg:snap-none"
          >
            <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden bg-bg-surface">
              <Image
                src={sector.image}
                alt=""
                fill
                className="object-cover img-sector-tone transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 72vw, 50vw"
              />
            </div>
            <div
              className={clsx(
                "flex min-h-56 flex-1 flex-col border-t-[5px] p-8 lg:min-h-60 lg:p-10",
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

      <div
        className="mt-5 flex items-center justify-center gap-2 lg:hidden"
        role="tablist"
        aria-label="Sector cards"
      >
        {home.sectors.map((sector, index) => (
          <button
            key={sector.id}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={`Show ${sector.title}`}
            onClick={() => scrollToIndex(index)}
            className={clsx(
              "h-2 rounded-full transition-all duration-300",
              activeIndex === index
                ? "w-7 bg-emerald"
                : "w-2 bg-emerald/25 hover:bg-emerald/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
