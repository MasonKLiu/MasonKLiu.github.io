import { FlickeringGrid } from "@/components/magicui/FlickeringGrid";

export function DigitalStreamField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Subtle blueprint grid */}
      <div className="blueprint-surface absolute inset-0 opacity-60" />

      {/* Ambient cyan flickering matrix from Fullend Magic UI */}
      <FlickeringGrid
        className="absolute inset-0 opacity-35 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_30%,#000_25%,transparent_100%)]"
        squareSize={3}
        gridGap={14}
        color="#00D4FF"
        maxOpacity={0.18}
        flickerChance={0.16}
      />

      {/* Ambient cobalt depth wash */}
      <div className="bg-cyber-radial absolute inset-0" />

      {/* Slow digital scan beam */}
      <div className="motion-reduce-static animate-scan-line absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-500/35 to-transparent" />
    </div>
  );
}
