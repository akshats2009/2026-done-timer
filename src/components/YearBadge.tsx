interface YearBadgeProps {
  year: number;
}

export function YearBadge({ year }: YearBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded border border-border/50 bg-muted/30 px-3 py-1 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="font-mono text-xs font-medium tracking-widest text-muted-foreground">
        {year} &middot; LIVE
      </span>
    </div>
  );
}
