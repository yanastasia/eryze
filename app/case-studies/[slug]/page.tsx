import { redirect } from "next/navigation";

type LegacyCaseStudyDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LegacyCaseStudyDetailPage({
  params,
}: LegacyCaseStudyDetailPageProps) {
  const { slug } = await params;
  redirect(`/portfolio/case-studies/${slug}`);
}
