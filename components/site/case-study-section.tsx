import { cn } from "@/lib/utils";

type CaseStudySectionProps = {
  items: string[];
  title: string;
  tone?: "default" | "highlight";
};

export function CaseStudySection({
  items,
  title,
  tone = "default",
}: CaseStudySectionProps) {
  return (
    <article
      className={cn(
        "rounded-[1.5rem] border p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]",
        tone === "highlight"
          ? "border-foreground/10 bg-foreground text-background"
          : "border-border bg-card text-foreground",
      )}
    >
      <h3 className="font-display text-xl sm:text-2xl">{title}</h3>
      <ul
        className={cn(
          "mt-4 space-y-3 text-sm leading-6",
          tone === "highlight" ? "text-background/80" : "text-muted-foreground",
        )}
      >
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className={tone === "highlight" ? "text-background" : "text-brand-accent"}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
