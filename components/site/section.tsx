import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "@/components/site/container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  id?: string;
  title: string;
};

export function Section({
  children,
  className,
  description,
  eyebrow,
  id,
  title,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-14 sm:py-16", className)}>
      <Container>
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand-accent">{eyebrow}</p>
          ) : null}
          <h2 className="mt-3 text-balance font-display text-3xl leading-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">{description}</p>
          ) : null}
        </div>
        <div className="mt-8 sm:mt-10">{children}</div>
      </Container>
    </section>
  );
}
