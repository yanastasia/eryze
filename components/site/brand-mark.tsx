import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClassNames = {
  sm: "h-5 w-auto sm:h-6",
  md: "h-8 w-auto sm:h-10",
  lg: "h-14 w-auto sm:h-16 lg:h-20",
} as const;

const chipClassNames = {
  sm: "rounded-[0.8rem] px-2.5 py-1",
  md: "rounded-[1rem] px-3 py-1.5",
  lg: "rounded-[1.25rem] px-4 py-3",
} as const;

export function BrandMark({ className, size = "md" }: BrandMarkProps) {
  return (
    <span aria-label="ERYZE" className={cn("inline-flex items-center", className)}>
      <span
        className={cn(
          "inline-flex items-center bg-[var(--logo-chip)] shadow-[0_10px_24px_rgba(7,17,33,0.12)] dark:shadow-none",
          chipClassNames[size],
        )}
      >
        <Image
          alt="ERYZE"
          className={sizeClassNames[size]}
          height={305}
          priority={size === "lg"}
          src="/eryze-logo-dark.png"
          width={716}
        />
      </span>
      <span className="sr-only">ERYZE</span>
    </span>
  );
}
