import { JsonLd } from "@/components/seo/json-ld";
import { HoverSignalLink } from "@/components/site/eryze-motion";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { methods } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbStructuredData,
  getPageStructuredData,
  getPortfolioCollectionStructuredData,
} from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Portfolio Methods",
  description:
    "A repeatable PM toolkit covering discovery, planning, risk, prioritization, metrics, and retrospectives.",
  path: "/portfolio/methods",
  keywords: [
    "product management methods",
    "project management toolkit",
    "discovery interviews",
    "PRD",
    "prioritization",
  ],
});

export default function PortfolioMethodsPage() {
  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: "Portfolio Methods",
            description:
              "A repeatable PM toolkit covering discovery, planning, risk, prioritization, metrics, and retrospectives.",
            path: "/portfolio/methods",
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Methods", path: "/portfolio/methods" },
          ]),
          getPortfolioCollectionStructuredData({
            title: "Portfolio Methods",
            description:
              "A repeatable PM toolkit covering discovery, planning, risk, prioritization, metrics, and retrospectives.",
            path: "/portfolio/methods",
          }),
        ]}
      />

      <PageHero
        actions={[
          { href: "/portfolio/case-studies", label: "View case studies" },
          { href: "/portfolio/labs", label: "Open labs", variant: "outline" },
        ]}
        description="The practical methods I return to when shaping products, plans, and delivery."
        eyebrow="Portfolio"
        highlights={[
          "Discovery and framing",
          "Planning and governance",
          "Metrics, prioritization, and retrospectives",
        ]}
        title="Methods"
      />

      <Section
        description="Ways of working across discovery, planning, delivery, and learning."
        eyebrow="Library"
        title="Methods in practice"
        tone="strong"
      >
        <div className="divide-y divide-border/45">
          {methods.map((method) => (
            <article
              key={method.title}
              className="grid gap-6 py-6 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-10"
            >
              <div>
                <h2 className="text-balance font-serif text-[clamp(1.55rem,2.2vw,2.45rem)] leading-[1] tracking-[-0.04em] text-foreground">
                  {method.title}
                </h2>
              </div>
              <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-sm leading-7 text-muted-foreground">{method.description}</p>
                <div className="mt-5 flex flex-col gap-3">
                  {method.examples.map((example) => (
                    <HoverSignalLink
                      key={`${method.title}-${example.href}`}
                      href={example.href}
                      intensity={0.4}
                      opacity={0.6}
                      speed={1}
                    >
                      {example.label}
                    </HoverSignalLink>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
