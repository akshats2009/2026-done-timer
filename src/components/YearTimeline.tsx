import { GlassPanel } from "@/components/ui/glass-panel";

interface YearTimelineProps {
  percentage: number;
  year: number;
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const monoStyle = { fontFamily: "var(--font-mono)" };

export function YearTimeline({ percentage, year }: YearTimelineProps) {
  return (
    <div className="w-full">
      <GlassPanel intensity="subtle" className="relative h-3 w-full rounded-sm">
        <div
          className="absolute inset-y-0 left-0 rounded-sm bg-foreground/30"
          style={{ width: `${percentage}%` }}
        />
        <div
          className="absolute top-1/2 h-5 w-px -translate-y-1/2 bg-foreground/70"
          style={{ left: `${percentage}%` }}
        />
      </GlassPanel>

      <div className="mt-3 flex justify-between px-0.5">
        {MONTHS.map((m, i) => {
          const monthPerc = ((i + 0.5) / 12) * 100;
          const isPast = percentage >= monthPerc;
          return (
            <span
              key={m}
              style={monoStyle}
              className={`text-[9px] tracking-wider ${
                isPast ? "text-muted-foreground" : "text-muted-foreground/25"
              }`}
            >
              {m}
            </span>
          );
        })}
      </div>

      <div className="mt-1.5 flex justify-between">
        <span className="text-[10px] text-muted-foreground/35" style={monoStyle}>
          Jan 1, {year}
        </span>
        <span className="text-[10px] text-muted-foreground/35" style={monoStyle}>
          Dec 31, {year}
        </span>
      </div>
    </div>
  );
}
