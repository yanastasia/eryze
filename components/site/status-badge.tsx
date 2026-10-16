import type { ProjectStatus } from "@/types/project";
import { cn } from "@/lib/utils";

const statusClassNames: Record<ProjectStatus, string> = {
  Completed: "border-brand-accent/28 bg-brand-accent/12 text-foreground",
  "In Progress": "border-brand-support/30 bg-brand-support/12 text-foreground",
  "Near Launch": "border-brand-accent/36 bg-brand-accent/14 text-foreground",
  Ongoing: "border-border bg-secondary/60 text-foreground",
  "Ongoing Client Work": "border-brand-support/30 bg-brand-support/12 text-foreground",
};

type StatusBadgeProps = {
  status: ProjectStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em]",
        statusClassNames[status],
      )}
    >
      {status}
    </span>
  );
}
