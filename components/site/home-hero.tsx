"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { BrandMark } from "@/components/site/brand-mark";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";

const heroSignals = [
  "Websites and launch surfaces",
  "Client platforms and portals",
  "Internal tools and automation",
];

export function HomeHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -28]);
  const copyY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -14]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-y border-border/60 py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="relative">
          <motion.span
            animate={shouldReduceMotion ? undefined : { opacity: [0.18, 0.38, 0.18], x: [0, 22, 0], y: [0, -20, 0] }}
            className="eryze-hero-line left-[-4%] top-[12%] w-48 sm:w-72"
            transition={{ duration: 18, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          />
          <motion.span
            animate={shouldReduceMotion ? undefined : { opacity: [0.16, 0.32, 0.16], x: [0, 18, 0], y: [0, -14, 0] }}
            className="eryze-hero-line left-[12%] top-[92%] w-28 sm:w-48"
            transition={{ duration: 16, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          />
          <motion.span
            animate={shouldReduceMotion ? undefined : { opacity: [0.18, 0.34, 0.18], x: [0, 20, 0], y: [0, -26, 0] }}
            className="eryze-hero-line right-[-6%] top-[18%] w-52 sm:w-72"
            transition={{ duration: 21, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          />
          <motion.span
            animate={shouldReduceMotion ? undefined : { opacity: [0.16, 0.28, 0.16], x: [0, 16, 0], y: [0, -18, 0] }}
            className="eryze-hero-line right-[2%] top-[84%] w-32 sm:w-56"
            transition={{ duration: 19, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          />

          <motion.span
            className="eryze-hero-ghost-arrow right-[10%] top-[8%] hidden h-72 w-32 lg:block"
            animate={shouldReduceMotion ? undefined : { opacity: [0.16, 0.26, 0.16], y: [0, -18, 0] }}
            transition={{ duration: 12, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          />
          <motion.span
            className="eryze-hero-ghost-arrow left-[58%] top-[46%] hidden h-40 w-20 opacity-70 lg:block"
            animate={shouldReduceMotion ? undefined : { opacity: [0.12, 0.22, 0.12], y: [0, -12, 0] }}
            transition={{ duration: 10, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          />

          <motion.span
            animate={shouldReduceMotion ? undefined : { opacity: [0.24, 0.64, 0.24], scale: [1, 1.08, 1] }}
            className="eryze-hero-spark left-[14%] top-[72%]"
            transition={{ duration: 7.2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          />
          <motion.span
            animate={shouldReduceMotion ? undefined : { opacity: [0.18, 0.56, 0.18], scale: [1, 1.12, 1] }}
            className="eryze-hero-spark left-[34%] top-[18%] h-3 w-3"
            transition={{ duration: 5.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          />
          <motion.span
            animate={shouldReduceMotion ? undefined : { opacity: [0.22, 0.58, 0.22], scale: [1, 1.08, 1] }}
            className="eryze-hero-spark right-[22%] top-[74%]"
            transition={{ duration: 6.6, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          />

          <motion.span
            animate={shouldReduceMotion ? undefined : { opacity: [0.2, 0.38, 0.2], scale: [1, 1.05, 1] }}
            className="eryze-hero-glow left-[18%] top-[18%] h-14 w-14"
            transition={{ duration: 9.4, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          />
          <motion.span
            animate={shouldReduceMotion ? undefined : { opacity: [0.18, 0.34, 0.18], scale: [1, 1.06, 1] }}
            className="eryze-hero-glow right-[10%] top-[66%] h-16 w-16"
            transition={{ duration: 11.2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          />

          <div className="relative z-10 grid gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(22rem,1.12fr)] lg:items-center">
            <motion.div className="max-w-xl will-change-transform" style={{ y: copyY }}>
              <motion.p
                className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                Eryze Studio
              </motion.p>
              <div className="mt-5 max-w-lg font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.06em] text-[#8f61ff] sm:text-6xl lg:text-[5.4rem]">
                {["Innovation", "in motion."].map((line, index) => (
                  <motion.span
                    key={line}
                    className="block"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + index * 0.1, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line}
                  </motion.span>
                ))}
              </div>
              <motion.p
                className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                Development studio for websites, digital products, and internal tools built with clear structure and reliable execution.
              </motion.p>

              <motion.div
                className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
              >
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/contact">Start a project</Link>
                </Button>
                <Button
                  asChild
                  className="w-full border-border bg-transparent text-foreground hover:bg-foreground hover:text-background sm:w-auto"
                  variant="outline"
                >
                  <Link href="/work">View work</Link>
                </Button>
              </motion.div>

              <motion.div
                className="mt-10 border-y border-border/60"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
              >
                {heroSignals.map((signal, index) => (
                  <motion.div
                    key={signal}
                    className="border-b border-border/60 py-4 text-sm uppercase tracking-[0.18em] text-muted-foreground last:border-b-0"
                    transition={{ delay: index * 0.05, duration: 0.24 }}
                    whileHover={shouldReduceMotion ? undefined : { x: 6 }}
                  >
                    {signal}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className="relative flex min-h-[20rem] items-center justify-center lg:min-h-[38rem] lg:justify-end">
              <motion.div
                className="relative w-full will-change-transform"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
                style={{ y: panelY }}
                transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.6, once: true }}
              >
                <span aria-hidden className="absolute inset-x-0 top-[16%] hidden h-px bg-border/40 lg:block" />
                <span aria-hidden className="absolute inset-x-[14%] bottom-[18%] hidden h-px bg-border/35 lg:block" />
                <span aria-hidden className="absolute right-[14%] top-[12%] hidden h-[64%] w-px bg-border/25 lg:block" />
                <span
                  aria-hidden
                  className="absolute right-[18%] top-[26%] hidden h-32 w-32 rounded-full bg-brand-accent/10 blur-3xl lg:block"
                />
                <motion.div
                  animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
                  className="relative flex min-h-[18rem] items-center justify-center lg:min-h-[30rem] lg:justify-end"
                  transition={{ duration: 7.4, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
                >
                  <BrandMark size="lg" className="justify-center lg:justify-end" />
                </motion.div>

                <div className="border-t border-border/60 pt-5 sm:pt-6">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-xs">
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-accent">Studio focus</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        Product websites, structured platforms, and internal systems with maintainable implementation.
                      </p>
                    </div>

                    <div className="flex gap-6 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                      <span>Strategy</span>
                      <span>Design</span>
                      <span>Development</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
