"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";

const heroSignals = [
  "Websites and digital positioning",
  "Platforms and collaborative systems",
  "Internal tools and workflow clarity",
];

export function HomeHero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -18]);

  return (
    <section className="relative overflow-hidden py-0">
      <div
        ref={sectionRef}
        className="eryze-angle-frame eryze-scene-shell eryze-scene-strong relative rounded-none border-x-0 px-5 pb-12 pt-2 sm:px-6 sm:pb-14 sm:pt-3 lg:px-8 lg:pb-16 lg:pt-4"
      >
          <motion.span
            animate={shouldReduceMotion ? undefined : { opacity: [0.24, 0.64, 0.24], scale: [1, 1.08, 1] }}
            className="eryze-hero-spark left-[14%] top-[62%]"
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
            className="eryze-hero-spark right-[22%] top-[64%]"
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
            className="eryze-hero-glow right-[10%] top-[56%] h-16 w-16"
            transition={{ duration: 11.2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-6xl">
            <span aria-hidden className="absolute left-0 top-[3.85rem] hidden h-px w-full bg-border/30 sm:block" />
            <motion.div className="mx-auto max-w-[64rem] pt-4 text-center will-change-transform sm:pt-5" style={{ y: copyY }}>
              <motion.p
                className="eryze-kicker"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                Eryze Studio
              </motion.p>
              <motion.div
                className="mx-auto mt-5 flex max-w-[60rem] flex-col items-center gap-4"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-balance font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-[6.1rem]">
                  Designed for clarity.
                  <span className="block font-display text-brand-accent">Built for growth.</span>
                </h1>
              </motion.div>
              <motion.p
                className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                Eryze Studio designs and builds digital systems that move businesses forward with technical precision,
                collaborative thinking, and calm, structured delivery.
              </motion.p>

              <motion.div
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
              >
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/contact">Discuss your project</Link>
                </Button>
                <Button
                  asChild
                  className="w-full sm:w-auto"
                  variant="outline"
                >
                  <Link href="/#work-preview">View selected work</Link>
                </Button>
              </motion.div>

              <motion.div
                className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-3"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
              >
                {heroSignals.map((signal, index) => (
                  <motion.div
                    key={signal}
                    className="eryze-panel eryze-panel-utility rounded-[1.1rem] px-4 py-4 text-sm uppercase tracking-[0.14em] text-muted-foreground"
                    transition={{ delay: index * 0.05, duration: 0.24 }}
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  >
                    {signal}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
      </div>
    </section>
  );
}
