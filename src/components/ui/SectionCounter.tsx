import { clsx } from "clsx";

type SectionCounterProps = {
  index: number;
  total?: number;
  tone?: "default" | "light";
  className?: string;
};

export function SectionCounter({
  index,
  total,
  tone = "default",
  className,
}: SectionCounterProps) {
  const label = total
    ? `${String(index).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
    : String(index).padStart(2, "0");

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-[0.08em]",
        tone === "light"
          ? "border-off-white/25 text-off-white/70"
          : "border-border-subtle text-accent-muted",
        className,
      )}
    >
      {label}
    </span>
  );
}
