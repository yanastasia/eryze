import type { Capability } from "@/content/site";

export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-card p-5 shadow-[0_12px_32px_rgba(7,17,33,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/45 hover:shadow-[0_22px_46px_rgba(122,63,255,0.12)] sm:p-6">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-brand-accent/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <h3 className="font-display text-xl text-foreground sm:text-2xl">{capability.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{capability.description}</p>
      <ul className="mt-5 space-y-2.5 text-sm text-foreground">
        {capability.outcomes.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 text-brand-accent transition-transform duration-300 group-hover:translate-x-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
