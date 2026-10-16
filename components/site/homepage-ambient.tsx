"use client";

import { motion, useReducedMotion } from "framer-motion";

const sparks = [
  { className: "left-[16%] top-[18%]", duration: 8.4 },
  { className: "right-[20%] top-[34%]", duration: 9.2 },
  { className: "left-[60%] top-[74%]", duration: 8.8 },
];

export function HomepageAmbient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map((spark) => (
        <motion.span
          key={spark.className}
          animate={shouldReduceMotion ? undefined : { opacity: [0.16, 0.46, 0.16], scale: [1, 1.05, 1] }}
          className={`eryze-hero-spark ${spark.className}`}
          transition={{ duration: spark.duration, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        />
      ))}
    </div>
  );
}
