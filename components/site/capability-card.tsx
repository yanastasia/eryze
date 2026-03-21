import type { Capability } from "@/content/site";

export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <article className="rounded-[1.5rem] border border-border bg-card p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-6">
      <h3 className="font-display text-xl text-foreground sm:text-2xl">{capability.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{capability.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-foreground">
        {capability.outcomes.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-brand-accent">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
