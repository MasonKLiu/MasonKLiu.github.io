import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export interface ScrollSectionMeta {
  id: string;
  code: string;
  label: string;
}

interface DigitalScrollRailProps {
  sections: ScrollSectionMeta[];
}

export function DigitalScrollRail({ sections }: DigitalScrollRailProps) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState(0);
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "overview");

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(sec.id);
          }
        },
        { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [sections]);

  return (
    <>
      {/* Top optical progress conduit */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-cobalt-600 via-cyber-500 to-cyber-200 shadow-[0_0_14px_rgba(0,212,255,0.85)]"
      />

      {/* Right fixed vertical digital scroll rail */}
      <aside
        aria-label="Scroll section telemetry"
        className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex"
      >
        <div className="mb-1 border border-line/80 bg-abyss/90 px-2 py-0.5 font-mono text-[10px] tabular-nums text-cyber-300 backdrop-blur-sm">
          {String(percent).padStart(2, "0")}%
        </div>

        <div className="relative flex flex-col items-end gap-4 py-1 pr-3">
          {/* Background track */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 right-[3px] top-2 w-[2px] bg-line/70"
          />
          {/* Scroll-linked optical fill */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY: smoothProgress }}
            className="absolute bottom-2 right-[3px] top-2 w-[2px] origin-top bg-gradient-to-b from-cyber-400 via-cobalt-500 to-cyber-300 shadow-[0_0_10px_rgba(0,212,255,0.7)]"
          />

          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                aria-current={isActive ? "location" : undefined}
                className="group relative flex cursor-pointer items-center gap-2.5 text-right font-mono text-[11px] transition-colors"
              >
                <span
                  className={`transition-all duration-200 ${
                    isActive
                      ? "translate-x-0 text-cyber-300 opacity-100"
                      : "translate-x-1 text-ice-400 opacity-0 group-hover:translate-x-0 group-hover:text-ice-50 group-hover:opacity-100"
                  }`}
                >
                  {sec.code} {sec.label}
                </span>
                <span
                  className={`relative -right-[11px] h-2 w-2 border transition-all duration-200 ${
                    isActive
                      ? "scale-125 border-cyber-300 bg-cyber-500 shadow-[0_0_10px_#00D4FF]"
                      : "border-cobalt-500/50 bg-void group-hover:border-cyber-400 group-hover:bg-cobalt-500/50"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
}
