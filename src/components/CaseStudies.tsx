import { caseStudies } from "../data/content";
import Section from "./Section";
import { Counter, Parallax, Reveal } from "./motion";

export default function CaseStudies() {
  return (
    <Section id="work" number="02" kicker="Selected work" title="Case studies">
      <div className="space-y-24 sm:space-y-32">
        {caseStudies.map((study) => (
          <article key={study.id} className="border-t border-border pt-12 sm:pt-16">
            {/* Study header */}
            <Reveal>
              <div className="mb-10 sm:mb-12">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted mb-4">
                  {study.index} / {study.year}
                </p>
                <h3
                  className="font-display font-[400] leading-[1.05] text-foreground mb-3"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
                >
                  {study.name}
                </h3>
                <p className="text-lg text-muted">{study.tagline}</p>
              </div>
            </Reveal>

            {/* Two-column layout: sticky sidebar + narrative */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
              {/* Sidebar */}
              <aside className="lg:col-span-3 self-start lg:sticky lg:top-28 mb-10 lg:mb-0">
                <Reveal>
                  <dl className="space-y-5">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint mb-1">
                        Role
                      </dt>
                      <dd className="text-sm text-muted leading-relaxed">{study.role}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint mb-1">
                        Stack
                      </dt>
                      <dd className="text-sm text-muted leading-relaxed">
                        {study.stack.join(", ")}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint mb-1">
                        Year
                      </dt>
                      <dd className="text-sm text-muted">{study.year}</dd>
                    </div>
                    {study.link && (
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint mb-1">
                          Link
                        </dt>
                        <dd>
                          <a
                            href={study.link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-accent-soft hover:text-accent transition-colors duration-200 font-mono"
                          >
                            {study.link.label} ↗
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </Reveal>
              </aside>

              {/* Narrative */}
              <div className="lg:col-span-8 lg:col-start-5 space-y-10">
                {/* Problem */}
                <Reveal delay={0.05}>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint mb-4">
                      The problem
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed text-muted">
                      {study.problem}
                    </p>
                  </div>
                </Reveal>

                {/* Build */}
                <Reveal delay={0.1}>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint mb-4">
                      The build
                    </p>
                    <ul className="space-y-0">
                      {study.build.map((item, i) => (
                        <li
                          key={i}
                          className={`py-4 text-sm sm:text-base leading-relaxed text-muted ${
                            i > 0 ? "border-t border-border" : ""
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                {/* Metrics */}
                <Parallax range={16}>
                  <div className="grid grid-cols-3 gap-4 py-8 border-t border-b border-border">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-center sm:text-left">
                        <p
                          className="font-display font-[300] text-accent tabular-nums leading-none mb-2"
                          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                        >
                          <Counter target={metric.value} suffix={metric.suffix ?? ""} />
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-faint leading-relaxed">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Parallax>

                {/* Outcome */}
                <Reveal delay={0.15}>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint mb-4">
                      The outcome
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed text-muted">
                      {study.outcome}
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
