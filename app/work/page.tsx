import { CTABlock } from "@/components/site/cta-block";
import { PageHero } from "@/components/site/page-hero";
import { ProjectGrid } from "@/components/site/project-grid";
import { Section } from "@/components/site/section";
import { sortedProjects, workFilterTags } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

type WorkPageProps = {
  searchParams?: Promise<{
    tag?: string;
  }>;
};

export const metadata = createPageMetadata({
  title: "Work",
  description:
    "Selected work from Eryze Studio across cultural platforms, real estate, consumer products, and internal systems.",
  path: "/work",
});

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const params = searchParams ? await searchParams : {};
  const activeTag = typeof params.tag === "string" ? params.tag : undefined;
  const visibleProjects = activeTag
    ? sortedProjects.filter((project) => project.tags.includes(activeTag) || project.category === activeTag)
    : sortedProjects;

  return (
    <>
      <PageHero
        description="Selected work across public platforms, product launches, and internal systems."
        eyebrow="Work"
        highlights={[
          `${sortedProjects.length} structured case studies`,
          "Featured work appears first",
          "Filter by project type or context",
        ]}
        title="Selected products and platforms built for real-world use."
      >
        <div className="w-full rounded-[1.75rem] border border-border bg-background/70 p-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-accent">Current view</p>
          <p className="mt-4 font-display text-3xl text-foreground">{activeTag ? activeTag : "All work"}</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {visibleProjects.length} project{visibleProjects.length === 1 ? "" : "s"} shown.
          </p>
        </div>
      </PageHero>

      <Section
        description="Browse all work or use a smaller filter set based on project type and delivery context."
        eyebrow="Portfolio"
        title="Case studies"
      >
        <ProjectGrid
          activeTag={activeTag}
          availableTags={[...workFilterTags]}
          projects={visibleProjects}
          showFilters
        />
      </Section>

      <CTABlock
        description="If one of these projects feels close to what you are planning, the next step is a short conversation about scope, audience, and what has to work first."
        primaryAction={{ href: "/contact", label: "Discuss a project" }}
        secondaryAction={{ href: "/studio", label: "See studio approach" }}
        title="Looking for a build partner with product judgment?"
      />
    </>
  );
}
