"use client";

import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { home } from "@/lib/content";

const sectorStyles = {
  ls: {
    border: "border-t-olive/80",
    tint: "",
  },
  pe: {
    border: "border-t-accent-pe/85",
    tint: "",
  },
} as const;

export function SectorPanelsCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="relative mt-12 lg:mt-14">
      <div className="grid gap-5 lg:grid-cols-2">
        {home.sectors.map((sector, index) => (
          <motion.div
            key={sector.id}
            className="relative"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 0.85, delay: 0.12 + index * 0.12, ease }
            }
          >
            <Link
              href={sector.href}
              className={clsx(
                "group surface-card-elevated relative flex h-full flex-col overflow-hidden rounded-2xl",
                sectorStyles[sector.accent].tint,
              )}
            >
              <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden bg-bg-surface">
                <Image
                  src={sector.image}
                  alt=""
                  fill
                  className="object-cover img-sector-tone transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <motion.div
                className={clsx(
                  "flex min-h-56 flex-1 flex-col border-t-[5px] p-8 lg:min-h-60 lg:p-10",
                  sectorStyles[sector.accent].border,
                )}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 0.82, delay: 0.26 + index * 0.12, ease }
                }
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
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
