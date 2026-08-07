import Link from "next/link";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/lithiaa", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/mbagusi", icon: Linkedin },
  { label: "Email", href: "mailto:indraw910@gmail.com", icon: Mail },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-[#f3eef5]">
      <div className="absolute -right-40 -top-52 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(212,188,222,0.5),transparent_67%)] blur-2xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">Open to conversations</p>
          <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Get in touch.</h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">Feel free to connect with me through social media or download my CV below.</p>
        </div>
        <div className="flex flex-col items-start gap-7 lg:items-end">
          <div className="flex flex-wrap gap-5">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{link.label}</span>
                  <span className="sr-only">, opens external link</span>
                </Link>
              );
            })}
          </div>
          <Button asChild size="lg">
            <a href="/CV_Eng_Muhammad Bagus Indrawan.pdf" download>Download CV <Download aria-hidden="true" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}
