type PrincipleCardProps = {
  description: string;
  index?: number;
  title: string;
};

export function PrincipleCard({ description, index, title }: PrincipleCardProps) {
  return (
    <article className="border border-border bg-card p-5 sm:p-6">
      {typeof index === "number" ? (
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand-accent">Step {index + 1}</p>
      ) : null}
      <h3 className="mt-3 font-display text-xl text-foreground sm:text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </article>
  );
}
