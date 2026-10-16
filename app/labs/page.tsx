import { JsonLd } from "@/components/seo/json-ld";
import { CTABlock } from "@/components/site/cta-block";
import { PageHero } from "@/components/site/page-hero";
import { ProjectGrid } from "@/components/site/project-grid";
import { Section } from "@/components/site/section";
import { labProjects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbStructuredData,
  getPageStructuredData,
  getProjectCollectionStructuredData,
} from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Labs",
  description:
    "In-house product labs from Eryze, including KidsGo and Livrea, showing product strategy, delivery structure, and ongoing experimentation.",
  path: "/labs",
});

export default function LabsPage() {
  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: "Labs",
            description:
              "In-house product labs from Eryze, including KidsGo and Livrea, showing product strategy, delivery structure, and ongoing experimentation.",
            path: "/labs",
            pageType: "CollectionPage",
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Labs", path: "/labs" },
          ]),
          getProjectCollectionStructuredData({
            title: "Labs",
            description:
              "In-house product labs from Eryze, including KidsGo and Livrea, showing product strategy, delivery structure, and ongoing experimentation.",
            path: "/labs",
            projects: labProjects,
          }),
        ]}
      />

      <PageHero
        actions={[
          { href: "/contact", label: "Discuss a product" },
          { href: "/portfolio", label: "View portfolio", variant: "outline" },
        ]}
        description="Original product concepts where Eryze tests the idea, the operating model, and the system behind the experience."
        eyebrow="Labs"
        highlights={[
          "KidsGo",
          "Livrea",
          "In-house product direction",
        ]}
        title="Ideas earn their next iteration."
      >
        <div className="eryze-angle-frame eryze-panel eryze-panel-feature w-full rounded-[1.75rem] p-5">
          <p className="eryze-kicker">Product thesis</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>Start with a specific user problem and a narrow product promise</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>Test product logic through working systems and real operational constraints</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>Use evidence and iteration to decide what earns the next build cycle</span>
            </li>
          </ul>
        </div>
      </PageHero>

      <Section
        description="Two in-house products exploring how useful ideas become distinct, viable systems."
        eyebrow="Product work"
        motionVariant="line"
        title="Current labs"
      >
        <ProjectGrid projects={labProjects} />
      </Section>

      <CTABlock
        description="Eryze can help shape the product logic, delivery path, and implementation behind an idea ready to grow."
        primaryAction={{ href: "/contact", label: "Start a conversation" }}
        secondaryAction={{ href: "/studio", label: "See studio work" }}
        title="Building something of your own?"
      />
    </>
  );
}
