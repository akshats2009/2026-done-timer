import React, { useEffect, useRef } from "react";

interface AnimatedGradientBackgroundProps {
  startingGap?: number;
  Breathing?: boolean;
  gradientColors?: string[];
  gradientStops?: number[];
  animationSpeed?: number;
  breathingRange?: number;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
  topOffset?: number;
}

const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  startingGap = 125,
  gradientColors = [
    "#0A0A0A",
    "#2979FF",
    "#FF80AB",
    "#FF6D00",
    "#FFD600",
    "#00E676",
    "#3D5AFE",
  ],
  gradientStops = [35, 50, 60, 70, 80, 90, 100],
  containerStyle = {},
  topOffset = 0,
  containerClassName = "",
}) => {
  if (gradientColors.length !== gradientStops.length) {
    throw new Error(
      `GradientColors and GradientStops must have the same length. Received gradientColors length: ${gradientColors.length}, gradientStops length: ${gradientStops.length}`
    );
  }

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const width = startingGap;
    const gradientStopsString = gradientStops
      .map((stop, index) => `${gradientColors[index]} ${stop}%`)
      .join(", ");

    const gradient = `radial-gradient(${width}% ${width + topOffset}% at 50% 20%, ${gradientStopsString})`;

    if (containerRef.current) {
      containerRef.current.style.background = gradient;
    }
  }, [startingGap, gradientColors, gradientStops, topOffset]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${containerClassName}`}>
      <div
        ref={containerRef}
        style={containerStyle}
        className="absolute inset-0"
      />
    </div>
  );
};

export default AnimatedGradientBackground;
