export function HomePageBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 min-h-full w-full"
      aria-hidden
      style={{
        background: [
          "radial-gradient(ellipse 90% 55% at 72% 8%, rgba(171, 182, 159, 0.28), rgba(171, 182, 159, 0) 58%)",
          "radial-gradient(ellipse 80% 50% at 18% 22%, rgba(227, 201, 184, 0.22), rgba(227, 201, 184, 0) 55%)",
          "radial-gradient(ellipse 85% 48% at 55% 55%, rgba(171, 182, 159, 0.1), rgba(171, 182, 159, 0) 54%)",
          "radial-gradient(ellipse 75% 42% at 82% 88%, rgba(227, 201, 184, 0.2), rgba(227, 201, 184, 0) 50%)",
          "linear-gradient(180deg, #f7f4ef 0%, #f6f2ec 45%, #f7f4ef 100%)",
        ].join(", "),
      }}
    />
  );
}
