import { JsonLd } from "@/components/seo/json-ld";
import { CTABlock } from "@/components/site/cta-block";
import { HoverSignalLink } from "@/components/site/eryze-motion";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { founderCredentials, founderProfile, workingPrinciples } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import {
  getAboutStructuredData,
  getBreadcrumbStructuredData,
  getPageStructuredData,
} from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "About Eryze Studio and founder Anastasia Yakimovska, combining engineering, product thinking, and cross-sector digital delivery with a calm, collaborative working model.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: "About",
            description:
              "About Eryze Studio and founder Anastasia Yakimovska, combining engineering, product thinking, and cross-sector digital delivery with a calm, collaborative working model.",
            path: "/about",
            pageType: "AboutPage",
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          getAboutStructuredData(),
        ]}
      />

      <PageHero
        actions={[{ href: "/contact", label: "Get in touch" }]}
        description="Engineering judgment, product thinking, and close collaboration from first idea to working system."
        eyebrow="About"
        highlights={[
          "Engineering and automation background",
          "Startup and product execution experience",
          "Direct collaboration without unnecessary layers",
        ]}
        title="Close to the idea. Close to the build."
      >
        <div className="eryze-angle-frame eryze-panel eryze-panel-feature w-full rounded-[1.75rem] p-5">
          <p className="eryze-kicker">Core lens</p>
          <p className="mt-4 font-serif text-3xl leading-[1.04] tracking-[-0.04em] text-foreground">
            Turning ambition into a digital system built for real use.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Eryze brings the visible experience and the operational reality behind it into the same frame.
          </p>
        </div>
      </PageHero>

      <Section
        description="Anastasia brings engineering depth, founder experience, and product judgment to every engagement."
        eyebrow="Founder"
        title={founderProfile.name}
      >
        <div className="divide-y divide-border/45">
          <article className="grid gap-6 py-6 first:pt-0 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-10">
            <div>
              <p className="eryze-kicker">Role</p>
              <h3 className="mt-4 text-balance font-serif text-[clamp(1.9rem,2.8vw,3.2rem)] leading-[0.98] tracking-[-0.04em] text-foreground">
                {founderProfile.role}
              </h3>
            </div>
            <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-base leading-8 text-muted-foreground">{founderProfile.intro}</p>
            </div>
          </article>

          {founderProfile.summary.map((point, index) => (
            <article
              key={point}
              className="grid gap-6 py-6 lg:grid-cols-[minmax(0,0.22fr)_minmax(0,1.78fr)] lg:gap-10"
            >
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                  0{index + 1}
                </p>
              </div>
              <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-sm leading-7 text-foreground/88">{point}</p>
              </div>
            </article>
          ))}

          <article className="grid gap-6 py-6 last:pb-0 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-10">
            <div>
              <p className="eryze-kicker">Beyond the studio</p>
            </div>
            <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-sm leading-7 text-muted-foreground">
                The portfolio brings together product and project case studies, shorter experiments, methods, and experience beyond client delivery.
              </p>
              <div className="mt-5">
                <HoverSignalLink href="/portfolio" intensity={0.42} opacity={0.62} speed={1}>
                  Open portfolio
                </HoverSignalLink>
              </div>
            </div>
          </article>
        </div>
      </Section>

      <Section
        description="Background across technical execution, startup operating work, and product delivery."
        eyebrow="Background"
        title="Experience that shapes the work"
      >
        <div className="divide-y divide-border/45">
          {founderCredentials.map((credential) => (
            <article
              key={credential.title}
              className="grid gap-6 py-6 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-10"
            >
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                  {credential.label}
                </p>
                <h3 className="mt-4 text-balance font-serif text-[clamp(1.55rem,2.1vw,2.35rem)] leading-[1] tracking-[-0.04em] text-foreground">
                  {credential.title}
                </h3>
              </div>
              <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-sm leading-7 text-muted-foreground">{credential.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        description="A few convictions keep the work focused, useful, and honest."
        eyebrow="Philosophy"
        title="Working principles"
      >
        <div className="divide-y divide-border/45">
          {workingPrinciples.map((principle, index) => (
            <article
              key={principle.title}
              className="grid gap-6 py-6 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,0.18fr)_minmax(0,0.62fr)_minmax(0,1.2fr)] lg:gap-10"
            >
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                  0{index + 1}
                </p>
              </div>
              <div>
                <h3 className="text-balance font-serif text-[clamp(1.45rem,1.9vw,2.1rem)] leading-[1] tracking-[-0.04em] text-foreground">
                  {principle.title}
                </h3>
              </div>
              <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-sm leading-7 text-muted-foreground">{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTABlock
        description="Bring the product, workflow, or platform you want to move forward."
        primaryAction={{ href: "/contact", label: "Start a conversation" }}
        secondaryAction={{ href: "/portfolio", label: "View portfolio" }}
        title="Looking for a partner who understands both the product and the build?"
      />
    </>
  );
}
