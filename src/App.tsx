import { useEffect } from "react";
import { useYearProgress } from "@/hooks/useYearProgress";
import { ProgressRing } from "@/components/ProgressRing";
import { YearBadge } from "@/components/YearBadge";
import { StatsGrid } from "@/components/StatsGrid";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopProgressBar } from "@/components/TopProgressBar";
import { YearTimeline } from "@/components/YearTimeline";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Meteors } from "@/components/ui/meteors";
import { GlassPanel } from "@/components/ui/glass-panel";
import { GlassFilter } from "@/components/ui/glass-filter";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Github } from "lucide-react";

export default function App() {
  const data = useYearProgress(100);

  useEffect(() => {
    document.title = `${data.percentage.toFixed(1)}% of ${data.year} is done`;
  }, [data.percentage, data.year]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* SVG filter definition — rendered once, used everywhere */}
      <GlassFilter />

      <TopProgressBar percentage={data.percentage} />

      {/* Flickering grid background */}
      <FlickeringGrid
        className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black_20%,transparent_80%)]"
        squareSize={4}
        gridGap={6}
        color="#a855f7"
        maxOpacity={0.15}
        flickerChance={0.08}
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
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] translate-x-1/4 translate-y-1/4 bg-purple-500/[0.02] blur-[80px]" />
      </div>

      {/* Header */}
      <header className="sticky top-[2px] z-50">
        <GlassPanel intensity="subtle" className="mx-2 mt-1 rounded-xl sm:mx-4">
          <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-2.5">
              <GlassPanel
                intensity="subtle"
                className="flex h-6 w-6 items-center justify-center rounded-lg"
              >
                <div className="h-2 w-2 rounded-sm bg-purple-500" />
              </GlassPanel>
              <span className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground/80">
                {data.year} Timer
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <LiquidButton
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={() =>
                  window.open(
                    "https://github.com/akshats2009/2026-done-timer",
                    "_blank"
                  )
                }
                aria-label="View on GitHub"
              >
                <Github className="h-3.5 w-3.5" />
              </LiquidButton>
              <ThemeToggle />
            </div>
          </div>
        </GlassPanel>
      </header>

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero */}
        <section className="flex flex-col items-center pt-14 text-center sm:pt-18 lg:pt-22">
          <YearBadge year={data.year} />

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span
              className="tabular-nums"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {data.percentage.toFixed(1)}%
            </span>{" "}
            of <span className="text-purple-400">{data.year}</span> is done
          </h1>

          <p className="mt-3 max-w-md text-sm text-muted-foreground/70 sm:text-base">
            <span
              className="tabular-nums"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {data.daysElapsed}
            </span>{" "}
            days down,{" "}
            <span
              className="tabular-nums"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {data.daysRemaining}
            </span>{" "}
            to go.
          </p>
        </section>

        {/* Progress ring inside a glass container */}
        <section className="mt-12 flex justify-center sm:mt-16">
          <GlassPanel
            intensity="strong"
            className="inline-flex rounded-full p-8 sm:p-10"
          >
            <ProgressRing percentage={data.percentage} />
          </GlassPanel>
        </section>

        {/* Year timeline inside glass panel */}
        <section className="mx-auto mt-14 max-w-2xl sm:mt-16">
          <GlassPanel intensity="medium" className="p-5 sm:p-6">
            <YearTimeline percentage={data.percentage} year={data.year} />
          </GlassPanel>
        </section>

        {/* Stats grid */}
        <section className="mt-16 pb-20 sm:mt-20 sm:pb-24">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-border/40" />
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/50">
              {data.year} in numbers
            </span>
            <div className="h-px flex-1 bg-border/40" />
          </div>
          <StatsGrid data={data} />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10">
        <GlassPanel intensity="subtle" className="mx-2 mb-1 rounded-xl sm:mx-4">
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
        </GlassPanel>
      </footer>
    </div>
  );
}
