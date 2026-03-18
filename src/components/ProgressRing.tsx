import { useEffect, useRef } from "react";
import { BorderBeam } from "@/components/ui/border-beam";

interface ProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

const ACCENT = "#a855f7";
const ACCENT_GLOW = "rgba(168, 85, 247, 0.35)";

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
      <div className="absolute -inset-6 rounded-full border border-border/20">
        <BorderBeam
          size={80}
          duration={8}
          colorFrom={ACCENT}
          colorTo={ACCENT}
          borderWidth={1}
        />
      </div>

      <div className="absolute -inset-3 rounded-full border border-border/10" />

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

        {/* Glow layer */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={ACCENT_GLOW}
          strokeWidth={strokeWidth + 8}
          strokeLinecap="butt"
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference - (percentage / 100) * circumference
          }
          className="blur-[6px] opacity-60"
        />

        {/* Progress arc */}
        <circle
          ref={progressRef}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={ACCENT}
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          className="transition-[stroke-dashoffset] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />

        <circle
          cx={dotX}
          cy={dotY}
          r={3}
          fill={ACCENT}
          className="transition-all duration-700"
          style={{ transform: "rotate(90deg)", transformOrigin: `${center}px ${center}px` }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
        <span className="text-[3.2rem] font-semibold leading-none tracking-tighter text-foreground sm:text-[3.8rem]" style={{ fontFamily: "var(--font-mono)" }}>
          {percentage.toFixed(2)}
          <span className="text-[1.6rem] sm:text-[2rem] text-muted-foreground">%</span>
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/70">
            live
          </span>
        </div>
      </div>
    </div>
  );
}
