import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { PageHero } from "@/components/ui/PageHero";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with Alyssum Labs. Enquire about technology intelligence for life sciences and private capital programmes.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in Touch" title={contact.headline} accent="dual" />

      <section className="grain-overlay section-band-neutral section-shell relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 48% 36% at 10% 42%, rgba(171,182,159,0.1), transparent 52%),
              radial-gradient(ellipse 42% 32% at 90% 78%, rgba(218,189,169,0.12), transparent 48%)
            `,
          }}
          aria-hidden
        />

        <div className="relative z-2 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <ContactSidebar />
            <div className="flex w-full min-w-0 flex-col">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
