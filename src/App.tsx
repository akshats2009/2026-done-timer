import { useEffect } from "react";
import { useYearProgress } from "@/hooks/useYearProgress";
import { StatsGrid } from "@/components/StatsGrid";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopProgressBar } from "@/components/TopProgressBar";
import { YearTimeline } from "@/components/YearTimeline";
import { GlassPanel } from "@/components/ui/glass-panel";
import { GlassFilter } from "@/components/ui/glass-filter";
import { Github, ChevronDown, BookOpen, FileText, FlaskConical } from "lucide-react";

export default function App() {
  const data = useYearProgress(100);

  useEffect(() => {
    document.title = `${data.percentage.toFixed(1)}% of ${data.year} is done`;
  }, [data.percentage, data.year]);

  const scrollToContent = () => {
    const el = document.getElementById("content-start");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <GlassFilter />
      <TopProgressBar percentage={data.percentage} />

      {/* Header */}
      <header className="fixed top-1 left-0 right-0 z-50 px-2 sm:px-4">
        <GlassPanel intensity="subtle" className="rounded-lg">
          <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-2.5">
              <GlassPanel
                intensity="subtle"
                className="flex h-6 w-6 items-center justify-center rounded-md"
              >
                <div className="h-2 w-2 rounded-sm bg-foreground/60" />
              </GlassPanel>
              <span className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground/80">
                {data.year} Timer
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                className="inline-flex items-center justify-center h-8 w-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
                onClick={() =>
                  window.open(
                    "https://github.com/akshats2009/2026-done-timer",
                    "_blank"
                  )
                }
                aria-label="View on GitHub"
              >
                <Github className="h-3.5 w-3.5" />
              </button>
              <ThemeToggle />
            </div>
          </div>
        </GlassPanel>
      </header>

      {/* Hero Section - Full Page */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/20 via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <GlassPanel
            intensity="subtle"
            className="inline-flex items-center gap-2 rounded-md px-4 py-1.5"
          >
            <span className="relative h-1.5 w-1.5 rounded-sm bg-emerald-500" />
            <span
              className="text-xs font-medium tracking-widest text-muted-foreground"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {data.year} &middot; LIVE
            </span>
          </GlassPanel>

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
            <span className="text-foreground font-medium">
              {data.year}
            </span>{" "}
            is done
          </p>

          <GlassPanel
            intensity="subtle"
            className="mt-6 inline-flex items-center gap-2 rounded-md px-4 py-1.5"
          >
            <span className="relative h-1.5 w-1.5 rounded-sm bg-emerald-500" />
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
              className="flex items-center gap-2 rounded-lg px-4 py-2.5"
            >
              <span className="h-1.5 w-1.5 rounded-sm bg-foreground/40" />
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
              className="flex items-center gap-2 rounded-lg px-4 py-2.5"
            >
              <span className="h-1.5 w-1.5 rounded-sm bg-foreground/30" />
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
              className="flex items-center gap-2 rounded-lg px-4 py-2.5"
            >
              <span className="h-1.5 w-1.5 rounded-sm bg-foreground/20" />
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

        {/* Scroll Down Arrow - Bottom Right */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/50 text-muted-foreground hover:text-foreground hover:bg-background/80 transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </section>

      {/* Main Content */}
      <main id="content-start" className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Year Timeline */}
        <section className="pt-12 sm:pt-16">
          <GlassPanel intensity="medium" className="rounded-lg p-5 sm:p-6">
            <YearTimeline percentage={data.percentage} year={data.year} />
          </GlassPanel>
        </section>

        {/* Section divider */}
        <div className="my-10 flex items-center gap-4 sm:my-12">
          <GlassPanel intensity="subtle" className="h-px flex-1 rounded-sm" />
          <GlassPanel intensity="subtle" className="rounded-md px-4 py-1.5">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/40">
              {data.year} in numbers
            </span>
          </GlassPanel>
          <GlassPanel intensity="subtle" className="h-px flex-1 rounded-sm" />
        </div>

        {/* Stats grid */}
        <section className="pb-12 sm:pb-16">
          <StatsGrid data={data} />
        </section>

        {/* Publications Section */}
        <section className="pb-12 sm:pb-16">
          <div className="mb-8 flex items-center gap-4">
            <GlassPanel intensity="subtle" className="h-px flex-1 rounded-sm" />
            <GlassPanel intensity="subtle" className="rounded-md px-4 py-1.5">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/40">
                Publications
              </span>
            </GlassPanel>
            <GlassPanel intensity="subtle" className="h-px flex-1 rounded-sm" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Articles */}
            <GlassPanel intensity="medium" className="rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <GlassPanel
                  intensity="subtle"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground"
                >
                  <FileText className="h-4 w-4" />
                </GlassPanel>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Articles
                </h3>
              </div>
              <p className="text-sm text-muted-foreground/60">
                Coming soon — articles and write-ups will be published here.
              </p>
            </GlassPanel>

            {/* Research */}
            <GlassPanel intensity="medium" className="rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <GlassPanel
                  intensity="subtle"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground"
                >
                  <FlaskConical className="h-4 w-4" />
                </GlassPanel>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Research
                </h3>
              </div>
              <p className="text-sm text-muted-foreground/60">
                Coming soon — research papers and findings will be shared here.
              </p>
            </GlassPanel>

            {/* Journals */}
            <GlassPanel intensity="medium" className="rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <GlassPanel
                  intensity="subtle"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground"
                >
                  <BookOpen className="h-4 w-4" />
                </GlassPanel>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Journals
                </h3>
              </div>
              <p className="text-sm text-muted-foreground/60">
                Coming soon — journal entries and publications will appear here.
              </p>
            </GlassPanel>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="pb-12 sm:pb-16">
          <div className="mb-8 flex items-center gap-4">
            <GlassPanel intensity="subtle" className="h-px flex-1 rounded-sm" />
            <GlassPanel intensity="subtle" className="rounded-md px-4 py-1.5">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/40">
                Our Team
              </span>
            </GlassPanel>
            <GlassPanel intensity="subtle" className="h-px flex-1 rounded-sm" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TeamCard
              name="Vikram Sakthi Mandan"
              title="Outreach Director"
              bio="Bio coming soon"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-2 pb-2 sm:px-4 sm:pb-3">
        <GlassPanel intensity="subtle" className="rounded-lg">
          <div className="mx-auto flex h-12 max-w-6xl items-center justify-center gap-4 px-4 sm:px-6">
            <span className="text-[10px] tracking-[0.1em] uppercase text-foreground/40">
              React + TypeScript
            </span>
            <span className="text-foreground/15">&middot;</span>
            <span className="text-[10px] tracking-[0.1em] uppercase text-foreground/40">
              Updates every second
            </span>
            <span className="text-foreground/15">&middot;</span>
            <span className="text-[10px] tracking-[0.1em] uppercase text-foreground/40">
              Auto-adjusts yearly
            </span>
          </div>
        </GlassPanel>
      </footer>
    </div>
  );
}

function TeamCard({
  name,
  title,
  bio,
}: {
  name: string;
  title: string;
  bio: string;
}) {
  return (
    <GlassPanel intensity="medium" className="rounded-lg p-6">
      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-foreground">{name}</h3>
        <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {title}
        </p>
        <div className="mt-4 rounded-md border border-border bg-background/30 px-4 py-3">
          <p className="text-sm text-muted-foreground/60">{bio}</p>
        </div>
      </div>
    </GlassPanel>
  );
}
