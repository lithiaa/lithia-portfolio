import Image from "next/image";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { education, experience } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Credentials() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="Background" title="Where I’ve been learning and contributing." />
      <div className="mt-14 grid gap-4 lg:grid-cols-2">
        <article className="rounded-sm border border-border bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-muted"><GraduationCap className="h-5 w-5" aria-hidden="true" /></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Education</span>
          </div>
          <div className="mt-10 flex items-start gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm border border-border bg-white p-2">
              <Image src={education.logo} alt={education.logoAlt} fill className="object-contain p-2" sizes="56px" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.03em]">{education.institution}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{education.qualification}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{education.duration}</p>
            </div>
          </div>
        </article>
        <article className="rounded-sm border border-border bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-muted"><BriefcaseBusiness className="h-5 w-5" aria-hidden="true" /></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Experience</span>
          </div>
          <div className="mt-10 flex items-start gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm border border-border bg-white p-2">
              <Image src={experience.logo} alt={experience.logoAlt} fill className="object-contain p-1" sizes="56px" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.03em]">{experience.role}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{experience.company}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{experience.duration}</p>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">{experience.description}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
