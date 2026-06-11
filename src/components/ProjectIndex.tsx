import { motion } from "framer-motion";
import { projects } from "../data/content";
import Section from "./Section";
import { useStaggerVariants } from "./motion";

export default function ProjectIndex() {
  const { container, item } = useStaggerVariants();

  return (
    <Section id="index" number="03" kicker="Other work" title="Project index">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, i) => {
          const isLast = i === projects.length - 1;
          const Row = project.link ? motion.a : motion.div;
          const rowProps = project.link
            ? {
                href: project.link,
                target: "_blank" as const,
                rel: "noreferrer",
              }
            : {};

          return (
            <Row
              key={project.name}
              {...rowProps}
              variants={item}
              className={`group grid grid-cols-12 items-baseline py-5 border-t border-border ${
                isLast ? "border-b" : ""
              } ${project.link ? "cursor-pointer" : ""}`}
            >
              {/* № */}
              <span className="col-span-1 font-mono text-xs text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Name */}
              <span
                className={`col-span-7 sm:col-span-6 font-display font-[400] leading-snug text-foreground transition-all duration-300 ${
                  project.link ? "group-hover:translate-x-1 group-hover:text-accent" : ""
                }`}
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
              >
                {project.name}
              </span>

              {/* Category */}
              <span className="hidden md:block col-span-3 font-mono text-xs text-muted">
                {project.category}
              </span>

              {/* Year */}
              <span className="col-span-3 sm:col-span-1 font-mono text-xs text-faint text-right sm:text-left">
                {project.year}
              </span>

              {/* Arrow */}
              {project.link && (
                <span
                  className="hidden sm:block col-span-1 font-mono text-sm text-muted text-right transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                >
                  ↗
                </span>
              )}
            </Row>
          );
        })}
      </motion.div>
    </Section>
  );
}
