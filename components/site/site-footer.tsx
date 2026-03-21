import Link from "next/link";

import { BrandMark } from "@/components/site/brand-mark";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/site/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#071121] py-12">
      <Container className="grid gap-8 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div>
          <BrandMark size="sm" />
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
            Founder-led studio for websites, platforms, and internal systems.
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
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a className="transition-colors hover:text-white" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-white"
                href={siteConfig.linkedinUrl}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">© 2026 {siteConfig.name}. Built for clarity, momentum, and maintainability.</p>
        </div>
      </Container>
    </footer>
  );
}
