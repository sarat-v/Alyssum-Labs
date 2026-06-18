"use client";

import dynamic from "next/dynamic";

const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.MeshGradient),
  { ssr: false },
);

export function HeroInterferenceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-off-white" aria-hidden>
      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={["#f7f4ef", "#b5d5c8", "#f0c6aa", "#91cfb6", "#78b8ab", "#f6b995"]}
        speed={0.62}
      />
      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-78"
        colors={["#f7f4ef", "#1c3f40", "#3d9f8b", "#7fc49c", "#e3c9b8", "#e7a97c"]}
        speed={0.52}
      />
      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-38 mix-blend-multiply"
        colors={["#f7f4ef", "#1c3f40", "#7cbfab", "#dfb89d"]}
        speed={0.68}
      />

      <div className="hero-vibrance-right absolute right-[-10%] top-[-4%] h-[98%] w-[68%] rounded-full bg-[radial-gradient(circle,rgba(122,189,168,0.56)_0%,rgba(171,182,159,0.34)_32%,rgba(227,201,184,0.22)_56%,rgba(227,201,184,0)_80%)] blur-[62px]" />
      <div className="hero-vibrance-right-soft absolute right-[-2%] top-[28%] h-[62%] w-[48%] rounded-full bg-[radial-gradient(circle,rgba(241,172,134,0.42)_0%,rgba(125,192,164,0.26)_40%,rgba(171,182,159,0)_78%)] blur-[84px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,244,239,0.95)_0%,rgba(247,244,239,0.88)_30%,rgba(247,244,239,0.46)_54%,rgba(247,244,239,0.12)_73%,rgba(247,244,239,0)_100%)] lg:bg-[linear-gradient(to_right,rgba(247,244,239,0.97)_0%,rgba(247,244,239,0.86)_23%,rgba(247,244,239,0.44)_41%,rgba(247,244,239,0.12)_58%,rgba(247,244,239,0)_82%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_bottom,rgba(247,244,239,0)_0%,rgba(247,244,239,0.18)_42%,rgba(247,244,239,0.62)_72%,var(--off-white)_100%)] lg:h-72" />

      <style jsx>{`
        .hero-vibrance-right {
          animation: hero-vibrance-shift 6.8s ease-in-out infinite alternate;
        }

        .hero-vibrance-right-soft {
          animation: hero-vibrance-pulse 5.2s ease-in-out infinite alternate;
        }

        @keyframes hero-vibrance-shift {
          0% {
            transform: translate3d(-22px, 16px, 0) scale(0.96);
            opacity: 0.62;
          }
          100% {
            transform: translate3d(34px, -28px, 0) scale(1.14);
            opacity: 0.98;
          }
        }

        @keyframes hero-vibrance-pulse {
          0% {
            transform: translate3d(-16px, 10px, 0) scale(0.9);
            opacity: 0.34;
          }
          100% {
            transform: translate3d(28px, -18px, 0) scale(1.18);
            opacity: 0.82;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-vibrance-right,
          .hero-vibrance-right-soft {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
