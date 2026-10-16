# Eryze Brand System

## Core read

Eryze should feel like a high-trust digital studio that combines technical precision, collaborative thinking, and refined ambition. The brand should read as clear, intelligent, future-facing, and visually distinct without drifting into generic startup UI, consultancy blandness, or luxury minimalism.

## Brand line

- Primary line: `Designed for clarity. Built for growth.`
- Supporting line: `Eryze Studio designs and builds digital systems that move businesses forward.`

## Tone of voice

- Clear, concrete, and polished
- Confident without hype
- Warm-efficient rather than overly casual
- Focused on business problems, structure, and outcomes

Avoid vague visionary language, agency clichés, and inflated startup buzzwords.

## Visual direction

- Dark-first technical editorial studio
- Ink navy foundation with cool white contrast
- Vivid violet as the primary accent
- Lavender and periwinkle as supporting tones
- Sharp pink only for rare micro-accents

The UI should feel layered, information-rich, and controlled. It should never feel card-heavy for the sake of it, overly sparse, or over-animated.

## Typography

- Sans: modern, sharp, premium, readable
- Serif: restrained, intellectual, slightly soft
- Balance target: 80 to 85 percent sans, 15 to 20 percent serif

In the current site implementation:

- Sans system: `Manrope`
- Display sans: `Space Grotesk`
- Serif accent: `Newsreader`

Use serif for large editorial moments like heroes and section titles. Keep UI, labels, navigation, and body copy in sans.

## Signature motif

The recurring visual anchor is the `Pulse Line`.

It should communicate:

- intelligence
- responsiveness
- system behavior
- forward motion
- business signals turning into structure

Rules:

- precise, not noisy
- controlled, not chaotic
- engineered, not decorative

Use it in the wordmark, icon, section accents, transitions, and select hover or motion states.

## UI rules

- Prefer full-width sections with structured inner columns
- Keep surfaces layered but calm
- Use motion to connect sections, not to entertain
- Favor clear hierarchy over decorative density
- Avoid warm accents, orange, yellow, beige, or black

## Brand architecture

- `Eryze`: master brand
- `Eryze Studio`: client-facing delivery work
- `Eryze Labs`: experiments, prototypes, and internal ventures

## Messaging priorities

Lead with:

- clarity
- collaboration
- precision
- guided delivery
- business lift through better digital systems

Do not lead with:

- founder personality
- innovation language
- AI futurism
- hype-heavy growth claims

## Implementation notes

- The shared design tokens live in [app/globals.css](/Users/anastasia/Projects/Github/eryze_web/app/globals.css).
- The code-based wordmark lives in [components/site/brand-mark.tsx](/Users/anastasia/Projects/Github/eryze_web/components/site/brand-mark.tsx).
- Shared messaging content lives in [content/site.ts](/Users/anastasia/Projects/Github/eryze_web/content/site.ts).

Any future page, campaign, or case study should extend this system rather than inventing a parallel aesthetic.
