import { useEffect } from "react";
import { useYearProgress } from "@/hooks/useYearProgress";
import { ProgressRing } from "@/components/ProgressRing";
import { YearBadge } from "@/components/YearBadge";
import { StatsGrid } from "@/components/StatsGrid";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopProgressBar } from "@/components/TopProgressBar";
import { YearTimeline } from "@/components/YearTimeline";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Meteors } from "@/components/ui/meteors";
import { BorderBeam } from "@/components/ui/border-beam";
import { Github } from "lucide-react";

export default function App() {
  const data = useYearProgress(1000);

  useEffect(() => {
    document.title = `${data.percentage.toFixed(1)}% of ${data.year} is done`;
  }, [data.percentage, data.year]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Top progress bar — always visible */}
      <TopProgressBar percentage={data.percentage} />

      {/* Grid pattern background */}
      <GridPattern
        width={48}
        height={48}
        className="fill-muted-foreground/[0.02] stroke-muted-foreground/[0.05] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black_20%,transparent_80%)]"
        squares={[
          [4, 3], [8, 6], [12, 2], [6, 10],
          [15, 8], [2, 14], [18, 4], [10, 12],
          [20, 6], [3, 8], [16, 14], [7, 2],
        ]}
      />

      {/* Meteor shower */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <Meteors
          number={18}
          minDelay={0.8}
          maxDelay={4}
          minDuration={5}
          maxDuration={14}
          angle={215}
        />
      </div>

      {/* Ambient light */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/3 bg-purple-500/[0.03] blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] translate-x-1/4 translate-y-1/4 bg-cyan-500/[0.03] blur-[80px]" />
      </div>

      {/* Header */}
      <header className="sticky top-[2px] z-50 border-b border-border/20 bg-background/60 backdrop-blur-2xl">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded border border-border/40">
              <div className="h-2 w-2 rounded-sm bg-gradient-to-br from-purple-500 to-cyan-500" />
            </div>
            <span className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground/80">
              {data.year} Timer
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/akshats2009/2026-done-timer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-border/40 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="View on GitHub"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero section */}
        <section className="flex flex-col items-center pt-16 text-center sm:pt-20 lg:pt-24">
          <YearBadge year={data.year} />

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {data.percentage.toFixed(1)}% of{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {data.year}
            </span>{" "}
            is done
          </h1>

          <p className="mt-3 max-w-md text-sm text-muted-foreground/70 sm:text-base">
            {data.daysElapsed} days down, {data.daysRemaining} to go.
          </p>
        </section>

        {/* Progress ring */}
        <section className="mt-12 flex justify-center sm:mt-16">
          <ProgressRing percentage={data.percentage} />
        </section>

        {/* Year timeline bar */}
        <section className="mx-auto mt-14 max-w-2xl sm:mt-16">
          <div className="relative rounded-lg border border-border/30 bg-background/60 p-5 backdrop-blur-sm sm:p-6">
            <BorderBeam
              size={60}
              duration={10}
              colorFrom="#a855f7"
              colorTo="#06b6d4"
              borderWidth={1}
            />
            <YearTimeline percentage={data.percentage} year={data.year} />
          </div>
        </section>

        {/* Stats grid */}
        <section className="mt-16 pb-20 sm:mt-20 sm:pb-24">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/50">
              {data.year} in numbers
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </div>
          <StatsGrid data={data} />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/20">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-center gap-4 px-4 sm:px-6">
          <span className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground/40">
            React + TypeScript
          </span>
          <span className="text-muted-foreground/20">&middot;</span>
          <span className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground/40">
            Updates every second
          </span>
          <span className="text-muted-foreground/20">&middot;</span>
          <span className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground/40">
            Auto-adjusts yearly
          </span>
        </div>
      </footer>
    </div>
  );
}
