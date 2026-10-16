import { cn } from "@/lib/utils";

type TagBadgeProps = {
  className?: string;
  tag: string;
};

export function TagBadge({ className, tag }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background/72 px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-muted-foreground",
        className,
      )}
    >
      {tag}
    </span>
  );
}
