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
    subtle: "bg-white/60 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] shadow-sm",
    medium: "bg-white/70 dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.08] shadow-md",
    strong: "bg-white/80 dark:bg-white/[0.08] border border-black/[0.10] dark:border-white/[0.10] shadow-lg",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg backdrop-blur-md",
        intensityClasses[intensity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
