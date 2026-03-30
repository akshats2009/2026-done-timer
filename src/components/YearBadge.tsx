import { GlassPanel } from "@/components/ui/glass-panel";

interface YearBadgeProps {
  year: number;
}

export function YearBadge({ year }: YearBadgeProps) {
  return (
    <GlassPanel
      intensity="subtle"
      className="inline-flex items-center gap-2 rounded-md px-4 py-1.5"
    >
      <span className="relative h-1.5 w-1.5 rounded-sm bg-emerald-500" />
      <span
        className="text-xs font-medium tracking-widest text-muted-foreground"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {year} &middot; LIVE
      </span>
    </GlassPanel>
  );
}
