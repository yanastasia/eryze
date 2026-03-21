"use client";

import { motion, useReducedMotion } from "framer-motion";

const driftingLines = [
  { className: "left-[6%] top-[16%] w-72", duration: 18 },
  { className: "right-[8%] top-[24%] w-80", duration: 22 },
  { className: "left-[20%] top-[46%] w-64", duration: 20 },
  { className: "right-[14%] top-[68%] w-72", duration: 24 },
  { className: "left-[10%] top-[82%] w-60", duration: 19 },
];

const ghostArrows = [
  { className: "left-[72%] top-[10%] hidden h-64 w-28 lg:block", duration: 14 },
  { className: "left-[12%] top-[58%] hidden h-44 w-20 xl:block", duration: 16 },
];

const sparks = [
  { className: "left-[18%] top-[20%]", duration: 6.2 },
  { className: "right-[22%] top-[36%]", duration: 7.8 },
  { className: "left-[62%] top-[74%]", duration: 7.1 },
  { className: "right-[10%] top-[88%]", duration: 8.4 },
];

export function HomepageAmbient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {driftingLines.map((line) => (
        <motion.span
          key={line.className}
          animate={shouldReduceMotion ? undefined : { opacity: [0.14, 0.32, 0.14], x: [0, 26, 0], y: [0, -28, 0] }}
          className={`eryze-hero-line ${line.className}`}
          transition={{ duration: line.duration, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        />
      ))}

      {ghostArrows.map((arrow) => (
        <motion.span
          key={arrow.className}
          animate={shouldReduceMotion ? undefined : { opacity: [0.18, 0.32, 0.18], y: [0, -20, 0] }}
          className={`eryze-hero-ghost-arrow ${arrow.className}`}
          transition={{ duration: arrow.duration, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        />
      ))}

      {sparks.map((spark) => (
        <motion.span
          key={spark.className}
          animate={shouldReduceMotion ? undefined : { opacity: [0.2, 0.65, 0.2], scale: [1, 1.08, 1] }}
          className={`eryze-hero-spark ${spark.className}`}
          transition={{ duration: spark.duration, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        />
      ))}
    </div>
  );
}
