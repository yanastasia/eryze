import Image from "next/image";
import Link from "next/link";

import type { HomeService, ProcessStep } from "@/content/site";
import { Container } from "@/components/site/container";
import { ContentGrid } from "@/components/site/content-grid";
import { MotionReveal } from "@/components/site/motion-reveal";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

type SceneHeaderProps = {
  align?: "center" | "start";
  className?: string;
  description?: string;
  eyebrow: string;
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
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-accent sm:text-sm">{eyebrow}</p>
      <h2 className="mt-4 text-balance font-display text-4xl leading-[0.95] text-foreground sm:text-5xl lg:text-6xl">
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

export function PositioningStrip({
  description,
  title,
}: {
  description: string;
  title: string;
}) {
  return (
    <section className="relative border-y border-border/60 py-20 sm:py-24">
      <Container>
        <MotionReveal>
          <SceneHeader
            align="center"
            description={description}
            eyebrow="Positioning"
            title={title}
          />
        </MotionReveal>
      </Container>
    </section>
  );
}

export function ServiceSequence({ services }: { services: HomeService[] }) {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <Container>
        <MotionReveal>
          <SceneHeader
            description="Support across public-facing websites, structured platforms, and internal systems."
            eyebrow="Services"
            title="What Eryze works on"
          />
        </MotionReveal>

        <ContentGrid className="mt-10" variant="three">
          {services.map((service, index) => (
            <MotionReveal key={service.label} delay={index * 0.08}>
              <article className="rounded-[1.5rem] border border-border bg-card p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-[0_20px_46px_rgba(122,63,255,0.12)]">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">{service.label}</p>
                <h3 className="mt-4 font-display text-2xl leading-tight text-foreground sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-1 text-brand-accent">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </MotionReveal>
          ))}
        </ContentGrid>
      </Container>
    </section>
  );
}

export function FeaturedProjectSequence({ projects }: { projects: Project[] }) {
  return (
    <section id="work-preview" className="relative py-24 sm:py-32">
      <Container>
        <MotionReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SceneHeader
              description="A selection of product, platform, and client work."
              eyebrow="Featured projects"
              title="Selected work"
            />
            <Link
              className="inline-flex items-center text-sm font-semibold text-foreground transition-colors hover:text-brand-accent"
              href="/work"
            >
              View all work
              <span className="ml-2 text-base">→</span>
            </Link>
          </div>
        </MotionReveal>
      </Container>

      <div className="mt-14 border-y border-border/60">
        {projects.map((project, index) => {
          const reverse = index % 2 === 1;

          return (
            <MotionReveal key={project.slug} delay={index * 0.08}>
              <article className="border-b border-border/60 last:border-b-0">
                <Container>
                  <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(19rem,0.95fr)] lg:gap-16 lg:items-center">
                    <Link
                      className={cn(
                        "group/media relative block min-h-[18rem] overflow-hidden bg-secondary/40 sm:min-h-[22rem] lg:min-h-[27rem]",
                        reverse ? "lg:order-2" : "",
                      )}
                      href={`/work/${project.slug}`}
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-[rgba(5,11,22,0.14)] dark:bg-[rgba(5,11,22,0.2)]"
                      />
                      <span
                        aria-hidden
                        className="absolute left-6 top-6 h-20 w-20 rounded-full bg-brand-accent/12 blur-3xl"
                      />
                      <Image
                        alt={`${project.title} project preview`}
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover/media:scale-[1.05]"
                        fill
                        sizes="(max-width: 1023px) 100vw, 58vw"
                        src={`/work/${project.slug}.svg`}
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-6 pb-6">
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/70">
                          {String(index + 1).padStart(2, "0")} / {project.category}
                        </p>
                        <span className="text-lg text-white/80 transition-transform duration-300 group-hover/media:translate-x-1">
                          ↗
                        </span>
                      </div>
                      </Link>

                    <div className={cn("max-w-xl", reverse ? "lg:order-1" : "")}>
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-accent">
                        {project.status}
                      </p>
                      <h3 className="mt-4 font-display text-4xl leading-[0.95] text-foreground sm:text-5xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-lg leading-8 text-foreground/90">{project.tagline}</p>
                      <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                        {project.hero.description}
                      </p>

                      <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                        {project.solution.slice(0, 3).map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-1 text-brand-accent">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {project.tags.map((tag) => (
                          <span key={`${project.slug}-${tag}`}>{tag}</span>
                        ))}
                      </div>

                      <Link
                        className="mt-8 inline-flex items-center text-sm font-semibold text-foreground transition-colors hover:text-brand-accent"
                        href={`/work/${project.slug}`}
                      >
                        Read case study
                        <span className="ml-2 text-base">→</span>
                      </Link>
                      {project.liveUrl ? (
                        <a
                          className="mt-4 inline-flex items-center text-sm font-semibold text-muted-foreground transition-colors hover:text-brand-accent"
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
                </Container>
              </article>
            </MotionReveal>
          );
        })}
      </div>
    </section>
  );
}

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <Container>
        <MotionReveal>
          <SceneHeader
            description="A clear working process keeps projects focused from early direction through launch."
            eyebrow="Process"
            title="How the work moves forward"
          />
        </MotionReveal>

        <MotionReveal delay={0.12} className="mt-16 hidden lg:block">
          <div className="relative">
            <span aria-hidden className="absolute left-0 right-0 top-4 h-px bg-border/60" />
            <div className="grid grid-cols-4 gap-10">
              {steps.map((step, index) => (
                <div key={step.title} className="relative pt-12">
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-8 w-8 rounded-full border border-brand-accent/60 bg-background shadow-[0_0_22px_rgba(122,63,255,0.14)]"
                  />
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-2xl text-foreground">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.12} className="mt-14 lg:hidden">
          <div className="space-y-8 border-l border-border/60 pl-6">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.05rem] top-1 h-5 w-5 rounded-full border border-brand-accent/60 bg-background shadow-[0_0_18px_rgba(122,63,255,0.14)]"
                />
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}

export function FinalCTAScene() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <MotionReveal>
          <div className="flex flex-col gap-8 border-y border-border/60 py-12 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-accent sm:text-sm">
                Final CTA
              </p>
              <h2 className="mt-4 text-balance font-display text-4xl leading-[0.95] text-foreground sm:text-5xl lg:text-6xl">
                Planning a website, product, or internal tool?
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Start with a short brief and the key context. Eryze works on projects that need clear structure, strong execution, and a reliable path to launch.
              </p>
            </div>

            <Button asChild size="lg">
              <Link href="/contact">Start a conversation</Link>
            </Button>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
