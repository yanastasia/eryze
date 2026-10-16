import { founderProfile, siteConfig } from "@/content/site";
import { getProjectPath } from "@/data/projects";
import { portfolioProfile } from "@/data/portfolio";
import { absoluteUrl } from "@/lib/metadata";
import type { CaseStudy, Lab } from "@/types/portfolio";
import type { Project } from "@/types/project";

type StructuredData = Record<string, unknown>;

const organizationId = absoluteUrl("/#organization");
const personId = absoluteUrl("/#person");
const websiteId = absoluteUrl("/#website");

type BreadcrumbItem = {
  name: string;
  path: string;
};

type PageStructuredDataInput = {
  aboutId?: string;
  description: string;
  pageType?: "AboutPage" | "CollectionPage" | "ContactPage" | "ProfilePage" | "WebPage";
  path: string;
  title: string;
};

type ProjectCollectionInput = {
  description: string;
  path: string;
  projects: Project[];
  title: string;
};

type ProjectStructuredDataInput = {
  path: string;
  project: Project;
};

type PortfolioCollectionInput = {
  description: string;
  path: string;
  title: string;
};

export function getOrganizationStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    email: siteConfig.email,
    founder: {
      "@id": personId,
    },
    sameAs: [siteConfig.linkedinUrl],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "business inquiries",
      email: siteConfig.email,
      url: absoluteUrl("/contact"),
      availableLanguage: ["en"],
      areaServed: "Worldwide",
    },
  };
}

export function getPersonStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: founderProfile.name,
    jobTitle: founderProfile.role,
    url: siteConfig.baseUrl,
    email: portfolioProfile.email,
    sameAs: [portfolioProfile.linkedinUrl],
    worksFor: {
      "@id": organizationId,
    },
    knowsAbout: [
      "Software Engineering",
      "Product Management",
      "Project Management",
      "Digital Products",
      "Automation",
    ],
  };
}

export function getWebsiteStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.baseUrl,
    name: siteConfig.name,
    description: siteConfig.defaultDescription,
    publisher: {
      "@id": organizationId,
    },
    about: {
      "@id": personId,
    },
    inLanguage: "en",
  };
}

export function getPageStructuredData({
  aboutId = organizationId,
  description,
  pageType = "WebPage",
  path,
  title,
}: PageStructuredDataInput): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": absoluteUrl(`${path}#webpage`),
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": aboutId,
    },
    inLanguage: "en",
  };
}

export function getBreadcrumbStructuredData(items: BreadcrumbItem[]): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getAboutStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/about#profile"),
    name: founderProfile.name,
    jobTitle: founderProfile.role,
    description: founderProfile.intro,
    url: absoluteUrl("/about"),
    worksFor: {
      "@id": organizationId,
    },
    sameAs: [portfolioProfile.linkedinUrl],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Sofia University “St. Kliment Ohridski”",
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "Brainster Academy for Project and Product Management",
      },
    ],
  };
}

export function getContactPointStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    contactType: "business inquiries",
    email: siteConfig.email,
    url: absoluteUrl("/contact"),
    areaServed: "Worldwide",
    availableLanguage: ["en"],
  };
}

export function getProjectCollectionStructuredData({
  description,
  path,
  projects,
  title,
}: ProjectCollectionInput): StructuredData {
  return {
    ...getPageStructuredData({
      title,
      description,
      path,
      pageType: "CollectionPage",
    }),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(getProjectPath(project.slug)),
        name: project.title,
        description: project.tagline,
      })),
    },
  };
}

export function getProjectStructuredData({
  path,
  project,
}: ProjectStructuredDataInput): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": absoluteUrl(`${path}#project`),
    name: project.title,
    description: project.tagline,
    abstract: project.hero.description,
    author: {
      "@id": organizationId,
    },
    creator: {
      "@id": personId,
    },
    mainEntityOfPage: absoluteUrl(path),
    keywords: project.tags.join(", "),
    url: absoluteUrl(path),
  };
}

export function getPortfolioHomeStructuredData(): StructuredData {
  return {
    ...getPageStructuredData({
      title: "Portfolio",
      description:
        "Portfolio of Anastasia Yakimovska covering product management, project delivery, discovery, strategy, and resume-backed work.",
      path: "/portfolio",
      pageType: "ProfilePage",
      aboutId: personId,
    }),
    mainEntity: {
      "@id": personId,
    },
  };
}

export function getCaseStudiesStructuredData(
  studies: CaseStudy[],
  path = "/portfolio/case-studies",
): StructuredData {
  return {
    ...getPageStructuredData({
      title: "Portfolio Case Studies",
      description:
        "Case studies across product management, project management, discovery, strategy, and agile delivery.",
      path,
      pageType: "CollectionPage",
      aboutId: personId,
    }),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [...studies]
        .sort((left, right) => left.order - right.order)
        .map((study, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`${path}/${study.slug}`),
          name: study.title,
          description: study.tagline,
        })),
    },
  };
}

export function getCaseStudyStructuredData(
  study: CaseStudy,
  path = `/portfolio/case-studies/${study.slug}`,
): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": absoluteUrl(`${path}#case-study`),
    name: study.title,
    description: study.tagline,
    abstract: study.summary,
    author: {
      "@id": personId,
    },
    mainEntityOfPage: absoluteUrl(path),
    about: study.categories,
    keywords: study.categories.join(", "),
    url: absoluteUrl(path),
  };
}

export function getLabsStructuredData(
  items: Lab[],
  path = "/portfolio/labs",
): StructuredData {
  return {
    ...getPageStructuredData({
      title: "Portfolio Labs",
      description:
        "Shorter product thinking studies covering experiments, metrics, segmentation, prioritization, and strategy.",
      path,
      pageType: "CollectionPage",
      aboutId: personId,
    }),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [...items]
        .sort((left, right) => left.order - right.order)
        .map((lab, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`${path}/${lab.slug}`),
          name: lab.title,
          description: lab.tagline,
        })),
    },
  };
}

export function getLabStructuredData(
  lab: Lab,
  path = `/portfolio/labs/${lab.slug}`,
): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": absoluteUrl(`${path}#lab`),
    name: lab.title,
    description: lab.tagline,
    abstract: lab.summary,
    author: {
      "@id": personId,
    },
    mainEntityOfPage: absoluteUrl(path),
    about: lab.category,
    url: absoluteUrl(path),
  };
}

export function getStudioServiceStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: siteConfig.name,
    provider: {
      "@id": organizationId,
    },
    areaServed: "Worldwide",
    description: siteConfig.defaultDescription,
    serviceType: ["Website development", "Platform development", "Internal tools"],
    url: absoluteUrl("/studio"),
  };
}

export function getPortfolioCollectionStructuredData({
  description,
  path,
  title,
}: PortfolioCollectionInput): StructuredData {
  return getPageStructuredData({
    aboutId: personId,
    description,
    path,
    title,
    pageType: "CollectionPage",
  });
}
