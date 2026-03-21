import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/studio", "/work", "/about", "/contact"];
  const projectRoutes = projects.map((project) => `/work/${project.slug}`);
  const now = new Date();

  return [...routes, ...projectRoutes].map((path) => ({
    url: `${siteConfig.baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path.startsWith("/work/") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : path === "/work" ? 0.9 : 0.7,
  }));
}
