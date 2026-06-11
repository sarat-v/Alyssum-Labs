import { clsx } from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3";
  size?: "md" | "lg";
};

export function SectionHeading({
  eyebrow,
  children,
  className,
  as: Tag = "h2",
  size = "lg",
}: SectionHeadingProps) {
  return (
    <div className={clsx("section-reveal", className)}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-muted">
          {eyebrow}
        </p>
      )}
      <Tag
        className={clsx(
          "font-serif tracking-tight text-text-primary",
          eyebrow ? "mt-3" : "",
          size === "lg" ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl",
        )}
      >
        {children}
      </Tag>
    </div>
  );
}
