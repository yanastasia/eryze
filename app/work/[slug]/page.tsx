import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BuiltBlock } from "@/components/site/built-block";
import { CaseStudySection } from "@/components/site/case-study-section";
import { ContentGrid } from "@/components/site/content-grid";
import { CTABlock } from "@/components/site/cta-block";
import { PageHero } from "@/components/site/page-hero";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { StatusBadge } from "@/components/site/status-badge";
import { TagBadge } from "@/components/site/tag-badge";
import { getProjectBySlug, projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: "Project not found",
      description: "The requested case study could not be found.",
      path: `/work/${slug}`,
    });
  }

  return createPageMetadata({
    title: `${project.title} case study`,
    description: project.tagline,
    path: `/work/${project.slug}`,
  });
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        actions={[
          { href: "/contact", label: "Discuss a similar build" },
          { href: "/work", label: "Back to work", variant: "outline" },
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
        <div className="grid w-full gap-4">
          <div className="rounded-[1.25rem] border border-border bg-card p-4">
            <div className="flex flex-wrap gap-2">
              <StatusBadge status={project.status} />
              {project.tags.map((tag) => (
                <TagBadge key={`${project.slug}-${tag}`} tag={tag} />
              ))}
            </div>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">Role</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.overview.role}</p>
            {project.liveUrl ? (
              <a
                className="mt-4 inline-flex items-center text-sm font-semibold text-foreground transition-colors hover:text-brand-accent"
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
      </PageHero>

      <SectionWrapper
        description="Who the product serves, what it does, and the role behind the build."
        eyebrow="Overview"
        title="Overview"
      >
        <ContentGrid variant="three">
          <article className="rounded-[1.5rem] border border-border bg-card p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">Who</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.overview.who}</p>
          </article>
          <article className="rounded-[1.5rem] border border-border bg-card p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">What</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.overview.what}</p>
          </article>
          <article className="rounded-[1.5rem] border border-border bg-card p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">Role</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.overview.role}</p>
          </article>
        </ContentGrid>
      </SectionWrapper>

      <SectionWrapper eyebrow="Problem" title="Problem">
        <CaseStudySection items={project.problem} title="What needed fixing" />
      </SectionWrapper>

      <SectionWrapper eyebrow="Goal" title="Goal">
        <CaseStudySection items={project.goal} title="What the project had to achieve" />
      </SectionWrapper>

      <SectionWrapper eyebrow="Solution" title="Solution">
        <CaseStudySection items={project.solution} title="How the structure was resolved" />
      </SectionWrapper>

      <SectionWrapper
        description="The build is grouped into clear product areas rather than one large feature list."
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
        description="Core technologies and the implementation notes that mattered for delivery."
        eyebrow="Tech"
        title="Tech"
      >
        <ContentGrid variant="two">
          <article className="rounded-[1.5rem] border border-border bg-card p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            <h3 className="font-display text-xl text-foreground sm:text-2xl">Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.stack.map((item) => (
                <TagBadge key={item} tag={item} />
              ))}
            </div>
          </article>
          <CaseStudySection items={project.tech.notes} title="Notes" />
        </ContentGrid>
      </SectionWrapper>

      <SectionWrapper eyebrow="Outcome" title="Outcome">
        <CaseStudySection items={project.outcome} title="Current outcome" tone="highlight" />
      </SectionWrapper>

      <SectionWrapper eyebrow="Learnings" title="Learnings">
        <CaseStudySection items={project.learnings} title="What this build clarified" />
      </SectionWrapper>

      <CTABlock
        description="If you are building a similar platform, product, or internal system, Eryze Studio can help define the structure and deliver a clean implementation path."
        primaryAction={{ href: "/contact", label: "Get in touch" }}
        secondaryAction={{ href: "/studio", label: "See studio services" }}
        title="Planning a platform or product with similar complexity?"
      />
    </>
  );
}
