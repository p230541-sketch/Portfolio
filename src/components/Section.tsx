import type { ReactNode } from "react";
import { Reveal } from "./motion";

interface SectionProps {
  id: string;
  number: string;
  kicker: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, number, kicker, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-6 mb-12 sm:mb-16">
            {/* Oversized section numeral */}
            <div className="hidden lg:block lg:col-span-2" aria-hidden>
              <span
                className="font-display font-[300] text-faint/60 leading-none select-none"
                style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
              >
                {number}
              </span>
            </div>
            {/* Kicker + title */}
            <div className="lg:col-span-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted mb-3">
                {kicker}
              </p>
              <h2
                className="font-display font-[450] leading-[1.05] text-foreground"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}
              >
                {title}
              </h2>
            </div>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
