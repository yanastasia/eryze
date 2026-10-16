import { HoverSignalLink } from "@/components/site/eryze-motion";
import { TagBadge } from "@/components/site/tag-badge";
import type { CaseStudy } from "@/types/portfolio";

type CaseStudyCardProps = {
  basePath?: string;
  study: CaseStudy;
};

export function CaseStudyCard({ basePath = "/portfolio/case-studies", study }: CaseStudyCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.55rem] border border-border/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%),rgba(8,15,28,0.92)]">
      <div className="border-b border-border/40 px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-support">
            Case study
          </span>
        </div>
      </div>
      <div className="px-5 py-6 sm:px-6 sm:py-7">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-support">
            {study.format}
          </p>
          <h3 className="mt-5 max-w-[18ch] text-balance font-serif text-[clamp(2rem,2.95vw,3.5rem)] leading-[0.92] tracking-[-0.05em] text-foreground">
            {study.title}
          </h3>
          <p className="mt-4 text-[1.02rem] leading-8 text-foreground/84">{study.tagline}</p>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">{study.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.categories.map((category) => (
              <TagBadge key={`${study.slug}-${category}`} tag={category} />
            ))}
          </div>
        </div>

        <div className="border-t border-border/55 pt-6 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
          <div className="divide-y divide-border/35">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">Challenge</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{study.quickLook.challenge}</p>
            </div>
            <div className="pt-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">Solution</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{study.quickLook.solution}</p>
            </div>
            <div className="pt-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">Impact</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{study.quickLook.impact}</p>
            </div>
          </div>

          <div className="mt-8">
            <HoverSignalLink href={`${basePath}/${study.slug}`} intensity={0.54} opacity={0.72} speed={1}>
              Read case study
            </HoverSignalLink>
          </div>
        </div>
      </div>
      </div>
    </article>
  );
}
