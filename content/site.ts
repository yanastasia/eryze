export type Capability = {
  title: string;
  description: string;
  outcomes: string[];
};

export type HomeService = {
  label: string;
  title: string;
  description: string;
  details: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type Credential = {
  title: string;
  label: string;
  description: string;
};

export type ServicePageSection = {
  title: string;
  description: string;
  bullets: string[];
};

export type ProofPoint = {
  label: string;
  value: string;
  description: string;
};

export const siteConfig = {
  name: "Eryze Studio",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://eryze.com",
  email: "anastasia@eryze.com",
  linkedinUrl: "https://www.linkedin.com/in/anastasia-yakimovska/",
  defaultTitle: "Eryze Studio",
  defaultDescription:
    "Eryze Studio designs and builds digital systems that help businesses grow with clarity, combining technical precision, collaborative thinking, and structured delivery.",
  navItems: [
    { href: "/", label: "Home" },
    { href: "/studio", label: "Studio" },
    { href: "/services", label: "Services" },
    { href: "/labs", label: "Labs" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const capabilities: Capability[] = [
  {
    title: "Product websites",
    description:
      "Public-facing websites that make the offer clear, credible, and easier to act on.",
    outcomes: ["Positioning translated into structure", "Responsive design systems", "Conversion-aware page logic"],
  },
  {
    title: "Platforms and portals",
    description:
      "User-facing systems for discovery, participation, coordination, and ongoing operational clarity.",
    outcomes: ["Structured content architecture", "Multi-audience user flows", "Scalable front-end foundations"],
  },
  {
    title: "Internal systems",
    description:
      "Internal tools that reduce coordination drag and turn recurring work into clearer systems.",
    outcomes: ["Role-aware interfaces", "Workflow simplification", "Maintenance-minded implementation"],
  },
  {
    title: "Automation-driven products",
    description:
      "Automation applied where it creates lift, visibility, and cleaner repeatability without overbuilding.",
    outcomes: ["Process mapping", "Human-in-the-loop automation", "Lean technical scope"],
  },
];

export const servicePageSections: ServicePageSection[] = [
  {
    title: "Websites and launch surfaces",
    description:
      "Public-facing digital presence for service businesses, products, and organizations that need sharper positioning and stronger execution.",
    bullets: [
      "Information architecture before page production",
      "Messaging translated into structure, hierarchy, and flow",
      "Responsive implementation with a clear review process",
    ],
  },
  {
    title: "Platforms and operational products",
    description:
      "Structured interfaces for discovery, participation, bookings, internal workflows, and multi-audience systems that need to hold up after launch.",
    bullets: [
      "User and content logic mapped before build work starts",
      "Clear product states, internal roles, and decision points",
      "Design and engineering shaped around long-term maintainability",
    ],
  },
  {
    title: "Business systems and automation",
    description:
      "Internal tools, recurring workflow systems, and automation paths that reduce friction without making the business dependent on fragile complexity.",
    bullets: [
      "Workflow clarity before automation",
      "Lean scope with human oversight where needed",
      "Implementation aimed at reliability, not spectacle",
    ],
  },
];

export const homeServices: HomeService[] = [
  {
    label: "Websites",
    title: "Websites that translate the offer into a clear, credible digital presence.",
    description:
      "Marketing sites and launch surfaces shaped around positioning, structure, and delivery discipline. The goal is not more pages. It is a sharper public system.",
    details: [
      "Page structure defined before visuals drift",
      "Responsive implementation built to spec",
      "Review loops that stay efficient",
    ],
  },
  {
    label: "Platforms",
    title: "Platforms built around real user flows, not abstract feature lists.",
    description:
      "Structured product interfaces built around how people actually move through the system. Logic is mapped first, decisions are surfaced clearly, and the resulting product is built to hold after launch.",
    details: [
      "User and content logic mapped first",
      "Key decisions surfaced at the right time",
      "Foundations that hold after launch",
    ],
  },
  {
    label: "Systems",
    title: "Systems that reduce manual work without making the solution heavier than it needs to be.",
    description:
      "Internal tools and automation that reduce manual work, clarify handoffs, and make recurring operations easier to trust. Scoped to what actually needs to exist right now.",
    details: [
      "Operational clarity for recurring workflows",
      "Automation applied where it earns its place",
      "Lean scope with maintainable delivery",
    ],
  },
];

export const idealProjectTypes = [
  "Founder-led products that need a credible first public presence.",
  "Organizations replacing fragmented workflows with a clearer digital system.",
  "Platforms with multiple audiences, content structures, or operational states.",
  "Teams that want thoughtful execution without building a large product organization too early.",
];

export const proofPoints: ProofPoint[] = [
  {
    label: "Studio model",
    value: "Strategy through build",
    description:
      "Business problem, product structure, and implementation decisions are handled inside one working system instead of split across disconnected vendors.",
  },
  {
    label: "Delivery lens",
    value: "Clarity and control",
    description:
      "Projects are scoped carefully, reviewed at the right moments, and built with enough visibility that clients are guided rather than overwhelmed.",
  },
  {
    label: "Cross-sector range",
    value: "Web, platforms, operations",
    description:
      "The work spans public-facing sites, structured product interfaces, real estate experiences, and internal workflow systems.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Clarify the business need first",
    description:
      "Every project starts with the problem, the audience, and the operational context. We ask the right questions, identify the constraints, and define what actually needs to be built before design or development begins.",
  },
  {
    title: "Shape the right digital form",
    description:
      "Architecture, flows, and content logic are made visible before implementation. You review the structure early so the system reflects how the business actually works.",
  },
  {
    title: "Build with precision and visibility",
    description:
      "You receive consistent progress updates throughout the build. Staging access is provided early, and if something needs your input, it is surfaced clearly and specifically.",
  },
  {
    title: "Hand over with clarity",
    description:
      "Handover includes context, not just files. You understand what was built, how to manage it, and what comes next without needing to chase for missing rationale.",
  },
];

export const workingPrinciples: Principle[] = [
  {
    title: "Clarity before decoration",
    description:
      "Good visuals matter, but the system has to communicate clearly before it tries to impress.",
  },
  {
    title: "Systems over surface sprawl",
    description:
      "The goal is a maintainable product surface, not a collection of disconnected one-off layouts.",
  },
  {
    title: "Automation where it earns its place",
    description:
      "Automation is useful when it removes repetitive work and increases clarity, not when it adds complexity for its own sake.",
  },
  {
    title: "Collaborative delivery",
    description:
      "Projects stay close to business goals, delivery tradeoffs, and the actual constraints behind each build without adding process theater.",
  },
];

export const founderProfile = {
  name: "Anastasia Yakimovska",
  role: "Founder, engineer, and product-minded builder",
  intro:
    "Eryze Studio is led by Anastasia Yakimovska, a software engineer and startup operator working across digital products, internal systems, and ambitious business-facing platforms.",
  summary: [
    "Engineering, product thinking, and startup execution in one working model.",
    "Cross-sector delivery across education, culture, real estate, operations, and early-stage ventures.",
    "A studio approach grounded in clear structure, collaborative delivery, and maintainable implementation.",
  ],
};

export const founderCredentials: Credential[] = [
  {
    title: "GlobalFoundries",
    label: "Engineer, Design Enablement (DFM)",
    description:
      "Infrastructure tooling, DFM development and QA, automation, and cross-regional program work in a complex engineering environment.",
  },
  {
    title: "Sofia University × WIPO",
    label: "Intellectual property and technology transfer",
    description:
      "Master’s study focused on moving research and technology toward commercialization, venture creation, and long-term regional impact.",
  },
  {
    title: "Brainster Academy",
    label: "Project and product management",
    description:
      "Distinction-level academy work across project planning, budgeting, risk, product strategy, and delivery structure.",
  },
  {
    title: "KidsGo",
    label: "Founder and product execution",
    description:
      "Product definition, user research, partnerships, investor-facing work, and GTM preparation for an in-house product.",
  },
  {
    title: "Cross-sector delivery",
    label: "Web, product, and operations",
    description:
      "Public websites, structured platforms, and operational tools delivered across different contexts and audiences.",
  },
];

export const contactGuidance = [
  "A short note on what you are building or improving.",
  "The main users, audience, or internal team involved.",
  "What feels blocked right now: positioning, structure, workflow, launch, or implementation.",
  "Any key timing constraints or launch windows.",
];
