import type {
  EducationItem,
  ExperienceItem,
  Method,
  WritingGroup,
} from "@/types/portfolio";

export const portfolioProfile = {
  name: "Anastasia Yakimovska",
  role: "Engineer, founder, and product builder",
  tagline:
    "Software engineering foundation, startup experience, and structured product thinking across discovery, planning, delivery, and learning.",
  email: "anastasia@eryze.com",
  linkedinUrl: "https://www.linkedin.com/in/anastasia-yakimovska/",
  resumePath: "/resume/anastasia-yakimovska-resume.pdf",
  location: "Sofia, Bulgaria",
};

export const homePageContent = {
  linkedinUrl: portfolioProfile.linkedinUrl,
  hero: {
    eyebrow: "Portfolio",
    title: "Engineering, product building, and technology transfer in practice.",
    description:
      "I work across semiconductor engineering, founder-led software delivery, product strategy, and the path that carries technology from research to market.",
    highlights: [
      "Engineer, Design Enablement at GlobalFoundries",
      "Founder of Eryze and KidsGo",
      "Master’s in Intellectual Property and Technology Transfer",
    ],
  },
  methodsIntro:
    "Methods shaped by engineering practice, founder experience, formal study, and the realities of delivery.",
  writingIntro:
    "Case studies, reflections, and framework notes from the decisions behind the work.",
  aboutIntro:
    "I moved from software engineering into product and project management because I like the point where business clarity, product judgment, and delivery discipline meet.",
  finalCta:
    "The case studies hold the detail. The resume gives you the wider arc.",
};

export const portfolioEntryPoints = [
  {
    title: "Case studies",
    description:
      "Flagship product and project management work, structured around problem, process, and outcome.",
    href: "/portfolio/case-studies",
    label: "View case studies",
  },
  {
    title: "Product thinking labs",
    description:
      "Shorter exercises in experiments, prioritization, metrics, segmentation, and strategy.",
    href: "/portfolio/labs",
    label: "Open labs",
  },
  {
    title: "Methods",
    description:
      "The repeatable toolkit behind the portfolio: discovery, planning, risk, prioritization, and retrospectives.",
    href: "/portfolio/methods",
    label: "See methods",
  },
  {
    title: "Resume",
    description:
      "Experience, education, technical foundations, leadership, and selected programs.",
    href: "/portfolio/resume",
    label: "Open resume",
  },
] as const;

export const aboutContent = {
  story: [
    "I come from software engineering, which means I am comfortable close to the product, the constraints, and the implementation reality behind decisions.",
    "That technical background pushed me toward product and project management because I kept gravitating to the questions before the build: what problem matters, what the first version needs to prove, what risks exist, and how the work should be run.",
    "My experience spans engineering at GlobalFoundries, founder work through Eryze and KidsGo, and project and product management training at Brainster Academy, where I graduated with distinction.",
    "I am now pursuing a master’s in Intellectual Property and Technology Transfer through Sofia University and WIPO, focused on how research becomes venture-ready technology and how Southeast Europe can create, finance, and retain more of its own technology companies.",
  ],
  whyPm: [
    "I like shaping clarity before complexity takes over.",
    "I care about whether a plan can hold up once execution starts.",
    "I enjoy the intersection of product logic, stakeholder alignment, and delivery discipline.",
  ],
  problemTypes: [
    "Ambitious ideas that need sharper scope before delivery starts.",
    "Digital products with multiple stakeholders, dependencies, or operational edge cases.",
    "Early-stage concepts that need research, prioritization, and clearer product thinking.",
    "Projects where communication quality matters as much as execution quality.",
  ],
  values: [
    "Clarity before expansion",
    "Thoughtful scope over inflated delivery",
    "Structured communication",
    "Work that can be explained and defended",
  ],
};

