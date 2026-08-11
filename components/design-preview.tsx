import Link from "next/link";
import type { CSSProperties } from "react";
import type { DesignPreview } from "@/lib/design-previews";

type DesignPreviewProps = {
  design: DesignPreview;
};

const featureCopy = [
  ["01", "Focused craft", "A clear surface for the work that matters most."],
  ["02", "Visible momentum", "Every interaction has a confident next step."],
  ["03", "Built to scale", "A flexible system that holds its character as it grows."],
];

function color(design: DesignPreview, ...keys: string[]) {
  return keys.map((key) => design.colors.find((item) => item.key === key)).find(Boolean)?.hex ?? design.colors[0].hex;
}

function font(design: DesignPreview, roles: string[], fallback: string) {
  return design.fonts.find((item) => roles.some((role) => item.role.toLowerCase().includes(role)))?.family ?? fallback;
}

function radius(design: DesignPreview, token: string, fallback: string) {
  const match = design.radius?.match(new RegExp(`${token}[^0-9]*(\\d+(?:\\.\\d+)?(?:px|%))`));
  return match?.[1] ?? fallback;
}

function contrastText(hex: string) {
  const value = hex.replace("#", "");
  if (value.length !== 6) return "#ffffff";

  const red = Number.parseInt(value.slice(0, 2), 16);
  const green = Number.parseInt(value.slice(2, 4), 16);
  const blue = Number.parseInt(value.slice(4, 6), 16);
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

  return luminance > 0.62 ? "#111111" : "#ffffff";
}

function tokenStyle(design: DesignPreview, role: string, fallback: string): CSSProperties {
  return { fontFamily: font(design, [role], fallback) };
}

