import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const LEGAL_EFFECTIVE_DATE = "16 June 2026";

export function LegalDocument({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section-band-neutral section-shell">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading eyebrow="Legal">{title}</SectionHeading>
        {description ? (
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-secondary lg:text-base">
            {description}
          </p>
        ) : null}
        <p className="mt-4 text-sm text-text-secondary">
          Effective date: {LEGAL_EFFECTIVE_DATE}
          <br />
          Last updated: {LEGAL_EFFECTIVE_DATE}
        </p>
        <div className="legal-content mt-10 space-y-8 text-sm leading-relaxed text-text-secondary lg:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-text-primary">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function LegalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-accent-core underline-offset-4 hover:underline">
      {children}
    </Link>
  );
}

export function LegalEmail({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className="text-accent-core underline-offset-4 hover:underline">
      {email}
    </a>
  );
}
