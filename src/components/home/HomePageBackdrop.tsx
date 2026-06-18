export function HomePageBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 min-h-full w-full"
      aria-hidden
      style={{
        background: [
          /* Keep top area clean so hero fade can hand off smoothly */
          "radial-gradient(ellipse 78% 34% at 62% 52%, rgba(171,182,159,0.16), transparent 56%)",
          "radial-gradient(ellipse 56% 24% at 20% 58%, rgba(171,182,159,0.10), transparent 52%)",
          /* Warmth lower on page */
          "radial-gradient(ellipse 60% 18% at 50% 66%, rgba(227,201,184,0.14), transparent 46%)",
          /* Off-white base under the hero handoff */
          "linear-gradient(180deg, var(--off-white) 0%, var(--off-white) 100%)",
        ].join(", "),
      }}
    />
  );
}
