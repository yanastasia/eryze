import { HoverSignalLink } from "@/components/site/eryze-motion";
import type { PortfolioSection, RelatedLink } from "@/types/portfolio";

type PortfolioSectionRendererProps = {
  relatedLinks?: RelatedLink[];
  sections: PortfolioSection[];
};

export function PortfolioSectionRenderer({
  relatedLinks = [],
  sections,
}: PortfolioSectionRendererProps) {
  return (
    <div className="space-y-6">
      {sections.map((section) => {
        if (section.type === "facts") {
          return (
            <article key={section.title} className="overflow-hidden rounded-[1.8rem] border border-border/70 bg-[rgba(8,15,28,0.82)] px-5 py-6 sm:px-6 sm:py-7">
              <h2 className="text-balance font-serif text-[clamp(1.8rem,2.5vw,3rem)] leading-[0.98] tracking-[-0.04em] text-foreground">
                {section.title}
              </h2>
              {section.description ? (
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{section.description}</p>
              ) : null}
              <dl className="mt-6 divide-y divide-border/45">
                {section.items.map((item) => (
                  <div key={`${section.title}-${item.label}`} className="grid gap-2 py-5 md:grid-cols-[minmax(10rem,0.34fr)_1fr] md:gap-6">
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">{item.label}</dt>
                    <dd className="text-sm leading-7 text-foreground/88">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          );
        }

        if (section.type === "artifacts") {
          return (
            <article key={section.title} className="overflow-hidden rounded-[1.8rem] border border-border/70 bg-[rgba(8,15,28,0.82)] px-5 py-6 sm:px-6 sm:py-7">
              <h2 className="text-balance font-serif text-[clamp(1.8rem,2.5vw,3rem)] leading-[0.98] tracking-[-0.04em] text-foreground">
                {section.title}
              </h2>
              {section.description ? (
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{section.description}</p>
              ) : null}
              <div className="mt-6 divide-y divide-border/45">
                {section.items.map((item) => (
                  <article key={`${section.title}-${item.title}`} className="grid gap-4 py-5 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:gap-8">
                    <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                    <div>
                      <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                      {item.href ? (
                        <div className="mt-5">
                          <HoverSignalLink href={item.href} arrow="up-right" intensity={0.46} opacity={0.62} speed={1}>
                            Open artifact
                          </HoverSignalLink>
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </article>
          );
        }

        return (
          <article
            key={section.title}
            className={
              section.tone === "highlight"
                ? "overflow-hidden rounded-[1.8rem] border border-brand-accent/30 bg-[linear-gradient(180deg,rgba(136,113,255,0.14),rgba(8,15,28,0.92)_34%)] px-5 py-6 sm:px-6 sm:py-7"
                : "overflow-hidden rounded-[1.8rem] border border-border/70 bg-[rgba(8,15,28,0.82)] px-5 py-6 sm:px-6 sm:py-7"
            }
          >
            <h2 className="text-balance font-serif text-[clamp(1.8rem,2.5vw,3rem)] leading-[0.98] tracking-[-0.04em] text-foreground">
              {section.title}
            </h2>
            {section.description ? (
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{section.description}</p>
            ) : null}
            <ul className="mt-6 divide-y divide-border/45">
              {section.items.map((item) => (
                <li key={`${section.title}-${item}`} className="grid gap-3 py-5 md:grid-cols-[auto_1fr]">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-support">Note</span>
                  <span className="text-sm leading-7 text-foreground/86">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}

      {relatedLinks.length ? (
        <article className="overflow-hidden rounded-[1.8rem] border border-border/70 bg-[rgba(8,15,28,0.82)] px-5 py-6 sm:px-6 sm:py-7">
          <h2 className="text-balance font-serif text-[clamp(1.8rem,2.5vw,3rem)] leading-[0.98] tracking-[-0.04em] text-foreground">
            Related links
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {relatedLinks.map((link) =>
              link.external ? (
                <HoverSignalLink
                  key={link.href}
                  arrow="up-right"
                  href={link.href}
                  intensity={0.44}
                  opacity={0.62}
                  rel="noreferrer"
                  speed={1}
                  target="_blank"
                >
                  {link.label}
                </HoverSignalLink>
              ) : (
                <HoverSignalLink key={link.href} href={link.href} intensity={0.44} opacity={0.62} speed={1}>
                  {link.label}
                </HoverSignalLink>
              ),
            )}
          </div>
        </article>
      ) : null}
    </div>
  );
}
