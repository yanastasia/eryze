import type { ProjectBuiltBlock } from "@/types/project";

type BuiltBlockProps = {
  block: ProjectBuiltBlock;
};

export function BuiltBlock({ block }: BuiltBlockProps) {
  return (
    <article className="overflow-hidden rounded-[1.55rem] border border-border/65 bg-[rgba(8,15,28,0.74)] px-5 py-6 sm:px-6 sm:py-7">
      <h3 className="text-balance font-serif text-[clamp(1.4rem,2vw,2rem)] leading-[1] tracking-[-0.04em] text-foreground">
        {block.title}
      </h3>
      <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
        {block.points.map((point) => (
          <li key={point} className="grid gap-3 md:grid-cols-[auto_1fr]">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">Built</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
