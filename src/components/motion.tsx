import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
  useReducedMotion,
  useInView,
  useMotionValueEvent,
  animate,
} from "framer-motion";
import type { Variants } from "framer-motion";

// eslint-disable-next-line react-refresh/only-export-components
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/** Scroll-triggered fade-in wrapper. Falls back to opacity-only when reduced motion is on. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

/** Per-line mask reveal. Each string in `lines` animates independently. */
export function LineReveal({
  lines,
  className,
  lineClassName,
  baseDelay = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  baseDelay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <span className={className} aria-label={lines.join(" ")}>
      {lines.map((line, i) =>
        prefersReducedMotion ? (
          <motion.span
            key={i}
            className={`block ${lineClassName ?? ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: baseDelay }}
          >
            {line}
          </motion.span>
        ) : (
          <span key={i} className={`block overflow-hidden ${lineClassName ?? ""}`} aria-hidden>
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: baseDelay + i * 0.12, ease: EASE_OUT }}
            >
              {line}
            </motion.span>
          </span>
        )
      )}
    </span>
  );
}

/** Scroll-linked vertical parallax wrapper. Static under reduced motion. */
export function Parallax({
  children,
  range = 20,
  className,
}: {
  children: ReactNode;
  range?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useHideOnScroll(threshold = 96): boolean {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (prefersReducedMotion) return;
    const diff = latest - lastY.current;
    if (diff > 8 && latest > threshold) {
      setHidden(true);
    } else if (diff < -8) {
      setHidden(false);
    }
    lastY.current = latest;
  });

  return hidden;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useStaggerVariants(): { container: Variants; item: Variants } {
  const prefersReducedMotion = useReducedMotion();

  return {
    container: {
      hidden: {},
      show: { transition: { staggerChildren: 0.08 } },
    },
    item: {
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: EASE_OUT },
      },
    },
  };
}

/** Fixed hairline progress bar tied to page scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-px bg-accent origin-left z-50"
      style={{ scaleX }}
    />
  );
}

/** Counts up from 0 to `target` when scrolled into view. */
export function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const prefersReducedMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, { duration: 1.6, ease: "easeOut" });
    return controls.stop;
  }, [inView, target, prefersReducedMotion, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
