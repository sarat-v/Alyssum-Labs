"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { home } from "@/lib/content";
import { HeroInterferenceBackground } from "@/components/home/HeroInterferenceBackground";

export function Hero() {
  return (
    <section id="home-hero" className="relative flex min-h-screen items-end overflow-x-hidden px-0 pb-14 pt-24 lg:pb-20 lg:pt-24">
      <HeroInterferenceBackground />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-200">
          <div className="heading-accent mb-5" aria-hidden />
          <h1 className="pb-1 text-5xl leading-[0.94] tracking-[-0.028em] text-text-primary sm:text-6xl lg:text-7xl">
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
                className={
                  i === 0
                    ? "font-utile-display block -ml-0.5 font-normal italic text-text-secondary"
                    : "block font-serif font-normal"
                }
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="-ml-1 mt-6 max-w-[62ch] text-balance text-lg leading-relaxed text-text-secondary"
          >
            {home.hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex h-11 items-center rounded-full border border-white/30 bg-[linear-gradient(122deg,rgba(28,63,64,0.95)_0%,rgba(76,126,113,0.94)_45%,rgba(171,182,159,0.92)_100%)] px-7 text-sm font-medium text-off-white shadow-[0_16px_30px_-20px_rgba(28,63,64,0.85)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:brightness-105 hover:shadow-[0_22px_34px_-22px_rgba(28,63,64,0.85)]"
            >
              <span className="relative">Work With Us</span>
            </Link>
            <Link
              href="/what-we-do"
              className="group inline-flex h-11 items-center rounded-full border border-emerald/34 bg-off-white/68 px-7 text-sm font-medium text-text-primary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.68),0_10px_22px_-20px_rgba(28,63,64,0.52)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald/58 hover:bg-off-white/84 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.82),0_14px_28px_-20px_rgba(28,63,64,0.58)]"
            >
              What We Do
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
