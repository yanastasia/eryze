import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";
import { TagBadge } from "@/components/site/tag-badge";
import { StatusBadge } from "@/components/site/status-badge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card/95 shadow-[0_16px_38px_rgba(7,17,33,0.08)] transition-all duration-300 focus-within:-translate-y-1 focus-within:border-brand-accent/60 focus-within:shadow-[0_24px_54px_rgba(122,63,255,0.12)] hover:-translate-y-1 hover:border-brand-accent/45 hover:shadow-[0_24px_54px_rgba(122,63,255,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/60">
        <div className="absolute inset-0 bg-[rgba(5,11,22,0.14)] dark:bg-[rgba(5,11,22,0.2)]" />
        <span
          aria-hidden
          className="absolute left-5 top-5 h-16 w-16 rounded-full bg-brand-accent/12 blur-2xl transition-opacity duration-300 group-hover:opacity-90 sm:left-6 sm:top-6"
        />
        <Image
          alt={`${project.title} preview`}
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          src={`/work/${project.slug}.svg`}
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 pb-5 sm:px-6">
          <span className="inline-flex rounded-full border border-white/15 bg-[rgba(5,11,22,0.62)] px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur">
            Selected work
          </span>
          <span className="h-10 w-10 rounded-full border border-white/12 bg-[rgba(5,11,22,0.6)] text-center text-lg leading-10 text-white/85 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.04]">
            ↗
          </span>
        </div>
      </div>

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
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center text-sm font-semibold text-foreground transition-colors hover:text-brand-accent"
            >
              View case study
              <span className="ml-2 text-base">→</span>
            </Link>
            {project.liveUrl ? (
              <a
                className="inline-flex items-center text-sm font-semibold text-muted-foreground transition-colors hover:text-brand-accent"
                href={project.liveUrl}
                rel="noreferrer"
                target="_blank"
              >
                Visit live site
                <span className="ml-2 text-base">↗</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
