export type ProjectStatus = "Ongoing" | "Near Launch" | "In Progress";

export type ProjectBuiltBlock = {
  title: string;
  points: string[];
};

export type ProjectTech = {
  stack: string[];
  notes: string[];
};

export type ProjectOverview = {
  who: string;
  what: string;
  role: string;
};

export type ProjectHero = {
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  status: ProjectStatus;
  category: string;
  featured?: boolean;
  order: number;
  hero: ProjectHero;
  overview: ProjectOverview;
  problem: string[];
  goal: string[];
  solution: string[];
  built: ProjectBuiltBlock[];
  tech: ProjectTech;
  outcome: string[];
  learnings: string[];
};
