type PrincipleCardProps = {
  description: string;
  index?: number;
  title: string;
};

export function PrincipleCard({ description, index, title }: PrincipleCardProps) {
  return (
    <article className="eryze-angle-frame eryze-panel eryze-panel-utility group rounded-[1.5rem] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/45 hover:shadow-[0_22px_46px_rgba(109,88,255,0.14)] sm:p-6">
      {typeof index === "number" ? (
        <p className="eryze-kicker">Step {index + 1}</p>
      ) : null}
      <h3 className="mt-3 font-display text-xl text-foreground sm:text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/88">
        {description}
      </p>
    </article>
  );
}
