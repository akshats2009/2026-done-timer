import { useEffect } from "react";
import { useYearProgress } from "@/hooks/useYearProgress";
import { ProgressRing } from "@/components/ProgressRing";
import { YearBadge } from "@/components/YearBadge";
import { StatsGrid } from "@/components/StatsGrid";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Meteors } from "@/components/ui/meteors";
import { Github } from "lucide-react";

export default function App() {
  const data = useYearProgress(1000);

  useEffect(() => {
    document.title = `${data.percentage.toFixed(1)}% | ${data.year} Done`;
  }, [data.percentage, data.year]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Grid pattern background */}
      <GridPattern
        width={48}
        height={48}
        className="fill-muted-foreground/[0.03] stroke-muted-foreground/[0.06] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
        squares={[
          [4, 3],
          [8, 6],
          [12, 2],
          [6, 10],
          [15, 8],
          [2, 14],
          [18, 4],
        ]}
      />

      {/* Meteor shower */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <Meteors
          number={14}
          minDelay={0.5}
          maxDelay={3}
          minDuration={4}
          maxDuration={12}
          angle={215}
          className="before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-purple-500/40 before:to-cyan-500/40"
        />
      </div>

      {/* Subtle gradient accents — sharp radial, not blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.04] blur-[80px] dark:bg-purple-500/[0.03]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-cyan-500/[0.04] blur-[60px] dark:bg-cyan-500/[0.03]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            {/* Sharp logo mark */}
            <div className="flex h-6 w-6 items-center justify-center rounded border border-border/50">
              <div className="h-2 w-2 rounded-sm bg-gradient-to-br from-purple-500 to-cyan-500" />
            </div>
            <span className="hidden text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground sm:inline">
              Year Timer
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/akshats2009/2026-done-timer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-border/50 bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground"
              aria-label="View on GitHub"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        {/* Hero */}
        <section className="flex flex-col items-center text-center">
          <YearBadge year={data.year} />

          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-foreground">How much of </span>
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {data.year}
            </span>
            <span className="text-foreground"> is done?</span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Precision tracker. Every second measured.
          </p>

          {/* Horizontal rule accent */}
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Progress ring */}
          <div className="mt-10 sm:mt-12">
            <ProgressRing percentage={data.percentage} />
          </div>

          {/* Quick stat line */}
          <div className="mt-8 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              <span className="font-mono font-medium text-foreground tabular-nums">
                {data.daysElapsed}
              </span>
              <span className="text-muted-foreground">elapsed</span>
            </div>
            <div className="h-3 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              <span className="font-mono font-medium text-foreground tabular-nums">
                {data.daysRemaining}
              </span>
              <span className="text-muted-foreground">remaining</span>
            </div>
          </div>
        </section>

        {/* Stats section */}
        <section className="mt-20 sm:mt-24">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border/50" />
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/60">
              Breakdown
            </span>
            <div className="h-px flex-1 bg-border/50" />
          </div>
          <StatsGrid data={data} />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50">
            Updates every second
          </span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50">
            Auto-adjusts yearly
          </span>
        </div>
      </footer>
    </div>
  );
}
