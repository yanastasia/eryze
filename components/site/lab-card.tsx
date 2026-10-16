import { HoverSignalLink } from "@/components/site/eryze-motion";
import { TagBadge } from "@/components/site/tag-badge";
import type { Lab } from "@/types/portfolio";

type LabCardProps = {
  basePath?: string;
  lab: Lab;
};

export function LabCard({ basePath = "/portfolio/labs", lab }: LabCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%),rgba(8,15,28,0.88)] px-5 py-6 sm:px-6 sm:py-7">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">{lab.category}</p>
          <h3 className="mt-4 text-balance font-serif text-[clamp(1.8rem,2.5vw,2.8rem)] leading-[0.98] tracking-[-0.04em] text-foreground">
            {lab.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-foreground/88">{lab.tagline}</p>
        </div>

        <div className="border-t border-border/55 pt-6 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
          <p className="text-sm leading-7 text-muted-foreground">{lab.summary}</p>
          <div className="mt-6">
            <TagBadge tag={lab.category} />
          </div>
          <div className="mt-8">
            <HoverSignalLink href={`${basePath}/${lab.slug}`} intensity={0.48} opacity={0.68} speed={1}>
              Open lab
            </HoverSignalLink>
          </div>
        </div>
      </div>
    </article>
  );
}
