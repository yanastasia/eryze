import { JsonLd } from "@/components/seo/json-ld";
import { HoverSignalLink } from "@/components/site/eryze-motion";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { writingGroups } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbStructuredData,
  getPageStructuredData,
  getPortfolioCollectionStructuredData,
} from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Portfolio Writing",
  description:
    "Writing on case studies, lessons learned, product frameworks, and the realities of delivery.",
  path: "/portfolio/writing",
  keywords: [
    "product management writing",
    "project management writing",
    "case study writing",
    "Medium",
  ],
});

export default function PortfolioWritingPage() {
  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: "Portfolio Writing",
            description:
              "Writing on case studies, lessons learned, product frameworks, and the realities of delivery.",
            path: "/portfolio/writing",
            pageType: "CollectionPage",
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Writing", path: "/portfolio/writing" },
          ]),
          getPortfolioCollectionStructuredData({
            title: "Portfolio Writing",
            description:
              "Writing on case studies, lessons learned, product frameworks, and the realities of delivery.",
            path: "/portfolio/writing",
          }),
        ]}
      />

      <PageHero
        actions={[
          { href: "/portfolio/case-studies", label: "View case studies" },
          { href: "/portfolio/resume", label: "View resume", variant: "outline" },
        ]}
        description="Reflections and framework notes on products, delivery, technology, and the lessons between them."
        eyebrow="Portfolio"
        highlights={[
          "Case-study style writing",
          "Lessons learned from delivery and product work",
          "Framework notes and strategy thinking",
        ]}
        title="Writing"
      />

      {writingGroups.map((group, index) => (
        <Section
          key={group.title}
          description={`Writing on ${group.title.toLowerCase()}, grounded in practice and reflection.`}
          eyebrow="Writing"
          title={group.title}
          tone={index % 2 === 0 ? "soft" : "muted"}
        >
          <div className="divide-y divide-border/45">
            {group.entries.map((entry) => (
              <article
                key={`${group.title}-${entry.title}`}
                className="grid gap-6 py-6 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,0.3fr)_minmax(0,0.82fr)] lg:gap-10"
              >
                <div>
                  <h2 className="text-balance font-serif text-[clamp(1.5rem,2vw,2.25rem)] leading-[1] tracking-[-0.04em] text-foreground">
                    {entry.title}
                  </h2>
                </div>
                <div>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-support">
                    {entry.status}
                  </span>
                </div>
                <div className="border-t border-border/45 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <p className="text-sm leading-7 text-muted-foreground">{entry.description}</p>
                  {entry.href ? (
                    <div className="mt-5">
                      {entry.external ? (
                        <HoverSignalLink
                          arrow="up-right"
                          href={entry.href}
                          intensity={0.42}
                          opacity={0.62}
                          rel="noreferrer"
                          speed={1}
                          target="_blank"
                        >
                          Open external article
                        </HoverSignalLink>
                      ) : (
                        <HoverSignalLink href={entry.href} intensity={0.42} opacity={0.62} speed={1}>
                          Open related page
                        </HoverSignalLink>
                      )}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
