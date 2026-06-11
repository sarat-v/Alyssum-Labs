export function HomePageBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 min-h-full w-full"
      aria-hidden
      style={{
        background: [
          "radial-gradient(ellipse 95% 60% at 68% 6%, rgba(171, 182, 159, 0.42), rgba(171, 182, 159, 0) 58%)",
          "radial-gradient(ellipse 85% 55% at 92% 18%, rgba(227, 201, 184, 0.45), rgba(227, 201, 184, 0) 52%)",
          "radial-gradient(ellipse 80% 50% at 18% 32%, rgba(171, 182, 159, 0.16), rgba(171, 182, 159, 0) 55%)",
          "radial-gradient(ellipse 90% 55% at 72% 48%, rgba(227, 201, 184, 0.3), rgba(227, 201, 184, 0) 54%)",
          "radial-gradient(ellipse 75% 48% at 28% 62%, rgba(28, 63, 64, 0.05), rgba(28, 63, 64, 0) 58%)",
          "radial-gradient(ellipse 85% 52% at 62% 78%, rgba(171, 182, 159, 0.2), rgba(171, 182, 159, 0) 56%)",
          "radial-gradient(ellipse 70% 45% at 88% 92%, rgba(227, 201, 184, 0.32), rgba(227, 201, 184, 0) 50%)",
          "linear-gradient(180deg, #f7f4ef 0%, #f5f1ea 50%, #f7f4ef 100%)",
        ].join(", "),
      }}
    />
  );
}
