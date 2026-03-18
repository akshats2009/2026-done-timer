import {
  CalendarDays,
  Clock,
  Hourglass,
  Sunrise,
  Timer,
  TrendingUp,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";
import type { YearProgressData } from "@/utils/yearProgress";

interface StatsGridProps {
  data: YearProgressData;
}

export function StatsGrid({ data }: StatsGridProps) {
  const stats = [
    {
      icon: <CalendarDays className="h-4 w-4" />,
      label: "Days Elapsed",
      value: data.daysElapsed,
      sub: `of ${data.totalDays} days`,
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Hourglass className="h-4 w-4" />,
      label: "Days Left",
      value: data.daysRemaining,
      sub: `until ${data.year + 1}`,
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Clock className="h-4 w-4" />,
      label: "Hours",
      value: data.hoursElapsed,
      sub: "elapsed this year",
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <Sunrise className="h-4 w-4" />,
      label: "Today",
      value: data.currentDay,
      displayText: `${data.currentMonth} ${data.currentDay}`,
      sub: data.isLeapYear ? "Leap year" : "Common year",
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      label: "Seconds",
      value: data.secondsElapsed,
      sub: "ticking every moment",
      area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/10]",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <Timer className="h-4 w-4" />,
      label: "Minutes",
      value: data.minutesElapsed,
      sub: "elapsed this year",
      area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/10/3/13]",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </ul>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  displayText?: string;
  sub: string;
  area: string;
  color: string;
}

function StatCard({ icon, label, value, displayText, sub, area, color }: StatCardProps) {
  return (
    <li className={cn("min-h-[9rem] list-none", area)}>
      <div className="group relative h-full rounded-lg border border-border/40 p-px transition-colors hover:border-border/70">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[7px] bg-background/80 backdrop-blur-sm p-5 md:p-6">
          {/* Top gradient line */}
          <div className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100", color)} />

          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded border border-border/50 text-muted-foreground">
              {icon}
            </div>
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              {label}
            </span>
          </div>

          <div className="mt-auto pt-3">
            {displayText ? (
              <p className="font-mono text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {displayText}
              </p>
            ) : (
              <NumberTicker
                value={value}
                className="font-mono text-2xl font-bold tracking-tight text-foreground md:text-3xl"
              />
            )}
            <p className="mt-1 text-[11px] text-muted-foreground/60">
              {sub}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
