import { notFound, redirect } from "next/navigation";

import { getProjectPath, projects } from "@/data/projects";

type LegacyWorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function LegacyWorkDetailPage({ params }: LegacyWorkDetailPageProps) {
  const { slug } = await params;
  const targetPath = getProjectPath(slug);

  if (targetPath === `/work/${slug}`) {
    notFound();
  }

  redirect(targetPath);
}
