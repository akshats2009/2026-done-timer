import { Calendar } from "lucide-react";

interface YearBadgeProps {
  year: number;
}

export function YearBadge({ year }: YearBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
      <Calendar className="h-3.5 w-3.5" />
      <span>{year}</span>
    </div>
  );
}
