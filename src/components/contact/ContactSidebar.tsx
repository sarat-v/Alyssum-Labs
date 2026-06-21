import Link from "next/link";
import { contact, site } from "@/lib/content";

export function ContactSidebar() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&z=16&output=embed`;

  return (
    <div className="flex h-full w-full min-w-0 flex-col">
      <blockquote className="font-serif text-2xl leading-snug tracking-tight text-text-primary lg:text-[1.75rem] lg:leading-[1.35]">
        {contact.body[0]}
      </blockquote>
      <p className="mt-5 text-base leading-relaxed text-text-secondary lg:text-lg lg:leading-[1.75]">
        {contact.body[1]}
      </p>

      <div className="surface-card-elevated relative mt-8 rounded-2xl border-t-4 border-t-olive/80 p-6 lg:p-7">
        <p className="relative z-1 font-mono text-xs uppercase tracking-[0.2em] text-accent-muted">
          Office
        </p>
        <p className="relative z-1 mt-3 font-serif text-xl text-text-primary">
          {site.legalName}
        </p>
        <address className="relative z-1 mt-2 not-italic text-sm leading-relaxed text-text-secondary">
          {site.registeredOfficeAddress.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <p className="relative z-1 mt-4">
          <Link
            href={`mailto:${contact.email}`}
            className="font-medium text-accent-core transition-opacity hover:opacity-80"
          >
            {contact.email}
          </Link>
        </p>
      </div>

      <div className="surface-card-elevated relative mt-5 flex flex-1 flex-col overflow-hidden rounded-2xl lg:mt-6">
        <div className="relative z-1 border-b border-border-subtle/60 px-5 py-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-muted">
            Find us
          </p>
          <p className="mt-1 text-sm text-text-secondary">{site.location}</p>
        </div>
        <iframe
          title="Alyssum Labs office location on Google Maps"
          src={mapSrc}
          className="relative z-1 block min-h-52 w-full flex-1 border-0 grayscale-[0.15] contrast-[1.02] lg:min-h-64"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`}
          target="_blank"
          rel="noreferrer"
          className="relative z-1 block border-t border-border-subtle/60 px-5 py-3 text-sm font-medium text-accent-core transition-opacity hover:opacity-80"
        >
          Open in Google Maps →
        </a>
      </div>
    </div>
  );
}
