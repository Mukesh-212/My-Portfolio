/**
 * ============================================================
 *  PORTFOLIO DATA — SINGLE SOURCE OF TRUTH
 *  Source: portfolio-content.md
 * ============================================================
 *
 *  To add a project:
 *    Add an object to the `projects` array below.
 *
 *  To add a certification:
 *    Add an object to the `certifications` array below.
 *
 *  To add experience:
 *    Add an object to the `experience` array below.
 *
 *  No component changes needed — the UI adapts automatically.
 * ============================================================
 */

import type {
  PersonalInfo,
  Education,
  SkillGroup,
  ExploringArea,
  Project,
  Experience,
  Certification,
} from "@/types";

// ─── Personal Info ───────────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: "Mukesh S",
  role: "Computer Science Engineering Student",
  tagline:
    "Exploring Artificial Intelligence, Data Analytics & Software Development.",
  email: "mukeshyelagiri80@gmail.com",
  github: "https://github.com/Mukesh-212",
  linkedin: "https://www.linkedin.com/in/mukesh-s-505b263a",
};

// ─── About ───────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I am a Computer Science Engineering student with a growing interest in Artificial Intelligence, Data Analytics, and software development. I enjoy learning how technology can be used to solve practical problems and turn ideas into useful applications.",
    "My current technical journey includes Python, C, HTML, CSS, and Streamlit, while I continue to explore areas such as artificial intelligence, data analysis, and modern software development.",
    "I am particularly interested in building AI-powered applications, working with data, and developing practical software solutions. I believe in learning by building projects, experimenting with new technologies, and continuously improving my technical skills.",
    "As I progress through my Computer Science Engineering degree, my goal is to develop strong foundations in programming, artificial intelligence, data analytics, and software engineering — and eventually contribute to meaningful technology projects.",
  ],
  careerGoal:
    "My goal is to build a strong career in technology by combining my Computer Science Engineering foundation with Artificial Intelligence, Data Analytics, and software development.",
  careerInterests: ["AI Engineer", "Data Analyst", "Software Engineer", "Python Developer"],
};

// ─── Education ───────────────────────────────────────────────
export const education: Education[] = [
  {
    degree: "Bachelor of Engineering — Computer Science and Engineering",
    institution: "KGiSL Institute of Technology",
    duration: "2025 – 2029",
    status: "Currently Pursuing",
  },
];

// ─── Skills ──────────────────────────────────────────────────
// Only skills explicitly listed under the Skills section.
// Areas of interest are listed separately under `exploring`.
export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "C"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["Streamlit"],
  },
];

// ─── Current Learning ────────────────────────────────────────
export const currentLearning: string[] = [
  "Python",
  "C Programming",
  "Web Development",
  "Data Analytics",
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI",
  "Software Development",
];

// ─── Areas I'm Exploring ─────────────────────────────────────
// Presented as learning interests, not claimed skills.
export const exploring: ExploringArea[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Developing an understanding of intelligent systems, machine learning, and AI-powered applications.",
    topics: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "AI-powered Applications",
      "Large Language Models",
      "Intelligent Automation",
    ],
  },
  {
    title: "Data Analytics",
    description:
      "Learning to work with data — from collection and cleaning to analysis and visualisation.",
    topics: [
      "Data Cleaning",
      "Data Analysis",
      "Data Visualization",
      "Exploratory Data Analysis",
      "Python for Data Analytics",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Excel",
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────
// Currently empty — add projects here when ready.
// The UI will automatically switch from empty state to cards.
export const projects: Project[] = [
  // Example (uncomment and fill in when you have a project):
  // {
  //   title: "My First AI App",
  //   description: "A brief description of what the project does.",
  //   technologies: ["Python", "Streamlit"],
  //   github: "https://github.com/Mukesh-212/...",
  //   liveDemo: "https://...",
  // },
];

// ─── Experience ──────────────────────────────────────────────
// Currently empty — add experience here when ready.
export const experience: Experience[] = [
  // Example:
  // {
  //   organization: "Company Name",
  //   role: "Role Title",
  //   duration: "Month Year – Month Year",
  //   description: "What you did in this role.",
  // },
];

// ─── Certifications ──────────────────────────────────────────
// Currently empty — add certifications here when ready.
export const certifications: Certification[] = [
  // Example:
  // {
  //   name: "Certificate Name",
  //   organization: "Issuing Organization",
  //   year: "2025",
  //   credential: "https://credential-link.com",
  // },
];
