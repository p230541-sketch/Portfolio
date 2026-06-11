import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function Cursor() {
  const prefersReducedMotion = useReducedMotion();

  // Evaluate pointer capability synchronously on first render — no effect needed
  const [active] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches
  );

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(true);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springX = useSpring(rawX, { stiffness: 400, damping: 40, mass: 0.5 });
  const springY = useSpring(rawY, { stiffness: 400, damping: 40, mass: 0.5 });

  useEffect(() => {
    if (!active || prefersReducedMotion) return;

    document.documentElement.classList.add("custom-cursor");

    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const onOver = (e: PointerEvent) => {
      if ((e.target as Element).closest("a, button, [data-cursor]")) {
        setHovering(true);
      }
    };

    const onOut = (e: PointerEvent) => {
      if ((e.target as Element).closest("a, button, [data-cursor]")) {
        setHovering(false);
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [active, prefersReducedMotion, rawX, rawY]);

  if (!active || prefersReducedMotion) return null;

  return (
    <>
      {/* Dot — raw values, zero lag */}
      <motion.div
        aria-hidden
        className="fixed pointer-events-none z-100 rounded-full bg-accent"
        style={{
          width: hovering ? 6 : 8,
          height: hovering ? 6 : 8,
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          transition: "width 0.2s, height 0.2s, opacity 0.2s",
        }}
      />
      {/* Ring — spring-driven */}
      <motion.div
        aria-hidden
        className="fixed pointer-events-none z-100 rounded-full border"
        style={{
          width: hovering ? 52 : 36,
          height: hovering ? 52 : 36,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: hovering ? "var(--color-accent)" : "rgba(242,237,228,0.35)",
          opacity: visible ? 1 : 0,
          transition: "width 0.25s, height 0.25s, border-color 0.25s, opacity 0.2s",
        }}
      />
    </>
  );
}
