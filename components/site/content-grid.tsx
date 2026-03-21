import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type GridVariant = "two" | "three" | "four";

const gridVariants: Record<GridVariant, string> = {
  two: "grid gap-4 md:gap-6 md:grid-cols-2",
  three: "grid gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-3",
  four: "grid gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-4",
};

type ContentGridProps = HTMLAttributes<HTMLDivElement> & {
  variant?: GridVariant;
};

export function ContentGrid({
  className,
  variant = "two",
  ...props
}: ContentGridProps) {
  return <div className={cn(gridVariants[variant], className)} {...props} />;
}
