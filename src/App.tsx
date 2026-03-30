import { useEffect } from "react";
import { ArrowDownRight, ArrowUpRight, Github, Mail } from "lucide-react";
import { useYearProgress } from "@/hooks/useYearProgress";
import { StatsGrid } from "@/components/StatsGrid";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopProgressBar } from "@/components/TopProgressBar";
import { YearTimeline } from "@/components/YearTimeline";
import { GlassPanel } from "@/components/ui/glass-panel";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const PUBLICATION_HEADINGS = [
  {
    title: "Article",
    description: "Short-form thought leadership and perspective pieces.",
  },
  {
    title: "Research",
    description: "Data-backed studies, findings, and long-form analysis.",
  },
  {
    title: "Journals",
    description: "Periodic updates and documented progress over time.",
  },
];

export default function App() {
  const data = useYearProgress(100);

  useEffect(() => {
    document.title = `${data.percentage.toFixed(1)}% of ${data.year} is done`;
  }, [data.percentage, data.year]);

  const scrollToContent = () => {
    document.getElementById("site-content")?.scrollIntoView({ behavior: "auto" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopProgressBar percentage={data.percentage} />

      {/* Header */}
      <header className="absolute top-0 right-0 left-0 z-50 px-2 py-2 sm:px-4">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between rounded-xl border border-black/10 bg-background/90 px-2 backdrop-blur-sm dark:border-white/15 sm:px-4">
          <div className="flex items-center gap-2.5">
            <GlassPanel
              intensity="subtle"
              className="flex h-7 w-7 items-center justify-center rounded-lg"
            >
              <div className="h-2 w-2 rounded-sm bg-foreground/80" />
            </GlassPanel>
            <span className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground/90">
              {data.year} Timer
            </span>
          </div>

          <div className="flex items-center gap-2">
            <LiquidButton
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() =>
                window.open(
                  "https://github.com/akshats2009/2026-done-timer",
                  "_blank"
                )
              }
              aria-label="View on GitHub"
            >
              <Github className="h-4 w-4" />
            </LiquidButton>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/hero-image.svg"
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 dark:bg-black/55" />

        <div className="relative mx-auto flex h-full max-w-6xl items-center px-4 pt-24 pb-12 sm:px-6">
          <GlassPanel intensity="strong" className="w-full max-w-3xl rounded-2xl p-8 sm:p-10">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground">
              Hero Section
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {data.year} Progress, built for clarity.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Live yearly tracking with cleaner visuals, stronger contrast in light
              mode, and simple navigation sections for content and team updates.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <GlassPanel intensity="subtle" className="rounded-xl p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Progress</p>
                <p className="mt-2 text-2xl font-semibold tabular-nums">
                  {data.percentage.toFixed(2)}%
                </p>
              </GlassPanel>
              <GlassPanel intensity="subtle" className="rounded-xl p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Days elapsed</p>
                <p className="mt-2 text-2xl font-semibold tabular-nums">{data.daysElapsed}</p>
              </GlassPanel>
              <GlassPanel intensity="subtle" className="rounded-xl p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Days remaining
                </p>
                <p className="mt-2 text-2xl font-semibold tabular-nums">{data.daysRemaining}</p>
              </GlassPanel>
            </div>
          </GlassPanel>
        </div>

        <LiquidButton
          size="icon"
          onClick={scrollToContent}
          className="absolute right-6 bottom-6 z-20 h-12 w-12 rounded-lg bg-black text-white dark:bg-white dark:text-black"
          aria-label="Scroll to content"
        >
          <ArrowDownRight className="h-4 w-4" />
        </LiquidButton>
      </section>

      {/* Main */}
      <main id="site-content" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Publications */}
        <section id="publications" className="mb-10 sm:mb-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Publications</h2>
          <p className="mt-2 text-sm text-muted-foreground">Article, Research, Journals</p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PUBLICATION_HEADINGS.map((item) => (
              <GlassPanel key={item.title} intensity="medium" className="rounded-xl p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </GlassPanel>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-10 sm:mb-12">
          <GlassPanel
            intensity="medium"
            className="rounded-2xl p-5 sm:p-6"
          >
            <YearTimeline percentage={data.percentage} year={data.year} />
          </GlassPanel>
        </section>

        {/* Stats grid */}
        <section className="mb-10 sm:mb-12">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight sm:text-3xl">
            {data.year} in numbers
          </h2>
          <StatsGrid data={data} />
        </section>

        {/* Team */}
        <section id="our-team" className="pb-8 sm:pb-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Our team</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <GlassPanel intensity="medium" className="rounded-xl p-5">
              <h3 className="text-lg font-semibold">Vikram Sakthi Mandan</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Outreach director</p>
              <p className="mt-3 text-sm text-muted-foreground">bio coming soon</p>
            </GlassPanel>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 px-2 py-4 dark:border-white/15 sm:px-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-2 sm:flex-row sm:px-4">
          <span className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50">
              React + TypeScript
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <LiquidButton
              size="sm"
              className="rounded-lg bg-black text-white dark:bg-white dark:text-black"
              onClick={() =>
                window.open("https://github.com/akshats2009/2026-done-timer", "_blank")
              }
            >
              <Github className="h-4 w-4" />
              GitHub
            </LiquidButton>
            <LiquidButton
              size="sm"
              className="rounded-lg bg-black text-white dark:bg-white dark:text-black"
              onClick={() => window.open("mailto:hello@example.com", "_blank")}
            >
              <Mail className="h-4 w-4" />
              Contact
            </LiquidButton>
            <LiquidButton
              size="sm"
              className="rounded-lg bg-black text-white dark:bg-white dark:text-black"
              onClick={scrollToTop}
            >
              Back to top
              <ArrowUpRight className="h-4 w-4" />
            </LiquidButton>
          </div>
        </div>
      </footer>
    </div>
  );
}
