import Link from "next/link";
import { navLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-base">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-lg text-text-primary">{site.name}</p>
          <p className="mt-2 text-sm text-text-secondary">{site.legalName}</p>
          <p className="text-sm text-text-secondary">{site.location}</p>
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
            <li>
              <Link href="/what-we-do#life-sciences" className="hover:text-accent-ls">
                Life Sciences
              </Link>
            </li>
            <li>
              <Link href="/what-we-do#financial-markets" className="hover:text-accent-pe">
                Financial Markets
              </Link>
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
