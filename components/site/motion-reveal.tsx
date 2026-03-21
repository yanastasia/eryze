"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  once?: boolean;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  distance = 28,
  once = true,
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={{ opacity: 0, y: distance }}
      transition={{ delay, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.24, once }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
