import { useEffect, useRef } from "react";
import { BorderBeam } from "@/components/ui/border-beam";

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

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Outer decorative ring with border beam */}
      <div className="absolute -inset-6 rounded-full border border-border/20">
        <BorderBeam
          size={80}
          duration={8}
          colorFrom="#a855f7"
          colorTo="#06b6d4"
          borderWidth={1}
        />
      </div>

      {/* Second decorative ring */}
      <div className="absolute -inset-3 rounded-full border border-border/10" />

      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        <defs>
          <linearGradient
            id="progress-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient
            id="glow-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Tick marks */}
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

        {/* Background track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          className="text-border/30"
        />

        {/* Glow layer behind progress */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="url(#glow-gradient)"
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
          stroke="url(#progress-gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          className="transition-[stroke-dashoffset] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />

        {/* Progress end dot */}
        {(() => {
          const progressAngle = (percentage / 100) * 360;
          const rad = ((progressAngle - 90) * Math.PI) / 180;
          const dotX = center + radius * Math.cos(rad);
          const dotY = center + radius * Math.sin(rad);
          return (
            <circle
              cx={dotX}
              cy={dotY}
              r={3}
              fill="#06b6d4"
              className="transition-all duration-700"
              style={{ transform: "rotate(90deg)", transformOrigin: `${center}px ${center}px` }}
            />
          );
        })()}
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
        <span className="text-[3.2rem] font-semibold leading-none tracking-tighter bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent sm:text-[3.8rem]" style={{ fontFamily: "var(--font-mono)" }}>
          {percentage.toFixed(4)}
          <span className="text-[1.6rem] sm:text-[2rem]">%</span>
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
