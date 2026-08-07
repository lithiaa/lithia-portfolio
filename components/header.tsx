"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || menuOpen ? "border-border/80 bg-white/90 shadow-sm backdrop-blur-xl" : "border-transparent bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image src="/lithiaproject.png" alt="Lithia Project logo" width={36} height={36} className="rounded-sm" />
          <span className="text-sm font-semibold tracking-[-0.02em]">Lithia Project</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="#contact">Hire me</Link>
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close navigation" : "Open navigation"}</span>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-border/80 px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link href="#contact" onClick={() => setMenuOpen(false)}>Hire me</Link>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
