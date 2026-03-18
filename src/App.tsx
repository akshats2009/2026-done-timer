import { useEffect } from "react";
import { useYearProgress } from "@/hooks/useYearProgress";
import { YearBadge } from "@/components/YearBadge";
import { StatsGrid } from "@/components/StatsGrid";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopProgressBar } from "@/components/TopProgressBar";
import { YearTimeline } from "@/components/YearTimeline";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
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

      {/* Animated gradient background */}
      <AnimatedGradientBackground
        Breathing={true}
        startingGap={130}
        breathingRange={8}
        animationSpeed={0.03}
        topOffset={10}
        gradientColors={[
          "var(--background)",
          "#2e1065",
          "#4c1d95",
          "#6d28d9",
          "#7c3aed",
          "#8b5cf6",
          "#a78bfa",
        ]}
        gradientStops={[30, 45, 55, 65, 75, 85, 100]}
        containerClassName="pointer-events-none -z-10"
      />

      {/* Meteors on top of gradient */}
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
        {/* Hero glass card */}
        <section className="mt-8 sm:mt-12">
          <GlassPanel
            intensity="strong"
            className="rounded-3xl p-8 sm:p-12 lg:p-16"
          >
            <div className="flex flex-col items-center text-center">
              <YearBadge year={data.year} />

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
                <span className="text-purple-400 font-medium">
                  {data.year}
                </span>{" "}
                is done
              </p>

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
          <GlassPanel
            intensity="subtle"
            className="h-px flex-1 rounded-full"
          />
          <GlassPanel
            intensity="subtle"
            className="rounded-full px-4 py-1.5"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/40">
              {data.year} in numbers
            </span>
          </GlassPanel>
          <GlassPanel
            intensity="subtle"
            className="h-px flex-1 rounded-full"
          />
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
