import { Reveal } from "@/components/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} y={16}>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-muted-foreground">{description}</p> : null}
    </Reveal>
  );
}
