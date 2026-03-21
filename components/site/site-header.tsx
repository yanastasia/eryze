"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/content/site";
import { Container } from "@/components/site/container";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur">
      <Container className="py-3 md:flex md:min-h-16 md:items-center md:justify-between md:py-0">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card text-lg font-semibold text-foreground">
              E
            </span>
            <span className="font-display text-lg text-foreground">{siteConfig.name}</span>
          </Link>
        </div>

        <nav
          aria-label="Primary"
          className="mt-3 grid grid-cols-5 gap-2 md:mt-0 md:flex md:flex-wrap md:justify-end"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              className={cn(
                "rounded-full px-2 py-3 text-center text-sm font-medium leading-none transition-colors md:px-4 md:py-2.5",
                isActive(pathname, item.href)
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-card hover:text-foreground",
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
