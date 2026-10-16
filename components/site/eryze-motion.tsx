"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import {
  useId,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type MotionTuningProps = {
  className?: string;
  height?: number | string;
  intensity?: number;
  opacity?: number;
  speed?: number;
};

type SoftWaveHeroProps = MotionTuningProps & {
  blur?: number;
  children?: ReactNode;
  contentClassName?: string;
};

type HoverSignalLinkProps = Omit<ComponentPropsWithoutRef<"a">, "children" | "className" | "href"> & {
  arrow?: "none" | "right" | "up-right";
  children: ReactNode;
  className?: string;
  href: string;
  intensity?: number;
  opacity?: number;
  speed?: number;
};

const SIGNAL_PATHS = [
  "M-120 184 C 36 150 146 118 276 132 C 402 146 498 212 658 204 C 810 196 894 110 1044 116 C 1208 124 1326 198 1560 156",
  "M-120 236 C 54 218 142 176 270 182 C 394 188 490 248 640 242 C 804 236 892 170 1054 174 C 1222 178 1336 238 1560 218",
  "M-120 108 C 44 90 150 62 294 76 C 430 88 502 142 646 138 C 794 134 888 80 1036 82 C 1216 84 1338 142 1560 118",
] as const;

const HERO_WAVE_PATHS = [
  "M-120 112 C 84 96 204 82 350 88 C 524 94 612 130 770 128 C 930 126 1034 92 1200 98 C 1378 104 1510 142 1840 120",
  "M-120 204 C 54 176 186 166 336 174 C 510 184 620 226 794 222 C 968 218 1086 178 1248 184 C 1422 190 1544 234 1840 216",
  "M-120 302 C 78 282 212 266 376 270 C 558 274 678 318 850 314 C 1014 310 1138 278 1316 284 C 1496 290 1624 326 1840 314",
] as const;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function resolveDimension(value: number | string | undefined, fallback: string) {
  if (typeof value === "number") {
    return `${value}px`;
  }

  return value ?? fallback;
}

function createStyleHeight(value: number | string | undefined, fallback: string) {
  return { height: resolveDimension(value, fallback) } satisfies CSSProperties;
}

function createStyleMinHeight(value: number | string | undefined, fallback: string) {
  return { minHeight: resolveDimension(value, fallback) } satisfies CSSProperties;
}

function createSignalTransition(duration: number, delay = 0): Transition {
  return {
    delay,
    duration,
    ease: "easeInOut",
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "mirror",
  };
}

function getArrowGlyph(arrow: HoverSignalLinkProps["arrow"]) {
  if (arrow === "up-right") {
    return "↗";
  }

  if (arrow === "right") {
    return "→";
  }

  return null;
}

// A broad, low-noise signal field for section backgrounds.
export function SignalLineBackground({
  className,
  height = "clamp(9rem, 20vw, 18rem)",
  intensity = 0.65,
  opacity = 0.38,
  speed = 18,
}: MotionTuningProps) {
  const shouldReduceMotion = useReducedMotion();
  const fadeId = useId();
  const gradientId = useId();
  const highlightId = useId();
  const resolvedIntensity = clamp(intensity, 0, 1);
  const resolvedOpacity = clamp(opacity, 0, 1);
  const resolvedSpeed = Math.max(speed, 4);

  const layers = useMemo(
    () => [
      {
        path: SIGNAL_PATHS[0],
        duration: resolvedSpeed * 1.15,
        offsetX: `${4 + resolvedIntensity * 4}%`,
        offsetY: -8 - resolvedIntensity * 6,
        pathOpacity: resolvedOpacity * 0.78,
        strokeWidth: 1.6,
      },
      {
        path: SIGNAL_PATHS[1],
        duration: resolvedSpeed,
        offsetX: `${6 + resolvedIntensity * 5}%`,
        offsetY: 6 + resolvedIntensity * 7,
        pathOpacity: resolvedOpacity * 0.46,
        strokeWidth: 1.2,
      },
      {
        path: SIGNAL_PATHS[2],
        duration: resolvedSpeed * 1.4,
        offsetX: `${3 + resolvedIntensity * 3}%`,
        offsetY: -4 - resolvedIntensity * 4,
        pathOpacity: resolvedOpacity * 0.28,
        strokeWidth: 1,
      },
    ],
    [resolvedIntensity, resolvedOpacity, resolvedSpeed],
  );

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-x-0 overflow-hidden", className)}
      style={createStyleHeight(height, "clamp(9rem, 20vw, 18rem)")}
    >
      <svg
        className="absolute inset-y-0 left-1/2 h-full w-[140%] min-w-[56rem] -translate-x-1/2"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="18%" stopColor="rgba(180,190,255,0.24)" />
            <stop offset="50%" stopColor="rgba(136,113,255,0.62)" />
            <stop offset="82%" stopColor="rgba(180,190,255,0.24)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id={highlightId} x1="18%" x2="86%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="55%" stopColor="rgba(255,255,255,0.62)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id={fadeId} x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop offset="14%" stopColor="black" stopOpacity="0.9" />
            <stop offset="86%" stopColor="black" stopOpacity="0.9" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </linearGradient>
          <mask id={`${fadeId}-mask`}>
            <rect fill={`url(#${fadeId})`} height="320" width="1440" x="0" y="0" />
          </mask>
        </defs>

        <g mask={`url(#${fadeId}-mask)`}>
          {layers.map((layer, index) => (
            <motion.g
              key={`${layer.path}-${index}`}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: ["0%", layer.offsetX, "0%"],
                      y: [0, layer.offsetY, 0],
                    }
              }
              transition={shouldReduceMotion ? undefined : createSignalTransition(layer.duration, index * 0.35)}
            >
              <path
                d={layer.path}
                opacity={layer.pathOpacity * 0.45}
                stroke={`url(#${highlightId})`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={layer.strokeWidth * 2.4}
              />
              <path
                d={layer.path}
                opacity={layer.pathOpacity}
                stroke={`url(#${gradientId})`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={layer.strokeWidth}
              />
            </motion.g>
          ))}
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/25" />
    </div>
  );
}

