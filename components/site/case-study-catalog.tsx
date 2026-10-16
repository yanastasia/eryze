"use client";

import { useMemo, useState } from "react";

import { CaseStudyCard } from "@/components/site/case-study-card";
import type { CaseStudy, PortfolioCategory } from "@/types/portfolio";

type CaseStudyCatalogProps = {
  basePath?: string;
  categories: readonly PortfolioCategory[];
  studies: CaseStudy[];
};

type FilterValue = "All" | PortfolioCategory;

export function CaseStudyCatalog({
  basePath = "/portfolio/case-studies",
  categories,
  studies,
}: CaseStudyCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const filteredStudies = useMemo(() => {
    const base = [...studies].sort((a, b) => {
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }

      return a.order - b.order;
    });

    if (activeFilter === "All") {
      return base;
    }

    return base.filter((study) => study.categories.includes(activeFilter));
  }, [activeFilter, studies]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {(["All", ...categories] as const).map((filter) => {
          const active = filter === activeFilter;

          return (
            <button
              key={filter}
              className={
                active
                  ? "inline-flex min-h-10 items-center rounded-full border border-brand-accent/50 bg-brand-accent/12 px-4 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-foreground"
                  : "inline-flex min-h-10 items-center rounded-full border border-border bg-transparent px-4 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-brand-accent/40 hover:text-foreground"
              }
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="space-y-6">
        {filteredStudies.map((study) => (
          <CaseStudyCard key={study.slug} basePath={basePath} study={study} />
        ))}
      </div>
    </div>
  );
}
