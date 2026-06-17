import Image from "next/image";
import Link from "next/link";
import { ManageCookiesButton } from "@/components/layout/ManageCookiesButton";
import { home, navLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-base">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo-wordmark.png"
              alt={site.name}
              width={1013}
              height={288}
              className="h-8 w-auto"
            />
          </Link>
          <address className="mt-4 not-italic text-sm leading-snug text-text-secondary">
            <span className="block">{site.legalName}</span>
            {site.registeredOfficeAddress.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            {site.uen ? <span className="block">UEN: {site.uen}</span> : null}
          </address>
          {site.linkedinCompanyUrl ? (
            <p className="mt-3">
              <Link
                href={site.linkedinCompanyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Company LinkedIn
              </Link>
            </p>
          ) : null}
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            Sectors
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            {home.sectors.map((sector) => (
              <li key={sector.id}>
                <Link
                  href={sector.href}
                  className={
                    sector.accent === "ls" ? "hover:text-accent-ls" : "hover:text-accent-pe"
                  }
                >
                  {sector.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            Legal
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-use"
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/cookie-policy"
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <ManageCookiesButton />
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border-subtle px-6 py-6 lg:px-8">
        <p className="mx-auto max-w-7xl font-mono text-xs text-text-secondary">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
