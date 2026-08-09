"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HoverLift, Reveal } from "@/components/reveal";
import { projects } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

type ProjectFilter = "all" | "backend" | "qa";

const projectFilterOptions: Array<{ value: ProjectFilter; label: string }> = [
  { value: "all", label: "Semua" },
  { value: "backend", label: "Backend Developer" },
  { value: "qa", label: "Quality Assurance" },
];

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="Selected work" title="Projects built around useful outcomes." description="A selection of web and mobile projects spanning community platforms, internal systems, and applied machine learning." />
      <div className="mt-8 inline-flex rounded-sm border border-border bg-[#fafafa] p-1" aria-label="Filter projects">
        {projectFilterOptions.map((option) => {
          const isActive = filter === option.value;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(option.value)}
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
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1} y={16}>
              <HoverLift className="group overflow-hidden rounded-sm border border-border bg-white transition-colors hover:border-foreground/30">
              <div className="relative aspect-[1.9/1] overflow-hidden border-b border-border bg-muted">
                <Image src={project.image} alt={`${project.title} thumbnail`} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">0{index + 1} / Project</p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em]">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <span key={`${project.id}-${tech.name}`} className="inline-flex items-center gap-1.5 border border-border bg-[#fafafa] px-2.5 py-1.5 font-mono text-[10px] text-muted-foreground">
                        <Icon className={`h-3.5 w-3.5 ${tech.color}`} aria-hidden="true" />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>
                <div className="mt-7 flex flex-wrap gap-4 border-t border-border pt-5">
                  {project.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a key={`${project.id}-${link.url}`} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
              </HoverLift>
            </Reveal>
          ))
        ) : (
          <div className="border border-dashed border-border bg-white/70 p-8 text-center lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Belum ada project QA</p>
          </div>
        )}
      </div>
    </section>
  );
}
