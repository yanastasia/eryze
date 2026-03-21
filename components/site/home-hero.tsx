import Link from "next/link";

import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroSignals = [
  "Websites with clear positioning",
  "Platforms shaped for operations",
  "Systems that reduce friction",
];

const actionClassNames = {
  default:
    "border border-[#7a3fff] bg-[#7a3fff] text-white hover:border-[#8c5aff] hover:bg-[#8c5aff]",
  outline:
    "border-white/16 bg-transparent text-white hover:border-[#7a3fff] hover:bg-[#7a3fff] hover:text-white",
} as const;

export function HomeHero() {
  return (
    <section className="pb-6 pt-6 sm:pb-8 sm:pt-8">
      <Container>
        <div className="eryze-hero-surface rounded-[2.25rem]">
          <span className="eryze-hero-line left-[-6%] top-[14%] w-44 sm:w-60" aria-hidden />
          <span className="eryze-hero-line left-[22%] top-[80%] w-28 sm:w-40" aria-hidden />
          <span className="eryze-hero-line right-[-8%] top-[22%] w-48 sm:w-64" aria-hidden />
          <span className="eryze-hero-line right-[-4%] top-[78%] w-40 sm:w-56" aria-hidden />

          <span
            className="eryze-hero-ghost-arrow right-[8%] top-[10%] hidden h-56 w-28 lg:block"
            aria-hidden
          />
          <span
            className="eryze-hero-ghost-arrow left-[56%] top-[34%] hidden h-36 w-20 opacity-70 lg:block"
            aria-hidden
          />

          <span className="eryze-hero-spark left-[14%] top-[72%]" aria-hidden />
          <span className="eryze-hero-spark left-[34%] top-[18%] h-3 w-3" aria-hidden />
          <span className="eryze-hero-spark right-[22%] top-[74%]" aria-hidden />

          <span className="eryze-hero-glow left-[18%] top-[18%] h-14 w-14" aria-hidden />
          <span className="eryze-hero-glow right-[10%] top-[66%] h-16 w-16" aria-hidden />

          <div className="relative z-10 grid gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] lg:px-10 lg:py-12">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-300">Eryze Studio</p>
              <h1 className="mt-5 max-w-lg font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.06em] text-[#8f61ff] sm:text-6xl lg:text-[5.4rem]">
                Innovation
                <br />
                in motion.
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-6 text-slate-300 sm:text-base">
                Founder-led digital product studio for websites, platforms, and internal systems that need clarity fast.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild className={cn("w-full sm:w-auto", actionClassNames.default)}>
                  <Link href="/work">View Work</Link>
                </Button>
                <Button asChild className={cn("w-full sm:w-auto", actionClassNames.outline)} variant="outline">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-100"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex min-h-[260px] items-center justify-center lg:justify-end">
              <div className="w-full max-w-[33rem] rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_60px_rgba(2,8,20,0.26)] sm:p-8">
                <div
                  aria-label="ERYZE"
                  className="flex items-end justify-center gap-3 font-display text-[clamp(3.4rem,12vw,7rem)] font-bold uppercase leading-none tracking-[-0.09em]"
                >
                  <span className="text-white">ER</span>
                  <span className="eryze-logo-stub" aria-hidden />
                  <span className="eryze-logo-arrow" aria-hidden />
                  <span className="text-white">ZE</span>
                </div>

                <div className="mt-8 grid gap-3 text-center sm:grid-cols-2 sm:text-left">
                  <div className="rounded-[1.1rem] border border-white/10 bg-[#0a162c] px-4 py-4">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8f61ff]">Built for</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">Product launches, client platforms, and internal systems.</p>
                  </div>
                  <div className="rounded-[1.1rem] border border-white/10 bg-[#0a162c] px-4 py-4">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8f61ff]">Operating mode</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">Clean structure, fast iteration, and maintainable delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
