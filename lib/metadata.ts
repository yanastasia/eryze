import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type MetadataOpenGraphType = "article" | "website";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  keywords?: string[];
  type?: MetadataOpenGraphType;
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return new URL(normalizedPath, siteConfig.baseUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  imagePath = "/opengraph-image",
  keywords,
  type = "website",
}: MetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      type,
      locale: "en_US",
      images: [
        {
          url: absoluteUrl(imagePath),
          width: 1200,
          height: 630,
          alt: `${title} | ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(imagePath)],
    },
  };
}
