import { useEffect } from "react";
import { useYearProgress } from "@/hooks/useYearProgress";
import { ProgressRing } from "@/components/ProgressRing";
import { YearBadge } from "@/components/YearBadge";
import { StatsGrid } from "@/components/StatsGrid";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Github } from "lucide-react";

export default function App() {
  const data = useYearProgress(1000);

  useEffect(() => {
    document.title = `${data.percentage.toFixed(1)}% | ${data.year} Done`;
  }, [data.percentage, data.year]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient background blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/5" />
        <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/5" />
        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/5" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
            Year Timer
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/akshats2009/2026-done-timer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/50 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              aria-label="View on GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Hero section */}
        <section className="flex flex-col items-center text-center">
          <YearBadge year={data.year} />

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How much of{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {data.year}
            </span>{" "}
            is done?
          </h1>

          <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
            Real-time tracker showing how far we've come this year. Every second
            counts.
          </p>

          {/* Progress ring */}
          <div className="mt-10 sm:mt-14">
            <ProgressRing percentage={data.percentage} />
          </div>

          {/* Quick stat line */}
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-medium text-foreground tabular-nums">
              {data.daysElapsed}
            </span>{" "}
            days down &middot;{" "}
            <span className="font-medium text-foreground tabular-nums">
              {data.daysRemaining}
            </span>{" "}
            to go
          </p>
        </section>

        {/* Stats grid */}
        <section className="mt-16 sm:mt-20">
          <StatsGrid data={data} />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/60 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-center px-4 text-xs text-muted-foreground sm:px-6">
          Built with React &middot; Updates every second &middot; Auto-adjusts
          every year
        </div>
      </footer>
    </div>
  );
}
