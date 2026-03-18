import {
  CalendarDays,
  Clock,
  Hourglass,
  Sunrise,
  Timer,
  TrendingUp,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
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
      value: data.daysElapsed.toLocaleString(),
      sub: `of ${data.totalDays}`,
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    },
    {
      icon: <Hourglass className="h-4 w-4" />,
      label: "Days Remaining",
      value: data.daysRemaining.toLocaleString(),
      sub: `until ${data.year + 1}`,
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    },
    {
      icon: <Clock className="h-4 w-4" />,
      label: "Hours Elapsed",
      value: data.hoursElapsed.toLocaleString(),
      sub: "this year",
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    },
    {
      icon: <Sunrise className="h-4 w-4" />,
      label: "Current Date",
      value: `${data.currentMonth} ${data.currentDay}`,
      sub: data.isLeapYear ? "Leap year" : "Common year",
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      label: "Seconds This Year",
      value: data.secondsElapsed.toLocaleString(),
      sub: "and counting",
      area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/10]",
    },
    {
      icon: <Timer className="h-4 w-4" />,
      label: "Minutes Elapsed",
      value: data.minutesElapsed.toLocaleString(),
      sub: "this year",
      area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/10/3/13]",
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
  value: string;
  sub: string;
  area: string;
}

function StatCard({ icon, label, value, sub, area }: StatCardProps) {
  return (
    <li className={cn("min-h-[9rem] list-none", area)}>
      <div className="relative h-full rounded-lg border border-border/50 p-px">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[7px] bg-background/80 backdrop-blur-sm p-5 md:p-6">
          {/* Subtle corner accent */}
          <div className="absolute top-0 right-0 h-8 w-8 border-t border-r border-border/30" />
          <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-border/30" />

          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded border border-border/60 bg-muted/50 text-muted-foreground">
              {icon}
            </div>
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              {label}
            </span>
          </div>

          <div className="mt-auto pt-3">
            <p className="font-mono text-2xl font-bold tracking-tight text-foreground md:text-3xl tabular-nums">
              {value}
            </p>
            <p className="mt-0.5 text-[11px] text-muted-foreground/70">
              {sub}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
