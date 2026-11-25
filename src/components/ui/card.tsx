import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "tech-panel p-6 transition-all duration-300 hover:border-cyber-500/50 hover:shadow-[0_0_36px_rgba(0,212,255,0.10)]",
        className
      )}
      {...props}
    />
  );
}
