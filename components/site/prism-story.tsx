"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type PrismStoryProps = {
  children: ReactNode;
};

export function PrismStory({ children }: PrismStoryProps) {
  const storyRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 0.2, 0.43, 0.7, 1], ["18vw", "5vw", "24vw", "-22vw", "8vw"]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.43, 0.7, 1], ["4vh", "-5vh", "19vh", "-8vh", "17vh"]);
  const rotate = useTransform(scrollYProgress, [0, 0.22, 0.5, 0.76, 1], [-8, 18, 45, 82, 90]);
  const scale = useTransform(scrollYProgress, [0, 0.22, 0.48, 0.76, 1], [1, 0.72, 1.25, 0.86, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.82, 0.96, 1], [0.92, 1, 0.92, 0.72, 0.18]);
  const beamScale = useTransform(scrollYProgress, [0, 0.18, 0.52, 0.8, 1], [0.45, 1.05, 1.6, 0.8, 2]);

  return (
    <div className="eryze-prism-story-page" ref={storyRef}>
      <div aria-hidden className="eryze-prism-story-layer">
        <div className="eryze-prism-story-viewport">
          <motion.div
            className="eryze-prism-story"
            style={reduceMotion ? undefined : { opacity, rotate, scale, x, y }}
          >
            <motion.div className="eryze-prism-story__beam" style={reduceMotion ? undefined : { scaleX: beamScale }} />
            <div className="eryze-prism-story__glass" />
            <div className="eryze-prism-story__spectrum" />
          </motion.div>
        </div>
      </div>
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
