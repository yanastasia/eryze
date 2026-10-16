"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { getProjectPath } from "@/data/projects";
import type { Project } from "@/types/project";

type PrismProjectDeckProps = {
  projects: Project[];
};

export function PrismProjectDeck({ projects }: PrismProjectDeckProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <div>
      <div className="grid min-h-[34rem] overflow-hidden rounded-[0.35rem] border border-[#0b0a15]/10 bg-[#e8e2ef] shadow-[0_28px_75px_-55px_rgba(38,17,56,0.48)] lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)]">
        <Link className="eryze-prism-art group relative min-h-[22rem] overflow-hidden lg:min-h-[34rem]" href={getProjectPath(activeProject.slug)}>
          <Image
            alt={`${activeProject.title} project preview`}
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 68vw"
            src={`/work/${activeProject.slug}.svg`}
          />
        </Link>

        <div className="flex min-h-[20rem] flex-col justify-between p-7 text-[#0b0a15] sm:p-10 lg:p-12">
          <div className="flex justify-between gap-6 text-[0.64rem] font-medium uppercase tracking-[0.18em]">
            <span>{activeProject.category}</span>
            <span>0{activeIndex + 1} / 0{projects.length}</span>
          </div>
          <div>
            <h3 className="font-display text-[clamp(3rem,4.6vw,5rem)] font-normal leading-[0.92] tracking-[-0.025em]">{activeProject.title}</h3>
            <p className="mt-5 max-w-sm font-serif text-xl leading-7 text-[#59515f]">{activeProject.tagline}</p>
            <Link className="mt-8 inline-flex items-center gap-4 border-b border-[#0b0a15]/25 pb-3 text-xs font-medium uppercase tracking-[0.14em] transition-colors hover:text-[#7b2ff7]" href={getProjectPath(activeProject.slug)}>
              View project <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-6">
        <div className="flex gap-1.5" aria-label="Choose project">
          {projects.map((project, index) => (
            <button
              aria-label={`Show ${project.title}`}
              className={index === activeIndex ? "h-1 w-10 bg-[#7b2ff7]" : "h-1 w-10 bg-[#d0c8db] transition-colors hover:bg-[#9d5bff]"}
              key={project.slug}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
        <div className="flex gap-2 text-[#0b0a15]">
          <button aria-label="Previous project" className="grid size-11 place-items-center rounded-full border border-[#0b0a15]/20 transition-colors hover:bg-[#0b0a15] hover:text-white" onClick={() => move(-1)} type="button">←</button>
          <button aria-label="Next project" className="grid size-11 place-items-center rounded-full border border-[#0b0a15]/20 transition-colors hover:bg-[#0b0a15] hover:text-white" onClick={() => move(1)} type="button">→</button>
        </div>
      </div>
    </div>
  );
}
