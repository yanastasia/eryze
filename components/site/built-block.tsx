import type { ProjectBuiltBlock } from "@/types/project";

type BuiltBlockProps = {
  block: ProjectBuiltBlock;
};

export function BuiltBlock({ block }: BuiltBlockProps) {
  return (
    <article className="border border-border bg-card p-6">
      <h3 className="font-display text-xl text-foreground sm:text-2xl">{block.title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
        {block.points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="text-brand-accent">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
