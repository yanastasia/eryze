import Link from "next/link";

import { CapabilityCard } from "@/components/site/capability-card";
import { ContentGrid } from "@/components/site/content-grid";
import { CTABlock } from "@/components/site/cta-block";
import { PageHero } from "@/components/site/page-hero";
import { PrincipleCard } from "@/components/site/principle-card";
import { ProjectGrid } from "@/components/site/project-grid";
import { Section } from "@/components/site/section";
import { featuredProjects } from "@/data/projects";
import { capabilities, founderCredentials, founderProfile, processSteps } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Founder-led product and platform studio",
  description:
    "Eryze Studio builds modern websites, digital products, internal systems, and automation-aware platforms with clean architecture and strong positioning.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <PageHero
        actions={[
          { href: "/work", label: "View Work" },
          { href: "/contact", label: "Get in Touch", variant: "outline" },
        ]}
        description="Founder-led studio for websites, platforms, and internal systems that need clear structure."
        eyebrow="Eryze Studio"
        highlights={[
          "Websites that explain the offer fast",
          "Platforms built for real operating use",
          "Internal tools that reduce manual friction",
        ]}
        title="Modern digital products, websites, and internal systems built with product discipline."
      >
        <div className="grid w-full gap-4">
          <article className="rounded-[1.5rem] border border-border bg-background/70 p-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">Best fit</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground">
              <li>Founder-led launches that need a credible first digital presence</li>
              <li>Platforms with multiple audiences, workflows, or content states</li>
              <li>Teams replacing fragmented internal processes with a cleaner system</li>
            </ul>
          </article>
          <article className="rounded-[1.5rem] border border-border bg-background/70 p-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">Next step</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Review selected work or send a short project brief.
            </p>
          </article>
        </div>
      </PageHero>

      <Section
        description="A compact product team that defines the structure and ships the build."
        eyebrow="Intro"
        id="studio"
        title="A studio built for focused execution"
      >
        <div className="grid gap-4 md:gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <article className="rounded-[1.75rem] border border-border bg-card p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <ul className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
              {founderProfile.summary.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-brand-accent">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-4">
            <article className="rounded-[1.5rem] border border-border bg-card p-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">Build scope</p>
              <p className="mt-3 font-display text-xl text-foreground">Websites, platforms, and operations tooling</p>
            </article>
            <article className="rounded-[1.5rem] border border-border bg-card p-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">Operating style</p>
              <p className="mt-3 font-display text-xl text-foreground">Founder-led, product-minded, and implementation-first</p>
            </article>
            <article className="rounded-[1.5rem] border border-border bg-card p-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">Region</p>
              <p className="mt-3 font-display text-xl text-foreground">Built in Southeast Europe, relevant well beyond it</p>
            </article>
          </div>
        </div>
      </Section>

      <Section
        description="Positioning-led websites, structured platforms, and operations tooling."
        eyebrow="Capabilities"
        title="What we build"
      >
        <ContentGrid variant="two">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </ContentGrid>
      </Section>

      <Section
        description="A few live and in-progress builds across platform, product, and internal system work."
        eyebrow="Selected work"
        title="Case studies shaped for real operating contexts"
      >
        <ProjectGrid projects={featuredProjects} />
        <div className="mt-8">
          <Link className="text-sm font-semibold text-foreground transition-colors hover:text-brand-accent" href="/work">
            See all work →
          </Link>
        </div>
      </Section>

      <Section
        description="Four steps keep delivery focused and low-friction."
        eyebrow="Approach"
        title="How we work"
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

      <Section
        description="Founder-level ownership backed by engineering and product experience."
        eyebrow="Founder"
        title="Experience that supports the studio promise"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <article className="rounded-[1.75rem] border border-border bg-card p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand-accent">Anastasia Yakimovska</p>
            <h3 className="mt-4 font-display text-3xl text-foreground">{founderProfile.role}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
              {founderProfile.summary.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-brand-accent">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              className="mt-6 inline-flex text-sm font-semibold text-foreground transition-colors hover:text-brand-accent"
              href="/about"
            >
              Read more about the founder →
            </Link>
          </article>

          <ContentGrid className="sm:grid-cols-1" variant="two">
            {founderCredentials.map((credential) => (
              <article key={credential.title} className="rounded-[1.5rem] border border-border bg-card p-5">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">{credential.label}</p>
                <h3 className="mt-3 font-display text-xl text-foreground">{credential.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{credential.description}</p>
              </article>
            ))}
          </ContentGrid>
        </div>
      </Section>

      <CTABlock
        description="If you need a studio partner to shape the product story, the system structure, and the build itself, start with the work or send a concise brief."
        primaryAction={{ href: "/contact", label: "Start a conversation" }}
        secondaryAction={{ href: "/work", label: "Review case studies" }}
        title="Ready to turn a product direction into a sharper digital system?"
      />
    </>
  );
}
