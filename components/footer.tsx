import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Reveal className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-8" y={10}>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">© {new Date().getFullYear()} Lithia Project</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/lithiaa" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground"><Github className="h-4 w-4" aria-hidden="true" /></Link>
          <Link href="https://linkedin.com/in/mbagusi" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground"><Linkedin className="h-4 w-4" aria-hidden="true" /></Link>
          <Link href="mailto:indraw910@gmail.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-foreground"><Mail className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </Reveal>
    </footer>
  );
}
