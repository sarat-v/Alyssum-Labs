import Image from "next/image";

export type Leader = {
  name: string;
  bio: string[];
  portrait: string;
  portraitWidth: number;
  portraitHeight: number;
};

export function LeadershipProfile({
  leader,
  priority = false,
}: {
  leader: Leader;
  priority?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-12 lg:gap-16">
      <figure className="mx-auto shrink-0 sm:mx-0">
        <Image
          src={leader.portrait}
          alt={`${leader.name}, Alyssum Labs`}
          width={leader.portraitWidth}
          height={leader.portraitHeight}
          className="h-auto w-56 rounded-2xl border border-border-subtle sm:w-64 lg:w-[280px]"
          sizes="(max-width: 640px) 224px, 280px"
          priority={priority}
        />
      </figure>
      <div className="min-w-0 flex-1 text-center sm:text-left">
        <h3 className="font-serif text-3xl text-text-primary lg:text-4xl">
          {leader.name}
        </h3>
        <div className="mt-6 space-y-5">
          {leader.bio.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-base leading-relaxed text-text-secondary lg:text-[1.0625rem] lg:leading-[1.75]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
