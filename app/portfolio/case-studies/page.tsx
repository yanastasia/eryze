import { JsonLd } from "@/components/seo/json-ld";
import { CaseStudyCatalog } from "@/components/site/case-study-catalog";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { caseStudies, caseStudyCategories } from "@/data/case-studies";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbStructuredData,
  getCaseStudiesStructuredData,
  getPageStructuredData,
} from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Portfolio Case Studies",
  description:
    "Case studies across product management, project management, discovery, strategy, and agile delivery.",
  path: "/portfolio/case-studies",
  keywords: [
    "product management case studies",
    "project management case studies",
    "agile delivery portfolio",
    "discovery case studies",
  ],
});

export default function PortfolioCaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: "Portfolio Case Studies",
            description:
              "Case studies across product management, project management, discovery, strategy, and agile delivery.",
            path: "/portfolio/case-studies",
            pageType: "CollectionPage",
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Case Studies", path: "/portfolio/case-studies" },
          ]),
          getCaseStudiesStructuredData(caseStudies),
        ]}
      />
      <PageHero
        actions={[
          { href: "/portfolio/resume", label: "View resume", variant: "outline" },
          { href: "/contact", label: "Contact" },
        ]}
        description="Product strategy, project planning, delivery analysis, and public-sector work through the decisions behind each case."
        eyebrow="Portfolio"
        highlights={[
          "Featured case studies first",
          "Filter by product, project, discovery, strategy, or agile delivery",
          "Structured sections instead of generic project summaries",
        ]}
        title="The thinking behind the work."
      >
        <div className="eryze-panel w-full rounded-[1.75rem] p-5 sm:p-6">
          <p className="eryze-kicker">What is included</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>Product management work from research to PRD and success metrics</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>Project management work covering planning, governance, risk, and control</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>Retrospective and strategy work used to sharpen delivery judgment</span>
            </li>
          </ul>
        </div>
      </PageHero>

      <Section
        description="From discovery and strategy to planning, governance, and delivery."
        eyebrow="Index"
        title="Case studies"
        tone="soft"
      >
        <CaseStudyCatalog basePath="/portfolio/case-studies" categories={caseStudyCategories} studies={caseStudies} />
      </Section>
    </>
  );
}
