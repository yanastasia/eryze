export type PortfolioCategory =
  | "Product Management"
  | "Project Management"
  | "Discovery"
  | "Strategy"
  | "Agile Delivery";

export type ContentTone = "default" | "highlight";

export type FactItem = {
  label: string;
  value: string;
};

export type ArtifactItem = {
  title: string;
  description: string;
  href?: string;
};

export type RelatedLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type BulletSection = {
  type: "bullets";
  title: string;
  description?: string;
  items: string[];
  tone?: ContentTone;
};

export type FactsSection = {
  type: "facts";
  title: string;
  description?: string;
  items: FactItem[];
};

export type ArtifactsSection = {
  type: "artifacts";
  title: string;
  description?: string;
  items: ArtifactItem[];
};

export type PortfolioSection = BulletSection | FactsSection | ArtifactsSection;

export type CaseStudyQuickLook = {
  challenge: string;
  solution: string;
  impact: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  format: string;
  categories: PortfolioCategory[];
  featured: boolean;
  order: number;
  hero: {
    eyebrow: string;
    description: string;
  };
  quickLook: CaseStudyQuickLook;
  sections: PortfolioSection[];
  relatedLinks?: RelatedLink[];
};

export type Lab = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: string;
  order: number;
  hero: {
    eyebrow: string;
    description: string;
  };
  sections: PortfolioSection[];
  relatedLinks?: RelatedLink[];
};

export type Method = {
  title: string;
  description: string;
  examples: {
    label: string;
    href: string;
  }[];
};

export type WritingGroup = {
  title: string;
  entries: {
    title: string;
    description: string;
    href?: string;
    external?: boolean;
    status: string;
  }[];
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description: string[];
};

export type EducationItem = {
  program: string;
  institution: string;
  period: string;
  description: string[];
};
