interface TopProgressBarProps {
  percentage: number;
}

export function TopProgressBar({ percentage }: TopProgressBarProps) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px]"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="absolute inset-0 bg-background/[0.05]" />
      <div
        className="relative h-full bg-purple-500/80 transition-[width] duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      >
        <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]" />
      </div>
    </div>
  );
}
