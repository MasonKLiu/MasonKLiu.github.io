// Adapted from Fullend Library: magicuidesign/magicui (MIT License)
import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SequenceContextValue {
  completeItem: (index: number) => void;
  activeIndex: number;
  sequenceStarted: boolean;
}

const SequenceContext = createContext<SequenceContextValue | null>(null);
const ItemIndexContext = createContext<number | null>(null);

interface AnimatedSpanProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
}: AnimatedSpanProps) => {
  const sequence = useContext(SequenceContext);
  const itemIndex = useContext(ItemIndexContext);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!sequence || itemIndex === null) return;
    if (sequence.sequenceStarted && sequence.activeIndex === itemIndex) {
      setHasStarted(true);
    }
  }, [sequence, itemIndex]);

  const shouldAnimate = sequence ? hasStarted : true;

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
      transition={{ duration: 0.24, delay: sequence ? 0 : delay / 1000 }}
      className={cn("grid text-xs leading-relaxed tracking-tight", className)}
      onAnimationComplete={() => {
        if (sequence && itemIndex !== null && hasStarted) {
          sequence.completeItem(itemIndex);
        }
      }}
    >
      {children}
    </motion.div>
  );
};

interface TypingAnimationProps {
  children: string;
  className?: string;
  duration?: number;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 28,
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const sequence = useContext(SequenceContext);
  const itemIndex = useContext(ItemIndexContext);

  useEffect(() => {
    setDisplayedText("");
    setStarted(false);
  }, [children]);

  useEffect(() => {
    if (sequence && itemIndex !== null) {
      if (sequence.sequenceStarted && !started && sequence.activeIndex === itemIndex) {
        setStarted(true);
      }
    } else if (!sequence) {
      setStarted(true);
    }
  }, [sequence, itemIndex, started]);

  useEffect(() => {
    if (!started) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplayedText(children);
      if (sequence && itemIndex !== null) sequence.completeItem(itemIndex);
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i += 1;
      } else {
        clearInterval(timer);
        if (sequence && itemIndex !== null) {
          sequence.completeItem(itemIndex);
        }
      }
    }, duration);

    return () => clearInterval(timer);
  }, [children, duration, started, sequence, itemIndex]);

  return (
    <span className={cn("text-xs font-mono tracking-tight", className)}>
      {displayedText}
    </span>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
  statusText?: string;
  className?: string;
  sequenceKey?: string;
}

export const Terminal = ({
  children,
  title = "system://masonkliu.telemetry",
  statusText = "ONLINE",
  className,
  sequenceKey = "default",
}: TerminalProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.25, once: true });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [sequenceKey]);

  const contextValue = useMemo<SequenceContextValue>(
    () => ({
      completeItem: (index: number) => {
        setActiveIndex((curr) => (index === curr ? curr + 1 : curr));
      },
      activeIndex,
      sequenceStarted: isInView,
    }),
    [activeIndex, isInView]
  );

  const wrappedChildren = useMemo(() => {
    const items = Children.toArray(children);
    return items.map((child, idx) => (
      <ItemIndexContext.Provider key={`${sequenceKey}-${idx}`} value={idx}>
        {child}
      </ItemIndexContext.Provider>
    ));
  }, [children, sequenceKey]);

  return (
    <SequenceContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={cn(
          "tech-panel relative w-full overflow-hidden font-mono shadow-[0_0_50px_rgba(37,99,235,0.16)]",
          className
        )}
      >
        <div className="flex items-center justify-between border-b border-line/90 bg-abyss/90 px-4 py-2.5 text-[11px] text-ice-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyber-500 shadow-[0_0_8px_#00D4FF]" />
            <span className="h-2 w-2 rounded-full bg-cobalt-500/70" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="ml-2 text-ice-200">{title}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {statusText}
          </span>
        </div>
        <div className="p-4 sm:p-5">
          <code className="grid gap-y-2 overflow-x-auto">{wrappedChildren}</code>
        </div>
      </div>
    </SequenceContext.Provider>
  );
};