export function DesignPreviewPage({ design }: DesignPreviewProps) {
  const canvas = color(design, "canvas", "near-black");
  const ink = color(design, "ink", "white", "on-dark");
  const body = color(design, "body", "ink-muted", "ink-subtle", "muted", "silver", "on-dark-soft");
  const muted = color(design, "mute", "muted", "ink-subtle", "muted-soft", "stone", "silver");
  const primary = color(design, "primary", "spotify-green");
  const onPrimary = color(design, "on-primary", "on-dark", "body-on-dark", "white");
  const surface = color(
    design,
    "surface-1",
    "surface-card",
    "surface",
    "surface-dark",
    "dark-surface",
    "dark-card",
    "surface-soft",
    "canvas-soft",
    "canvas-parchment",
    "surface-tile-1",
    "canvas",
  );
  const surfaceAlt = color(
    design,
    "surface-2",
    "surface-dark-elevated",
    "surface-strong",
    "surface-soft",
    "canvas-soft-2",
    "canvas-parchment",
    "mid-card",
    "surface-tile-2",
    "canvas",
  );
  const hairline = color(design, "hairline", "hairline-soft", "border-gray", "divider-soft");
  const displayFont = font(design, ["display", "title", "serif"], "system-ui, sans-serif");
  const bodyFont = font(design, ["body", "text"], "system-ui, sans-serif");
  const monoFont = font(design, ["mono", "code"], "ui-monospace, monospace");
  const cardRadius = radius(design, "lg|card|section", "12px");
  const controlRadius = radius(design, "md|input|sm|control", "8px");
  const pillRadius = radius(design, "pill|large-pill", "9999px");
  const isDataHeavy = ["linear.app", "stripe", "notion", "spotify"].includes(design.slug);
  const previewStyle: CSSProperties = {
    backgroundColor: canvas,
    color: ink,
    fontFamily: bodyFont,
  };
  const panelStyle: CSSProperties = {
    backgroundColor: surface,
    borderColor: hairline,
    borderRadius: cardRadius,
    boxShadow: design.shadow === "none" ? undefined : design.shadow,
  };
  const buttonStyle: CSSProperties = {
    backgroundColor: primary,
    color: onPrimary,
    borderRadius: pillRadius,
    fontFamily: bodyFont,
  };
  const secondaryButtonStyle: CSSProperties = {
    backgroundColor: surfaceAlt,
    color: ink,
    borderColor: hairline,
    borderRadius: controlRadius,
    fontFamily: bodyFont,
  };

  return (
    <main style={previewStyle} className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
        <Link href="/design" className="inline-flex min-h-11 items-center text-sm opacity-65 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current">
          ← /design
        </Link>

        <header className="max-w-4xl pb-16 pt-16 sm:pb-24 sm:pt-24">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] opacity-55" style={tokenStyle(design, "mono", monoFont)}>
            Design system slice
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] sm:text-6xl" style={{ fontFamily: displayFont }}>
            {design.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 opacity-70" style={{ fontFamily: bodyFont }}>
            {design.description}
          </p>
        </header>

        <section aria-labelledby="palette-heading" className="border-t py-12 sm:py-16" style={{ borderColor: hairline }}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] opacity-55" style={{ fontFamily: monoFont }}>01 / color</p>
              <h2 id="palette-heading" className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl" style={{ fontFamily: displayFont }}>Color palette</h2>
            </div>
            <p className="text-sm opacity-55">{design.colors.length} documented tokens</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {design.colors.map((item) => (
              <div key={item.key} className="overflow-hidden border" style={{ borderColor: hairline, borderRadius: controlRadius }}>
                <div className="flex min-h-24 items-end p-3 text-xs font-medium" style={{ backgroundColor: item.hex, color: contrastText(item.hex) }}>
                  {item.hex}
                </div>
                <div className="bg-transparent px-3 py-3">
                  <p className="truncate text-xs font-semibold">{item.key}</p>
                  <p className="mt-1 truncate text-[11px] opacity-55">{item.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="type-heading" className="border-t py-12 sm:py-16" style={{ borderColor: hairline }}>
          <div className="mb-8">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] opacity-55" style={{ fontFamily: monoFont }}>02 / type</p>
            <h2 id="type-heading" className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl" style={{ fontFamily: displayFont }}>Typography</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <div className="border p-6 sm:p-10" style={{ ...panelStyle, backgroundColor: surfaceAlt }}>
              <p className="mb-5 text-xs uppercase tracking-[0.16em] opacity-55">Display / {displayFont.split(",")[0]}</p>
              <p className="text-4xl leading-[1.02] tracking-[-0.05em] sm:text-6xl" style={{ fontFamily: displayFont }}>
                Make the next thing feel inevitable.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border p-6" style={panelStyle}>
                <p className="mb-4 text-xs uppercase tracking-[0.16em] opacity-55">Body / {bodyFont.split(",")[0]}</p>
                <p className="text-base leading-7" style={{ fontFamily: bodyFont }}>
                  Thoughtful systems create room for clear decisions. This paragraph shows how the documented body family carries a longer read without competing with the display voice.
                </p>
              </div>
              <div className="border p-6" style={panelStyle}>
                <p className="mb-4 text-xs uppercase tracking-[0.16em] opacity-55">Mono / {monoFont.split(",")[0]}</p>
                <p className="font-mono text-sm leading-6" style={{ fontFamily: monoFont }}>
                  system.slice({design.slug}) → prompt.ready
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="component-heading" className="border-t py-12 sm:py-16" style={{ borderColor: hairline }}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] opacity-55" style={{ fontFamily: monoFont }}>03 / composition</p>
              <h2 id="component-heading" className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl" style={{ fontFamily: displayFont }}>Component preview</h2>
            </div>
            <span className="rounded-full border px-3 py-1.5 text-xs" style={{ borderColor: hairline, color: body }}>Live token slice</span>
          </div>

          <div className="overflow-hidden border" style={{ ...panelStyle, backgroundColor: canvas, boxShadow: undefined }}>
            <nav className="flex flex-wrap items-center justify-between gap-4 border-b px-5 py-4 sm:px-7" style={{ borderColor: hairline }}>
              <div className="flex items-center gap-3 font-semibold" style={{ fontFamily: displayFont }}>
                <span className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: primary, color: onPrimary }}>✦</span>
                <span>{design.slug.split(".")[0]}</span>
              </div>
              <div className="hidden items-center gap-5 text-sm opacity-65 md:flex">
                <span>Overview</span><span>Product</span><span>Resources</span>
              </div>
              <button type="button" className="px-4 py-2 text-sm font-semibold" style={buttonStyle}>Get started</button>
            </nav>

            <div className="grid gap-8 px-5 py-10 sm:px-10 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="mb-5 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold" style={{ backgroundColor: primary, color: onPrimary }}>Prompt ready</span>
                <h3 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl" style={{ fontFamily: displayFont }}>Build a sharper point of view.</h3>
                <p className="mt-5 max-w-xl text-base leading-7 opacity-65">A compact brand surface composed from the palette, type, shape, and elevation tokens above.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button type="button" className="px-5 py-3 text-sm font-semibold" style={buttonStyle}>Start building</button>
                  <button type="button" className="border px-5 py-3 text-sm font-semibold" style={secondaryButtonStyle}>Explore system</button>
                </div>
              </div>
              <div className="relative min-h-56 overflow-hidden border p-5" style={{ ...panelStyle, backgroundColor: surfaceAlt }}>
                <div className="absolute right-5 top-5 rounded-full px-3 py-1 text-xs" style={{ backgroundColor: primary, color: onPrimary }}>Live</div>
                <div className="mt-10 flex items-end gap-2">
                  {["primary", "canvas", "surface", "accent-magenta", "accent-teal"].map((key, index) => {
                    const swatch = color(design, key, index === 0 ? "primary" : "canvas");
                    return <span key={key} className="flex-1 rounded-sm" style={{ height: `${48 + index * 18}px`, backgroundColor: swatch }} />;
                  })}
                </div>
                <div className="mt-6 flex items-center justify-between text-xs opacity-60"><span>System signal</span><span>04.28</span></div>
              </div>
            </div>

            <div className="grid gap-3 border-t p-5 sm:grid-cols-3 sm:p-7" style={{ borderColor: hairline }}>
              {featureCopy.map(([number, title, copy], index) => (
                <article key={number} className="border p-5" style={{ ...panelStyle, backgroundColor: index === 0 ? surfaceAlt : surface }}>
                  <span className="mb-9 flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold" style={{ backgroundColor: color(design, ["accent-teal", "accent-amber", "primary"][index], "primary"), color: contrastText(color(design, ["accent-teal", "accent-amber", "primary"][index], "primary")) }}>{number}</span>
                  <h4 className="text-lg font-semibold" style={{ fontFamily: displayFont }}>{title}</h4>
                  <p className="mt-2 text-sm leading-6 opacity-65">{copy}</p>
                </article>
              ))}
            </div>

            {isDataHeavy ? (
              <div className="grid grid-cols-3 border-t" style={{ borderColor: hairline }}>
                {[['24', 'active signals'], ['98%', 'system coverage'], ['3.4x', 'faster decisions']].map(([value, label]) => (
                  <div key={label} className="border-r p-5 last:border-r-0 sm:p-7" style={{ borderColor: hairline }}>
                    <p className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl" style={{ fontFamily: displayFont }}>{value}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.12em] opacity-55">{label}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section aria-labelledby="tokens-heading" className="border-t py-12 sm:py-16" style={{ borderColor: hairline }}>
          <div className="mb-8">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] opacity-55" style={{ fontFamily: monoFont }}>04 / tokens</p>
            <h2 id="tokens-heading" className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl" style={{ fontFamily: displayFont }}>Style tokens</h2>
          </div>
          <div className="overflow-x-auto border" style={{ ...panelStyle, boxShadow: undefined }}>
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase tracking-[0.14em] opacity-55" style={{ borderColor: hairline }}>
                  <th className="px-5 py-4 font-medium">Type</th>
                  <th className="px-5 py-4 font-medium">Token</th>
                  <th className="px-5 py-4 font-medium">Value</th>
                </tr>
              </thead>
              <tbody>
                {design.colors.slice(0, 8).map((item) => (
                  <tr key={item.key} className="border-b last:border-0" style={{ borderColor: hairline }}>
                    <td className="px-5 py-3 opacity-55">color</td>
                    <td className="px-5 py-3 font-medium">{item.key}</td>
                    <td className="px-5 py-3 font-mono text-xs opacity-70">{item.hex}</td>
                  </tr>
                ))}
                {design.fonts.map((item) => (
                  <tr key={item.role} className="border-b last:border-0" style={{ borderColor: hairline }}>
                    <td className="px-5 py-3 opacity-55">font</td>
                    <td className="px-5 py-3 font-medium">{item.role}</td>
                    <td className="px-5 py-3 font-mono text-xs opacity-70">{item.family}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="border-t py-12 sm:py-16" style={{ borderColor: hairline }}>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] opacity-55" style={{ fontFamily: monoFont }}>Prompt ready</p>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]" style={{ fontFamily: displayFont }}>The source slice</h2>
            </div>
            <p className="text-sm opacity-55">DESIGN.md / colors</p>
          </div>
          <pre className="max-h-80 overflow-auto border p-5 text-xs leading-6" style={{ ...panelStyle, backgroundColor: surfaceAlt, fontFamily: monoFont, boxShadow: undefined }}><code>{["colors:", ...design.colors.map((item) => `  ${item.key}: \"${item.hex}\"`)].join("\n")}</code></pre>
        </footer>
      </div>
    </main>
  );
}
