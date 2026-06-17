"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { home } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectorPanelsCarousel } from "@/components/home/SectorPanelsCarousel";

export function SectorPanels() {
  return (
    <section className="section-shell relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 65% at 85% 15%, rgba(171,182,159,0.42), transparent 48%),
            radial-gradient(ellipse 70% 60% at 10% 70%, rgba(227,201,184,0.38), transparent 48%),
            radial-gradient(ellipse 55% 45% at 50% 35%, rgba(28,63,64,0.16), transparent 42%),
            radial-gradient(ellipse 45% 35% at 30% 15%, rgba(127,198,178,0.20), transparent 45%)
          `,
        }}
        aria-hidden
      />
      {/* Static wave pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
        aria-hidden
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
        fill="none"
      >
        <path
          d="M0 200c320 60 640-40 960 20s320 80 480 40v340H0z"
          fill="url(#sector-wave-1)"
        />
        <path
          d="M0 320c240-50 480 30 720-10s480 60 720 20v270H0z"
          fill="url(#sector-wave-2)"
        />
        <defs>
          <linearGradient id="sector-wave-1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#abb69f" />
            <stop offset="100%" stopColor="#e3c9b8" />
          </linearGradient>
          <linearGradient id="sector-wave-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1c3f40" />
            <stop offset="100%" stopColor="#7fc49c" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Where We Apply Intelligence">
          Two sectors. One intelligence core.
        </SectionHeading>

        <SectorPanelsCarousel />
      </div>
    </section>
  );
}

export function CompanyStatement() {
  const statementBoxRef = useRef<HTMLQuoteElement | null>(null);
  const [typingStarted, setTypingStarted] = useState(false);
  const [typedLength, setTypedLength] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const resetTyping = useCallback(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTypingStarted(false);
    setTypedLength(0);
  }, []);

  const startTyping = useCallback(() => {
    setTypingStarted(true);
  }, []);

  useEffect(() => {
    const box = statementBoxRef.current;
    if (!box) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTyping();
        } else if (entry.boundingClientRect.top > 0) {
          resetTyping();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(box);

    return () => observer.disconnect();
  }, [startTyping, resetTyping]);

  useEffect(() => {
    if (!typingStarted) return;

    const text = home.statement;
    let current = 0;

    intervalRef.current = window.setInterval(() => {
      current += 3;
      if (current >= text.length) {
        current = text.length;
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setTypedLength(current);
    }, 28);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [typingStarted]);

  const displayText = typingStarted ? home.statement.slice(0, typedLength) : "";
  const showCursor = !typingStarted || typedLength < home.statement.length;

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 75% 65% at 50% 45%, rgba(227,201,184,0.44), transparent 52%),
            radial-gradient(ellipse 60% 50% at 15% 30%, rgba(171,182,159,0.32), transparent 48%),
            radial-gradient(ellipse 55% 45% at 85% 65%, rgba(28,63,64,0.20), transparent 45%),
            radial-gradient(ellipse 40% 35% at 60% 80%, rgba(127,198,178,0.18), transparent 42%)
          `,
        }}
        aria-hidden
      />
      {/* Static wave pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        aria-hidden
        preserveAspectRatio="none"
        viewBox="0 0 1440 500"
        fill="none"
      >
        <path
          d="M0 150c360 70 720-30 1080 40s240 60 360 20v290H0z"
          fill="url(#stmt-wave-1)"
        />
        <path
          d="M0 280c280-40 560 50 840 10s400-30 600 20v190H0z"
          fill="url(#stmt-wave-2)"
        />
        <defs>
          <linearGradient id="stmt-wave-1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e3c9b8" />
            <stop offset="50%" stopColor="#f0c6aa" />
            <stop offset="100%" stopColor="#abb69f" />
          </linearGradient>
          <linearGradient id="stmt-wave-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7fc49c" />
            <stop offset="100%" stopColor="#1c3f40" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <blockquote
          ref={statementBoxRef}
          className="mx-auto max-w-4xl rounded-3xl border border-white/70 bg-white/50 px-8 py-10 shadow-[0_4px_24px_-4px_rgba(28,63,64,0.08),0_0_0_1px_rgba(255,255,255,0.6)_inset] backdrop-blur-2xl backdrop-saturate-150 lg:px-12 lg:py-12"
        >
          <div className="mb-8 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent-muted">
            <span className="h-2 w-2 rounded-full bg-olive/60" />
            Core Statement
          </div>
          <div className="relative">
            <p className="font-serif text-2xl leading-relaxed text-transparent lg:text-3xl" aria-hidden>
              {home.statement}
            </p>
            <p className="absolute inset-0 font-serif text-2xl leading-relaxed text-text-primary lg:text-3xl">
              {displayText}
              {showCursor ? (
                <span className="ml-0.5 inline-block h-[1.05em] w-[0.08em] translate-y-[0.12em] animate-pulse bg-emerald/70 align-baseline" />
              ) : null}
            </p>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
