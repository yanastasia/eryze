import { JsonLd } from "@/components/seo/json-ld";
import { LabCard } from "@/components/site/lab-card";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { labs } from "@/data/labs";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbStructuredData,
  getLabsStructuredData,
  getPageStructuredData,
} from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Portfolio Labs",
  description:
    "Shorter product thinking studies covering experiments, metrics, segmentation, prioritization, and strategy.",
  path: "/portfolio/labs",
  keywords: [
    "product thinking",
    "experiments",
    "HEART metrics",
    "segmentation",
    "prioritization",
  ],
});

export default function PortfolioLabsPage() {
  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: "Portfolio Labs",
            description:
              "Shorter product thinking studies covering experiments, metrics, segmentation, prioritization, and strategy.",
            path: "/portfolio/labs",
            pageType: "CollectionPage",
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Labs", path: "/portfolio/labs" },
          ]),
          getLabsStructuredData(labs),
        ]}
      />

      <PageHero
        actions={[
          { href: "/portfolio/case-studies", label: "View case studies", variant: "outline" },
          { href: "/portfolio/methods", label: "See methods" },
        ]}
        description="Focused explorations in product framing, experimentation, metrics, prioritization, and analysis."
        eyebrow="Portfolio"
        highlights={[
          "Experiments and learning loops",
          "Metrics and activation",
          "Segmentation and prioritization",
        ]}
        title="Product Thinking Labs"
      >
        <div className="eryze-panel w-full rounded-[1.75rem] p-5 sm:p-6">
          <p className="eryze-kicker">Included themes</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>Experiments and learning loops</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>Metrics and activation thinking</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>Segmentation, prioritization, and strategic framing</span>
            </li>
          </ul>
        </div>
      </PageHero>

      <Section
        description="Product questions explored through research, evidence, and practical decision frameworks."
        eyebrow="Library"
        title="The lab collection"
        tone="muted"
      >
        <div className="space-y-6">
          {labs.map((lab) => (
            <LabCard key={lab.slug} basePath="/portfolio/labs" lab={lab} />
          ))}
        </div>
      </Section>
    </>
  );
}
