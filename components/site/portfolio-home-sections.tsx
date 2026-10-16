import { CaseStudyCard } from "@/components/site/case-study-card";
import { CTABlock } from "@/components/site/cta-block";
import { HoverSignalLink } from "@/components/site/eryze-motion";
import { LabCard } from "@/components/site/lab-card";
import { Section } from "@/components/site/section";
import {
  education,
  experience,
  homePageContent,
  methods,
} from "@/data/portfolio";
import type { CaseStudy, Lab } from "@/types/portfolio";

type PortfolioHomeSectionsProps = {
  featuredStudies: CaseStudy[];
  labs: Lab[];
};

export function PortfolioHomeSections({
  featuredStudies,
  labs,
}: PortfolioHomeSectionsProps) {
  const featuredExperience = experience.slice(0, 3);
  const featuredMethods = methods.slice(0, 4);

  return (
    <>
      <Section
        description="Engineering, founder work, and formal study meet in the way I shape products and lead delivery."
        eyebrow="Experience"
        title="Experience behind the work"
        tone="soft"
      >
        <div className="divide-y divide-border/45">
          <article className="grid gap-6 py-6 first:pt-0 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-10">
            <div>
              <p className="eryze-kicker">Through-line</p>
              <h3 className="mt-4 text-balance font-serif text-[clamp(1.9rem,2.9vw,3.2rem)] leading-[0.98] tracking-[-0.04em] text-foreground">
                Technical grounding, founder perspective, and structured PM work in one body of experience.
              </h3>
            </div>
            <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-base leading-8 text-muted-foreground">
                The through-line is structure: understanding the technical reality, shaping the right scope,
                and keeping delivery grounded in what can actually be built, explained, and run well.
              </p>
            </div>
          </article>

          {featuredExperience.map((item) => (
            <article
              key={`${item.organization}-${item.role}`}
              className="grid gap-6 py-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.28fr)_minmax(0,1fr)] lg:gap-10"
            >
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                  {item.organization}
                </p>
                <h3 className="mt-4 text-balance font-serif text-[clamp(1.5rem,2.2vw,2.4rem)] leading-[1] tracking-[-0.04em] text-foreground">
                  {item.role}
                </h3>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.period}</p>
              </div>
              <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <ul className="space-y-3">
                  {item.description.map((point) => (
                    <li key={`${item.organization}-${point}`} className="text-sm leading-7 text-muted-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          {education.map((item) => (
            <article
              key={`${item.institution}-${item.program}`}
              className="grid gap-6 py-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.28fr)_minmax(0,1fr)] lg:gap-10"
            >
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                  {item.institution}
                </p>
                <h3 className="mt-4 text-balance font-serif text-[clamp(1.45rem,2vw,2.2rem)] leading-[1] tracking-[-0.04em] text-foreground">
                  {item.program}
                </h3>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.period}</p>
              </div>
              <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <ul className="space-y-3">
                  {item.description.map((point) => (
                    <li key={`${item.program}-${point}`} className="text-sm leading-7 text-muted-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

        </div>
      </Section>

      <Section
        description="Product strategy, planning, discovery, governance, and delivery—shown through the decisions that mattered."
        eyebrow="Case studies"
        title="Featured product and project work"
        tone="strong"
      >
        <div className="space-y-6">
          {featuredStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Section>

      <Section
        description="Smaller explorations in experiments, metrics, prioritization, research, and retrospectives."
        eyebrow="Supporting work"
        title="Labs and methods"
        tone="soft"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <div className="space-y-6">
              {labs.slice(0, 2).map((lab) => (
                <LabCard key={lab.slug} lab={lab} />
              ))}
            </div>
            <div className="mt-6">
              <HoverSignalLink href="/portfolio/labs" intensity={0.42} opacity={0.62} speed={1}>
                View all labs
              </HoverSignalLink>
            </div>
          </div>

          <article className="overflow-hidden rounded-[1.8rem] border border-border/70 bg-[rgba(8,15,28,0.82)] px-5 py-6 sm:px-6 sm:py-7">
            <p className="eryze-kicker">Selected methods</p>
            <div className="mt-5 divide-y divide-border/45">
              {featuredMethods.map((method) => (
                <div key={method.title} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-balance font-serif text-[clamp(1.35rem,1.8vw,2rem)] leading-[1] tracking-[-0.04em] text-foreground">
                    {method.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{method.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <HoverSignalLink href="/portfolio/methods" intensity={0.42} opacity={0.62} speed={1}>
                Explore the full toolkit
              </HoverSignalLink>
            </div>
          </article>
        </div>
      </Section>

      <CTABlock
        description={homePageContent.finalCta}
        primaryAction={{ href: "/portfolio/resume", label: "Open resume" }}
        secondaryAction={{ href: "/contact", label: "Get in touch" }}
        title="Experience sets the context. The case studies show the work."
      />
    </>
  );
}
