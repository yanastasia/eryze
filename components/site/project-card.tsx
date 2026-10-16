import Image from "next/image";
import Link from "next/link";

import { HoverSignalLink } from "@/components/site/eryze-motion";
import { StatusBadge } from "@/components/site/status-badge";
import { TagBadge } from "@/components/site/tag-badge";
import { getProjectPath } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  reverse?: boolean;
};

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  const projectPath = getProjectPath(project.slug);

  return (
    <article className="relative overflow-hidden rounded-[1rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_22%),rgba(18,16,31,0.84)] shadow-[0_18px_50px_-20px_rgba(0,0,0,0.7)]">
      <div className="border-b border-border/40 px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-support">
            Studio project
          </span>
        </div>
      </div>
      <div className="grid gap-8 px-5 py-5 sm:px-6 sm:py-6 xl:grid-cols-[minmax(20rem,0.96fr)_minmax(0,1.04fr)] xl:items-end">
        <Link
          className={cn(
            "group/media relative block min-h-[18rem] overflow-hidden rounded-[0.75rem] border border-border bg-[rgba(8,7,15,0.76)]",
            reverse ? "xl:order-2" : "",
          )}
          href={projectPath}
        >
          <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.02),rgba(5,11,22,0.4))]" />
          <span className="absolute inset-x-6 top-6 h-px bg-white/10" />
          <Image
            alt={`${project.title} preview`}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover/media:scale-[1.03]"
            fill
            sizes="(max-width: 1279px) 100vw, 42vw"
            src={`/work/${project.slug}.svg`}
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-6 pb-6">
            <div className="space-y-2">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/68">
                {project.category}
              </p>
              <p className="max-w-[15rem] text-sm uppercase tracking-[0.18em] text-white/54">
                {project.status}
              </p>
            </div>
            <span className="rounded-full border border-white/12 bg-[rgba(6,16,29,0.68)] px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/84">
              Open
            </span>
          </div>
        </Link>

        <div className={cn("max-w-2xl", reverse ? "xl:order-1" : "")}>
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="h-px w-10 bg-border/50" />
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
              {project.category}
            </p>
          </div>

          <h3 className="mt-5 max-w-[18ch] text-balance font-display text-[clamp(2.6rem,4vw,4.8rem)] font-normal leading-[0.94] tracking-[-0.025em] text-foreground">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-[1.02rem] leading-8 text-foreground/84">{project.tagline}</p>
          <p className="mt-5 max-w-[42rem] text-sm leading-7 text-muted-foreground sm:text-base">
            {project.hero.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <TagBadge key={`${project.slug}-${tag}`} tag={tag} />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <HoverSignalLink href={projectPath} intensity={0.56} opacity={0.72} speed={1}>
              Read case study
            </HoverSignalLink>
            {project.liveUrl ? (
              <HoverSignalLink
                arrow="up-right"
                className="text-muted-foreground hover:text-foreground"
                href={project.liveUrl}
                intensity={0.44}
                opacity={0.58}
                rel="noreferrer"
                speed={1}
                target="_blank"
              >
                Visit live site
              </HoverSignalLink>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
