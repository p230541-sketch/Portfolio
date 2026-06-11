import { experience } from "../data/content";
import Section from "./Section";
import { Reveal } from "./motion";

export default function ExperienceSection() {
  return (
    <Section id="experience" number="04" kicker="Experience" title="Where I've worked">
      <div>
        {experience.map((job, i) => (
          <Reveal key={job.title + job.org} delay={i * 0.05}>
            <div className="grid grid-cols-12 gap-x-6 py-8 border-t border-border last:border-b">
              {/* Left: period */}
              <div className="col-span-12 sm:col-span-3 mb-3 sm:mb-0">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-faint">
                  {job.period}
                </p>
              </div>

              {/* Right: content */}
              <div className="col-span-12 sm:col-span-9">
                <h3 className="text-lg font-medium text-foreground mb-1">{job.title}</h3>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-4">
                  {job.org}
                </p>
                <ul className="space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="text-sm leading-relaxed text-muted">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
