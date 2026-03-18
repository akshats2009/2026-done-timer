interface YearTimelineProps {
  percentage: number;
  year: number;
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function YearTimeline({ percentage, year }: YearTimelineProps) {
  return (
    <div className="w-full">
      {/* Bar */}
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted/50">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 transition-[width] duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
        {/* Needle at current position */}
        <div
          className="absolute top-1/2 h-4 w-px -translate-y-1/2 bg-foreground/80 transition-[left] duration-1000 ease-out"
          style={{ left: `${percentage}%` }}
        />
      </div>

      {/* Month labels */}
      <div className="mt-2 flex justify-between px-0.5">
        {MONTHS.map((m, i) => {
          const monthPerc = ((i + 0.5) / 12) * 100;
          const isPast = percentage >= monthPerc;
          return (
            <span
              key={m}
              className={`text-[9px] font-mono tracking-wider transition-colors ${
                isPast
                  ? "text-muted-foreground"
                  : "text-muted-foreground/30"
              }`}
            >
              {m}
            </span>
          );
        })}
      </div>

      {/* Year range */}
      <div className="mt-1 flex justify-between">
        <span className="text-[10px] font-mono text-muted-foreground/40">
          Jan 1, {year}
        </span>
        <span className="text-[10px] font-mono text-muted-foreground/40">
          Dec 31, {year}
        </span>
      </div>
    </div>
  );
}
