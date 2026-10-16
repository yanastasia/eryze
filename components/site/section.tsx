import type { ReactNode } from "react";

import { Container } from "@/components/site/container";
import { MotionReveal } from "@/components/site/motion-reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  id?: string;
  motionVariant?: "up" | "soft" | "line";
  tone?: "muted" | "soft" | "strong";
  title: string;
};

const toneClassNames = {
  muted: "bg-[rgba(8,7,15,0.55)]",
  soft: "bg-[rgba(18,16,31,0.48)]",
  strong: "bg-[linear-gradient(135deg,rgba(23,21,40,0.92),rgba(8,7,15,0.84))]",
};

export function Section({
  children,
  className,
  description,
  eyebrow,
  id,
  motionVariant = "up",
  tone = "soft",
  title,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-12 sm:py-16 lg:py-20", className)}>
      <Container>
        <MotionReveal variant={motionVariant}>
          <div className={cn("relative overflow-hidden rounded-[1.1rem] border border-border px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14", toneClassNames[tone])}>
            <div className="grid gap-10 xl:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] xl:gap-16">
              <div className="max-w-xl">
                {eyebrow ? <p className="eryze-kicker">{eyebrow}</p> : null}
                <h2 className="mt-6 text-balance font-display text-[clamp(3rem,5vw,5.8rem)] font-normal leading-[0.94] tracking-[-0.025em] text-foreground">
                  {title}
                </h2>
                {description ? (
                  <p className="mt-6 max-w-lg font-serif text-[1.05rem] leading-8 text-muted-foreground">
                    {description}
                  </p>
                ) : null}
              </div>

              <div className="min-w-0 border-t border-border pt-8 xl:border-l xl:border-t-0 xl:pl-10 xl:pt-0">
                {children}
              </div>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
