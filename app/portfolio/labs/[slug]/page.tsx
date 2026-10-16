import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/site/container";
import { PageHero } from "@/components/site/page-hero";
import { PortfolioSectionRenderer } from "@/components/site/portfolio-section-renderer";
import { getLabBySlug, labs } from "@/data/labs";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbStructuredData,
  getLabStructuredData,
  getPageStructuredData,
} from "@/lib/structured-data";

type PortfolioLabDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return labs.map((lab) => ({
    slug: lab.slug,
  }));
}

export async function generateMetadata({ params }: PortfolioLabDetailPageProps) {
  const { slug } = await params;
  const lab = getLabBySlug(slug);

  if (!lab) {
    return createPageMetadata({
      title: "Lab",
      description: "Product thinking lab.",
      path: `/portfolio/labs/${slug}`,
    });
  }

  return createPageMetadata({
    title: lab.title,
    description: lab.tagline,
    path: `/portfolio/labs/${lab.slug}`,
    keywords: [lab.category, lab.title, "product thinking lab"],
    type: "article",
  });
}

export default async function PortfolioLabDetailPage({ params }: PortfolioLabDetailPageProps) {
  const { slug } = await params;
  const lab = getLabBySlug(slug);

  if (!lab) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: lab.title,
            description: lab.tagline,
            path: `/portfolio/labs/${lab.slug}`,
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Labs", path: "/portfolio/labs" },
            { name: lab.title, path: `/portfolio/labs/${lab.slug}` },
          ]),
          getLabStructuredData(lab),
        ]}
      />
      <PageHero
        actions={[
          { href: "/portfolio/labs", label: "Back to labs", variant: "outline" },
          { href: "/portfolio/methods", label: "See methods" },
        ]}
        description={lab.hero.description}
        eyebrow={lab.hero.eyebrow}
        highlights={[lab.category]}
        title={lab.title}
      />

      <section className="py-8 sm:py-10">
        <Container>
          <PortfolioSectionRenderer
            relatedLinks={lab.relatedLinks}
            sections={lab.sections}
          />
        </Container>
      </section>
    </>
  );
}
