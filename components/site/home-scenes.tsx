import Image from "next/image";
import Link from "next/link";

import type { HomeService } from "@/content/site";
import { Container } from "@/components/site/container";
import { ContentGrid } from "@/components/site/content-grid";
import { MotionReveal } from "@/components/site/motion-reveal";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { getProjectPath } from "@/data/projects";

type SceneHeaderProps = {
  align?: "center" | "start";
  className?: string;
  description?: string;
  eyebrow?: string;
  title: string;
};

export function SceneHeader({
  align = "start",
  className,
  description,
  eyebrow,
  title,
}: SceneHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className,
      )}
    >
      {eyebrow ? (
        <div className={cn("flex items-center gap-4", align === "center" ? "justify-center" : "")}>
          <p className="eryze-kicker">{eyebrow}</p>
        </div>
      ) : null}
      <h2
        className={cn(
          "text-balance font-serif text-4xl leading-[0.94] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl",
          eyebrow ? "mt-4" : "",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function ServiceSequence({ services }: { services: HomeService[] }) {
  return (
    <section id="services" className="relative py-7 sm:py-8 lg:py-10">
      <Container>
        <div className="eryze-angle-frame eryze-scene-shell eryze-scene-muted rounded-[2rem] px-5 py-8 sm:px-8 sm:py-10">
          <MotionReveal variant="line">
            <SceneHeader
              description="Clear service areas for businesses that need better digital structure, not vague agency packaging."
              title="What Eryze helps build"
            />
          </MotionReveal>

          <ContentGrid className="mt-10" variant="three">
            {services.map((service, index) => (
              <MotionReveal key={service.label} delay={index * 0.08}>
                <article className="eryze-angle-frame eryze-panel eryze-panel-feature flex h-full flex-col rounded-[1.6rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/45 hover:shadow-[0_20px_46px_rgba(109,88,255,0.14)]">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-support">{service.label}</p>
                    <span className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-foreground sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/88">
                      {service.details[0]}
                    </p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </ContentGrid>
        </div>
      </Container>
    </section>
  );
}

export function FeaturedProjectSequence({ projects }: { projects: Project[] }) {
  return (
    <section id="work-preview" className="relative py-7 sm:py-8 lg:py-10">
      <Container>
        <div className="eryze-angle-frame eryze-scene-shell eryze-scene-soft rounded-[2rem] px-5 py-8 sm:px-8 sm:py-10">
          <MotionReveal variant="line">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SceneHeader
                description="A selection of digital systems where business needs, structure, and execution had to stay aligned."
                title="Selected work"
              />
              <div className="flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  className="inline-flex items-center text-foreground transition-colors hover:text-brand-accent"
                  href="/studio"
                >
                  Studio projects
                  <span className="ml-2 text-base">→</span>
                </Link>
                <Link
                  className="inline-flex items-center text-muted-foreground transition-colors hover:text-brand-accent"
                  href="/labs"
                >
                  Product labs
                  <span className="ml-2 text-base">→</span>
                </Link>
              </div>
            </div>
          </MotionReveal>

          <div className="mt-12 overflow-hidden rounded-[1.7rem] border border-border/50">
            {projects.map((project, index) => {
              const reverse = index % 2 === 1;
              const projectPath = getProjectPath(project.slug);

              return (
                <MotionReveal key={project.slug} delay={index * 0.08} variant="soft">
                  <article className="border-b border-border/45 bg-background/66 last:border-b-0 odd:bg-background/44 dark:bg-background/26 dark:odd:bg-background/38">
                    <div className="grid gap-10 px-5 py-12 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(19rem,0.95fr)] lg:gap-16 lg:items-center">
                      <Link
                        className={cn(
                          "eryze-angle-frame group/media relative block min-h-[18rem] overflow-hidden rounded-[1.6rem] border border-border/55 bg-secondary/40 sm:min-h-[22rem] lg:min-h-[27rem]",
                          reverse ? "lg:order-2" : "",
                        )}
                        href={projectPath}
                      >
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-[rgba(5,11,22,0.14)] dark:bg-[rgba(5,11,22,0.2)]"
                        />
                        <span
                          aria-hidden
                          className="absolute left-6 top-6 h-20 w-20 rounded-full bg-brand-accent/12 blur-3xl"
                        />
                        <span
                          aria-hidden
                          className="absolute inset-x-6 top-6 h-px bg-white/12"
                        />
                        <Image
                          alt={`${project.title} project preview`}
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover/media:scale-[1.05]"
                          fill
                          sizes="(max-width: 1023px) 100vw, 58vw"
                          src={`/work/${project.slug}.svg`}
                        />
                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-6 pb-6">
                          <div className="space-y-2">
                            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/70">
                              {String(index + 1).padStart(2, "0")} / {project.category}
                            </p>
                            <p className="text-sm uppercase tracking-[0.22em] text-white/55">
                              {project.status}
                            </p>
                          </div>
                          <span className="h-11 w-11 rounded-full border border-white/12 bg-[rgba(5,11,22,0.56)] text-center text-lg leading-[2.65rem] text-white/85 transition-transform duration-300 group-hover/media:-translate-y-0.5 group-hover/media:translate-x-0.5">
                            ↗
                          </span>
                        </div>
                      </Link>

                      <div className={cn("max-w-xl", reverse ? "lg:order-1" : "")}>
                        <div className="flex items-center gap-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-support">
                            {project.status}
                          </p>
                          <span className="h-px w-14 bg-border/60" />
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            {project.category}
                          </p>
                        </div>
                      <h3 className="mt-4 font-serif text-4xl leading-[0.94] tracking-[-0.04em] text-foreground sm:text-5xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-lg leading-8 text-foreground/90">{project.tagline}</p>
                      <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                        {project.hero.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={`${project.slug}-${tag}`}>{tag}</span>
                        ))}
                      </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                          <Link
                            className="inline-flex items-center text-sm font-semibold text-foreground transition-colors hover:text-brand-accent"
                            href={projectPath}
                          >
                            Read case study
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
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FinalCTAScene() {
  return (
    <section className="relative py-7 sm:py-8 lg:py-10">
      <Container>
        <MotionReveal variant="line">
          <div className="eryze-angle-frame eryze-scene-shell eryze-scene-strong flex flex-col gap-8 rounded-[2rem] px-5 py-12 sm:px-8 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eryze-kicker">Start here</p>
              <h2 className="text-balance font-serif text-4xl leading-[0.96] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
                Need a digital system that feels clear from strategy through delivery?
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Share the problem, the users, and what feels blocked. We can see whether Eryze is the right fit to structure and build it.
              </p>
            </div>

            <Button asChild size="lg">
              <Link href="/contact">Share a brief</Link>
            </Button>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
