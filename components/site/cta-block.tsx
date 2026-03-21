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
    <section className="pb-16 pt-6 sm:pb-20">
      <Container>
        <div className="rounded-[2rem] border border-foreground/10 bg-foreground px-5 py-8 text-background shadow-[0_28px_80px_rgba(15,23,42,0.18)] sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_auto] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-background/70">Next step</p>
              <h2 className="mt-3 text-balance font-display text-3xl leading-tight sm:text-4xl">{title}</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-background/78 sm:text-base">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <Button asChild className="w-full bg-background text-foreground hover:bg-background/90 sm:w-auto">
                <Link href={primaryAction.href}>{primaryAction.label}</Link>
              </Button>
              {secondaryAction ? (
                <Button
                  asChild
                  className="w-full border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground sm:w-auto"
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
