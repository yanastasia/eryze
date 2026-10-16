import type { Lab } from "@/types/portfolio";

export const labs: Lab[] = [
  {
    slug: "kidsgo-strategy",
    title: "KidsGo Strategy",
    tagline: "A strategy lab grounded in founder insight, user demand, and operational reality.",
    summary:
      "A product thinking exercise built around the real strategic questions behind KidsGo: what to focus on first, what to delay, and what has to be true for the product to work.",
    category: "Strategy",
    order: 1,
    hero: {
      eyebrow: "Lab",
      description:
        "This lab translates founder context into product strategy. The work focuses on demand signals, operational constraints, and what should earn priority first.",
    },
    sections: [
      {
        type: "bullets",
        title: "Context",
        items: [
          "KidsGo sits at the intersection of discovery, bookings, and organizer operations.",
          "The product opportunity is real, but the sequencing matters as much as the idea itself.",
        ],
      },
      {
        type: "bullets",
        title: "Strategic questions",
        items: [
          "Which workflows need to be reliable before growth becomes useful.",
          "Which user segment should define the early product loop.",
          "Where manual operations should stay in place until the product earns automation.",
        ],
      },
      {
        type: "bullets",
        title: "What I learned",
        items: [
          "Founders need product strategy that respects operational reality, not abstract prioritization.",
          "Sequencing decisions are often more important than feature ideation.",
          "Manual-first systems can be a strategic choice, not a temporary weakness.",
        ],
        tone: "highlight",
      },
    ],
  },
  {
    slug: "onenote-analysis",
    title: "OneNote Analysis",
    tagline: "A product analysis focused on note-taking behavior, structure, and friction.",
    summary:
      "A short teardown of how product structure affects organization, retrieval, and day-to-day usefulness in note-taking tools.",
    category: "Product analysis",
    order: 2,
    hero: {
      eyebrow: "Lab",
      description:
        "The analysis looks at how OneNote supports thinking and organization in practice, and where the product creates extra cognitive load.",
    },
    sections: [
      {
        type: "bullets",
        title: "Context",
        items: [
          "Note-taking tools are used for both quick capture and long-term retrieval.",
          "The product challenge is balancing freedom with structure.",
        ],
      },
      {
        type: "bullets",
        title: "Observations",
        items: [
          "Flexible hierarchy helps advanced users but can overwhelm lighter usage patterns.",
          "Retrieval quality matters as much as capture speed.",
          "Product structure can quietly shape whether users trust their own system.",
        ],
      },
      {
        type: "bullets",
        title: "Product implications",
        items: [
          "Good information architecture is a product feature, not only a content concern.",
          "Users need confidence that notes will stay findable later.",
          "Structure should reduce thinking overhead, not add to it.",
        ],
        tone: "highlight",
      },
    ],
  },
  {
    slug: "gmail-experiment",
    title: "Gmail Experiment",
    tagline: "A hypothesis-driven product exercise focused on behavior change and measurable learning.",
    summary:
      "A lightweight experiment design showing how to move from an observation to a test with a clear metric and learning goal.",
    category: "Experiment",
    order: 3,
    hero: {
      eyebrow: "Lab",
      description:
        "The lab focuses on what a good experiment needs: a real behavioral hypothesis, a defined segment, and a success metric that tells you whether the idea earned another iteration.",
    },
    sections: [
      {
        type: "bullets",
        title: "Hypothesis",
        items: [
          "A small change in how users handle inbox organization can reduce repeat friction and improve follow-through.",
        ],
      },
      {
        type: "bullets",
        title: "Target segment",
        items: [
          "Users who rely on Gmail heavily for work and need to manage high message volume with limited structure.",
        ],
      },
      {
        type: "bullets",
        title: "Test design",
        items: [
          "Define the single behavior to influence before adding secondary metrics.",
          "Use the simplest intervention that can still produce a measurable signal.",
          "Separate behavior change from opinion collection so the result is usable.",
        ],
      },
      {
        type: "bullets",
        title: "Success metric",
        items: [
          "Primary metric focused on behavioral completion, not surface engagement.",
        ],
      },
      {
        type: "bullets",
        title: "What I learned",
        items: [
          "A good experiment is mostly about choosing the right question.",
          "Segments matter because the same intervention can mean different things across user groups.",
          "Metrics should help you decide what to do next, not just look reasonable in a slide.",
        ],
        tone: "highlight",
      },
    ],
  },
  {
    slug: "spotify-heart-metrics",
    title: "Spotify HEART Metrics",
    tagline: "A HEART-framework lab focused on activation, engagement, and product health signals.",
    summary:
      "A structured product thinking exercise using HEART to understand where value appears in the user journey and how to measure it.",
    category: "Metrics",
    order: 4,
    hero: {
      eyebrow: "Lab",
      description:
        "This lab uses the HEART framework to map user experience into signals that can guide better product decisions.",
    },
    sections: [
      {
        type: "bullets",
        title: "User journey",
        items: [
          "Mapped the early journey from discovery to the first meaningful listening habit.",
          "Looked at which moments create value versus which moments only create activity.",
        ],
      },
      {
        type: "bullets",
        title: "HEART framework",
        items: [
          "Defined health signals across happiness, engagement, adoption, retention, and task success.",
          "Used the framework to separate leading indicators from lagging ones.",
        ],
      },
      {
        type: "bullets",
        title: "Activation moment",
        items: [
          "Focused on the moment where Spotify stops being a utility and starts becoming part of routine behavior.",
        ],
      },
      {
        type: "bullets",
        title: "Suggested product insights",
        items: [
          "The strongest metrics are tied to habit formation, not only first-session activity.",
          "Activation should be defined around value realization, not account creation.",
          "Good metrics work when they guide product choices, not just reporting.",
        ],
        tone: "highlight",
      },
    ],
  },
  {
    slug: "netflix-segmentation",
    title: "Netflix Segmentation",
    tagline: "A segmentation exercise focused on behavior patterns and product implications.",
    summary:
      "A mini-case on how behavioral segmentation can reveal different user needs inside a single product ecosystem.",
    category: "Segmentation",
    order: 5,
    hero: {
      eyebrow: "Lab",
      description:
        "The work explores how segment logic changes product decisions by moving beyond broad demographics into actual behavior patterns.",
    },
    sections: [
      {
        type: "bullets",
        title: "Context",
        items: [
          "Large consumer products serve users with very different motivations under the same interface.",
        ],
      },
      {
        type: "bullets",
        title: "Segment logic",
        items: [
          "Built segments around behavior, intent, and consumption rhythm instead of only demographics.",
          "Used the segments to ask which product moments matter to whom.",
        ],
      },
      {
        type: "bullets",
        title: "Behavioral differences",
        items: [
          "Different segments value speed, confidence, novelty, and familiarity in different proportions.",
          "The same recommendation system can feel helpful to one segment and noisy to another.",
        ],
      },
      {
        type: "bullets",
        title: "Product implications",
        items: [
          "Segmentation becomes useful when it changes onboarding, recommendations, or retention strategy.",
          "Behavior tells you more about value than labels do.",
          "Products feel sharper when they reflect distinct jobs-to-be-done.",
        ],
        tone: "highlight",
      },
    ],
  },
  {
    slug: "spotify-prioritization",
    title: "Spotify Prioritization",
    tagline: "A prioritization lab balancing quantitative signals, qualitative signals, and direction.",
    summary:
      "A short case on turning mixed evidence into a prioritization call that is both explainable and product-relevant.",
    category: "Prioritization",
    order: 6,
    hero: {
      eyebrow: "Lab",
      description:
        "The aim of this lab is to show how product prioritization gets better when numbers and user understanding are interpreted together instead of separately.",
    },
    sections: [
      {
        type: "bullets",
        title: "Quant signals",
        items: [
          "Looked at metrics that pointed to friction, opportunity, or uneven usage patterns.",
        ],
      },
      {
        type: "bullets",
        title: "Qual signals",
        items: [
          "Used qualitative context to explain why the numbers might be moving the way they are.",
        ],
      },
      {
        type: "bullets",
        title: "Prioritization logic",
        items: [
          "Ranked opportunities by user value, clarity of signal, and likely implementation leverage.",
          "Focused on decisions that could improve the product loop, not just add surface complexity.",
        ],
      },
      {
        type: "bullets",
        title: "Proposed solution direction",
        items: [
          "A good prioritization call is clear enough to defend and narrow enough to act on.",
          "Signals are only useful when they change the sequence of decisions.",
          "A smaller, sharper priority beats a larger ambiguous one.",
        ],
        tone: "highlight",
      },
    ],
  },
  {
    slug: "user-stories-mvp-value-proposition",
    title: "User Stories, MVP, and Value Proposition",
    tagline: "A toolkit lab connecting product language to practical delivery choices.",
    summary:
      "A compact methods lab showing how user stories, MVP framing, and value proposition work reinforce each other when used well.",
    category: "Toolkit",
    order: 7,
    hero: {
      eyebrow: "Lab",
      description:
        "This lab focuses on core product management tools that are simple on paper but only useful when they sharpen decisions.",
    },
    sections: [
      {
        type: "bullets",
        title: "Context",
        items: [
          "These tools are often treated as templates. The real value is how they influence scope and clarity.",
        ],
      },
      {
        type: "bullets",
        title: "How I use them",
        items: [
          "User stories to make the user outcome explicit.",
          "MVP framing to protect focus and sequencing.",
          "Value proposition work to keep the product clear from the user's side.",
        ],
      },
      {
        type: "bullets",
        title: "What they change",
        items: [
          "They improve conversations between product, delivery, and stakeholders.",
          "They make tradeoffs easier to explain.",
          "They keep the first version honest about what it is trying to prove.",
        ],
        tone: "highlight",
      },
    ],
  },
];

export function getLabBySlug(slug: string) {
  return labs.find((lab) => lab.slug === slug);
}
