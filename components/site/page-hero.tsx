import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";
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

const actionClassNames = {
  default: undefined,
  outline: "border-border bg-transparent text-foreground hover:bg-foreground hover:text-background",
  secondary: undefined,
  ghost: undefined,
  link: undefined,
  destructive: undefined,
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
    <section className="pb-6 pt-6 sm:pb-8 sm:pt-8">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card/92 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div
            className={cn(
              "grid gap-8 px-5 py-8 sm:px-8 sm:py-10 md:gap-10 lg:px-10 lg:py-12",
              children ? "md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]" : undefined,
            )}
          >
            <div>
              {eyebrow ? (
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-accent">{eyebrow}</p>
              ) : null}
              <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[0.96] text-foreground sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">{description}</p>
              {highlights.length ? (
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm leading-6 text-foreground"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}
              {actions.length ? (
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {actions.map((action) => (
                    <Button
                      key={`${action.href}-${action.label}`}
                      asChild
                      className={cn("w-full sm:w-auto", actionClassNames[action.variant ?? "default"])}
                      variant={action.variant ?? "default"}
                    >
                      <Link href={action.href}>{action.label}</Link>
                    </Button>
                  ))}
                </div>
              ) : null}
            </div>
            {children ? <div className="flex h-full items-stretch">{children}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
