"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const meteorStyles = useMemo(() => {
    return Array.from({ length: number }, (_, i) => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `${seededRandom(i * 7 + 1) * 100}%`,
      animationDelay:
        seededRandom(i * 13 + 3) * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(
          seededRandom(i * 17 + 5) * (maxDuration - minDuration) + minDuration
        ) + "s",
    }));
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={{ ...style } as React.CSSProperties}
          className={cn(
            "animate-meteor pointer-events-none absolute size-0.5 rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  );
};
