import { BadgeCheck, FileCheck2 } from "lucide-react";
import { certificates } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Certificates() {
  return (
    <section id="certificates" className="border-y border-border bg-white/70">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading eyebrow="Credentials" title="Proof of a quality-minded practice." />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {certificates.map((certificate) => (
            <article key={certificate.id} className="group rounded-sm border border-border bg-white p-6 transition-colors hover:bg-muted">
              <div className="flex items-center justify-between">
                <BadgeCheck className="h-6 w-6 text-foreground" strokeWidth={1.5} aria-hidden="true" />
                <FileCheck2 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              </div>
              <h3 className="mt-12 max-w-[16rem] text-lg font-semibold leading-6 tracking-[-0.03em]">{certificate.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{certificate.issuer}</p>
              <div className="mt-8 border-t border-dashed border-border pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Evidence available on request</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
