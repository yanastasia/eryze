import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClassNames = {
  sm: "gap-1.5 text-[1.45rem] sm:text-[1.65rem]",
  md: "gap-2 text-[2.25rem] sm:text-[2.7rem]",
  lg: "gap-2.5 text-[3.7rem] sm:text-[5.2rem] lg:text-[6.5rem]",
} as const;

export function BrandMark({ className, size = "md" }: BrandMarkProps) {
  return (
    <div
      aria-label="ERYZE"
      className={cn(
        "font-display font-bold uppercase tracking-[-0.11em]",
        sizeClassNames[size],
        className,
      )}
    >
      <span className="eryze-wordmark">
        <span className="text-white">ERZE</span>
        <span className="eryze-wordmark-stub" aria-hidden>
          <span className="eryze-logo-stub" />
        </span>
        <span className="eryze-wordmark-arrow" aria-hidden>
          <span className="eryze-logo-arrow" />
        </span>
      </span>
    </div>
  );
}
