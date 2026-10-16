import { JsonLd } from "@/components/seo/json-ld";
import { Linkedin } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { PortfolioHomeSections } from "@/components/site/portfolio-home-sections";
import { featuredCaseStudies } from "@/data/case-studies";
import { labs } from "@/data/labs";
import { education, experience, homePageContent } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbStructuredData, getPageStructuredData, getPortfolioHomeStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Portfolio of Anastasia Yakimovska covering product management, project delivery, discovery, strategy, and resume-backed case studies.",
  path: "/portfolio",
  keywords: [
    "product management portfolio",
    "project management portfolio",
    "Anastasia Yakimovska",
    "case studies",
    "product thinking labs",
  ],
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: "Portfolio",
            description:
              "Portfolio of Anastasia Yakimovska covering product management, project delivery, discovery, strategy, and resume-backed case studies.",
            path: "/portfolio",
            pageType: "ProfilePage",
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
          getPortfolioHomeStructuredData(),
        ]}
      />
      <PageHero
        actions={[
          { href: "/portfolio/case-studies", label: "View case studies" },
          { href: "/contact", label: "Contact" },
          { href: "/portfolio/resume", label: "Resume", variant: "outline" },
        ]}
        description={homePageContent.hero.description}
        eyebrow={homePageContent.hero.eyebrow}
        highlights={homePageContent.hero.highlights}
        title={homePageContent.hero.title}
      >
        <div className="eryze-angle-frame eryze-panel eryze-panel-feature w-full rounded-[1.75rem] p-5 sm:p-6">
          <p className="eryze-kicker">Experience at a glance</p>
          <p className="mt-4 font-display text-3xl text-foreground">
            Technical grounding, founder perspective, and structured PM work in one place.
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>{experience[0]?.organization}: {experience[0]?.role}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>{experience[1]?.organization}: founder-led product and startup execution</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-accent">•</span>
              <span>{education[0]?.institution}: intellectual property and technology transfer</span>
            </li>
          </ul>
          <a
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brand-accent"
            href={homePageContent.linkedinUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin aria-hidden className="size-4" />
            LinkedIn
          </a>
        </div>
      </PageHero>

      <PortfolioHomeSections featuredStudies={featuredCaseStudies} labs={labs} />
    </>
  );
}
