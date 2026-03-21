import Link from "next/link";

import type { Project } from "@/types/project";
import { TagBadge } from "@/components/site/tag-badge";
import { StatusBadge } from "@/components/site/status-badge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-colors focus-within:border-brand-accent/60 hover:border-brand-accent/40">
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          <p className="text-sm font-medium text-brand-accent">{project.category}</p>
        </div>
        <h3 className="mt-3 font-display text-2xl text-foreground">
          <Link
            href={`/work/${project.slug}`}
            className="rounded-sm focus:outline-none focus-visible:underline"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TagBadge key={`${project.slug}-${tag}`} tag={tag} />
          ))}
        </div>

        <div className="mt-auto pt-5">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center text-sm font-semibold text-foreground transition-colors hover:text-brand-accent"
          >
            View case study
            <span className="ml-2 text-base">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
