import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, CircleDot, GitPullRequest, MoreHorizontal, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

function IssueTrackerMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] animate-float-slow">
      <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(233,199,232,0.32),transparent_68%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-sm border border-[#252525]/15 bg-white shadow-[0_24px_70px_rgba(29,22,38,0.14)]">
        <div className="flex h-11 items-center gap-2 border-b border-border bg-[#fbfbfc] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f5c451]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#54c779]" />
          <div className="ml-4 hidden h-6 flex-1 items-center rounded-sm border border-border bg-white px-3 font-mono text-[9px] text-muted-foreground sm:flex">
            app.lithiaproject.dev / issues / #184
          </div>
          <MoreHorizontal className="ml-auto h-4 w-4 text-muted-foreground" aria-hidden="true" />
        </div>
        <div className="grid min-h-[330px] grid-cols-[58px_1fr] sm:grid-cols-[72px_1fr]">
          <aside className="border-r border-border bg-[#f8f8f8] px-3 py-4">
            <div className="flex flex-col items-center gap-5 text-muted-foreground">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#1b1b1b] text-white">
                <CircleDot className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <GitPullRequest className="h-4 w-4" aria-hidden="true" />
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              <div className="mt-auto h-px w-5 bg-border" />
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#e6c9dd] to-[#a58fb7]" />
            </div>
          </aside>
          <div className="min-w-0 bg-white p-5 sm:p-7">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Issue #184 · Open</p>
                <h3 className="mt-2 text-base font-semibold tracking-[-0.03em] text-[#171717] sm:text-lg">Broken password reset link</h3>
              </div>
              <div className="rounded-full border border-[#e5b5b5] bg-[#fff5f5] px-2.5 py-1 font-mono text-[9px] text-[#a74343]">High</div>
            </div>
            <div className="mb-6 grid grid-cols-2 gap-3 border-y border-border py-4 font-mono text-[9px] text-muted-foreground sm:grid-cols-3">
              <div>
                <span className="block uppercase tracking-[0.12em]">Priority</span>
                <strong className="mt-1 block font-medium text-[#171717]">High</strong>
              </div>
              <div>
                <span className="block uppercase tracking-[0.12em]">Assignee</span>
                <strong className="mt-1 flex items-center gap-1.5 font-medium text-[#171717]"><span className="h-4 w-4 rounded-full bg-gradient-to-br from-[#d7c4e4] to-[#786b91]" />Bagus</strong>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block uppercase tracking-[0.12em]">Status</span>
                <strong className="mt-1 flex items-center gap-1.5 font-medium text-[#2e8b57]"><Check className="h-3 w-3" />Verified</strong>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ede7f3] text-[#7c6095]"><ShieldCheck className="h-3 w-3" /></div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[9px] text-muted-foreground"><span className="text-[#171717]">QA Bot</span> verified a fix · 12m ago</p>
                  <div className="mt-2 overflow-hidden rounded-sm border border-border bg-[#fafafa] font-mono text-[9px] leading-5">
                    <div className="border-b border-border px-3 py-1.5 text-muted-foreground">auth/reset-password.ts</div>
                    <div className="px-3 py-2"><p className="text-[#b74343]">- redirectTo(&quot;/reset&quot;)</p><p className="text-[#2b8a57]">+ redirectTo(resetUrl)</p></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-[#59b77b]" />All checks passed · 24 tests</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-sm border border-border bg-white px-3 py-2 shadow-[0_12px_35px_rgba(29,22,38,0.1)] sm:flex">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f6ed] text-[#2e8b57]"><Check className="h-3.5 w-3.5" /></div>
        <span className="font-mono text-[9px] text-muted-foreground">Quality gate passed</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/70 pt-36 sm:pt-44">
      <div className="absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(ellipse_at_72%_7%,rgba(238,211,235,0.52),transparent_50%),radial-gradient(ellipse_at_46%_0%,rgba(222,214,247,0.42),transparent_42%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-8 lg:pb-36">
        <div className="max-w-xl">
          <p className="mb-7 inline-flex items-center gap-2 border border-border bg-white/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5b9c72]" /> Available for opportunities
          </p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.04] tracking-[-0.065em] text-foreground sm:text-6xl lg:text-[4.5rem]">
            Ship software that never <em className="font-serif font-normal tracking-[-0.08em]">breaks.</em>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I&apos;m Muhammad Bagus Indrawan, backend enthusiast with a strong quality assurance mindset. I build efficient, scalable systems and ensure software quality through rigorous testing.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="#projects">View projects <ArrowDownRight aria-hidden="true" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Contact me <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <span>Backend</span><span className="h-1 w-1 rounded-full bg-border" /><span>Quality assurance</span><span className="h-1 w-1 rounded-full bg-border" /><span>Systems</span>
          </div>
        </div>
        <IssueTrackerMockup />
      </div>
    </section>
  );
}
