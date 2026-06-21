"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, site } from "@/lib/content";
import { clsx } from "clsx";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingDesktopHref, setPendingDesktopHref] = useState<string | null>(null);
  const desktopNavTimerRef = useRef<number | null>(null);
  const contactActive = isNavActive(pathname, "/contact");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setPendingDesktopHref(null);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (desktopNavTimerRef.current !== null) {
        window.clearTimeout(desktopNavTimerRef.current);
      }
    };
  }, []);

  function handleDesktopNavClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    setPendingDesktopHref(href);

    if (desktopNavTimerRef.current !== null) {
      window.clearTimeout(desktopNavTimerRef.current);
    }

    desktopNavTimerRef.current = window.setTimeout(() => {
      router.push(href);
      desktopNavTimerRef.current = null;
    }, 120);
  }

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/60 backdrop-blur-2xl backdrop-saturate-150"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:h-24 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-wordmark.png"
            alt={site.name}
            width={1013}
            height={288}
            className="h-9 w-auto lg:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/65 bg-off-white/58 p-1.5 shadow-[0_14px_34px_-24px_rgba(28,63,64,0.52)] backdrop-blur-xl lg:flex">
          {navLinks.map((link) => {
            const active =
              pendingDesktopHref === link.href ||
              (pendingDesktopHref === null && isNavActive(pathname, link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseDown={() => setPendingDesktopHref(link.href)}
                onClick={(event) => handleDesktopNavClick(event, link.href)}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "group relative rounded-full border border-transparent px-4 py-2.5 text-[0.94rem] tracking-[0.01em] transition-all duration-300 xl:px-5",
                  active
                    ? "font-medium text-text-primary"
                    : "text-text-secondary hover:border-emerald/20 hover:bg-off-white/40 hover:text-text-primary hover:backdrop-blur-lg",
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="header-nav-indicator"
                    className="absolute inset-0 rounded-full bg-emerald/10 ring-1 ring-emerald/18 backdrop-blur-md"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            aria-current={contactActive ? "page" : undefined}
            className={clsx(
              "relative inline-flex items-center rounded-full border px-6 py-3 text-[0.96rem] font-medium transition-all duration-300 hover:scale-[1.02]",
              contactActive
                ? "border-white/32 bg-emerald text-off-white ring-2 ring-emerald/28 ring-offset-2 ring-offset-off-white"
                : "border-emerald bg-emerald text-off-white shadow-[0_12px_28px_-18px_rgba(28,62,64,0.75)] hover:border-white/32 hover:brightness-[1.03]",
            )}
          >
            Work With Us
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-text-primary" />
            <span className="block h-0.5 w-5 bg-text-primary" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border-subtle bg-off-white/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-5">
              {navLinks.map((link, i) => {
                const active = isNavActive(pathname, link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={clsx(
                        "relative flex items-center rounded-xl px-3 py-3 text-base transition-colors",
                        active
                          ? "bg-emerald/8 font-medium text-text-primary"
                          : "text-text-secondary hover:bg-emerald/4 hover:text-text-primary",
                      )}
                    >
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute bottom-3 left-0 top-3 w-0.5 rounded-full bg-emerald"
                        />
                      ) : null}
                      <span className={clsx(active && "pl-2")}>{link.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
              <Link
                href="/contact"
                aria-current={contactActive ? "page" : undefined}
                className={clsx(
                  "mt-3 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors",
                  contactActive
                    ? "bg-emerald text-off-white ring-2 ring-emerald/20"
                    : "bg-emerald text-off-white hover:brightness-[1.03]",
                )}
              >
                Work With Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
