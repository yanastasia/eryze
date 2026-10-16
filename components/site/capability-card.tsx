import type { Capability } from "@/content/site";

export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <article className="eryze-panel group relative overflow-hidden rounded-[1.5rem] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/45 hover:shadow-[0_22px_46px_rgba(109,88,255,0.14)] sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="eryze-kicker">Capability</p>
      </div>
      <h3 className="font-display text-xl text-foreground sm:text-2xl">{capability.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{capability.description}</p>
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
