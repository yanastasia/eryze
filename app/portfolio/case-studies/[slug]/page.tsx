import { notFound, redirect } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/site/container";
import { PageHero } from "@/components/site/page-hero";
import { PortfolioSectionRenderer } from "@/components/site/portfolio-section-renderer";
import {
  caseStudies,
  getCanonicalCaseStudySlug,
  getCaseStudyBySlug,
} from "@/data/case-studies";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbStructuredData,
  getCaseStudyStructuredData,
  getPageStructuredData,
} from "@/lib/structured-data";

type PortfolioCaseStudyDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PortfolioCaseStudyDetailPageProps) {
  const { slug } = await params;
  const canonicalSlug = getCanonicalCaseStudySlug(slug);
  const study = getCaseStudyBySlug(canonicalSlug);

  if (!study) {
    return createPageMetadata({
      title: "Case Study",
      description: "Portfolio case study.",
      path: `/portfolio/case-studies/${slug}`,
    });
  }

  return createPageMetadata({
    title: study.title,
    description: study.tagline,
    path: `/portfolio/case-studies/${study.slug}`,
    keywords: [...study.categories, study.format, study.title],
    type: "article",
  });
}

export default async function PortfolioCaseStudyDetailPage({
  params,
}: PortfolioCaseStudyDetailPageProps) {
  const { slug } = await params;
  const canonicalSlug = getCanonicalCaseStudySlug(slug);

  if (canonicalSlug !== slug) {
    redirect(`/portfolio/case-studies/${canonicalSlug}`);
  }

  const study = getCaseStudyBySlug(canonicalSlug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: study.title,
            description: study.tagline,
            path: `/portfolio/case-studies/${study.slug}`,
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Case Studies", path: "/portfolio/case-studies" },
            { name: study.title, path: `/portfolio/case-studies/${study.slug}` },
          ]),
          getCaseStudyStructuredData(study),
        ]}
      />
      <PageHero
        actions={[
          { href: "/portfolio/case-studies", label: "Back to case studies", variant: "outline" },
          { href: "/contact", label: "Get in touch" },
        ]}
        description={study.hero.description}
        eyebrow={study.hero.eyebrow}
        highlights={study.categories}
        title={study.title}
      >
        <div className="eryze-panel w-full rounded-[1.75rem] p-5 sm:p-6">
          <p className="eryze-kicker">{study.format}</p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">Challenge</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{study.quickLook.challenge}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">Solution</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{study.quickLook.solution}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">Outcome status</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{study.quickLook.impact}</p>
            </div>
          </div>
        </div>
      </PageHero>

      <section className="py-8 sm:py-10">
        <Container>
          <PortfolioSectionRenderer
            relatedLinks={study.relatedLinks}
            sections={study.sections}
          />
        </Container>
      </section>
    </>
  );
}
