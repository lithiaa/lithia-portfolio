import Link from "next/link";
import { designPreviews } from "@/lib/design-previews";

function getInk(hex: string) {
  const value = hex.replace("#", "");
  const red = Number.parseInt(value.slice(0, 2), 16);
  const green = Number.parseInt(value.slice(2, 4), 16);
  const blue = Number.parseInt(value.slice(4, 6), 16);
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

  return luminance > 0.62 ? "#111111" : "#ffffff";
}

export default function DesignIndexPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] px-6 py-10 text-[#171717] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 flex flex-col gap-8 border-b border-black/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/" className="mb-8 inline-flex text-sm text-black/50 transition-colors hover:text-black">
              ← Back to portfolio
            </Link>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-black/45">Sliced design systems</p>
            <h1 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">/design</h1>
          </div>
          <p className="max-w-xs text-sm leading-6 text-black/55 sm:text-right">10 design systems sliced into prompts</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {designPreviews.map((design) => (
            <Link
              key={design.slug}
              href={`/design/${design.slug}`}
              className="group flex min-h-64 flex-col rounded-md border border-black/10 bg-white p-5 transition-all hover:-translate-y-1 hover:border-black/25 hover:shadow-xl hover:shadow-black/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              <div className="mb-7 flex gap-1.5" aria-label={`${design.name} color preview`}>
                {design.colors.slice(0, 5).map((color) => (
                  <span
                    key={color.key}
                    className="h-8 flex-1 rounded-sm border border-black/10"
                    style={{ backgroundColor: color.hex }}
                    title={`${color.key}: ${color.hex}`}
                  />
                ))}
              </div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-black/40">{design.slug}</p>
              <h2 className="mb-3 text-lg font-semibold tracking-[-0.03em] group-hover:underline">{design.name}</h2>
              <p className="line-clamp-3 text-sm leading-6 text-black/55">{design.description}</p>
              <span className="mt-auto pt-7 text-sm font-semibold">View design <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-t border-black/10 pt-6 text-xs text-black/45">
          {designPreviews.slice(0, 5).flatMap((design) => design.colors.slice(0, 1)).map((color) => (
            <span key={color.key} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color.hex }} />
              <span style={{ color: getInk(color.hex) }}>{color.hex}</span>
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
