import { CTABlock } from "@/components/site/cta-block";
import { ContentGrid } from "@/components/site/content-grid";
import { PageHero } from "@/components/site/page-hero";
import { PrincipleCard } from "@/components/site/principle-card";
import { Section } from "@/components/site/section";
import { founderCredentials, founderProfile, workingPrinciples } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "About Eryze Studio and founder Anastasia Yakimovska, combining engineering, product thinking, startup execution, and cross-sector digital delivery.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        actions={[{ href: "/contact", label: "Get in touch" }]}
        description="Engineering, product thinking, and founder-level execution in one working model."
        eyebrow="About"
        highlights={[
          "Engineering and automation background",
          "Startup and product execution experience",
          "Founder-led collaboration without extra layers",
        ]}
        title="Founder-led studio work grounded in engineering and product judgment."
      >
        <div className="w-full rounded-[1.75rem] border border-border bg-background/70 p-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-accent">Core lens</p>
          <p className="mt-4 font-display text-3xl text-foreground">Build what is credible now and extensible later.</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            The studio approach balances public-facing clarity with the operational reality behind the product.
          </p>
        </div>
      </PageHero>

      <Section
        description="A concise view of the founder behind the studio."
        eyebrow="Founder"
        title={founderProfile.name}
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
          <article className="rounded-[1.75rem] border border-border bg-card p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <h3 className="font-display text-3xl text-foreground">{founderProfile.role}</h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">{founderProfile.intro}</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
              {founderProfile.summary.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-brand-accent">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-border bg-card p-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">Working stance</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              The studio is intentionally compact, which keeps the work close to business goals, delivery tradeoffs, and the actual constraints behind each project.
            </p>
          </article>
        </div>
      </Section>

      <Section
        description="Background across technical execution, startup operating work, and product delivery."
        eyebrow="Background"
        title="Experience that shapes the work"
      >
        <ContentGrid variant="two">
          {founderCredentials.map((credential) => (
            <article key={credential.title} className="rounded-[1.5rem] border border-border bg-card p-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-accent">{credential.label}</p>
              <h3 className="mt-3 font-display text-2xl text-foreground">{credential.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{credential.description}</p>
            </article>
          ))}
        </ContentGrid>
      </Section>

      <Section
        description="These principles guide what gets built now and what stays out of scope."
        eyebrow="Philosophy"
        title="Working principles"
      >
        <ContentGrid variant="four">
          {workingPrinciples.map((principle) => (
            <PrincipleCard
              key={principle.title}
              description={principle.description}
              title={principle.title}
            />
          ))}
        </ContentGrid>
      </Section>

      <CTABlock
        description="If the way the studio works matches what you need, the easiest next step is a short note about the product, workflow, or platform you are trying to shape."
        primaryAction={{ href: "/contact", label: "Start a conversation" }}
        secondaryAction={{ href: "/work", label: "Review work" }}
        title="Need a technical partner who can stay close to the product?"
      />
    </>
  );
}
