import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-band-neutral section-shell">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-muted">404</p>
        <h1 className="mt-4 font-serif text-5xl text-text-primary lg:text-6xl">Page not found</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-secondary lg:text-lg">
          The page you are looking for is unavailable or has moved. Continue browsing from the home
          page.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-accent-core px-6 py-3 text-sm font-medium text-off-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
