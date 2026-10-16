import Link from "next/link";

import { Container } from "@/components/site/container";
import { HoverSignalLink } from "@/components/site/eryze-motion";
import { Button } from "@/components/ui/button";

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
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[1.1rem] border border-border bg-[rgba(8,7,15,0.76)] px-6 py-12 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.72)] sm:px-10 lg:px-14 lg:py-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_90%_at_100%_100%,rgba(232,106,142,0.28),transparent_68%),radial-gradient(70%_110%_at_24%_120%,rgba(123,47,247,0.48),transparent_70%)]" />
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] xl:items-end">
            <div className="max-w-3xl">
              <p className="eryze-kicker">Next move</p>
              <h2 className="mt-6 text-balance font-display text-[clamp(3rem,5vw,5.8rem)] font-normal leading-[0.94] tracking-[-0.025em] text-foreground">
                {title}
              </h2>
              <p className="mt-6 max-w-2xl font-serif text-[1.08rem] leading-8 text-muted-foreground">{description}</p>
            </div>

            <div className="flex flex-col gap-4 xl:items-start xl:justify-end">
              <Button asChild className="w-full sm:w-auto">
                <Link href={primaryAction.href}>{primaryAction.label}</Link>
              </Button>
              {secondaryAction ? (
                <Button asChild className="w-full sm:w-auto" variant={secondaryAction.variant ?? "outline"}>
                  <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
                </Button>
              ) : null}
              <HoverSignalLink
                arrow="right"
                className="pt-2 text-muted-foreground hover:text-foreground"
                href="/contact"
                intensity={0.48}
                opacity={0.6}
                speed={1}
              >
                Write to Anastasia
              </HoverSignalLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
