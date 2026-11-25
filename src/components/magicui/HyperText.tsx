// Adapted from Fullend Library: magicuidesign/magicui (MIT License)
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HyperTextProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  animateOnHover?: boolean;
}

const CHARSET = "0123456789ABCDEFXYZ";

export function HyperText({
  children,
  className,
  duration = 650,
  delay = 0,
  animateOnHover = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState<string>(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef(children);

  useEffect(() => {
    textRef.current = children;
    setDisplayText(children);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const timer = setTimeout(() => setIsAnimating(true), delay);
    return () => clearTimeout(timer);
  }, [children, delay]);

  useEffect(() => {
    if (!isAnimating) return;
    let rafId: number | null = null;
    const target = textRef.current;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const revealedCount = Math.floor(progress * target.length);

      const next = target
        .split("")
        .map((ch, idx) => {
          if (ch === " " || ch === "/" || ch === "." || ch === "-") return ch;
          if (idx < revealedCount) return ch;
          return CHARSET[Math.floor(Math.random() * CHARSET.length)];
        })
        .join("");

      setDisplayText(next);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setDisplayText(target);
        setIsAnimating(false);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [duration, isAnimating]);

  const handleMouseEnter = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (animateOnHover && !isAnimating && !reduced) {
      setIsAnimating(true);
    }
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={cn("inline-block font-mono", className)}
    >
      {displayText}
    </span>
  );
}
