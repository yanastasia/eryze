import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { ProjectDetailPage } from "@/components/site/project-detail-page";
import { getProjectBySlug, studioProjects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbStructuredData, getPageStructuredData, getProjectStructuredData } from "@/lib/structured-data";

type StudioProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return studioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: StudioProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !studioProjects.some((item) => item.slug === slug)) {
    return createPageMetadata({
      title: "Project not found",
      description: "The requested case study could not be found.",
      path: `/studio/${slug}`,
    });
  }

  return createPageMetadata({
    title: `${project.title} case study`,
    description: project.tagline,
    path: `/studio/${project.slug}`,
  });
}

export default async function StudioProjectPage({ params }: StudioProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !studioProjects.some((item) => item.slug === slug)) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: project.title,
            description: project.tagline,
            path: `/studio/${project.slug}`,
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Studio", path: "/studio" },
            { name: project.title, path: `/studio/${project.slug}` },
          ]),
          getProjectStructuredData({
            project,
            path: `/studio/${project.slug}`,
          }),
        ]}
      />
      <ProjectDetailPage
        collectionHref="/studio"
        collectionLabel="Back to studio"
        project={project}
        secondaryCtaHref="/labs"
        secondaryCtaLabel="See product labs"
      />
    </>
  );
}
