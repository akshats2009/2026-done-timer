import { useEffect } from "react";
import { useYearProgress } from "@/hooks/useYearProgress";
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
      <GlassFilter />
      <TopProgressBar percentage={data.percentage} />

      {/* Flickering grid background */}
      <FlickeringGrid
        className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_90%_80%_at_50%_40%,black_30%,transparent_80%)]"
        squareSize={4}
        gridGap={6}
        color="#a855f7"
        maxOpacity={0.18}
        flickerChance={0.1}
      />

      {/* Meteors */}
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
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3 bg-purple-500/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[600px] translate-x-1/4 translate-y-1/4 bg-purple-500/[0.03] blur-[100px]" />
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-x-1/3 bg-purple-500/[0.02] blur-[80px]" />
      </div>

      {/* Header */}
      <header className="sticky top-1 z-50 px-2 sm:px-4">
        <GlassPanel intensity="subtle" className="rounded-2xl">
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

      {/* Main */}
      <main className="relative z-10 mx-auto max-w-6xl px-2 sm:px-4">
        {/* Hero glass card with big percentage */}
        <section className="mt-8 sm:mt-12">
          <GlassPanel intensity="strong" className="rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col items-center text-center">
              <YearBadge year={data.year} />

              {/* Giant percentage */}
              <div className="mt-8 sm:mt-10">
                <span
                  className="text-[5rem] font-bold leading-none tracking-tighter text-foreground sm:text-[7rem] lg:text-[9rem]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {data.percentage.toFixed(2)}
                  <span className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] text-muted-foreground/50">
                    %
                  </span>
                </span>
              </div>

              <p className="mt-2 text-lg text-muted-foreground/60 sm:text-xl">
                of{" "}
                <span className="text-purple-400 font-medium">{data.year}</span>{" "}
                is done
              </p>

              {/* Live indicator */}
              <GlassPanel
                intensity="subtle"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              >
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-75" />
                </span>
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/60"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  updating live
                </span>
              </GlassPanel>

              {/* Quick stats row */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <GlassPanel
                  intensity="subtle"
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                  <span
                    className="text-sm font-medium text-foreground tabular-nums"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {data.daysElapsed}
                  </span>
                  <span className="text-xs text-muted-foreground/50">
                    days elapsed
                  </span>
                </GlassPanel>

                <GlassPanel
                  intensity="subtle"
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400/60" />
                  <span
                    className="text-sm font-medium text-foreground tabular-nums"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {data.daysRemaining}
                  </span>
                  <span className="text-xs text-muted-foreground/50">
                    remaining
                  </span>
                </GlassPanel>

                <GlassPanel
                  intensity="subtle"
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-300/40" />
                  <span
                    className="text-sm font-medium text-foreground tabular-nums"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {data.monthsElapsed.toFixed(1)}
                  </span>
                  <span className="text-xs text-muted-foreground/50">
                    months in
                  </span>
                </GlassPanel>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* Year timeline */}
        <section className="mt-6 sm:mt-8">
          <GlassPanel intensity="medium" className="rounded-2xl p-5 sm:p-6">
            <YearTimeline percentage={data.percentage} year={data.year} />
          </GlassPanel>
        </section>

        {/* Section divider */}
        <div className="my-10 flex items-center gap-4 sm:my-12">
          <GlassPanel intensity="subtle" className="h-px flex-1 rounded-full" />
          <GlassPanel
            intensity="subtle"
            className="rounded-full px-4 py-1.5"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/40">
              {data.year} in numbers
            </span>
          </GlassPanel>
          <GlassPanel intensity="subtle" className="h-px flex-1 rounded-full" />
        </div>

        {/* Stats grid */}
        <section className="pb-8 sm:pb-12">
          <StatsGrid data={data} />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-2 pb-2 sm:px-4 sm:pb-3">
        <GlassPanel intensity="subtle" className="rounded-2xl">
          <div className="mx-auto flex h-12 max-w-6xl items-center justify-center gap-4 px-4 sm:px-6">
            <span className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground/40">
              React + TypeScript
            </span>
            <span className="text-muted-foreground/15">&middot;</span>
            <span className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground/40">
              Updates every second
            </span>
            <span className="text-muted-foreground/15">&middot;</span>
            <span className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground/40">
              Auto-adjusts yearly
            </span>
          </div>
        </GlassPanel>
      </footer>
    </div>
  );
}
