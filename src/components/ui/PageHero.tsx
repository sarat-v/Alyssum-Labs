"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type PageHeroAccent = "none" | "olive" | "warm" | "dual";

const accentClasses: Record<Exclude<PageHeroAccent, "none">, string> = {
  olive: "page-hero-accent-olive",
  warm: "page-hero-accent-warm",
  dual: "page-hero-accent-dual",
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  highlights?: readonly string[];
  className?: string;
  background?: "plain" | "solid-olive-dark";
  accent?: PageHeroAccent;
};

export function PageHero({
  eyebrow,
  title,
  description,
  highlights,
  className,
  background = "plain",
  accent = "none",
}: PageHeroProps) {
  const isSolidOliveDark = background === "solid-olive-dark";
  const hasAccent = !isSolidOliveDark && accent !== "none";

  return (
    <section
      className={clsx(
        "relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28",
        !isSolidOliveDark && !hasAccent && "bg-off-white",
        hasAccent && accentClasses[accent],
        className,
      )}
      style={isSolidOliveDark ? { backgroundColor: "var(--hero-olive-dark)" } : undefined}
    >
      <div className="relative z-1 mx-auto max-w-7xl px-6 lg:px-8">
        {isSolidOliveDark ? (
          <div className="max-w-5xl px-1 py-2 lg:px-2">
            {eyebrow && (
              <>
                <div className="heading-accent-light mb-4" aria-hidden />
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease }}
                  className="label-mono text-off-white/72"
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
                "max-w-4xl font-serif text-5xl leading-[1.05] text-off-white display-tight sm:text-6xl lg:text-7xl",
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
                className="mt-6 max-w-2xl text-lg leading-relaxed text-off-white/78 lg:mt-8 lg:text-xl"
              >
                {description}
              </motion.p>
            )}
          </div>
        ) : (
          <div className="surface-card-elevated max-w-5xl rounded-3xl px-7 py-8 lg:px-10 lg:py-12">
            {eyebrow && (
              <>
                <div className="heading-accent mb-4" aria-hidden />
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease }}
                  className="label-mono text-accent-muted"
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
                "max-w-4xl font-serif text-5xl leading-[1.05] text-text-primary display-tight sm:text-6xl lg:text-7xl",
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
        )}

        {!isSolidOliveDark && highlights && highlights.length > 0 && (
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