// A refined horizon line with a soft sunrise-style glow.
export function HorizonGlowDivider({
  className,
  height = 96,
  intensity = 0.52,
  opacity = 0.62,
  speed = 22,
}: MotionTuningProps) {
  const shouldReduceMotion = useReducedMotion();
  const gradientId = useId();
  const glowId = useId();
  const resolvedIntensity = clamp(intensity, 0, 1);
  const resolvedOpacity = clamp(opacity, 0, 1);
  const resolvedSpeed = Math.max(speed, 8);
  const horizonY = 68 - resolvedIntensity * 6;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none relative overflow-hidden", className)}
      style={createStyleHeight(height, "96px")}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [resolvedOpacity * 0.18, resolvedOpacity * 0.34, resolvedOpacity * 0.18],
                scaleX: [0.92, 1.03, 0.92],
                y: [0, -3 - resolvedIntensity * 5, 0],
              }
        }
        className="absolute left-1/2 top-[62%] h-[120%] w-[40%] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(136,113,255,0.12) 0%, rgba(180,190,255,0.06) 34%, transparent 74%)",
          opacity: resolvedOpacity * 0.4,
        }}
        transition={shouldReduceMotion ? undefined : createSignalTransition(resolvedSpeed)}
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["-20%", "112%"],
                opacity: [0, resolvedOpacity * 0.3, 0],
              }
        }
        className="absolute left-0 top-[58%] h-px w-[12rem] -translate-y-1/2 blur-md"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.58), transparent)",
        }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: resolvedSpeed * 0.9,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: resolvedSpeed * 0.55,
              }
        }
      />

      <svg className="absolute inset-0 h-full w-full" fill="none" viewBox="0 0 1440 120">
        <defs>
          <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="24%" stopColor="rgba(180,190,255,0.1)" />
            <stop offset="50%" stopColor="rgba(136,113,255,0.46)" />
            <stop offset="76%" stopColor="rgba(180,190,255,0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id={glowId} x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.34)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <motion.path
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  d: [
                    `M0 ${horizonY} C 210 ${horizonY + 1} 410 ${horizonY - 1} 720 ${horizonY - 1} C 1032 ${horizonY - 1} 1230 ${horizonY + 1} 1440 ${horizonY}`,
                    `M0 ${horizonY + 1} C 210 ${horizonY - 1} 410 ${horizonY - 3} 720 ${horizonY - 2} C 1032 ${horizonY - 1} 1230 ${horizonY + 2} 1440 ${horizonY + 1}`,
                    `M0 ${horizonY} C 210 ${horizonY + 1} 410 ${horizonY - 1} 720 ${horizonY - 1} C 1032 ${horizonY - 1} 1230 ${horizonY + 1} 1440 ${horizonY}`,
                  ],
                }
          }
          d={`M0 ${horizonY} C 210 ${horizonY + 1} 410 ${horizonY - 1} 720 ${horizonY - 1} C 1032 ${horizonY - 1} 1230 ${horizonY + 1} 1440 ${horizonY}`}
          opacity={resolvedOpacity * 0.24}
          stroke={`url(#${glowId})`}
          strokeLinecap="round"
          strokeWidth="2.8"
          transition={shouldReduceMotion ? undefined : createSignalTransition(resolvedSpeed * 1.08)}
        />
        <motion.path
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [resolvedOpacity * 0.74, resolvedOpacity * 0.96, resolvedOpacity * 0.74],
                }
          }
          d={`M0 ${horizonY} C 210 ${horizonY + 1} 410 ${horizonY - 1} 720 ${horizonY - 1} C 1032 ${horizonY - 1} 1230 ${horizonY + 1} 1440 ${horizonY}`}
          opacity={resolvedOpacity * 0.88}
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeWidth="1.15"
          transition={shouldReduceMotion ? undefined : createSignalTransition(resolvedSpeed * 1.14, 0.2)}
        />
      </svg>

      <div
        className="absolute inset-x-[28%] top-[58%] h-10 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(136,113,255,0.12), transparent 72%)",
          filter: "blur(28px)",
          opacity: resolvedOpacity * 0.22,
        }}
      />
    </div>
  );
}

