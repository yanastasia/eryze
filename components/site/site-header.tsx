"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandMark } from "@/components/site/brand-mark";
import { ThemeToggle } from "@/components/site/theme-toggle";
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
    <header className="sticky top-0 z-40 bg-[var(--header-shell)] backdrop-blur">
      <Container className="py-4 md:flex md:min-h-18 md:items-center md:justify-between md:py-0">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center">
            <BrandMark size="sm" />
          </Link>
        </div>

        <div className="mt-3 flex items-center gap-2 md:mt-0">
          <nav
            aria-label="Primary"
            className="grid flex-1 grid-cols-5 gap-2 md:flex md:flex-wrap md:justify-end"
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
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
