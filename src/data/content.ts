export const profile = {
  name: "Muhammad Haseeb Afridi",
  shortName: "Haseeb Afridi",
  role: "Full-Stack Developer",
  availability: "Open to freelance & internships",
  headline: ["Building software", "that holds up."],
  heroLine:
    "Full-stack engineer and event photographer — shipping production systems from Peshawar, and photographing the moments around them.",
  tagline:
    "I build production mobile apps, cross-platform applications, and distributed cloud systems — turning real-world problems into reliable, production-ready software.",
  email: "haseebafridi956@gmail.com",
  phone: "+92 317 9911365",
  location: "Peshawar, Pakistan",
  github: "https://github.com/p230541-sketch",
  linkedin: "https://www.linkedin.com/in/haseeb-afridi-306487332/",
};

export const education = {
  degree: "BS Computer Science",
  school: "FAST NUCES, Peshawar",
  graduation: "Expected July 2027",
  courses: [
    "Data Structures & Algorithms",
    "Database Systems",
    "Artificial Intelligence",
    "Compiler Construction",
    "Software Engineering",
    "Object-Oriented Programming",
  ],
};

export interface Experience {
  title: string;
  org: string;
  period: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    title: "Freelance Full-Stack Developer",
    org: "Noor Dentofacial Clinic, Peshawar",
    period: "May 2026 – Present",
    highlights: [
      "Staff-only Clinic Management app (Admin / Doctor / Receptionist) in React Native + TypeScript, deployed to production for daily operations.",
      "Role-based access for 10+ staff via Supabase Row-Level Security and encrypted JWT — zero unauthorized data-access incidents since launch.",
    ],
  },
  {
    title: "Official Event Photographer (Contract)",
    org: "FAST-NUCES CS Department, Peshawar",
    period: "Dec 2025 – Present",
    highlights: [
      "Official media coverage for major university events including the 87th Convocation; PR assets reached thousands of alumni and students.",
    ],
  },
  {
    title: "Lead Photographer",
    org: "FAST Campus Societies & Tech Communities",
    period: "May 2024 – Present",
    highlights: [
      "Directed media strategy for GDGOC and MLSA, increasing social engagement by 40% across high-stakes events including the ICPC.",
      "Delivered 500+ edited photos within 48 hours for the Batch 22 Farewell Event (500+ attendees).",
    ],
  },
];

