import { GlassPanel } from "@/components/ui/glass-panel";

interface YearBadgeProps {
  year: number;
}

export function YearBadge({ year }: YearBadgeProps) {
  return (
    <GlassPanel
      intensity="subtle"
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
    >
      <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500">
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-75" />
      </span>
      <span
        className="text-xs font-medium tracking-widest text-muted-foreground"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {year} &middot; LIVE
      </span>
    </GlassPanel>
  );
}
