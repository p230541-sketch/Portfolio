import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import portrait from "../assets/potrait.jpeg";
import { profile } from "../data/content";
import { EASE_OUT, LineReveal } from "./motion";

function FadeIn({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 800], [0, 80]);

  return (
    <section id="top" className="relative min-h-dvh grid content-center overflow-hidden">

      {/* ── Portrait layer ─────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[55%] pointer-events-none overflow-hidden"
      >
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: EASE_OUT }}
          style={prefersReducedMotion ? {} : { y: imgY }}
        >
          <img
            src={portrait}
            alt=""
            decoding="async"
            className="h-full w-full object-cover object-[60%_15%]
                       brightness-[.45] grayscale sepia-[.35] contrast-110
                       lg:brightness-[.55]"
          />
        </motion.div>

        {/* Left-to-right fade - makes left half near-solid background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
        {/* Bottom fade - photo dissolves into next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {/* Mobile flat tint - extra safety for text contrast */}
        <div className="absolute inset-0 bg-background/45 lg:bg-transparent" />
      </div>

      {/* ── Brass safelight glow (above photo, below content) ──────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_40%,rgba(201,145,62,0.06),transparent)] z-[1]"
      />

      {/* ── Hero content ───────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 pt-20 pb-24">

        {/* Kicker */}
        <FadeIn delay={0.2} className="mb-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {profile.name} / {profile.role}
          </p>
        </FadeIn>

        {/* Headline */}
        <h1
          className="font-display font-[400] leading-[1.02] tracking-[-0.015em] text-foreground mb-8"
          style={{ fontSize: "clamp(3.25rem, 9vw, 7rem)" }}
        >
          <LineReveal lines={profile.headline} baseDelay={0.35} />
        </h1>

        {/* Hero paragraph */}
        <FadeIn delay={0.75} className="mb-6 max-w-xl">
          <p className="text-lg leading-relaxed text-muted">
            {profile.heroLine}
          </p>
        </FadeIn>

        {/* Metadata row */}
        <FadeIn delay={0.85} className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
            Peshawar, PK
            <span className="mx-3 opacity-40">·</span>
            {profile.availability}
            <span className="mx-3 opacity-40">·</span>
            FAST NUCES '27
          </p>
        </FadeIn>

        {/* CTA row */}
        <FadeIn delay={0.9} className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 text-foreground text-lg font-medium border-b border-foreground/30 pb-0.5 hover:text-accent hover:border-accent transition-colors duration-300"
          >
            {profile.email}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>

          <a
            href="#work"
            className="font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors duration-200"
          >
            Selected work ↓
          </a>

          <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-[0.12em]">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-muted hover:text-foreground transition-colors duration-200"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted hover:text-foreground transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll hint */}
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="absolute bottom-8 left-8 sm:left-10 flex flex-col items-center gap-2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ delay: 1.4, duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-12 w-px bg-muted" />
        </motion.div>
      )}
    </section>
  );
}
