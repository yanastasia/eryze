import { Button } from "@/components/ui/button";
import { ContentGrid } from "@/components/site/content-grid";
import { CTABlock } from "@/components/site/cta-block";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { contactGuidance, idealProjectTypes, siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Eryze Studio by email or LinkedIn to discuss a website, platform, internal system, or automation-aware product build.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="Keep the first message short, specific, and easy to answer."
        eyebrow="Contact"
        highlights={[
          "Email for project briefs",
          "LinkedIn for lighter first contact",
          "No heavy form flow",
        ]}
        title="Start with a concise brief."
      >
        <div className="w-full rounded-[1.75rem] border border-border bg-background/70 p-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-accent">Response path</p>
          <p className="mt-4 font-display text-3xl text-foreground">Email first, LinkedIn if preferred.</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            No heavy form flow, no unnecessary friction, just a clear way to start the conversation.
          </p>
        </div>
      </PageHero>

      <Section
        description="The clearest first note gets the best response."
        eyebrow="Reach out"
        title="Simple contact paths"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
          <article className="rounded-[1.75rem] border border-border bg-card p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <div className="rounded-[1.25rem] border border-border bg-background/70 p-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">Email</p>
              <h2 className="mt-3 font-display text-2xl text-foreground">{siteConfig.email}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Best for project briefs, timelines, and early scoping notes.
              </p>
              <Button asChild className="mt-5">
                <a href={`mailto:${siteConfig.email}`}>Send an email</a>
              </Button>
            </div>

            <div className="mt-5 rounded-[1.25rem] border border-border bg-background/70 p-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">LinkedIn</p>
              <h2 className="mt-3 font-display text-2xl text-foreground">Connect directly</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Useful if you prefer a lighter first touch before sending more detail.
              </p>
              <Button asChild className="mt-5" variant="outline">
                <a href={siteConfig.linkedinUrl} rel="noreferrer" target="_blank">
                  Open LinkedIn
                </a>
              </Button>
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-border bg-card p-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">Include this in the first message</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground sm:text-base">
              {contactGuidance.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-brand-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section
        description="These are the project types where the studio is most useful."
        eyebrow="Best fit"
        title="Where the studio is most useful"
      >
        <ContentGrid variant="two">
          {idealProjectTypes.map((projectType) => (
            <article key={projectType} className="rounded-[1.5rem] border border-border bg-card p-6">
              <p className="text-sm leading-6 text-muted-foreground sm:text-base">{projectType}</p>
            </article>
          ))}
        </ContentGrid>
      </Section>

      <CTABlock
        description="If you want more context before reaching out, review the selected work or the studio approach and then send a short brief."
        primaryAction={{ href: "/work", label: "Review work" }}
        secondaryAction={{ href: "/studio", label: "See studio approach" }}
        title="Want to understand the studio fit before you reach out?"
      />
    </>
  );
}
