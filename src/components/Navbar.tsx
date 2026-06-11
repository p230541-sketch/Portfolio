import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/content";
import { EASE_OUT, useHideOnScroll } from "./motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#index", label: "Index" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const hidden = useHideOnScroll(96);

  return (
    <motion.header
      initial={{ y: prefersReducedMotion ? 0 : -64, opacity: 0 }}
      animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: EASE_OUT }}
      className="fixed top-0 inset-x-0 z-40 border-b border-border bg-background/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        {/* Logo */}
        <a href="#top" className="font-mono text-sm font-medium text-foreground">
          <span className="text-accent-soft">~/</span>haseeb
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-xs uppercase tracking-[0.12em] text-accent-soft hover:text-accent transition-colors duration-200"
            >
              Email ↗
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center text-foreground md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden bg-background md:hidden"
          >
            {links.map((l, i) => (
              <li key={l.href} className={i > 0 ? "border-t border-border" : ""}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-muted transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="border-t border-border">
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-accent-soft hover:text-accent transition-colors"
              >
                Email ↗
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
