"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { home } from "@/lib/content";
import { HeroInterferenceBackground } from "@/components/home/HeroInterferenceBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-20 pt-32 lg:items-center lg:pb-0 lg:pt-0">
      <HeroInterferenceBackground />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="pb-1 font-serif text-5xl leading-[1.14] tracking-tight text-text-primary sm:text-6xl sm:leading-[1.13] lg:text-7xl lg:leading-[1.12]">
            {home.hero.headline.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary lg:text-xl"
          >
            {home.hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-accent-core px-6 py-3 text-sm font-medium text-off-white transition-transform hover:scale-[1.02]"
            >
              Work With Us
            </Link>
            <Link
              href="/what-we-do"
              className="inline-flex items-center rounded-full border border-border-subtle px-6 py-3 text-sm text-text-primary transition-colors hover:border-emerald/35"
            >
              What We Do →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
