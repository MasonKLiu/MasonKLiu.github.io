// Adapted from Fullend Library: magicuidesign/magicui (MIT License)
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface RetroGridProps extends HTMLAttributes<HTMLDivElement> {
  angle?: number;
  cellSize?: number;
  opacity?: number;
  lineColor?: string;
}

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 56,
  opacity = 0.45,
  lineColor = "rgba(0, 212, 255, 0.28)",
  ...props
}: RetroGridProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [perspective:220px]",
        className
      )}
      style={{ opacity }}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{ transform: `rotateX(${angle}deg)` }}
      >
        <div
          className="retro-grid-plane absolute -left-1/2 -top-1/2 h-[300%] w-[200%]"
          style={{
            backgroundImage: `linear-gradient(to right, ${lineColor} 1px, transparent 0), linear-gradient(to bottom, ${lineColor} 1px, transparent 0)`,
            backgroundSize: `${cellSize}px ${cellSize}px`,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void" />
    </div>
  );
}
