import { clsx } from "clsx";

type PillBadgeProps = {
  children: React.ReactNode;
  variant?: "sage" | "warm" | "mist" | "dark";
  className?: string;
};

export function PillBadge({ children, variant = "sage", className }: PillBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em]",
        variant === "sage" && "bg-olive/35 text-emerald",
        variant === "warm" && "bg-persian-orange/45 text-emerald",
        variant === "mist" && "bg-seafoam/25 text-emerald",
        variant === "dark" && "bg-off-white/12 text-off-white/85",
        className,
      )}
    >
      {children}
    </span>
  );
}
