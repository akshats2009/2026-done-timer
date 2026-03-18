interface TopProgressBarProps {
  percentage: number;
}

export function TopProgressBar({ percentage }: TopProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-border/20">
      <div
        className="h-full bg-purple-500 transition-[width] duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
