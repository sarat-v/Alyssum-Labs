"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { home } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectorPanelsCarousel } from "@/components/home/SectorPanelsCarousel";

export function SectorPanels() {
  return (
    <section className="grain-overlay relative overflow-hidden pb-24 pt-20 lg:pb-32 lg:pt-28">
      <div className="relative z-2 mx-auto max-w-7xl px-6 lg:px-8">
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
    <section className="relative overflow-hidden bg-emerald py-20 lg:py-28">
      {/* Warm accent lights on the dark emerald surface — NOT flat green */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 45% at 90% 10%, rgba(246,185,149,0.16), transparent 48%),
            radial-gradient(ellipse 45% 40% at 5% 85%, rgba(127,198,178,0.14), transparent 45%),
            radial-gradient(ellipse 55% 40% at 50% 50%, rgba(171,182,159,0.08), transparent 42%),
            radial-gradient(ellipse 35% 30% at 20% 15%, rgba(227,201,184,0.12), transparent 40%)
          `,
        }}
        aria-hidden
      />

      <div className="relative z-2 mx-auto max-w-7xl px-6 lg:px-8">
        <blockquote
          ref={statementBoxRef}
          className="relative mx-auto max-w-4xl"
        >
          {/* Large decorative quote mark — editorial magazine feel */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-4 -top-16 select-none font-serif text-[8rem] leading-none text-olive/10 lg:-left-14 lg:-top-20 lg:text-[12rem]"
          >
            &ldquo;
          </span>

          <div className="mb-10 flex items-center gap-3">
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(171,182,159,0.40), transparent)" }} />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-olive">
              Core Statement
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(270deg, rgba(171,182,159,0.40), transparent)" }} />
          </div>

          <div className="relative">
            <p className="font-serif text-2xl leading-relaxed text-transparent lg:text-3xl lg:leading-relaxed" aria-hidden>
              {home.statement}
            </p>
            <p className="absolute inset-0 font-serif text-2xl leading-relaxed text-persian-orange lg:text-3xl lg:leading-relaxed">
              {displayText}
              {showCursor ? (
                <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.12em] animate-pulse bg-olive/60 align-baseline" />
              ) : null}
            </p>
          </div>

          {/* Closing quote mark */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-4 select-none font-serif text-[8rem] leading-none text-olive/10 lg:-bottom-24 lg:-right-14 lg:text-[12rem]"
          >
            &rdquo;
          </span>
        </blockquote>
      </div>
    </section>
  );
}
