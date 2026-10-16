import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { ProjectDetailPage } from "@/components/site/project-detail-page";
import { getProjectBySlug, labProjects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbStructuredData, getPageStructuredData, getProjectStructuredData } from "@/lib/structured-data";

type LabProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return labProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: LabProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !labProjects.some((item) => item.slug === slug)) {
    return createPageMetadata({
      title: "Project not found",
      description: "The requested product page could not be found.",
      path: `/labs/${slug}`,
    });
  }

  return createPageMetadata({
    title: `${project.title} case study`,
    description: project.tagline,
    path: `/labs/${project.slug}`,
  });
}

export default async function LabProjectPage({ params }: LabProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !labProjects.some((item) => item.slug === slug)) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: project.title,
            description: project.tagline,
            path: `/labs/${project.slug}`,
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Labs", path: "/labs" },
            { name: project.title, path: `/labs/${project.slug}` },
          ]),
          getProjectStructuredData({
            project,
            path: `/labs/${project.slug}`,
          }),
        ]}
      />
      <ProjectDetailPage
        collectionHref="/labs"
        collectionLabel="Back to labs"
        project={project}
        secondaryCtaHref="/studio"
        secondaryCtaLabel="See studio work"
      />
    </>
  );
}
