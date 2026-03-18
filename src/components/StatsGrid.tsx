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
      label: "Seconds Elapsed",
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
    <li className={cn("min-h-[10rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] bg-background p-5 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {label}
              </p>
              <p className="text-2xl font-bold tracking-tight text-foreground md:text-3xl tabular-nums">
                {value}
              </p>
              <p className="text-xs text-muted-foreground">{sub}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
