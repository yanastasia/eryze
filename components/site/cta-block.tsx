import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";

type CTAAction = {
  href: string;
  label: string;
  variant?: "default" | "outline";
};

type CTABlockProps = {
  description: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  title: string;
};

export function CTABlock({
  description,
  primaryAction,
  secondaryAction,
  title,
}: CTABlockProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="bg-card px-5 py-8 text-foreground shadow-[0_18px_50px_rgba(7,17,33,0.08)] dark:shadow-[0_22px_60px_rgba(7,17,33,0.2)] sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_auto] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand-accent">Next step</p>
              <h2 className="mt-3 text-balance font-display text-3xl leading-tight sm:text-4xl">{title}</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <Button asChild className="w-full sm:w-auto">
                <Link href={primaryAction.href}>{primaryAction.label}</Link>
              </Button>
              {secondaryAction ? (
                <Button
                  asChild
                  className="w-full bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground sm:w-auto"
                  variant="outline"
                >
                  <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
