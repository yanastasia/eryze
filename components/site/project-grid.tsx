import Link from "next/link";

import { ProjectCard } from "@/components/site/project-card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectGridProps = {
  activeTag?: string;
  availableTags?: string[];
  basePath?: string;
  projects: Project[];
  showFilters?: boolean;
};

export function ProjectGrid({
  activeTag,
  availableTags = [],
  basePath = "/work",
  projects,
  showFilters = false,
}: ProjectGridProps) {
  return (
    <div className="space-y-6">
      {showFilters ? (
        <nav
          aria-label="Project filters"
          className="flex gap-3 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible"
        >
          <Link
            className={cn(
              "inline-flex shrink-0 rounded-full border px-4 py-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.16em] transition-colors",
              !activeTag
                ? "border-brand-accent/55 bg-brand-accent/12 text-foreground"
                : "border-border bg-transparent text-muted-foreground hover:border-brand-accent/40 hover:text-foreground",
            )}
            href={basePath}
          >
            All work
          </Link>
          {availableTags.map((tag) => {
            const href = `${basePath}?tag=${encodeURIComponent(tag)}`;
            const isActive = activeTag === tag;

            return (
              <Link
                key={tag}
                className={cn(
                  "inline-flex shrink-0 rounded-full border px-4 py-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                  isActive
                    ? "border-brand-accent/55 bg-brand-accent/12 text-foreground"
                    : "border-border bg-transparent text-muted-foreground hover:border-brand-accent/40 hover:text-foreground",
                )}
                href={href}
              >
                {tag}
              </Link>
            );
          })}
        </nav>
      ) : null}

      {projects.length ? (
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      ) : (
        <div className="rounded-[1.75rem] border border-dashed border-border bg-card/80 p-8 text-sm text-muted-foreground">
          No projects match that filter right now.
        </div>
      )}
    </div>
  );
}
