"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandMark } from "@/components/site/brand-mark";
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
    <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur">
      <Container className="py-4 md:flex md:min-h-18 md:items-center md:justify-between md:py-0">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center">
            <BrandMark size="sm" />
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
                  ? "bg-white text-[#050b16]"
                  : "text-muted-foreground hover:bg-card hover:text-white",
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
