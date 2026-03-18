import { useEffect, useRef } from "react";

interface ProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

export function ProgressRing({
  percentage,
  size = 300,
  strokeWidth = 6,
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

  const tickCount = 72;
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const angle = (i / tickCount) * 360;
    const isMajor = i % 9 === 0;
    const innerR = isMajor ? radius - 14 : radius - 8;
    const outerR = radius - 3;
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
          <filter id="sharp-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
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
            className="text-muted-foreground/20"
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
          className="text-border/50"
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
          filter="url(#sharp-glow)"
          className="transition-[stroke-dashoffset] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />

        {/* Start notch */}
        <circle
          cx={center + radius}
          cy={center}
          r={2}
          fill="#a855f7"
          className="opacity-80"
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
        <span className="font-mono text-5xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent sm:text-6xl">
          {percentage.toFixed(2)}
          <span className="text-3xl sm:text-4xl">%</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
          of the year complete
        </span>
      </div>
    </div>
  );
}
