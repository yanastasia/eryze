import { JsonLd } from "@/components/seo/json-ld";
import { CTABlock } from "@/components/site/cta-block";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { capabilities, processSteps, proofPoints, servicePageSections } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbStructuredData,
  getPageStructuredData,
  getStudioServiceStructuredData,
} from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Eryze Studio designs and builds websites, platforms, internal systems, and workflow automation with clarity, structure, and delivery discipline.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: "Services",
            description:
              "Eryze Studio designs and builds websites, platforms, internal systems, and workflow automation with clarity, structure, and delivery discipline.",
            path: "/services",
            pageType: "CollectionPage",
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          getStudioServiceStructuredData(),
        ]}
      />

      <PageHero
        actions={[
          { href: "/contact", label: "Discuss a project" },
          { href: "/studio", label: "View studio work", variant: "outline" },
        ]}
        description="Websites, platforms, and internal systems shaped around what the business—and the people using them—actually need."
        eyebrow="Services"
        highlights={[
          "Websites, platforms, and operational products",
          "Strategy, structure, and implementation in one model",
          "Calm collaboration from scoping through launch",
        ]}
        title="From complex need to clear digital system."
      >
        <div className="eryze-angle-frame eryze-panel eryze-panel-feature w-full rounded-[1.75rem] p-5 sm:p-6">
          <p className="eryze-kicker">Where Eryze fits</p>
          <p className="mt-4 font-serif text-3xl leading-[1.02] tracking-[-0.05em] text-foreground">
            Structure first. Then expression, interaction, and code.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            A hands-on studio model for work that needs strategic thought and technical execution in the same room.
          </p>
        </div>
      </PageHero>

      <Section
        description="Different challenges call for different forms. The work is shaped around the system itself."
        eyebrow="Scope"
        motionVariant="line"
        title="What Eryze helps build"
      >
        <div className="divide-y divide-border/45">
          {servicePageSections.map((section, index) => (
            <article
              key={section.title}
              className="grid gap-6 py-6 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10"
            >
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-balance font-serif text-[clamp(1.8rem,2.8vw,3rem)] leading-[0.98] tracking-[-0.04em] text-foreground">
                  {section.title}
                </h3>
              </div>
              <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-base leading-8 text-muted-foreground">{section.description}</p>
                <ul className="mt-6 divide-y divide-border/35">
                  {section.bullets.map((bullet) => (
                    <li
                      key={`${section.title}-${bullet}`}
                      className="grid gap-3 py-4 md:grid-cols-[auto_1fr]"
                    >
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                        Signal
                      </span>
                      <span className="text-sm leading-7 text-foreground/88">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        description="The capabilities that carry an idea from early definition into something coherent, useful, and ready to run."
        eyebrow="Capabilities"
        title="Execution shaped around real product and business needs"
        tone="muted"
      >
        <div className="divide-y divide-border/45">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="grid gap-6 py-6 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:gap-10"
            >
              <div>
                <h3 className="text-balance font-serif text-[clamp(1.65rem,2.4vw,2.7rem)] leading-[0.98] tracking-[-0.04em] text-foreground">
                  {capability.title}
                </h3>
              </div>
              <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-sm leading-7 text-muted-foreground">{capability.description}</p>
                <dl className="mt-6 divide-y divide-border/35">
                  {capability.outcomes.map((outcome) => (
                    <div
                      key={`${capability.title}-${outcome}`}
                      className="grid gap-2 py-4 md:grid-cols-[minmax(7rem,0.25fr)_1fr]"
                    >
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                        Outcome
                      </dt>
                      <dd className="text-sm leading-7 text-foreground/88">{outcome}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        description="Enough structure to keep the work moving, without turning collaboration into ceremony."
        eyebrow="Process"
        title="How the work moves"
        tone="strong"
      >
        <div className="divide-y divide-border/45">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-6 py-6 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:gap-10"
            >
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-4 text-balance font-serif text-[clamp(1.65rem,2.4vw,2.6rem)] leading-[0.98] tracking-[-0.04em] text-foreground">
                  {step.title}
                </h3>
              </div>
              <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-sm leading-7 text-muted-foreground">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        description="One close working relationship across strategy, design, engineering, and delivery."
        eyebrow="Proof"
        title="What the studio model makes possible"
      >
        <div className="divide-y divide-border/45">
          {proofPoints.map((point) => (
            <article
              key={point.label}
              className="grid gap-6 py-6 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.55fr)_minmax(0,0.9fr)] lg:gap-10"
            >
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                  {point.label}
                </p>
              </div>
              <div>
                <p className="font-display text-2xl text-foreground">{point.value}</p>
              </div>
              <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-sm leading-7 text-muted-foreground">{point.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTABlock
        description="From positioning and platform logic to operational clarity and launch, Eryze can help shape the path and build what follows."
        primaryAction={{ href: "/contact", label: "Start the conversation" }}
        secondaryAction={{ href: "/studio", label: "See selected work" }}
        title="Have a complex digital problem worth making clear?"
      />
    </>
  );
}
