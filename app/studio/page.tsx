import { CapabilityCard } from "@/components/site/capability-card";
import { ContentGrid } from "@/components/site/content-grid";
import { CTABlock } from "@/components/site/cta-block";
import { PageHero } from "@/components/site/page-hero";
import { PrincipleCard } from "@/components/site/principle-card";
import { Section } from "@/components/site/section";
import { capabilities, idealProjectTypes, processSteps } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Studio",
  description:
    "Eryze Studio builds product websites, digital platforms, internal systems, and automation-aware workflows with a lean, maintainable delivery approach.",
  path: "/studio",
});

export default function StudioPage() {
  return (
    <>
      <PageHero
        actions={[
          { href: "/work", label: "View Work" },
          { href: "/contact", label: "Contact", variant: "outline" },
        ]}
        description="A founder-led studio for teams that need a credible product surface and a maintainable build."
        eyebrow="Studio"
        highlights={[
          "Lean delivery model",
          "Product, interface, and implementation in one flow",
          "Clean systems over agency sprawl",
        ]}
        title="A lean studio for products, platforms, and operational clarity."
      >
        <div className="w-full rounded-[1.75rem] border border-border bg-background/70 p-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-accent">Best for</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <li>Founder-led products that need a strong public launch surface</li>
            <li>Organizations replacing patchwork workflows with clearer systems</li>
            <li>Teams that want reusable front-end architecture instead of one-off pages</li>
          </ul>
        </div>
      </PageHero>

      <Section
        description="Product surfaces and systems that need structure, usability, and room to grow."
        eyebrow="Capabilities"
        title="Core studio capabilities"
      >
        <ContentGrid variant="two">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </ContentGrid>
      </Section>

      <Section
        description="The strongest fit is work that benefits from product thinking and clean architecture."
        eyebrow="Fit"
        title="Ideal project types"
      >
        <ContentGrid variant="two">
          {idealProjectTypes.map((projectType) => (
            <article key={projectType} className="rounded-[1.5rem] border border-border bg-card p-6">
              <p className="text-sm leading-6 text-muted-foreground sm:text-base">{projectType}</p>
            </article>
          ))}
        </ContentGrid>
      </Section>

      <Section
        description="Define the system clearly, build the right scope, and leave behind usable foundations."
        eyebrow="Process"
        title="Delivery approach"
      >
        <ContentGrid variant="four">
          {processSteps.map((step, index) => (
            <PrincipleCard
              key={step.title}
              description={step.description}
              index={index}
              title={step.title}
            />
          ))}
        </ContentGrid>
      </Section>

      <CTABlock
        description="Review selected case studies to see how the studio thinks through product structure, or reach out if you already know the problem you need to solve."
        primaryAction={{ href: "/work", label: "Explore work" }}
        secondaryAction={{ href: "/contact", label: "Get in touch" }}
        title="Need a studio partner who can shape the system and build it?"
      />
    </>
  );
}
