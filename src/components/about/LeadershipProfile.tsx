import Image from "next/image";
import Link from "next/link";

export type Leader = {
  name: string;
  role: string;
  bio: string[];
  portrait: string;
  portraitWidth: number;
  portraitHeight: number;
  linkedinUrl?: string;
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function LeadershipProfile({
  leader,
  priority = false,
}: {
  leader: Leader;
  priority?: boolean;
}) {
  const isSvg = leader.portrait.endsWith(".svg");

  return (
    <div>
      <div className="section-reveal">
        <div className="heading-accent mb-4" aria-hidden />
        <p className="label-mono text-accent-muted">{leader.role}</p>
        <div className="mt-3 flex flex-wrap items-center gap-4">
          <h2 className="font-serif text-5xl text-text-primary heading-architectural lg:text-6xl display-tight">
            {leader.name}
          </h2>
          {leader.linkedinUrl ? (
            <Link
              href={leader.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${leader.name} on LinkedIn`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-text-secondary transition-colors hover:border-emerald/35 hover:text-accent-core"
            >
              <LinkedInIcon className="h-5 w-5" />
            </Link>
          ) : null}
        </div>
      </div>

      <div className="section-reveal mt-10 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-14 lg:mt-12 lg:gap-16">
        <figure className="mx-auto w-64 shrink-0 overflow-hidden rounded-2xl ring-1 ring-olive/25 sm:mx-0 sm:w-72 lg:w-[300px]">
          <div className="relative aspect-4/5 w-full">
            <Image
              src={leader.portrait}
              alt={leader.name}
              fill
              className="object-cover object-[center_18%]"
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 300px"
              priority={priority}
              unoptimized={isSvg}
            />
          </div>
        </figure>
        <div className="min-w-0 flex-1 space-y-5 sm:pt-2 accent-border-left-olive">
          {leader.bio.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-base leading-relaxed text-text-secondary lg:text-[1.0625rem] lg:leading-[1.8]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