// The hero keeps the motion language to three slow curves plus a restrained horizon glow.
export function SoftWaveHero({
  blur = 88,
  children,
  className,
  contentClassName,
  height = "clamp(28rem, 72vh, 46rem)",
  intensity = 0.7,
  opacity = 0.42,
  speed = 18,
}: SoftWaveHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const gradientId = useId();
  const highlightId = useId();
  const resolvedIntensity = clamp(intensity, 0, 1);
  const resolvedOpacity = clamp(opacity, 0, 1);
  const resolvedSpeed = Math.max(speed, 6);
  const resolvedBlur = clamp(blur, 16, 160);

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden rounded-[1.9rem] border border-border/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%),radial-gradient(circle_at_18%_18%,rgba(180,190,255,0.06),transparent_22%),radial-gradient(circle_at_84%_12%,rgba(136,113,255,0.08),transparent_24%),#06101d] shadow-[0_32px_88px_rgba(7,17,33,0.18)]",
        className,
      )}
      style={createStyleMinHeight(height, "clamp(28rem, 72vh, 46rem)")}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,9,19,0.04),rgba(4,9,19,0.22)_72%,rgba(4,9,19,0.46))]" />

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [resolvedOpacity * 0.3, resolvedOpacity * 0.54, resolvedOpacity * 0.3],
                scale: [1, 1.06, 1],
                x: [0, 18 + resolvedIntensity * 14, 0],
                y: [0, -10 - resolvedIntensity * 8, 0],
              }
        }
        className="absolute left-[8%] top-[10%] h-40 w-40 rounded-full"
        style={{
          background: "rgba(136,113,255,0.14)",
          filter: `blur(${resolvedBlur}px)`,
        }}
        transition={shouldReduceMotion ? undefined : createSignalTransition(resolvedSpeed * 1.2)}
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [resolvedOpacity * 0.18, resolvedOpacity * 0.38, resolvedOpacity * 0.18],
                scale: [1, 1.05, 1],
                x: [0, -14 - resolvedIntensity * 10, 0],
                y: [0, 10 + resolvedIntensity * 6, 0],
              }
        }
        className="absolute right-[10%] top-[14%] h-32 w-32 rounded-full"
        style={{
          background: "rgba(180,190,255,0.12)",
          filter: `blur(${resolvedBlur * 0.84}px)`,
        }}
        transition={shouldReduceMotion ? undefined : createSignalTransition(resolvedSpeed * 1.4, 0.6)}
      />

      <motion.svg
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["-1.5%", "1.5%", "-1.5%"],
                y: [0, -5 - resolvedIntensity * 4, 0],
              }
        }
        className="pointer-events-none absolute inset-x-[-10%] top-[12%] h-[72%] w-[120%]"
        fill="none"
        preserveAspectRatio="none"
        transition={shouldReduceMotion ? undefined : createSignalTransition(resolvedSpeed * 1.05)}
        viewBox="0 0 1728 420"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="18%" stopColor="rgba(180,190,255,0.1)" />
            <stop offset="50%" stopColor="rgba(136,113,255,0.38)" />
            <stop offset="82%" stopColor="rgba(180,190,255,0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id={highlightId} x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="48%" stopColor="rgba(255,255,255,0.52)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {HERO_WAVE_PATHS.map((path, index) => (
          <motion.g
            key={`${path}-${index}`}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [
                      "0%",
                      `${(index + 1) * (resolvedIntensity * 1.2 + 0.6)}%`,
                      "0%",
                    ],
                    y: [
                      0,
                      (index - 1) * (4 + resolvedIntensity * 4),
                      0,
                    ],
                    opacity: [
                      resolvedOpacity * (index === 1 ? 0.78 : 0.54),
                      resolvedOpacity * (index === 1 ? 0.9 : 0.62),
                      resolvedOpacity * (index === 1 ? 0.78 : 0.54),
                    ],
                  }
            }
            transition={shouldReduceMotion ? undefined : createSignalTransition(resolvedSpeed * (1 + index * 0.18), index * 0.4)}
          >
            <path
              d={path}
              opacity={resolvedOpacity * (index === 1 ? 0.22 : 0.12)}
              stroke={`url(#${highlightId})`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={index === 1 ? 3.8 : 3}
            />
            <path
              d={path}
              opacity={resolvedOpacity * (index === 1 ? 0.62 : 0.38)}
              stroke={`url(#${gradientId})`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={index === 1 ? 1.6 : 1.18}
            />
          </motion.g>
        ))}
      </motion.svg>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,16,29,0) 0%, rgba(6,16,29,0.14) 42%, rgba(6,16,29,0.78) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-[18%] bottom-[10%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(180,190,255,0.18), rgba(136,113,255,0.38), rgba(180,190,255,0.18), transparent)",
          boxShadow: `0 0 ${resolvedBlur * 0.18}px rgba(136,113,255,0.18)`,
          opacity: resolvedOpacity * 0.52,
        }}
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [resolvedOpacity * 0.18, resolvedOpacity * 0.34, resolvedOpacity * 0.18],
                scaleX: [0.94, 1.06, 0.94],
                y: [0, -8 - resolvedIntensity * 6, 0],
              }
        }
        className="pointer-events-none absolute inset-x-[28%] bottom-[6%] h-24 rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(136,113,255,0.16), transparent 72%)",
          filter: `blur(${resolvedBlur * 0.7}px)`,
        }}
        transition={shouldReduceMotion ? undefined : createSignalTransition(resolvedSpeed * 1.2)}
      />

      {/* A final inner shadow keeps the hero grounded against dark layouts. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -48px 96px rgba(4,9,19,0.38)",
        }}
      />

      <div className={cn("relative z-10 flex h-full flex-col justify-end px-6 py-10 sm:px-8 sm:py-12 lg:px-12", contentClassName)}>
        {children}
      </div>
    </section>
  );
}

// Hover feedback stays signal-like instead of default underlines or hard glows.
export function HoverSignalLink({
  arrow = "right",
  children,
  className,
  href,
  intensity = 0.78,
  opacity = 1,
  speed = 0.9,
  ...linkProps
}: HoverSignalLinkProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const resolvedIntensity = clamp(intensity, 0, 1);
  const resolvedOpacity = clamp(opacity, 0.45, 1);
  const resolvedSpeed = Math.max(speed, 0.25);
  const arrowGlyph = getArrowGlyph(arrow);

  return (
    <motion.span
      animate={isHovered ? "hover" : "rest"}
      className="inline-flex"
      initial={false}
      onBlur={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onHoverStart={() => setIsHovered(true)}
    >
      <Link
        className={cn(
          "group inline-flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-foreground transition-colors hover:text-brand-support focus-visible:text-brand-support",
          className,
        )}
        href={href}
        {...linkProps}
      >
        <span className="relative z-10 uppercase">{children}</span>

        {arrowGlyph ? (
          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : isHovered
                  ? {
                      x: 2 + resolvedIntensity * 2,
                      y: arrow === "up-right" ? -1 : 0,
                      opacity: resolvedOpacity,
                    }
                  : { x: 0, y: 0, opacity: Math.min(resolvedOpacity, 0.82) }
            }
            className="relative z-10 text-[0.95rem] text-brand-support"
            transition={{ duration: resolvedSpeed, ease: [0.22, 1, 0.36, 1] }}
          >
            {arrowGlyph}
          </motion.span>
        ) : null}
      </Link>
    </motion.span>
  );
}
