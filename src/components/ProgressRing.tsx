import { useEffect, useRef } from "react";

interface ProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

export function ProgressRing({
  percentage,
  size = 300,
  strokeWidth = 5,
}: ProgressRingProps) {
  const progressRef = useRef<SVGCircleElement>(null);
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  useEffect(() => {
    if (!progressRef.current) return;
    const offset = circumference - (percentage / 100) * circumference;
    progressRef.current.style.strokeDashoffset = String(offset);
  }, [percentage, circumference]);

  const tickCount = 60;
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const angle = (i / tickCount) * 360;
    const isMajor = i % 5 === 0;
    const innerR = isMajor ? radius - 16 : radius - 9;
    const outerR = radius - 4;
    const rad = (angle * Math.PI) / 180;
    return {
      x1: center + innerR * Math.cos(rad),
      y1: center + innerR * Math.sin(rad),
      x2: center + outerR * Math.cos(rad),
      y2: center + outerR * Math.sin(rad),
      isMajor,
    };
  });

  const progressAngle = (percentage / 100) * 360;
  const endRad = ((progressAngle - 90) * Math.PI) / 180;
  const dotX = center + radius * Math.cos(endRad);
  const dotY = center + radius * Math.sin(endRad);

  return (
    <div className="relative inline-flex items-center justify-center">
      <div
        className="absolute -inset-6 rounded-lg
          shadow-[0_0_6px_rgba(0,0,0,0.02),inset_2px_2px_0.5px_-2px_rgba(0,0,0,0.5),inset_-2px_-2px_0.5px_-2px_rgba(0,0,0,0.45),inset_0_0_4px_4px_rgba(0,0,0,0.06)]
          dark:shadow-[0_0_6px_rgba(0,0,0,0.02),inset_2px_2px_0.5px_-2.5px_rgba(255,255,255,0.05),inset_-2px_-2px_0.5px_-2.5px_rgba(255,255,255,0.5),inset_0_0_4px_4px_rgba(255,255,255,0.06)]"
      />

      <div
        className="absolute -inset-3 rounded-lg
          shadow-[inset_1px_1px_0.5px_-1px_rgba(0,0,0,0.3),inset_-1px_-1px_0.5px_-1px_rgba(0,0,0,0.25)]
          dark:shadow-[inset_1px_1px_0.5px_-1px_rgba(255,255,255,0.03),inset_-1px_-1px_0.5px_-1px_rgba(255,255,255,0.03)]"
      />

      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke="currentColor"
            strokeWidth={t.isMajor ? 1.5 : 0.5}
            className="text-muted-foreground/15"
          />
        ))}

        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          className="text-border/30"
        />

        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth + 8}
          strokeLinecap="butt"
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference - (percentage / 100) * circumference
          }
          className="text-foreground/20 opacity-60"
        />

        <circle
          ref={progressRef}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          className="text-foreground/60"
        />

        <circle
          cx={dotX}
          cy={dotY}
          r={3}
          fill="currentColor"
          className="text-foreground/60"
          style={{
            transform: "rotate(90deg)",
            transformOrigin: `${center}px ${center}px`,
          }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
        <span
          className="text-[3.2rem] font-semibold leading-none tracking-tighter text-foreground sm:text-[3.8rem]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {percentage.toFixed(2)}
          <span className="text-[1.6rem] sm:text-[2rem] text-muted-foreground">
            %
          </span>
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/70">
            live
          </span>
        </div>
      </div>
    </div>
  );
}
