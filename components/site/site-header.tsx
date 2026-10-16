"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 18);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const renderDesktopNavLink = (href: string, label: string) => {
    const active = isActive(pathname, href);

    return (
      <Link
        key={href}
        className={cn(
          "relative inline-flex min-h-9 items-center justify-center rounded-[0.9rem] px-3 py-1.5 text-center text-[0.78rem] font-semibold uppercase leading-none tracking-[0.18em] transition-colors lg:px-4",
          active
            ? "text-background"
            : isHome && !isScrolled
              ? "text-[#0b0a15]/68 hover:text-[#0b0a15]"
              : "text-muted-foreground hover:text-foreground",
        )}
        href={href}
        onClick={() => setIsMenuOpen(false)}
      >
        {active ? (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-[0.9rem] bg-foreground shadow-[0_10px_24px_rgba(7,17,33,0.18)]"
            layoutId="site-header-active-pill"
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : null}
        <span className="relative z-10">{label}</span>
      </Link>
    );
  };

  return (
    <header className={cn("sticky top-0 z-40", isHome ? "absolute inset-x-0" : "")}>
      <Container
        className={cn(
          "transition-[padding] duration-300",
          isScrolled ? "py-2" : "py-3",
        )}
      >
        <div
          className={cn(
            "relative flex items-center justify-between gap-3 rounded-[0.9rem] border px-3 py-2 transition-all duration-300 md:px-4",
            isHome && !isScrolled
              ? "border-transparent bg-transparent text-[#0b0a15]"
              : isScrolled
              ? "border-border bg-[rgba(11,10,21,0.86)] shadow-[0_18px_42px_rgba(0,0,0,0.24)] backdrop-blur-xl"
              : "border-border/70 bg-[rgba(11,10,21,0.62)] backdrop-blur-lg",
          )}
        >
          <Link
            href="/"
            className={cn(
              "inline-flex items-center justify-center px-2 py-1.5",
              pathname === "/" ? "opacity-100" : "opacity-90 hover:opacity-100",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            <BrandMark className={isHome && !isScrolled ? "text-[#0b0a15]" : undefined} size="md" />
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <nav
              aria-label="Primary"
              className="hidden items-center gap-1 xl:flex"
            >
              {siteConfig.navItems.filter((item) => item.href !== "/").map((item) => renderDesktopNavLink(item.href, item.label))}
            </nav>
            <div className={cn("xl:ml-1", isHome && !isScrolled ? "hidden sm:block" : "")}>
              <ThemeToggle />
            </div>
            <button
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              className={cn(
                "inline-flex min-h-9 min-w-9 items-center justify-center rounded-full border px-3 text-[0.7rem] font-medium uppercase tracking-[0.14em] xl:hidden",
                isHome && !isScrolled
                  ? "border-[#0b0a15]/20 bg-[#f3f1fc]/72 text-[#0b0a15] backdrop-blur-md"
                  : "border-border bg-[rgba(18,16,31,0.88)] text-foreground",
              )}
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="xl:hidden"
              exit={{ opacity: 0, y: -8 }}
              initial={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <nav
                aria-label="Mobile primary"
              className="mt-3 grid gap-2 rounded-[0.9rem] border border-border bg-[rgba(11,10,21,0.94)] p-3 shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl"
              >
              {siteConfig.navItems.map((item) => {
                const active = isActive(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      className={cn(
                        "rounded-[1rem] px-4 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                        active
                          ? "bg-foreground text-background"
                          : "bg-card/50 text-muted-foreground hover:text-foreground",
                      )}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}
