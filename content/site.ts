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
    title: "Positioning-led websites built to explain the offer clearly.",
    description:
      "Marketing sites and launch pages designed to communicate value quickly and turn attention into qualified conversations.",
    details: [
      "Messaging and page structure",
      "Responsive design systems",
      "Conversion-focused build quality",
    ],
  },
  {
    label: "Platforms",
    title: "Client and product platforms shaped around real user flows.",
    description:
      "Structured interfaces for discovery, coordination, booking, publishing, and other multi-step product experiences.",
    details: [
      "User-facing product flows",
      "Content and operations layers",
      "Clean front-end architecture",
    ],
  },
  {
    label: "Systems",
    title: "Internal tools and automation that simplify recurring work.",
    description:
      "Operational systems built to reduce manual effort, improve clarity, and support the teams using them day to day.",
    details: [
      "Internal workflow tools",
      "Automation where it adds value",
      "Maintainable implementation",
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
    title: "Frame the opportunity",
    description:
      "Clarify the audience, the workflow, and the business constraints before design or development starts.",
  },
  {
    title: "Shape the system",
    description:
      "Turn positioning, content, and product logic into a lean structure that can scale without becoming fragile.",
  },
  {
    title: "Build with focus",
    description:
      "Implement the most valuable surface area first with strong foundations, clear components, and pragmatic scope control.",
  },
  {
    title: "Iterate after launch",
    description:
      "Use real usage, feedback, and delivery learnings to refine the product instead of overbuilding up front.",
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
