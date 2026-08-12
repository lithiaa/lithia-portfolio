"use client";

import { useState } from "react";
import { techStack } from "@/lib/content";
import type { PortfolioCategory } from "@/lib/types";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type TechView = PortfolioCategory;

const techViewOptions: Array<{ value: TechView; label: string }> = [
  { value: "backend", label: "Backend Developer" },
  { value: "qa", label: "Quality Assurance" },
  { value: "ai-automation", label: "AI Automation" },
];

export function TechStack() {
  const [view, setView] = useState<TechView>("backend");
  const visibleTech = techStack.filter((tech) => tech.categories.includes(view));

  return (
    <section id="stack" className="border-y border-border bg-white/70">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading eyebrow="Tools I use" title="A practical stack for shipping and checking." description="A flexible toolkit across application development, data, delivery, and quality assurance." />
        <div className="mt-8 inline-flex max-w-full flex-wrap rounded-sm border border-border bg-[#fafafa] p-1" aria-label="Filter technologies">
          {techViewOptions.map((option) => {
            const isActive = view === option.value;

            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setView(option.value)}
                className={`rounded-sm px-3 py-2 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
        <div className="mt-12 grid grid-cols-2 border-l border-t border-border sm:grid-cols-4 lg:grid-cols-8">
          {visibleTech.map((tech, index) => {
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
