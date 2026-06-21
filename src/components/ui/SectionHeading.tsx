import { clsx } from "clsx";
import { PillBadge } from "@/components/ui/PillBadge";
import { SectionCounter } from "@/components/ui/SectionCounter";

type SectionHeadingProps = {
  eyebrow?: string;
  badge?: string;
  badgeVariant?: "sage" | "warm" | "mist" | "dark";
  counter?: number;
  counterTotal?: number;
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3";
  size?: "md" | "lg";
  accent?: boolean;
  tone?: "default" | "light";
};

export function SectionHeading({
  eyebrow,
  badge,
  badgeVariant = "sage",
  counter,
  counterTotal,
  children,
  className,
  as: Tag = "h2",
  size = "lg",
  accent = true,
  tone = "default",
}: SectionHeadingProps) {
  const hasMeta = badge || counter !== undefined || eyebrow;

  return (
    <div className={clsx("section-reveal max-w-3xl", className)}>
      {hasMeta && (
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {badge && (
            <PillBadge variant={tone === "light" ? "dark" : badgeVariant}>
              {badge}
            </PillBadge>
          )}
          {counter !== undefined && (
            <SectionCounter index={counter} total={counterTotal} tone={tone} />
          )}
          {eyebrow && !badge && (
            <>
              {accent && (
                <div
                  className={clsx(tone === "light" ? "heading-accent-light" : "heading-accent")}
                  aria-hidden
                />
              )}
              <p
                className={clsx(
                  "label-mono",
                  tone === "light" ? "text-off-white/70" : "text-accent-muted",
                )}
              >
                {eyebrow}
              </p>
            </>
          )}
        </div>
      )}
      <Tag
        className={clsx(
          "font-serif heading-architectural",
          tone === "light" ? "text-off-white" : "text-text-primary",
          hasMeta ? "mt-1" : "",
          size === "lg" ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl",
        )}
      >
        {children}
      </Tag>
    </div>
  );
}
