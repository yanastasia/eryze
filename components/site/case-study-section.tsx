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
        "overflow-hidden rounded-[1.5rem] border px-5 py-6 sm:px-6 sm:py-7",
        tone === "highlight"
          ? "border-border/60 bg-[linear-gradient(180deg,rgba(136,113,255,0.12),rgba(8,15,28,0.92)_38%)] text-foreground"
          : "border-border/65 bg-[rgba(8,15,28,0.74)] text-foreground",
      )}
    >
      <h3 className="text-balance font-serif text-[clamp(1.4rem,2vw,2rem)] leading-[1] tracking-[-0.04em]">{title}</h3>
      <ul
        className={cn(
          "mt-5 space-y-4 text-sm leading-7 sm:text-base",
          tone === "highlight" ? "text-foreground/88" : "text-muted-foreground",
        )}
      >
        {items.map((item) => (
          <li key={item} className="grid gap-3 md:grid-cols-[auto_1fr]">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">Signal</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
