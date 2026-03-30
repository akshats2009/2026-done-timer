interface TopProgressBarProps {
  percentage: number;
}

export function TopProgressBar({ percentage }: TopProgressBarProps) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px]"
    >
      <div className="absolute inset-0 bg-background/[0.05]" />
      <div
        className="relative h-full bg-foreground/50"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