export const experience: ExperienceItem[] = [
  {
    role: "Engineer, Design Enablement (DFM)",
    organization: "GlobalFoundries",
    period: "Sep 2023 — Present",
    description: [
      "Develop and maintain web-based and UNIX infrastructure tools for global DFM workflows.",
      "Deliver development and QA across process technologies, contributing to a dozen successful releases.",
      "Lead automation work, support global program-management adoption, and co-authored research on ML-assisted DFM optimization.",
    ],
  },
  {
    role: "Founder",
    organization: "Eryze",
    period: "2025 — Present",
    description: [
      "Scope, design, and deliver client software across frontend, backend, data architecture, and deployment.",
      "Lead product and development for platforms across real estate, culture, and independent publishing.",
      "Manage client relationships, requirements, and delivery from first brief through launch.",
    ],
  },
  {
    role: "Founder",
    organization: "KidsGo",
    period: "Ongoing",
    description: [
      "Led product design, research, partnerships, investor pitching, and operational direction.",
      "Built business and financial plans and represented the startup in European accelerator programs.",
      "Placed second in the Young Entrepreneurs in Science competition in 2023.",
    ],
  },
  {
    role: "Social Media and Event Manager",
    organization: "Cafe Bar Ministerstvo",
    period: "Jan 2021 — Apr 2024",
    description: [
      "Coordinated events and reservations in a high-volume hospitality setting.",
      "Owned social media strategy and content direction for an audience of more than 3,000 followers.",
      "Worked with creative collaborators to keep brand communication consistent.",
    ],
  },
  {
    role: "Selected participant",
    organization: "LAUNCHub VC Crash Course",
    period: "2025",
    description: [
      "Studied venture capital fundamentals, startup assessment, product-market fit, and due diligence.",
      "Researched and wrote about universities as startup hubs in the Balkan ecosystem.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    program: "Master in Intellectual Property and Technology Transfer",
    institution: "Sofia University “St. Kliment Ohridski” × WIPO",
    period: "2026 — Present",
    description: [
      "Focused on how research, intellectual property, investment, and technology transfer move innovation from lab and code to market.",
      "Exploring university spin-offs, venture creation, and stronger innovation ecosystems in Southeast Europe.",
    ],
  },
  {
    program: "Academy for Project and Product Management",
    institution: "Brainster Academy",
    period: "May 2025 — Feb 2026",
    description: [
      "Completed a hands-on program covering project planning, budgeting, risk and change management, product-market fit, agile, design thinking, and launch strategy.",
      "Graduated with distinction with a final score of 91/100.",
      "Achieved full marks on hackathons and extra-credit project work.",
    ],
  },
  {
    program: "BSc, Software Engineering",
    institution: "Sofia University “St. Kliment Ohridski”",
    period: "2026",
    description: [
      "Technical grounding across software development, systems thinking, and implementation work.",
    ],
  },
];

export const methods: Method[] = [
  {
    title: "Discovery interviews",
    description: "Finding what users are really trying to solve before turning the conversation into features.",
    examples: [
      { label: "Capadana", href: "/portfolio/case-studies/capadana" },
      { label: "KidsGo strategy", href: "/portfolio/labs/kidsgo-strategy" },
    ],
  },
  {
    title: "Personas and empathy maps",
    description: "Using segment-specific thinking to make product choices sharper and easier to defend.",
    examples: [
      { label: "Capadana", href: "/portfolio/case-studies/capadana" },
      { label: "Netflix segmentation", href: "/portfolio/labs/netflix-segmentation" },
    ],
  },
  {
    title: "Problem statements",
    description: "Turning broad ambition into a problem that is clear enough to prioritize against.",
    examples: [
      { label: "Census digitization", href: "/portfolio/case-studies/census-digitization" },
      { label: "Gmail experiment", href: "/portfolio/labs/gmail-experiment" },
    ],
  },
  {
    title: "PRDs",
    description: "Documenting what the product needs to do, for whom, and how success will be judged.",
    examples: [
      { label: "Capadana", href: "/portfolio/case-studies/capadana" },
      { label: "Dental clinic MVP planning", href: "/portfolio/case-studies/dental-web-app" },
    ],
  },
  {
    title: "Roadmaps",
    description: "Sequencing work around what the product needs to prove first instead of what sounds largest.",
    examples: [
      { label: "KidsGo strategy", href: "/portfolio/labs/kidsgo-strategy" },
      { label: "Spotify prioritization", href: "/portfolio/labs/spotify-prioritization" },
    ],
  },
  {
    title: "Stakeholder management",
    description: "Making roles, expectations, and communication paths visible before friction shows up.",
    examples: [
      { label: "Dental clinic MVP planning", href: "/portfolio/case-studies/dental-web-app" },
      { label: "Census digitization", href: "/portfolio/case-studies/census-digitization" },
    ],
  },
  {
    title: "Risk management",
    description: "Surfacing dependencies and uncertainty early enough to shape the plan, not just document it.",
    examples: [
      { label: "Viand retrospective", href: "/portfolio/case-studies/viand-retrospective" },
      { label: "Dental clinic MVP planning", href: "/portfolio/case-studies/dental-web-app" },
    ],
  },
  {
    title: "Budgeting",
    description: "Linking cost logic to scope, assumptions, and the real delivery path.",
    examples: [
      { label: "Dental clinic MVP planning", href: "/portfolio/case-studies/dental-web-app" },
      { label: "Census digitization", href: "/portfolio/case-studies/census-digitization" },
    ],
  },
  {
    title: "Experiments",
    description: "Designing small tests with a clear behavioral question and a metric that tells you what to do next.",
    examples: [
      { label: "Gmail experiment", href: "/portfolio/labs/gmail-experiment" },
      { label: "Spotify HEART metrics", href: "/portfolio/labs/spotify-heart-metrics" },
    ],
  },
  {
    title: "Metrics",
    description: "Choosing signals that reflect value creation, not just surface activity.",
    examples: [
      { label: "Spotify HEART metrics", href: "/portfolio/labs/spotify-heart-metrics" },
      { label: "Capadana", href: "/portfolio/case-studies/capadana" },
    ],
  },
  {
    title: "Prioritization",
    description: "Turning mixed evidence into a call that can be explained, challenged, and acted on.",
    examples: [
      { label: "Spotify prioritization", href: "/portfolio/labs/spotify-prioritization" },
      { label: "KidsGo strategy", href: "/portfolio/labs/kidsgo-strategy" },
    ],
  },
  {
    title: "Retrospectives",
    description: "Using delivery hindsight to improve future project control and product decision-making.",
    examples: [
      { label: "Viand retrospective", href: "/portfolio/case-studies/viand-retrospective" },
      { label: "User stories, MVP, and value proposition", href: "/portfolio/labs/user-stories-mvp-value-proposition" },
    ],
  },
];

export const writingGroups: WritingGroup[] = [
  {
    title: "Case studies",
    entries: [
      {
        title: "Planning a dental clinic's digital MVP",
        description: "Academy case study on scope, governance, risk, and planning constraints for a proposed healthcare MVP.",
        href: "/portfolio/case-studies/dental-web-app",
        status: "Portfolio page",
      },
      {
        title: "Capadana",
        description: "Portfolio case study on research, strategy, PRD writing, and success metrics.",
        href: "/portfolio/case-studies/capadana",
        status: "Portfolio page",
      },
      {
        title: "Examining delivery risk in a food-ordering app",
        description: "Academy retrospective exercise on integration risk, testing pressure, and delivery drift in a supplied scenario.",
        href: "/portfolio/case-studies/viand-retrospective",
        status: "Portfolio page",
      },
    ],
  },
  {
    title: "Lessons learned",
    entries: [
      {
        title: "What ERP-heavy delivery taught me about risk",
        description: "A reflection on integration complexity, testing, and escalation timing.",
        status: "Planned article",
      },
      {
        title: "Why engineering background changes PM conversations",
        description: "Notes on how technical grounding sharpens scoping and delivery decisions.",
        status: "Planned article",
      },
      {
        title: "What public-sector work asks of project structure",
        description: "A reflection on governance, stakeholder complexity, and institutional constraints.",
        status: "Planned article",
      },
    ],
  },
  {
    title: "Frameworks and tools",
    entries: [
      {
        title: "Universities as Startup Hubs: Applicability of Global Models to the Balkan Ecosystem",
        description: "Published Medium article written after the LAUNCHub VC Crash Course.",
        href: "https://anastasiayakimovska.medium.com/universities-as-startup-hubs-applicability-of-global-models-to-the-balkan-ecosystem-9e98cab6f14f",
        external: true,
        status: "Live on Medium",
      },
      {
        title: "Spotify HEART metrics",
        description: "Product metrics lab on activation and product health signals.",
        href: "/portfolio/labs/spotify-heart-metrics",
        status: "Portfolio page",
      },
      {
        title: "Spotify prioritization",
        description: "A mini-case on balancing quantitative and qualitative signals.",
        href: "/portfolio/labs/spotify-prioritization",
        status: "Portfolio page",
      },
    ],
  },
];

export const resumeSkillGroups = [
  {
    title: "Product and project management",
    items: [
      "User research",
      "Design thinking",
      "Scope assessment",
      "PRDs and planning documents",
      "Risk and change management",
      "Prototyping and UX testing",
    ],
  },
  {
    title: "Technical foundation",
    items: [
      "JavaScript and TypeScript",
      "Python, C++, and PHP",
      "HTML, CSS, and Vue.js",
      "UNIX and Linux scripting",
      "XML, TCL, and SVRF",
      "Software documentation",
    ],
  },
  {
    title: "Data and analysis",
    items: [
      "SQL",
      "R",
      "Tableau",
      "Data visualization",
      "Structured analysis",
    ],
  },
  {
    title: "Communication and leadership",
    items: [
      "Technical writing",
      "Cross-functional collaboration",
      "Mentorship",
      "Public speaking",
      "Community building",
    ],
  },
];

export const contactGuidance = [
  "A short note on what you would like to discuss.",
  "Whether the conversation is about product management, project delivery, or strategy work.",
  "Any useful context, such as timing, team setup, or current challenge.",
];
