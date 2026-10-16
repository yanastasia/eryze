import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { education, experience, portfolioProfile, resumeSkillGroups } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbStructuredData,
  getPageStructuredData,
  getPortfolioCollectionStructuredData,
} from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Portfolio Resume",
  description:
    "Resume page for Anastasia Yakimovska with experience, education, skills, and downloadable PDF.",
  path: "/portfolio/resume",
  keywords: [
    "Anastasia Yakimovska resume",
    "product manager resume",
    "project manager resume",
  ],
});

export default function PortfolioResumePage() {
  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: "Portfolio Resume",
            description:
              "Resume page for Anastasia Yakimovska with experience, education, skills, and downloadable PDF.",
            path: "/portfolio/resume",
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Resume", path: "/portfolio/resume" },
          ]),
          getPortfolioCollectionStructuredData({
            title: "Portfolio Resume",
            description:
              "Resume page for Anastasia Yakimovska with experience, education, skills, and downloadable PDF.",
            path: "/portfolio/resume",
          }),
        ]}
      />

      <PageHero
        actions={[
          { href: portfolioProfile.resumePath, label: "Download PDF" },
          { href: "/contact", label: "Contact", variant: "outline" },
        ]}
        description="Engineering, founder experience, product delivery, education, and leadership across the work so far."
        eyebrow="Portfolio"
        highlights={[
          "Software engineering foundation",
          "Project and product management distinction",
          "Founder and startup ecosystem experience",
        ]}
        title="Resume"
      />

      <Section
        description="The roles and environments behind my approach to products and delivery."
        eyebrow="Experience"
        title="Professional experience"
        tone="soft"
      >
        <div className="divide-y divide-border/45">
          {experience.map((item) => (
            <article
              key={`${item.organization}-${item.role}`}
              className="grid gap-6 py-6 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,0.24fr)_minmax(0,1.08fr)] lg:gap-10"
            >
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                  {item.organization}
                </p>
                <h2 className="mt-4 text-balance font-serif text-[clamp(1.55rem,2.2vw,2.45rem)] leading-[1] tracking-[-0.04em] text-foreground">
                  {item.role}
                </h2>
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
        </div>
      </Section>

      <Section
        description="Software engineering, product and project management, intellectual property, and technology transfer."
        eyebrow="Education"
        title="Education and programs"
        tone="muted"
      >
        <div className="divide-y divide-border/45">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.program}`}
              className="grid gap-6 py-6 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,0.24fr)_minmax(0,1.08fr)] lg:gap-10"
            >
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                  {item.institution}
                </p>
                <h2 className="mt-4 text-balance font-serif text-[clamp(1.45rem,2vw,2.2rem)] leading-[1] tracking-[-0.04em] text-foreground">
                  {item.program}
                </h2>
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
        description="Technical, product, analytical, and leadership strengths developed across disciplines."
        eyebrow="Skills"
        title="Core skill areas"
        tone="strong"
      >
        <div className="divide-y divide-border/45">
          {resumeSkillGroups.map((group) => (
            <article
              key={group.title}
              className="grid gap-6 py-6 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:gap-10"
            >
              <div>
                <h2 className="text-balance font-serif text-[clamp(1.45rem,2vw,2.1rem)] leading-[1] tracking-[-0.04em] text-foreground">
                  {group.title}
                </h2>
              </div>
              <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={`${group.title}-${item}`}
                      className="inline-flex rounded-full border border-border/70 bg-background/55 px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        description="The current two-page CV, available to read or download."
        eyebrow="PDF"
        title="Resume document"
        tone="soft"
      >
        <div className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-[rgba(8,15,28,0.82)]">
          <iframe
            aria-label="Resume PDF"
            className="h-[80vh] w-full bg-white"
            src={portfolioProfile.resumePath}
            title="Anastasia Yakimovska resume"
          />
        </div>
        <div className="mt-6">
          <Button asChild>
            <a href={portfolioProfile.resumePath}>Download PDF</a>
          </Button>
        </div>
      </Section>
    </>
  );
}
