"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 18);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <Container
        className={cn(
          "transition-[padding] duration-300",
          isScrolled ? "py-2.5" : "py-4",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-[1.35rem] border px-3 py-3 transition-all duration-300 md:px-4",
            isScrolled
              ? "border-border/80 bg-[var(--header-shell)] shadow-[0_16px_40px_rgba(7,17,33,0.16)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <Link href="/" className="inline-flex items-center">
            <BrandMark size="sm" />
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <nav
              aria-label="Primary"
              className={cn(
                "grid grid-cols-5 items-center gap-1 rounded-full border border-border/70 bg-card/80 p-1 backdrop-blur md:flex md:flex-wrap",
                isScrolled ? "shadow-[0_10px_24px_rgba(7,17,33,0.12)]" : "",
              )}
            >
              {siteConfig.navItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    className={cn(
                      "relative inline-flex min-h-10 items-center justify-center rounded-full px-2 py-2 text-center text-sm font-medium leading-none transition-colors md:px-4 md:py-2.5",
                      active ? "text-background" : "text-muted-foreground hover:text-foreground",
                    )}
                    href={item.href}
                  >
                    {active ? (
                      <motion.span
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-foreground shadow-[0_10px_24px_rgba(7,17,33,0.12)]"
                        layoutId="site-header-active-pill"
                        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
