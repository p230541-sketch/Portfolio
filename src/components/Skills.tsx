import { skillGroups } from "../data/content";
import Section from "./Section";
import { Reveal } from "./motion";

export default function Skills() {
  return (
    <Section id="skills" number="05" kicker="Stack" title="Tools I work with">
      <div>
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="grid grid-cols-12 gap-x-6 py-6 border-t border-border last:border-b">
              {/* Label */}
              <div className="col-span-12 sm:col-span-3 mb-2 sm:mb-0">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-faint">
                  {group.label}
                </p>
              </div>
              {/* Items as running text */}
              <div className="col-span-12 sm:col-span-9">
                <p className="text-sm text-muted leading-loose">
                  {group.items.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
