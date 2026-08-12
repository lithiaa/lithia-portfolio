import { CheckCircle2, Layers3, TestTube2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const values = [
  {
    title: "Quality-first engineering",
    description: "I think beyond the happy path, designing systems that are reliable, observable, and ready for real users.",
    icon: CheckCircle2,
  },
  {
    title: "Full-stack delivery",
    description: "From database design to polished interfaces, I connect the details that turn a technical idea into a useful product.",
    icon: Layers3,
  },
  {
    title: "Automated testing",
    description: "I use repeatable test strategies to catch regressions early and give every release a clear quality signal.",
    icon: TestTube2,
  },
];

export function ValueProps() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="What I bring" title="Engineering with a quality loop built in." description="I combine backend fundamentals with a QA perspective while exploring AI Automation for more efficient workflows." />
      <div className="mt-14 grid border-y border-border md:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <Reveal as="article" key={value.title} delay={index * 0.08} y={16} className={`py-8 md:px-8 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : "md:pl-0"}`}>
              <Icon className="h-6 w-6 text-foreground" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-8 text-lg font-semibold tracking-[-0.03em]">{value.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{value.description}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
