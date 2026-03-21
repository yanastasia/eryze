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

export const siteConfig = {
  name: "Eryze Studio",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://eryze.com",
  email: "anastasiayakimovska@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/anastasia-yakimovska/",
  defaultTitle: "Eryze Studio",
  defaultDescription:
    "Founder-led development studio building modern websites, digital products, internal systems, and automation-first platforms.",
  navItems: [
    { href: "/", label: "Home" },
    { href: "/studio", label: "Studio" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const capabilities: Capability[] = [
  {
    title: "Product websites",
    description:
      "Launch surfaces that explain the product fast and guide the next action.",
    outcomes: ["Positioning-led messaging", "Responsive design system", "Conversion-focused pages"],
  },
  {
    title: "Platforms and portals",
    description:
      "User-facing systems for discovery, participation, coordination, and visibility.",
    outcomes: ["Structured content architecture", "Clear user flows", "Scalable front-end foundations"],
  },
  {
    title: "Internal systems",
    description:
      "Operational tooling that reduces manual coordination and cleans up key workflows.",
    outcomes: ["Role-aware interfaces", "Workflow simplification", "Maintenance-minded implementation"],
  },
  {
    title: "Automation-driven products",
    description:
      "Automation applied only where it removes friction and improves repeatability.",
    outcomes: ["Process mapping", "Human-in-the-loop automation", "Lean technical scope"],
  },
];

export const homeServices: HomeService[] = [
  {
    label: "Websites",
    title: "Websites that communicate the offer clearly and get delivered cleanly.",
    description:
      "Marketing sites and launch pages that communicate your offer clearly — scoped properly upfront, built to spec, and delivered without back-and-forth that eats your time.",
    details: [
      "Scope and page structure defined upfront",
      "Responsive implementation built to spec",
      "Clear review points without process drag",
    ],
  },
  {
    label: "Platforms",
    title: "Platforms built around real user flows and long-term clarity.",
    description:
      "Structured product interfaces built around real user flows. We map the logic before touching code, flag decisions when they need your input, and build on foundations that hold up after launch.",
    details: [
      "Logic mapped before implementation starts",
      "Key decisions surfaced at the right time",
      "Foundations that hold after launch",
    ],
  },
  {
    label: "Systems",
    title: "Systems that reduce manual work without overbuilding the solution.",
    description:
      "Internal tools and automation that reduce manual work and create clarity. Scoped to what actually needs to exist — not overbuilt for a future that may never arrive.",
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

export const processSteps: ProcessStep[] = [
  {
    title: "Scope before anything else",
    description:
      "Every project starts with a structured brief and a defined scope. We ask the right questions, identify the constraints, and agree on what is being built before design or development starts. Nothing is assumed.",
  },
  {
    title: "Structure that holds",
    description:
      "Architecture, flows, and content logic are defined and shared before building begins. You review the structure to confirm it reflects how the business actually works.",
  },
  {
    title: "Regular updates, no chasing",
    description:
      "You receive consistent progress updates throughout the build. Staging access is provided early, and if something needs your input, we surface it clearly and specifically.",
  },
  {
    title: "Delivered and documented",
    description:
      "Handover includes context, not just files. You understand what was built, how to manage it, and what comes next without needing to come back to us for answers that should have been included.",
  },
];

export const workingPrinciples: Principle[] = [
  {
    title: "Positioning before polish",
    description:
      "Good visuals matter, but the product has to communicate clearly before it tries to impress.",
  },
  {
    title: "Reusable systems over page sprawl",
    description:
      "The goal is a maintainable product surface, not a collection of disconnected one-off layouts.",
  },
  {
    title: "Automation where it earns its place",
    description:
      "Automation is useful when it removes repetitive work and increases clarity, not when it adds complexity for its own sake.",
  },
  {
    title: "Founder-led collaboration",
    description:
      "Projects stay close to business goals, decision velocity, and product tradeoffs instead of getting lost in layers.",
  },
];

export const founderProfile = {
  name: "Anastasia Yakimovska",
  role: "Founder, engineer, and product-minded builder",
  intro:
    "Eryze Studio is led by Anastasia Yakimovska, a software engineer and startup operator working across digital products, internal systems, and founder-led platforms.",
  summary: [
    "Engineering, product thinking, and startup execution in one working model.",
    "Cross-sector delivery across education, culture, operations, and early-stage ventures.",
    "A studio approach grounded in clear positioning and maintainable implementation.",
  ],
};

export const founderCredentials: Credential[] = [
  {
    title: "GlobalFoundries",
    label: "Engineering and automation",
    description:
      "Built internal tooling, automation flows, and technical systems inside a complex engineering environment.",
  },
  {
    title: "KidsGo",
    label: "Founder and product execution",
    description:
      "Built a flagship product with user research, product definition, partnerships, and GTM preparation.",
  },
  {
    title: "Cross-sector delivery",
    label: "Web, product, and operations",
    description:
      "Delivered public websites, structured platforms, and operational tools across different contexts.",
  },
  {
    title: "Ecosystem exposure",
    label: "Startups and venture workflows",
    description:
      "Experience shaped by accelerators, venture programs, and venture workflow problem-solving.",
  },
];

export const contactGuidance = [
  "A short note on what you are building or improving.",
  "The main users, audience, or internal team involved.",
  "What feels blocked right now: positioning, structure, workflow, launch, or implementation.",
  "Any key timing constraints or launch windows.",
];
