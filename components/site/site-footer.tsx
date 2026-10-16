import Link from "next/link";
import { Linkedin } from "lucide-react";

import { BrandMark } from "@/components/site/brand-mark";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/site/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[var(--footer-shell)] py-12">
      <Container>
        <div className="overflow-hidden rounded-[1rem] border border-border bg-[linear-gradient(135deg,rgba(18,16,31,0.86),rgba(8,7,15,0.94))] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 md:grid-cols-[1.35fr_0.85fr_0.8fr]">
            <div>
              <BrandMark size="sm" />
              <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                Eryze Studio designs and builds digital systems that help businesses grow with clarity.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Navigate</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {siteConfig.navItems.map((item) => (
                  <li key={item.href}>
                    <Link className="transition-colors hover:text-foreground" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Contact</p>
              <ul className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <li>
                  <a className="transition-colors hover:text-foreground" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Anastasia Yakimovska on LinkedIn"
                    className="inline-flex size-8 items-center justify-center rounded-full border border-border transition-colors hover:border-brand-accent hover:text-foreground"
                    href={siteConfig.linkedinUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Linkedin aria-hidden className="size-3.5" />
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                © 2026 {siteConfig.name}. Designed for clarity. Built for growth.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
