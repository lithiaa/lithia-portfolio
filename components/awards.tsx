import { Award as AwardIcon, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { awards } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="Recognition" title="A moment worth carrying forward." />
      <div className="mt-12 max-w-2xl">
        {awards.map((award, index) => (
          <Reveal as="article" key={award.id} delay={index * 0.08} y={16} className="group flex items-start justify-between gap-6 border-y border-border py-7 transition-colors hover:border-foreground/30">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-muted"><AwardIcon className="h-5 w-5" aria-hidden="true" /></span>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.03em]">{award.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{award.event} by {award.organizer}</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
