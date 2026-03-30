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
      "bg-foreground/[0.02] border border-foreground/[0.06]",
      "dark:bg-white/[0.02] dark:border-white/[0.06]",
    ],
    medium: [
      "bg-foreground/[0.03] border border-foreground/[0.08]",
      "dark:bg-white/[0.04] dark:border-white/[0.08]",
    ],
    strong: [
      "bg-foreground/[0.05] border border-foreground/[0.10]",
      "dark:bg-white/[0.06] dark:border-white/[0.10]",
    ],
  };

  const classes = intensityClasses[intensity];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg backdrop-blur-sm",
        classes[0],
        classes[1],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
