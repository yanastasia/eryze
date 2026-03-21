import { cn } from "@/lib/utils";

type TagBadgeProps = {
  className?: string;
  tag: string;
};

export function TagBadge({ className, tag }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground",
        className,
      )}
    >
      {tag}
    </span>
  );
}
