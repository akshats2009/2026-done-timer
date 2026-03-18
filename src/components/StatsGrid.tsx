import {
  CalendarDays,
  Clock,
  Gauge,
  Hourglass,
  Timer,
  Zap,
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
      icon: <Zap className="h-4 w-4" />,
      label: "Milliseconds",
      value: data.millisecondsElapsed.toLocaleString(),
      sub: "since Jan 1",
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    },
    {
      icon: <Gauge className="h-4 w-4" />,
      label: "Seconds",
      value: data.secondsElapsed.toLocaleString(),
      sub: `${(data.secondsElapsed % 60).toLocaleString()}s into this minute`,
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]",
    },
    {
      icon: <Timer className="h-4 w-4" />,
      label: "Minutes",
      value: data.minutesElapsed.toLocaleString(),
      sub: `${Math.floor(data.minutesElapsed / 60 % 24)}h ${data.minutesElapsed % 60}m today`,
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/9/2/13]",
    },
    {
      icon: <Clock className="h-4 w-4" />,
      label: "Hours",
      value: data.hoursElapsed.toLocaleString(),
      sub: `${(data.hoursElapsed % 24).toLocaleString()}h into today`,
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/5]",
    },
    {
      icon: <CalendarDays className="h-4 w-4" />,
      label: "Days",
      value: data.daysElapsed.toLocaleString(),
      sub: `${data.daysRemaining} remaining`,
      area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/5/3/9]",
    },
    {
      icon: <Hourglass className="h-4 w-4" />,
      label: "Months",
      value: data.monthsElapsed.toFixed(1),
      sub: `${data.currentMonth} ${data.currentDay} · ${data.isLeapYear ? "Leap year" : "Common year"}`,
      area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/9/3/13]",
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
          <div className="absolute inset-x-0 top-0 h-px bg-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />

          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded border border-border/50 text-muted-foreground">
              {icon}
            </div>
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              {label}
            </span>
          </div>

          <div className="mt-auto pt-3">
            <p className="text-2xl font-semibold tracking-tight text-foreground tabular-nums md:text-3xl" style={{ fontFamily: "var(--font-mono)" }}>
              {value}
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground/60">
              {sub}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
