import { profile } from "../data/content";
import { Reveal } from "./motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
        <Reveal>
          {/* Section header */}
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted mb-3">
              07 — Contact
            </p>
            <p className="text-lg text-muted">Have something in mind?</p>
          </div>

          {/* Giant email link */}
          <div className="mb-16">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-block font-display font-[400] leading-[1.1] text-foreground break-words border-b border-foreground/20 pb-1 hover:text-accent hover:border-accent transition-colors duration-300"
              style={{ fontSize: "clamp(1.35rem, 4.5vw, 4rem)" }}
            >
              {profile.email}
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>

          {/* Metadata columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint mb-2">
                Phone
              </p>
              <a
                href={`tel:${profile.phone}`}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {profile.phone}
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint mb-2">
                Location
              </p>
              <p className="text-sm text-muted">{profile.location}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint mb-2">
                GitHub
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                p230541-sketch ↗
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint mb-2">
                LinkedIn
              </p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                haseeb-afridi-306487332 ↗
              </a>
            </div>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-xs text-faint">
            © {year} {profile.shortName}
          </p>
          <p className="font-mono text-xs text-faint">
            Built with React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
