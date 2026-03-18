import { BorderBeam } from "@/components/ui/border-beam";

interface YearBadgeProps {
  year: number;
}

export function YearBadge({ year }: YearBadgeProps) {
  return (
    <div className="relative inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-1.5 backdrop-blur-sm">
      <BorderBeam
        size={30}
        duration={4}
        colorFrom="#a855f7"
        colorTo="#06b6d4"
        borderWidth={1}
      />
      <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500">
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-75" />
      </span>
      <span className="font-mono text-xs font-medium tracking-widest text-muted-foreground">
        {year} &middot; LIVE
      </span>
    </div>
  );
}
