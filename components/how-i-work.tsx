import { Reveal } from "@/components/reveal";

const steps = [
  { number: "01", title: "Understand", description: "I clarify the requirements, users, constraints, and the risks worth solving first." },
  { number: "02", title: "Build", description: "I shape clean, maintainable systems with the right boundaries and a clear path to delivery." },
  { number: "03", title: "Verify", description: "I test the important paths, investigate failures, and own the resolution through to release." },
];

export function HowIWork() {
  return (
    <section id="process" className="border-y border-border bg-[#171717] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-white/50">The process</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">How I work</h2>
        </div>
        <div className="mt-14 grid border-y border-white/15 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal as="article" key={step.number} delay={index * 0.08} x={index === 0 ? -16 : index === 2 ? 16 : undefined} y={index === 1 ? 20 : 0} className={`py-8 md:px-8 ${index > 0 ? "border-t border-white/15 md:border-l md:border-t-0" : "md:pl-0"}`}>
              <span className="font-mono text-sm text-white/40">{step.number}</span>
              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{step.title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
