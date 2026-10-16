import type { CaseStudy } from "@/types/portfolio";

export const caseStudyCategories = [
  "Product Management",
  "Project Management",
  "Discovery",
  "Strategy",
  "Agile Delivery",
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "art-city",
    title: "Art City",
    tagline:
      "A hackathon product management case study for shaping the Art City cultural foundation behind Evolution of a Dream.",
    summary:
      "A Brainster Academy hackathon case study focused on defining the Art City foundation as the platform layer behind Evolution of a Dream, with structured thinking around public art, artist applications, city discovery, and long-term cultural value.",
    format: "Hackathon product management case study",
    categories: ["Product Management", "Discovery", "Strategy"],
    featured: true,
    order: 1,
    hero: {
      eyebrow: "Case study",
      description:
        "This case study frames Art City as the cultural foundation behind Evolution of a Dream: a platform layer designed to support artists, public programming, city discovery, and long-term continuity beyond a single edition of the project.",
    },
    quickLook: {
      challenge:
        "Turn a festival-led concept into a product direction that could support artists, local audiences, tourists, and institutional partners beyond a single event.",
      solution:
        "Used product management artifacts to define the audience, value proposition, MVP, feature priorities, KPIs, roadmap, and governance model before treating it like a build.",
      impact:
        "Created a coherent platform concept with a stronger case for continuity, measurable impact, and long-term cultural value.",
    },
    sections: [
      {
        type: "bullets",
        title: "Overview",
        items: [
          "Built as part of the Brainster Academy UX/UI and Project and Product Management hackathon.",
          "The concept positioned Art City as the cultural foundation organizing and sustaining Evolution of a Dream.",
          "The work focused on product structure, not just presentation: audience, value, MVP, roadmap, and delivery logic.",
        ],
      },
      {
        type: "bullets",
        title: "Problem framing",
        items: [
          "Cultural activity is heavily concentrated in Skopje, while smaller cities remain culturally under-served.",
          "Short-term cultural projects create visibility for a moment, but often fail to build continuity, local identity, or economic spillover.",
          "Artists, residents, tourists, and institutions all need value from the same platform, which makes the product direction easy to dilute if the priorities are not defined early.",
        ],
      },
      {
        type: "facts",
        title: "Context",
        items: [
          {
            label: "Setting",
            value: "Brainster Academy hackathon with a compressed decision cycle and a presentation-ready output required by the end of the sprint.",
          },
          {
            label: "Product lens",
            value: "Product management focus on cultural-platform strategy, audience clarity, MVP definition, and long-term platform logic.",
          },
          {
            label: "Primary users",
            value: "Contemporary artists, local residents, cultural tourists, and institutional partners.",
          },
          {
            label: "Core constraint",
            value: "The concept had to stay ambitious enough to matter, while still being scoped into a believable first version.",
          },
        ],
      },
      {
        type: "bullets",
        title: "User problem and opportunity",
        items: [
          "Artists need a structured way to discover open calls, submit applications, and stay visible beyond one event cycle.",
          "Residents need cultural activity to feel part of daily city life, not only a one-off festival moment.",
          "Tourists need a navigable cultural experience, not scattered event information.",
          "Institutions need a model that shows public value, continuity, and measurable impact.",
        ],
      },
      {
        type: "bullets",
        title: "Research and segmentation",
        items: [
          "The market research grounded the concept in a real regional gap: cultural decentralization and the absence of long-term platforms outside the capital.",
          "Target-customer and persona work separated the needs of artists, local audiences, tourists, and institutions instead of flattening them into one generic user.",
          "The value proposition work made the product legible from several angles: city identity, artist visibility, public value, and cultural tourism.",
        ],
      },
      {
        type: "bullets",
        title: "Product strategy and MVP",
        items: [
          "The MVP was defined around three essentials: a web platform, an application system, and an archive.",
          "The platform was positioned as the central place for information, artist applications, and digital memory.",
          "Bilingual support, accessibility, reliability, and scalability were treated as real product requirements, not later polish.",
        ],
      },
      {
        type: "bullets",
        title: "Prioritization and roadmap",
        items: [
          "Must-have features focused on the foundation: website, applications, and archive.",
          "Should-have features such as the interactive map and artist profiles extended the cultural-tourism and discovery value without bloating the first version.",
          "Nice-to-have ideas such as AR, a marketplace, and educational tools were intentionally held back for later phases.",
          "The roadmap moved from foundation to pilot event to year-round expansion, which made the growth path clearer than a feature list alone could.",
        ],
      },
      {
        type: "artifacts",
        title: "Key artifacts",
        items: [
          {
            title: "Market research report",
            description:
              "Mapped the cultural context, regional gap, and examples that justified Art City as a long-term platform rather than a one-off event.",
          },
          {
            title: "Target customers and personas",
            description:
              "Defined the distinct needs of artists, local residents, cultural tourists, and institutional partners.",
          },
          {
            title: "Value proposition and delighters",
            description:
              "Clarified the core value for each audience and the features that would make the experience memorable, such as interactive discovery and artist visibility.",
          },
          {
            title: "MVP and PRD",
            description:
              "Scoped the first version around platform fundamentals, applications, archive, bilingual support, accessibility, and reliability.",
          },
          {
            title: "Primary KPIs",
            description:
              "Defined measurable signals such as unique visitors, artist applications, map interactions, and newsletter sign-ups.",
          },
          {
            title: "Feature prioritization and strategic roadmap",
            description:
              "Separated what had to exist first from what could wait, then sequenced the concept from foundation to pilot event to expansion.",
          },
          {
            title: "Management plan",
            description:
              "Outlined governance roles, stakeholder coordination, decision-making, risk handling, and sustainability planning.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Outcome",
        items: [
          "Turned a culturally ambitious idea into a platform concept that could be explained in product terms, not only artistic terms.",
          "Created a stronger logic for why the project should continue after the hackathon, with a clear first version and future phases.",
          "Showed how product management can make a cultural initiative more defendable, structured, and measurable under time pressure.",
        ],
        tone: "highlight",
      },
      {
        type: "bullets",
        title: "Lessons learned",
        items: [
          "A hackathon concept gets stronger when the long-term product logic is clearer than the pitch itself.",
          "When a platform serves several audiences, segmentation work is what keeps prioritization honest.",
          "Cultural products still benefit from rigorous PM structure: audience definition, MVP scope, KPIs, and governance.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "https://www.figma.com/design/EYJDJyiMNXqGjA4rcYFM1X/Evolucija-na-sonot---Team-1?node-id=142-101&t=DAAm3i2E0ITJR6hO-1",
        label: "Open Figma design",
        external: true,
      },
      {
        href: "https://www.figma.com/proto/EYJDJyiMNXqGjA4rcYFM1X/Evolucija-na-sonot---Team-1?node-id=142-102&p=f&t=JDvpIKJTXWYh5tG7-1&scaling=min-zoom&content-scaling=fixed&page-id=142%3A101&starting-point-node-id=142%3A102&show-proto-sidebar=1",
        label: "View prototype",
        external: true,
      },
    ],
  },
  {
    slug: "dental-web-app",
    title: "Planning a dental clinic's digital MVP",
    tagline: "An academy project translating a clinic digitization brief into a structured MVP and governance plan.",
    summary:
      "A Brainster final project covering scope, stakeholders, budget assumptions, delivery risks, and change governance for a proposed website and mobile app.",
    format: "Academy final project · planning deliverables",
    categories: ["Project Management", "Agile Delivery"],
    featured: true,
    order: 2,
    hero: {
      eyebrow: "Case study",
      description:
        "The brief described manual appointment handling, fragmented communication, and limited digital presence. The challenge was to define a practical first release within proposed cost, timing, coordination, and data-handling constraints.",
    },
    quickLook: {
      challenge: "Define a practical first release for a multi-surface healthcare concept under explicit planning constraints.",
      solution: "Connected the charter, stakeholder register, cost assumptions, risk register, and change-control model into one proposed delivery system.",
      impact: "Produced planning and governance documents; production launch and business results were not established in the reviewed material.",
    },
    sections: [
      {
        type: "bullets",
        title: "Overview",
        items: [
          "Brainster Academy final project completed as a team planning exercise.",
          "The proposed MVP covered appointment booking, reminders, clinic information, basic patient records, and staff administration.",
          "The charter defined a EUR 50,000 budget cap and a nine-month launch goal as project targets, not measured delivery results.",
        ],
      },
      {
        type: "bullets",
        title: "Problem",
        items: [
          "The idea covered several user journeys but lacked a defined delivery shape.",
          "Clinical, operational, and customer-facing needs all introduced different priorities.",
          "Without project structure, budgeting and stakeholder alignment would drift early.",
        ],
      },
      {
        type: "facts",
        title: "Context",
        items: [
          { label: "Context", value: "Brainster Academy final project; proposed solution and planning deliverables." },
          { label: "Documented role", value: "Project lead and sponsor liaison in the team allocation; project manager and CCB chair in the governance workbook." },
          { label: "Proposed timeline", value: "Nine-month launch goal in the charter, distinct from the assignment period." },
          { label: "Planning constraint", value: "EUR 50,000 budget cap, vendor capacity, integration risk, and sensitive data handling." },
        ],
      },
      {
        type: "bullets",
        title: "My role",
        items: [
          "Worked as project lead and sponsor liaison in the documented team allocation.",
          "Held the project manager and Change Control Board chair roles in the governance workbook.",
          "Contributed within a team context; the documents do not establish sole authorship of every artifact.",
        ],
      },
      {
        type: "bullets",
        title: "Process",
        items: [
          "Started with the business case and project charter to define why the initiative should move forward.",
          "Built stakeholder and communication structures before expanding delivery detail.",
          "Moved into schedule, budget, and risk planning once the scope was grounded.",
          "Added change-control logic to make decision handling explicit instead of reactive.",
        ],
      },
      {
        type: "artifacts",
        title: "Key artifacts",
        items: [
          {
            title: "Business case",
            description: "Clarified why the initiative mattered, what value it aimed to create, and what justified investment.",
          },
          {
            title: "Project charter",
            description: "Defined scope, objectives, stakeholders, and authority at the start of the project.",
          },
          {
            title: "Stakeholder register",
            description: "Mapped who needed to be informed, consulted, or escalated at each stage.",
          },
          {
            title: "Risk register",
            description: "Captured core delivery risks, likelihood, impact, and response actions.",
          },
          {
            title: "Cost plan",
            description: "Established budget categories and control points for tracking project spend.",
          },
          {
            title: "CCB governance",
            description: "Outlined how scope changes would be reviewed and approved instead of accepted informally.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Outputs and outcome status",
        items: [
          "The work produced a charter, stakeholder register, cost plan, risk register, communication structure, and CCB governance model.",
          "These are documented planning outputs created in an academy team context.",
          "The reviewed evidence does not establish production launch, adoption, revenue, or reduced administration time.",
        ],
        tone: "highlight",
      },
      {
        type: "bullets",
        title: "Lessons learned",
        items: [
          "Projects that span multiple surfaces need scope discipline early.",
          "Governance only works when stakeholders understand how change decisions will be made.",
          "Budget logic is easier to defend when it is tied directly to scope and risk.",
        ],
      },
    ],
  },
  {
    slug: "capadana",
    title: "Shaping the Capadana e-commerce concept",
    tagline: "An academy project exploring positioning, requirements, and shopping experience for a hybrid bandana-cap.",
    summary:
      "A product management plan built to show how a concept can move from user problem and market opportunity to a clear product direction.",
    format: "Academy final project · product concept",
    categories: ["Product Management", "Discovery", "Strategy"],
    featured: true,
    order: 3,
    hero: {
      eyebrow: "Case study",
      description:
        "The product combines the coverage and expression of a bandana with the visor of a cap. The question was how to explain that unfamiliar format and turn it into a clear online shopping proposition.",
    },
    quickLook: {
      challenge: "Explain an unfamiliar product format and identify an initial audience without overstating validation.",
      solution: "Documented discovery questions, audience assumptions, a value proposition, product requirements, and proposed measurement.",
      impact: "Produced a product concept and design direction; verified sales, conversion, and launch results are not available.",
    },
    sections: [
      {
        type: "bullets",
        title: "Overview",
        items: [
          "Brainster product final project covering discovery preparation, strategy, requirements, and design direction.",
          "The proposed initial audience was fashion-conscious young people in North Macedonia, with wider Balkan expansion considered later.",
          "The audience and included interview material are treated as assumptions and simulated inputs until primary research is verified.",
        ],
      },
      {
        type: "bullets",
        title: "User problem and market opportunity",
        items: [
          "Started by separating the core user problem from assumptions about solution shape.",
          "Looked for a market entry point where the value proposition could be explained clearly.",
          "Focused on where the product could be differentiated by experience and clarity, not just feature volume.",
        ],
      },
      {
        type: "bullets",
        title: "Framing discovery and evidence",
        items: [
          "Framed questions around identity, usage occasions, functional protection, and reasons to choose the hybrid format.",
          "Separated research objectives and simulated interview responses from verified participant evidence.",
          "Used secondary research and competitor review as directional inputs rather than proof of demand.",
        ],
      },
      {
        type: "bullets",
        title: "Defining the proposition",
        items: [
          "Connected two proposed benefits: practical sun protection and personal expression.",
          "Used the audience hypothesis to shape how the product would be explained and merchandised online.",
          "Kept the broader regional opportunity as a later strategic assumption, not a validated result.",
        ],
      },
      {
        type: "bullets",
        title: "Product strategy",
        items: [
          "Defined the product narrative around user value, not internal feature ambition.",
          "Clarified what had to be true for the product to show early traction.",
          "Connected the opportunity space to a product direction that could be prioritized over time.",
        ],
      },
      {
        type: "bullets",
        title: "PRD and success metrics",
        items: [
          "Prepared a PRD-level outline to clarify what the first release needed to include.",
          "Proposed monthly active purchasers as a success signal, including a target of 150; this is a planning target, not an achieved result.",
          "Used the PRD to create alignment between product intent and delivery scope.",
        ],
      },
      {
        type: "bullets",
        title: "Visual and design direction",
        items: [
          "Defined a visual direction to support product positioning and trust.",
          "Used the interface direction as a communication tool, not only a styling exercise.",
          "Kept the visual choices aligned with the intended audience and product promise.",
        ],
      },
      {
        type: "bullets",
        title: "Outputs and outcome status",
        items: [
          "The files document a product concept, research preparation, strategy, requirements, and a design direction.",
          "The Figma prompt is treated as a design brief, not proof of a completed prototype.",
          "Verified customer validation, sales, conversion, and launch results are not available in the reviewed material.",
        ],
        tone: "highlight",
      },
      {
        type: "bullets",
        title: "Reflection",
        items: [
          "Good product work gets stronger when the problem definition is sharper than the feature list.",
          "Personas are useful only when they change what gets prioritized.",
          "Success metrics should be decided early enough to shape the product, not retrofitted later.",
        ],
      },
    ],
  },
  {
    slug: "viand-retrospective",
    title: "Examining delivery risk in a food-ordering app",
    tagline: "An academy retrospective exercise exploring integration complexity, scope changes, testing assumptions, and project closure.",
    summary:
      "A project management retrospective focused on where delivery lost shape and how earlier intervention could have reduced friction.",
    format: "Academy retrospective exercise · provided scenario",
    categories: ["Project Management", "Agile Delivery"],
    featured: true,
    order: 4,
    hero: {
      eyebrow: "Case study",
      description:
        "This coursework scenario examines what happens when integration complexity, testing effort, scope pressure, and timeline optimism meet a project without enough control points.",
    },
    quickLook: {
      challenge: "Diagnose why delivery slipped and where project control broke down.",
      solution: "Reconstructed the setup, surfaced the root causes, and documented what a stronger PM approach would have changed.",
      impact: "Produced a clearer view of integration risk, testing depth, and escalation timing within the supplied scenario.",
    },
    sections: [
      {
        type: "bullets",
        title: "Overview",
        items: [
          "Built as an academy retrospective exercise using a supplied project scenario.",
          "The analysis focused on control points, communication quality, and risk handling.",
          "The goal was not to assign blame, but to understand where the project stopped being manageable.",
        ],
      },
      {
        type: "bullets",
        title: "Original goal",
        items: [
          "Deliver a product with clear timelines, aligned stakeholders, and a stable integration path.",
          "Maintain progress visibility while moving through planning, build, testing, and handover.",
        ],
      },
      {
        type: "bullets",
        title: "Delivery setup",
        items: [
          "The scenario described multiple streams moving in parallel.",
          "ERP integration introduced a dependency that carried more complexity than the early plan reflected.",
          "The setup required disciplined communication and tighter testing planning than it received.",
        ],
      },
      {
        type: "bullets",
        title: "What happened",
        items: [
          "The scenario reported optimistic timeline expectations while complexity increased underneath them.",
          "Testing effort expanded late, which compressed the room for correction.",
          "Scope moved without enough control, which made delivery coordination harder to stabilize.",
        ],
      },
      {
        type: "bullets",
        title: "Root causes",
        items: [
          "ERP integration complexity was treated as manageable before enough was known.",
          "Testing scope was underestimated relative to the real delivery surface.",
          "Scope creep weakened the predictability of the plan.",
          "Timeline drift was not escalated strongly enough, early enough.",
        ],
      },
      {
        type: "artifacts",
        title: "Key artifacts",
        items: [
          {
            title: "Communication plan",
            description: "Mapped how updates, escalations, and dependencies should have been handled across stakeholders.",
          },
          {
            title: "Sprint and daily tracking sheet",
            description: "Used to evaluate how work movement and coordination signals could have been made more visible.",
          },
          {
            title: "Close-out report",
            description: "A sample coursework document capturing scenario outcomes, unresolved issues, and proposed lessons.",
          },
        ],
      },
      {
        type: "bullets",
        title: "What I would do differently",
        items: [
          "Escalate integration uncertainty earlier and treat it as a planning risk, not a technical detail.",
          "Protect testing time as a real workstream instead of a trailing activity.",
          "Set firmer rules for scope intake and change approval once the plan is live.",
          "Use decision logs and clearer milestone reviews to stop drift earlier.",
        ],
        tone: "highlight",
      },
      {
        type: "bullets",
        title: "PM lessons",
        items: [
          "Dependencies only stay manageable when their uncertainty is visible.",
          "A timeline is not credible if testing has not been planned as seriously as build work.",
          "Change control is a delivery safeguard, not bureaucracy.",
        ],
      },
    ],
  },
  {
    slug: "census-digitization",
    title: "Census Digitization",
    tagline: "A public-sector digitization case study shaped through business framing, risk analysis, and project planning.",
    summary:
      "A structured case study showing how public-sector complexity changes the way a digital initiative should be scoped, justified, and governed.",
    format: "Academy planning exercise · proposed solution",
    categories: ["Project Management", "Strategy"],
    featured: false,
    order: 5,
    hero: {
      eyebrow: "Case study",
      description:
        "The work focused on framing a digitization initiative in a public-sector setting, where governance, public value, risk, and institutional complexity all shape what can realistically move forward.",
    },
    quickLook: {
      challenge: "Translate a large public-sector initiative into a project plan that is justified, realistic, and governable.",
      solution: "Used business framing, chartering, SWOT analysis, and risk planning to define the delivery shape early.",
      impact: "Made feasibility, risk, and stakeholder complexity easier to discuss before execution assumptions hardened.",
    },
    sections: [
      {
        type: "bullets",
        title: "Overview",
        items: [
          "Built as an academy planning exercise for a proposed public-sector digitization initiative.",
          "The work focused on planning quality and institutional realism.",
          "It does not imply implementation or adoption by a public institution.",
        ],
      },
      {
        type: "bullets",
        title: "Problem framing",
        items: [
          "Digitization efforts often fail when they are treated as a technology upgrade instead of an operating change.",
          "Public-sector projects carry additional scrutiny, dependencies, and stakeholder obligations.",
          "The problem had to be framed in terms of public value, process clarity, and implementation feasibility.",
        ],
      },
      {
        type: "bullets",
        title: "Business case",
        items: [
          "Clarified why the initiative mattered and what benefits justified the effort.",
          "Balanced expected value with the real delivery burden and institutional constraints.",
          "Used the business case to ground the project in outcomes rather than momentum.",
        ],
      },
      {
        type: "bullets",
        title: "Project charter",
        items: [
          "Defined scope boundaries, ownership, and initial governance.",
          "Created a shared reference point for what the project was actually responsible for delivering.",
          "Reduced ambiguity before planning detail expanded.",
        ],
      },
      {
        type: "bullets",
        title: "SWOT and risks",
        items: [
          "Used SWOT analysis to balance opportunity with institutional limitations.",
          "Mapped risks that were operational, political, and process-driven, not only technical.",
          "Connected risk analysis to planning decisions instead of treating it as a standalone exercise.",
        ],
      },
      {
        type: "bullets",
        title: "Public-sector complexity",
        items: [
          "Stakeholder management carries more weight because authority and accountability are distributed.",
          "Decision timelines can be slower, which changes how plans need to absorb uncertainty.",
          "Success depends on governance discipline as much as implementation quality.",
        ],
      },
      {
        type: "bullets",
        title: "Lessons learned",
        items: [
          "Public-sector projects need stronger justification and stakeholder mapping from the start.",
          "Risk management must account for institutional dynamics, not just execution tasks.",
          "A clear charter is especially important when responsibility is distributed across functions.",
        ],
        tone: "highlight",
      },
    ],
  },
];

export const featuredCaseStudies = caseStudies.filter((study) => study.featured).sort((a, b) => a.order - b.order);

export const legacyCaseStudySlugMap: Record<string, string> = {
  "evolution-of-a-dream": "art-city",
};

export function getCanonicalCaseStudySlug(slug: string) {
  return legacyCaseStudySlugMap[slug] ?? slug;
}

export function getCaseStudyBySlug(slug: string) {
  const canonicalSlug = getCanonicalCaseStudySlug(slug);

  return caseStudies.find((study) => study.slug === canonicalSlug);
}
