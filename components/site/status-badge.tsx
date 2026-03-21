import type { ProjectStatus } from "@/types/project";
import { cn } from "@/lib/utils";

const statusClassNames: Record<ProjectStatus, string> = {
  "In Progress": "border-amber-200 bg-amber-50 text-amber-900",
  "Near Launch": "border-emerald-200 bg-emerald-50 text-emerald-900",
  Ongoing: "border-sky-200 bg-sky-50 text-sky-900",
};

type StatusBadgeProps = {
  status: ProjectStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.02em]",
        statusClassNames[status],
      )}
    >
      {status}
    </span>
  );
}
