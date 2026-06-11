import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { contact, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with Alyssum Labs. Enquire about technology intelligence for life sciences and financial markets programmes.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in Touch" title={contact.headline} />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-x-16 lg:gap-y-12 xl:gap-x-20">
          <div className="max-w-xl">
            <div className="space-y-6 text-base leading-relaxed text-text-secondary lg:text-lg">
              {contact.body.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-border-subtle bg-bg-surface/50 p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-muted">
                Office
              </p>
              <p className="mt-4 font-serif text-xl text-text-primary">
                {site.legalName}
              </p>
              <p className="mt-1 text-text-secondary">{site.location}</p>
              <p className="mt-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-accent-core transition-opacity hover:opacity-80"
                >
                  {contact.email}
                </a>
              </p>
            </div>
          </div>

          <div className="lg:max-w-lg lg:justify-self-end lg:w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
