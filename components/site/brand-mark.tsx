import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClassNames = {
  sm: "text-[1rem]",
  md: "text-[1.18rem]",
  lg: "text-[1.45rem]",
} as const;

export function BrandMark({ className, size = "md" }: BrandMarkProps) {
  return (
    <span
      aria-label="Eryze Studio"
      className={cn(
        "inline-flex items-center font-sans font-bold leading-none tracking-[0.2em] text-foreground",
        sizeClassNames[size],
        className,
      )}
    >
      ERYZE
    </span>
  );
}
