"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  highlights?: readonly string[];
  className?: string;
  band?: "neutral" | "olive" | "warm";
};

export function PageHero({
  eyebrow,
  title,
  description,
  highlights,
  className,
  band = "neutral",
}: PageHeroProps) {
  const bandClass =
    band === "olive"
      ? "section-band-olive"
      : band === "warm"
        ? "section-band-warm"
        : "section-band-neutral page-atmosphere";

  return (
    <section
      className={clsx(
        "relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28",
        bandClass,
        className,
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-8%] h-136 w-136 rounded-full bg-olive/30 blur-[130px]" />
        <div className="absolute -top-24 left-[-6%] h-104 w-104 rounded-full bg-persian-orange/25 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-[rgba(171,182,159,0)] via-[rgba(171,182,159,0.35)] to-[rgba(227,201,184,0)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="surface-card-elevated max-w-5xl rounded-3xl px-7 py-8 lg:px-10 lg:py-12">
          {eyebrow && (
            <>
              <div className="heading-accent mb-4" aria-hidden />
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="font-mono text-xs uppercase tracking-[0.25em] text-accent-muted"
              >
                {eyebrow}
              </motion.p>
            </>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className={clsx(
              "max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-7xl",
              eyebrow ? "mt-4" : "",
            )}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16, ease }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary lg:mt-8 lg:text-xl"
            >
              {description}
            </motion.p>
          )}
        </div>

        {highlights && highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease }}
            className="mt-8 flex flex-wrap gap-x-3 gap-y-3"
          >
            {highlights.map((line) => (
              <span
                key={line}
                className="surface-card rounded-full px-4 py-2 text-sm text-text-secondary"
              >
                {line}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
