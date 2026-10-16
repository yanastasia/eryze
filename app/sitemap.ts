import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { caseStudies } from "@/data/case-studies";
import { labs } from "@/data/labs";
import { labProjects, studioProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/studio",
    "/labs",
    "/portfolio",
    "/portfolio/case-studies",
    "/portfolio/labs",
    "/portfolio/methods",
    "/portfolio/writing",
    "/portfolio/resume",
    "/about",
    "/contact",
  ];

  const studioRoutes = studioProjects.map((project) => `/studio/${project.slug}`);
  const labRoutes = labProjects.map((project) => `/labs/${project.slug}`);
  const portfolioCaseStudyRoutes = caseStudies.map((study) => `/portfolio/case-studies/${study.slug}`);
  const portfolioLabRoutes = labs.map((lab) => `/portfolio/labs/${lab.slug}`);

  const now = new Date();
  const priorityMap = new Map<string, number>([
    ["/", 1],
    ["/studio", 0.94],
    ["/labs", 0.9],
    ["/portfolio", 0.88],
    ["/portfolio/case-studies", 0.84],
    ["/portfolio/labs", 0.82],
    ["/portfolio/methods", 0.78],
    ["/portfolio/writing", 0.76],
    ["/portfolio/resume", 0.74],
    ["/about", 0.76],
    ["/contact", 0.78],
  ]);

  return [
    ...routes,
    ...studioRoutes,
    ...labRoutes,
    ...portfolioCaseStudyRoutes,
    ...portfolioLabRoutes,
  ].map((path) => ({
    url: `${siteConfig.baseUrl}${path}`,
    lastModified: now,
    changeFrequency:
      path.startsWith("/studio/") ||
      path.startsWith("/labs/") ||
      path.startsWith("/portfolio/case-studies/") ||
      path.startsWith("/portfolio/labs/")
        ? "monthly"
        : "weekly",
    priority: priorityMap.get(path) ?? 0.72,
  }));
}
