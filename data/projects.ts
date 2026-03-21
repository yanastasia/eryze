import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "kidsgo",
    title: "KidsGo",
    tagline: "Discovery, booking, and operations platform for local children's activities",
    tags: ["Marketplace", "Bookings", "Platform", "Localization"],
    status: "Ongoing",
    category: "Platform",
    featured: true,
    order: 1,
    hero: {
      description: "Curated discovery, booking, and operations for local kids' activities",
    },
    overview: {
      who: "Parents, organizers, and admins",
      what: "Platform for discovery, booking, moderation, and catalog management",
      role: "Product strategy, system design, and full-stack delivery",
    },
    problem: [
      "Activity discovery is fragmented across multiple sources",
      "Organizers lack structured tools for publishing and bookings",
      "Manual coordination creates friction and inconsistency",
      "Early automation introduces data quality risks",
    ],
    goal: [
      "Centralize trusted activity discovery for parents",
      "Enable structured workflows for organizers",
      "Maintain strong admin control over data quality",
      "Prepare for scalable expansion across markets",
    ],
    solution: [
      "Built a multi-role platform for parents, organizers, and admins",
      "Introduced structured booking and catalog workflows",
      "Kept ingestion optional and controlled behind moderation",
      "Focused on reliable, human-reviewed operations",
    ],
    built: [
      {
        title: "Parent Experience",
        points: [
          "Search and compare activities with clear filters",
          "Structured booking flows with confirmations and cancellations",
          "Profiles support children and booking history",
        ],
      },
      {
        title: "Organizer Operations",
        points: [
          "Guided onboarding for activity providers",
          "Activity management with schedules and updates",
          "Booking dashboards with status visibility",
        ],
      },
      {
        title: "Admin Systems",
        points: [
          "Moderation workflows for content validation",
          "Separation of curated and imported data",
          "Controlled ingestion pipelines for future scaling",
        ],
      },
    ],
    tech: {
      stack: ["React", "TypeScript", "Vite", "Tailwind", "PostgreSQL"],
      notes: [
        "Typed frontend ensures consistency across roles",
        "Manual-first model improves early reliability",
        "Architecture supports future automation",
      ],
    },
    outcome: [
      "Core platform works without dependency on scraping",
      "Operational workflows are structured and reliable",
      "Platform is ready for pilot launch and iteration",
    ],
    learnings: [
      "Manual curation outperforms automation early",
      "Role separation improves usability",
      "Strong data ownership prevents conflicts",
    ],
  },
  {
    slug: "pautalia",
    title: "Pautalia Residence",
    tagline: "Real estate platform for exploring homes, floorplans, and inquiries",
    tags: ["Real Estate", "Platform", "Bilingual UX"],
    status: "Near Launch",
    category: "Client",
    featured: true,
    order: 2,
    hero: {
      description: "A structured property website for browsing homes with clarity and speed",
    },
    overview: {
      who: "Residential developer",
      what: "Bilingual property platform with inventory browsing and inquiry flows",
      role: "Product design, frontend architecture, and integration",
    },
    problem: [
      "Buyers struggled to compare available homes easily",
      "Inventory details created cluttered experiences",
      "Marketing lacked structure and clarity",
    ],
    goal: [
      "Present the building with a premium digital experience",
      "Enable fast navigation from overview to apartment",
      "Capture inquiries with minimal friction",
    ],
    solution: [
      "Built structured browsing for building, floors, and apartments",
      "Integrated interactive floorplan navigation",
      "Separated presentation from dynamic data",
    ],
    built: [
      {
        title: "Marketing Experience",
        points: [
          "Clear homepage hierarchy and visual structure",
          "Consistent layouts across all pages",
          "Refined client-facing messaging",
        ],
      },
      {
        title: "Inventory Browsing",
        points: [
          "Floor and apartment navigation flows",
          "Clickable floorplans for apartment selection",
          "Filtering by rooms, floor, and status",
        ],
      },
      {
        title: "Platform Setup",
        points: [
          "Inquiry flows for apartments and building",
          "API-ready structure for inventory",
          "Performance-optimized deployment setup",
        ],
      },
    ],
    tech: {
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      notes: [
        "Static content improves performance",
        "Database supports inventory and leads",
        "Bilingual structure supports localization",
      ],
    },
    outcome: [
      "Client-ready platform with strong presentation",
      "Improved browsing clarity for buyers",
      "Prepared for launch and future expansion",
    ],
    learnings: [
      "Clear hierarchy improves real estate UX",
      "Interactive visuals require precision",
      "Speed matters more than complexity",
    ],
  },
  {
    slug: "livrea",
    title: "Livrea",
    tagline: "Reading companion for progress, highlights, and focused reading habits",
    tags: ["Reading Product", "Mobile App", "Habit Design"],
    status: "In Progress",
    category: "Product",
    featured: true,
    order: 3,
    hero: {
      description: "A calm reading product connecting libraries, sessions, and device-backed progress",
    },
    overview: {
      who: "BOOX readers and tracking-focused users",
      what: "Reading companion for libraries, highlights, and focus sessions",
      role: "Product strategy and full-stack delivery",
    },
    problem: [
      "Reading data is fragmented across tools and devices",
      "BOOX users lack tailored software experiences",
      "Manual tracking is slow and inconsistent",
      "Social reading apps add noise instead of value",
    ],
    goal: [
      "Unify reading activity into one structured system",
      "Support BOOX workflows without fragile integrations",
      "Keep the product focused and habit-driven",
    ],
    solution: [
      "Built a BOOX-first reading system with import-based sync",
      "Connected reading sessions with library and activity",
      "Prioritized calm UX and clear reading signals",
    ],
    built: [
      {
        title: "Reading System",
        points: [
          "Manage books, progress, and reading status",
          "Surface highlights, ratings, and notes",
          "Support manual and imported updates",
        ],
      },
      {
        title: "Focus Sessions",
        points: [
          "Timed reading sessions with persistence",
          "Session history connected to reading activity",
          "Simple flows for starting and tracking sessions",
        ],
      },
      {
        title: "BOOX Integration",
        points: [
          "Import device exports into personal library",
          "Map highlights and progress to records",
          "Provide clear sync feedback",
        ],
      },
    ],
    tech: {
      stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
      notes: [
        "Single codebase supports mobile-first delivery",
        "Import-based sync reduces dependency risk",
        "Architecture supports iterative development",
      ],
    },
    outcome: [
      "Core reading loop connects sessions and library",
      "BOOX focus creates strong differentiation",
      "Product is approaching launch readiness",
    ],
    learnings: [
      "Narrow focus improves product clarity",
      "Import-based systems are more reliable early",
      "Users value meaningful tracking over social noise",
    ],
  },
  {
    slug: "acting-europe",
    title: "Acting Europe",
    tagline: "Platform for discovering theatre events and cultural experiences",
    tags: ["Cultural Platform", "Next.js", "Content UX"],
    status: "Ongoing Client Work",
    category: "Client",
    featured: true,
    order: 4,
    hero: {
      description: "A modern platform for exploring theatre events and venues across Europe",
    },
    overview: {
      who: "Cultural organization, theatre audiences, and event contributors",
      what: "Client platform for browsing and showcasing theatre events and venues",
      role: "Product design, full-stack development, and delivery structure",
    },
    problem: [
      "Theatre content is fragmented across multiple sources",
      "Users lack a unified discovery experience",
      "Smaller organizations have limited visibility",
    ],
    goal: [
      "Centralize theatre discovery into one platform",
      "Improve clarity and accessibility of cultural content",
      "Enable scalable expansion across regions",
    ],
    solution: [
      "Built modular platform for content-heavy browsing",
      "Designed navigation for multi-level content exploration",
      "Prepared system for future data integrations",
    ],
    built: [
      {
        title: "Platform System",
        points: [
          "Scalable Next.js architecture",
          "Reusable UI components",
          "Fast deployment workflow",
        ],
      },
      {
        title: "Exploration UX",
        points: [
          "Structured browsing for events and venues",
          "Clear navigation patterns",
          "Responsive layouts for discovery",
        ],
      },
    ],
    tech: {
      stack: ["Next.js", "TypeScript", "Tailwind"],
      notes: [
        "Component system supports scalability",
        "Content-first structure improves flexibility",
      ],
    },
    outcome: [
      "Strong foundation for cultural discovery platform",
      "Improved content accessibility",
      "Prepared for future scaling",
    ],
    learnings: [
      "Content platforms need strong structure",
      "Navigation defines usability",
      "Early architecture shapes scalability",
    ],
  },
];

export const sortedProjects = [...projects].sort((left, right) => {
  const featuredDelta = Number(right.featured ?? false) - Number(left.featured ?? false);

  if (featuredDelta !== 0) {
    return featuredDelta;
  }

  return left.order - right.order;
});

export const featuredProjects = sortedProjects.filter((project) => project.featured);

export const projectTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort((left, right) =>
  left.localeCompare(right),
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
