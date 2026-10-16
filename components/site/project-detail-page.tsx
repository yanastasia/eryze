import { BuiltBlock } from "@/components/site/built-block";
import { CaseStudySection } from "@/components/site/case-study-section";
import { ContentGrid } from "@/components/site/content-grid";
import { CTABlock } from "@/components/site/cta-block";
import { HoverSignalLink } from "@/components/site/eryze-motion";
import { PageHero } from "@/components/site/page-hero";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { StatusBadge } from "@/components/site/status-badge";
import { TagBadge } from "@/components/site/tag-badge";
import type { Project } from "@/types/project";

type ProjectDetailPageProps = {
  project: Project;
  collectionHref: string;
  collectionLabel: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
};

export function ProjectDetailPage({
  collectionHref,
  collectionLabel,
  project,
  secondaryCtaHref,
  secondaryCtaLabel,
}: ProjectDetailPageProps) {
  return (
    <>
      <PageHero
        actions={[
          { href: "/contact", label: "Discuss a similar build" },
          { href: collectionHref, label: collectionLabel, variant: "outline" },
        ]}
        description={project.tagline}
        eyebrow={project.category}
        highlights={[
          project.hero.description,
          `${project.tech.stack.length} core technologies`,
          `${project.built.length} main product areas`,
        ]}
        title={project.title}
      >
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <StatusBadge status={project.status} />
            {project.tags.map((tag) => (
              <TagBadge key={`${project.slug}-${tag}`} tag={tag} />
            ))}
          </div>
          <div className="border-t border-border/55 pt-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">Role</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.overview.role}</p>
          </div>
          {project.liveUrl ? (
            <HoverSignalLink
              arrow="up-right"
              href={project.liveUrl}
              intensity={0.48}
              opacity={0.68}
              rel="noreferrer"
              speed={1}
              target="_blank"
            >
              Visit live site
            </HoverSignalLink>
          ) : null}
        </div>
      </PageHero>

      <SectionWrapper
        description="Who the product serves, what it does, and the role behind the build."
        eyebrow="Overview"
        title="Project overview"
      >
        <div className="divide-y divide-border/45 overflow-hidden rounded-[1.7rem] border border-border/65 bg-[rgba(8,15,28,0.78)]">
          {[
            { label: "Who", value: project.overview.who },
            { label: "What", value: project.overview.what },
            { label: "Role", value: project.overview.role },
          ].map((item) => (
            <div key={item.label} className="grid gap-3 px-5 py-5 md:grid-cols-[minmax(10rem,0.26fr)_1fr] md:px-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">{item.label}</p>
              <p className="text-sm leading-7 text-foreground/86 sm:text-base">{item.value}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Problem" title="What needed to change">
        <CaseStudySection items={project.problem} title="Problem framing" />
      </SectionWrapper>

      <SectionWrapper eyebrow="Goal" title="What the work had to achieve">
        <CaseStudySection items={project.goal} title="Goals" />
      </SectionWrapper>

      <SectionWrapper eyebrow="Solution" title="How the structure was resolved">
        <CaseStudySection items={project.solution} title="Solution logic" tone="highlight" />
      </SectionWrapper>

      <SectionWrapper
        description="Each product area answers a distinct part of the experience and the system behind it."
        eyebrow="Built"
        title="What was built"
      >
        <ContentGrid variant="three">
          {project.built.map((block) => (
            <BuiltBlock key={block.title} block={block} />
          ))}
        </ContentGrid>
      </SectionWrapper>

      <SectionWrapper
        description="The technologies and implementation choices that shaped delivery."
        eyebrow="Tech"
        title="Technical system"
      >
        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <article className="overflow-hidden rounded-[1.55rem] border border-border/65 bg-[rgba(8,15,28,0.74)] px-5 py-6 sm:px-6 sm:py-7">
            <h3 className="font-serif text-[clamp(1.4rem,2vw,2rem)] leading-[1] tracking-[-0.04em] text-foreground">Stack</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.stack.map((item) => (
                <TagBadge key={item} tag={item} />
              ))}
            </div>
          </article>
          <CaseStudySection items={project.tech.notes} title="Implementation notes" />
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Outcome" title="Current outcome">
        <CaseStudySection items={project.outcome} title="Outcome" tone="highlight" />
      </SectionWrapper>

      <SectionWrapper eyebrow="Learnings" title="What the work clarified">
        <CaseStudySection items={project.learnings} title="Learnings" />
      </SectionWrapper>

      <CTABlock
        description="If you are building a similar platform, product, or internal system, Eryze can help define the structure and deliver it with a cleaner implementation path."
        primaryAction={{ href: "/contact", label: "Get in touch" }}
        secondaryAction={{ href: secondaryCtaHref, label: secondaryCtaLabel }}
        title="Planning a build with similar complexity?"
      />
    </>
  );
}
