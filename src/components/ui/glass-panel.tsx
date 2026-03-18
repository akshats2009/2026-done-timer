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
      "shadow-[0_0_4px_rgba(0,0,0,0.02),0_1px_4px_rgba(0,0,0,0.04),inset_1px_1px_0.5px_-1px_rgba(0,0,0,0.2),inset_-1px_-1px_0.5px_-1px_rgba(0,0,0,0.15),inset_0_0_3px_3px_rgba(0,0,0,0.04)]",
      "dark:shadow-[0_0_4px_rgba(0,0,0,0.02),0_1px_4px_rgba(0,0,0,0.04),inset_1px_1px_0.5px_-1px_rgba(255,255,255,0.06),inset_-1px_-1px_0.5px_-1px_rgba(255,255,255,0.06),inset_0_0_3px_3px_rgba(255,255,255,0.05)]",
    ],
    medium: [
      "shadow-[0_0_6px_rgba(0,0,0,0.02),0_2px_6px_rgba(0,0,0,0.06),inset_2px_2px_0.5px_-2px_rgba(0,0,0,0.5),inset_-2px_-2px_0.5px_-2px_rgba(0,0,0,0.45),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.25),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.25),inset_0_0_4px_4px_rgba(0,0,0,0.05),0_0_8px_rgba(255,255,255,0.08)]",
      "dark:shadow-[0_0_6px_rgba(0,0,0,0.02),0_2px_6px_rgba(0,0,0,0.06),inset_2px_2px_0.5px_-2.5px_rgba(255,255,255,0.08),inset_-2px_-2px_0.5px_-2.5px_rgba(255,255,255,0.55),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.3),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.3),inset_0_0_4px_4px_rgba(255,255,255,0.06),0_0_8px_rgba(0,0,0,0.08)]",
    ],
    strong: [
      "shadow-[0_0_6px_rgba(0,0,0,0.02),0_2px_6px_rgba(0,0,0,0.06),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.7),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.65),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.4),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.4),inset_0_0_6px_6px_rgba(0,0,0,0.08),inset_0_0_2px_2px_rgba(0,0,0,0.04),0_0_12px_rgba(255,255,255,0.1)]",
      "dark:shadow-[0_0_8px_rgba(0,0,0,0.02),0_2px_6px_rgba(0,0,0,0.06),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.1),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.7),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.45),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.45),inset_0_0_6px_6px_rgba(255,255,255,0.08),inset_0_0_2px_2px_rgba(255,255,255,0.04),0_0_12px_rgba(0,0,0,0.1)]",
    ],
  };

  const shadows = intensityClasses[intensity];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        shadows[0],
        shadows[1],
        className
      )}
      {...props}
    >
      {/* Glass refraction + blur layer */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
        style={{ backdropFilter: 'url("#container-glass") blur(20px)' }}
      />
      {/* Very transparent tint */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-background/[0.03]" />
      {children}
    </div>
  );
}
