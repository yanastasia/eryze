import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroActionVariant = "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";

type HeroAction = {
  href: string;
  label: string;
  variant?: HeroActionVariant;
};

type PageHeroProps = {
  actions?: HeroAction[];
  children?: ReactNode;
  description: string;
  eyebrow?: string;
  highlights?: string[];
  title: string;
};

export function PageHero({
  actions = [],
  children,
  description,
  eyebrow,
  highlights = [],
  title,
}: PageHeroProps) {
  return (
    <section className="pb-10 pt-4 sm:pb-14 sm:pt-6">
      <Container>
        <div className="relative isolate flex min-h-[calc(100svh-7rem)] flex-col justify-between overflow-hidden rounded-[1.1rem] border border-border bg-[rgba(8,7,15,0.7)] px-5 py-8 shadow-[0_24px_80px_-28px_rgba(0,0,0,0.75)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(52%_70%_at_100%_42%,rgba(232,106,142,0.28),transparent_66%),radial-gradient(42%_58%_at_82%_68%,rgba(240,168,94,0.18),transparent_68%),radial-gradient(62%_76%_at_6%_112%,rgba(123,47,247,0.42),transparent_67%)]" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(157,91,255,0.8),transparent)]" />
          <div className={cn("grid gap-12 xl:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.65fr)] xl:items-end", !children ? "xl:grid-cols-1" : "")}>
            <div className="max-w-5xl">
              {eyebrow ? <p className="eryze-kicker">{eyebrow}</p> : null}
              <h1 className="mt-8 max-w-[15ch] text-balance font-display text-[clamp(3.1rem,6.2vw,6.25rem)] font-normal leading-[0.92] tracking-[-0.035em] text-foreground">
                {title}
              </h1>
              <p className="mt-8 max-w-[42rem] font-serif text-[1.08rem] leading-8 text-muted-foreground sm:text-[1.2rem]">
                {description}
              </p>

              {actions.length ? (
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {actions.map((action) => (
                    <Button
                      key={`${action.href}-${action.label}`}
                      asChild
                      className="w-full sm:w-auto"
                      variant={action.variant ?? "default"}
                    >
                      <Link href={action.href}>{action.label}</Link>
                    </Button>
                  ))}
                </div>
              ) : null}
            </div>

            {children ? (
              <aside className="border-t border-border pt-6 xl:border-l xl:border-t-0 xl:pl-9 xl:pt-0">
                {children}
              </aside>
            ) : null}
          </div>

          {highlights.length ? (
            <div className="mt-16 grid gap-4 border-t border-border pt-6 md:grid-cols-3">
              {highlights.map((highlight, index) => (
                <div key={highlight} className="grid gap-3 md:grid-cols-[auto_1fr] md:border-l md:border-border/35 md:pl-5 first:md:border-l-0 first:md:pl-0">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-brand-support">
                    0{index + 1}
                  </span>
                  <p className="max-w-sm text-sm leading-7 text-foreground/82">{highlight}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
