import { education, profile } from "../data/content";
import Section from "./Section";
import { Reveal } from "./motion";

export default function About() {
  return (
    <Section id="about" number="01" kicker="About" title="Building software that holds up.">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        {/* Lead paragraph — pushed right on large screens */}
        <div className="lg:col-span-8 lg:col-start-5">
          <Reveal>
            <p
              className="text-xl sm:text-2xl text-foreground leading-relaxed mb-8"
            >
              I'm a Computer Science student at FAST NUCES with hands-on experience shipping
              production software for real clients — from a clinic management platform used
              daily by doctors and staff, to disaster-recovery infrastructure on AWS that
              proves every backup can actually be restored.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base text-muted leading-relaxed mb-6">
              My core stack is React Native, Flutter, TypeScript, Go, and
              Supabase / PostgreSQL, with a strong focus on secure, role-based
              systems: Row-Level Security, JWT / RBAC, and encrypted data paths
              are standard in everything I ship.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-base text-muted leading-relaxed mb-10">
              Outside of code, I lead photography for campus tech communities like GDGOC and
              MLSA — which taught me how to work under deadline pressure and communicate with
              real stakeholders. Both crafts share the same instinct: get the fundamentals right,
              then care about the details.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              {education.degree} · {education.school} · {profile.availability}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