export interface Metric {
  value: number;
  suffix?: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  index: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  link?: { label: string; href: string };
  problem: string;
  build: string[];
  outcome: string;
  metrics: Metric[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "restora",
    index: "01",
    name: "Restora",
    tagline: "Distributed disaster-recovery platform",
    year: "2025",
    role: "Design · Engineering · Infrastructure",
    stack: ["Go", "TypeScript", "AWS", "Terraform", "PostgreSQL", "React"],
    link: { label: "View on GitHub", href: "https://github.com/p230541-sketch/restora" },
    problem:
      "Most teams back up their databases and hope the backups work. Restora was built to prove they do — by automatically restoring every backup into an ephemeral Postgres instance and verifying the data against a content hash. A backup that has never been restored is not a backup; it's a guess.",
    build: [
      "Go edge daemon compresses each pg_dump ~77% with gzip, then encrypts with AES-256-GCM before upload — storage holds ciphertext only, never plaintext.",
      "Event-driven pipeline: S3 event → SQS → Node.js validator spins up an ephemeral Postgres, restores the dump, and catches even a single changed row via content-hash diffing.",
      "httpOnly-cookie JWT auth, CSRF protection, full RBAC, and automatic key rotation through AWS Secrets Manager; SES alerts on every failed verification.",
      "React 18 operations dashboard with live status, audit trail, and per-backup restore history.",
      "Terraform + Docker Compose infrastructure; 26 passing tests in GitHub Actions CI across the full backup-restore-verify cycle.",
    ],
    outcome:
      "A running system where every backup is a verified promise. The 26-test CI suite means no code ships without proving the restore works end-to-end — the kind of reliability signal that matters when someone's production database is gone.",
    metrics: [
      { value: 77, suffix: "%", label: "average dump compression" },
      { value: 26, label: "tests passing in CI" },
      { value: 256, suffix: "-bit", label: "AES-GCM encryption at rest" },
    ],
  },
  {
    id: "clinic",
    index: "02",
    name: "Clinic OS",
    tagline: "Staff-only clinic management mobile app",
    year: "2026 — Present",
    role: "Design · Mobile Engineering · Backend",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
    problem:
      "A busy Peshawar dental clinic was running daily operations — appointments, patient records, billing, and prescriptions — across paper logs and disconnected spreadsheets. The staff of 10+ had no unified system, no audit trail, and no way to see the queue without walking to the front desk.",
    build: [
      "Three-role mobile app (Admin / Doctor / Receptionist) built with React Native (Expo) and TypeScript, deployed to production for daily operations.",
      "Supabase PostgreSQL backend with Row-Level Security enforcing role boundaries at the database level — each staff member can only read and write what their role permits.",
      "Interactive tooth-chart EMR, prescription builder with branded PDF export, and scoped earnings dashboards with 7-day charts.",
      "Appointment slot holds and check-in queue numbers that cut the guesswork; billing and payment recording in the same workflow.",
      "Release-ready polish: biometric unlock, English/Urdu i18n with RTL layout, push notifications, and offline-first caching via TanStack Query.",
    ],
    outcome:
      "A clinic that now runs without the paper. Ten-plus staff members use the app daily; patient flow efficiency improved 30% through the queue system; and zero unauthorized data-access incidents since launch — enforced at the database level, not just the UI.",
    metrics: [
      { value: 30, suffix: "%", label: "patient-flow efficiency gain" },
      { value: 10, suffix: "+", label: "staff using it daily" },
      { value: 0, label: "unauthorized data-access incidents" },
    ],
  },
];

export interface Project {
  name: string;
  category: string;
  year: string;
  tech: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    name: "Fake Screenshot Detection",
    category: "AI / Computer Vision",
    year: "2025",
    tech: ["Python", "NumPy", "OpenCV", "Streamlit"],
    link: "https://github.com/p230541-sketch/fake-ai-receipt-detector",
  },
  {
    name: "HS Player",
    category: "Cross-Platform · Flutter",
    year: "2024",
    tech: ["Flutter", "Dart", "Supabase"],
    link: "https://github.com/p230541-sketch/hs-player",
  },
  {
    name: "Blog Management System",
    category: "Backend · PHP",
    year: "2024",
    tech: ["PHP", "MySQL"],
    link: "https://github.com/p230541-sketch/blog-management-system",
  },
  {
    name: "dotsOCR",
    category: "Computer Vision · Python",
    year: "2024",
    tech: ["Python", "Computer Vision"],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "Dart", "PHP", "SQL", "C++", "C", "HTML/CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React.js", "React Native (Expo)", "Node.js", "Express", "Flutter", "Supabase", "Streamlit", "NumPy", "OpenCV", "TanStack Query"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS (S3, SQS, Lambda, Secrets Manager, SES)", "Docker", "Terraform", "GitHub Actions", "Git", "Linux"],
  },
  {
    label: "Databases & Security",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Row-Level Security", "REST APIs", "JWT / RBAC", "3NF Database Design"],
  },
];

export const honors = [
  {
    title: "Farewell'26 Excellence Award",
    org: "FAST-NUCES, Peshawar",
    year: "2026",
    detail:
      "Awarded by the Campus Director as Director Photography in recognition of unwavering commitment, exceptional leadership, and distinguished contributions to Farewell'26.",
  },
];

export const volunteer = [
  {
    title: "Organizer — FAST Problem Solving Challenge",
    org: "FAST-NUCES Peshawar",
    year: "Fall 2025",
    detail:
      "Certificate of Appreciation from the Campus Director and ACM Faculty Head for organizing the competitive programming challenge.",
  },
  {
    title: "Organizer — Blood Campaign",
    org: "Shaukat Khanum Memorial Cancer Hospital",
    year: "2024",
    detail:
      "Certificate of Appreciation for organizing the blood donation campaign with Pakistan's leading cancer hospital.",
  },
];
