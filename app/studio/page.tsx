import { JsonLd } from "@/components/seo/json-ld";
import { CTABlock } from "@/components/site/cta-block";
import { PageHero } from "@/components/site/page-hero";
import { ProjectGrid } from "@/components/site/project-grid";
import { Section } from "@/components/site/section";
import { studioProjects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbStructuredData,
  getPageStructuredData,
  getProjectCollectionStructuredData,
  getStudioServiceStructuredData,
} from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Studio",
  description:
    "Selected studio work from Eryze across websites, platforms, and digital systems built with structure, clarity, and delivery discipline.",
  path: "/studio",
});

export default function StudioPage() {
  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: "Studio",
            description:
              "Selected studio work from Eryze across websites, platforms, and digital systems built with structure, clarity, and delivery discipline.",
            path: "/studio",
            pageType: "CollectionPage",
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Studio", path: "/studio" },
          ]),
          getProjectCollectionStructuredData({
            title: "Studio",
            description:
              "Selected studio work from Eryze across websites, platforms, and digital systems built with structure, clarity, and delivery discipline.",
            path: "/studio",
            projects: studioProjects,
          }),
          getStudioServiceStructuredData(),
        ]}
      />

      <PageHero
        actions={[
          { href: "/contact", label: "Discuss a project" },
          { href: "/labs", label: "View labs", variant: "outline" },
        ]}
        description="Digital work for real audiences—clear in its purpose, thoughtful in its structure, and dependable in delivery."
        eyebrow="Studio"
        highlights={[
          "Public-facing platforms and service websites",
          "Structured browsing, booking, and information systems",
          "Execution shaped around business clarity",
        ]}
        title="Ambitious ideas, made tangible."
      >
        <div className="eryze-angle-frame eryze-panel eryze-panel-feature w-full rounded-[1.75rem] p-5">
          <p className="eryze-kicker">Delivery scope</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>Product definition, experience design, and full-stack delivery</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>Content, commerce, booking, inventory, and operational workflows</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>Launch infrastructure, analytics foundations, and ongoing iteration</span>
            </li>
          </ul>
        </div>
      </PageHero>

      <Section
        description="Selected websites and platforms, from early definition through launch."
        eyebrow="Selected projects"
        motionVariant="line"
        title="Selected studio work"
      >
        <ProjectGrid projects={studioProjects} />
      </Section>

      <CTABlock
        description="For public platforms, property sites, service websites, and client-facing products that need a clearer form."
        primaryAction={{ href: "/contact", label: "Get in touch" }}
        secondaryAction={{ href: "/portfolio", label: "View founder portfolio" }}
        title="Have something worth bringing into focus?"
      />
    </>
  );
}
