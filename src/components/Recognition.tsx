import { honors, volunteer } from "../data/content";
import Section from "./Section";
import { Reveal } from "./motion";

export default function Recognition() {
  const all = [
    ...honors.map((h) => ({ ...h, type: "honor" as const })),
    ...volunteer.map((v) => ({ ...v, type: "volunteer" as const })),
  ];

  return (
    <Section id="recognition" number="06" kicker="Recognition" title="Awards & community">
      <div>
        {all.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.05}>
            <div className="grid grid-cols-12 gap-x-6 py-8 border-t border-border last:border-b">
              {/* Left: org + year */}
              <div className="col-span-12 sm:col-span-3 mb-3 sm:mb-0">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-faint leading-relaxed">
                  {entry.org}
                </p>
                <p className="font-mono text-xs text-faint/60 mt-1">{entry.year}</p>
              </div>

              {/* Right: title + detail */}
              <div className="col-span-12 sm:col-span-9">
                <h3 className="text-base font-medium text-foreground mb-2">{entry.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{entry.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
