import { techStack } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function TechStack() {
  return (
    <section id="stack" className="border-y border-border bg-white/70">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading eyebrow="Tools I use" title="A practical stack for shipping and checking." description="A flexible toolkit across application development, data, delivery, and quality assurance." />
        <div className="mt-12 grid grid-cols-2 border-l border-t border-border sm:grid-cols-4 lg:grid-cols-8">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Reveal as="div" key={tech.name} delay={Math.min(index * 0.05, 0.4)} y={12} className="group flex min-h-28 flex-col items-start justify-between border-b border-r border-border bg-[#fdfdfd] p-4 transition-colors hover:bg-muted">
                <Icon className={`h-6 w-6 ${tech.color} transition-transform duration-200 group-hover:scale-110`} aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">{tech.name}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
