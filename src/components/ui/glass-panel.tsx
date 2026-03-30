"use client";

import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "subtle" | "medium" | "strong";
}

export function GlassPanel({
  className,
  intensity = "medium",
  children,
  ...props
}: GlassPanelProps) {
  const intensityClasses = {
    subtle: [
      "shadow-[0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.35)]",
      "bg-white/88 dark:bg-black/35",
    ],
    medium: [
      "shadow-[0_2px_6px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.45)]",
      "bg-white/94 dark:bg-black/45",
    ],
    strong: [
      "shadow-[0_4px_14px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_14px_rgba(0,0,0,0.55)]",
      "bg-white/98 dark:bg-black/55",
    ],
  };

  const shadows = intensityClasses[intensity];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-black/10 dark:border-white/15",
        shadows[0],
        shadows[1],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
