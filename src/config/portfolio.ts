export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
};

export type Project = {
  title: string;
  category: "Frontend" | "Full Stack" | "Desktop";
  summary: string;
  tech: string[];
  live?: string;
  repo?: string;
};

export const portfolioConfig = {
  profile: {
    name: "Akash Agarwal",
    title: "Software Engineer | Frontend Specialist",
    location: "India",
    intro:
      "Frontend-focused software engineer with 5+ years of experience building responsive, high-performance products using React and Next.js.",
    focusAreas: [
      "Scalable UI architecture",
      "Performance optimization",
      "Design-system driven development",
    ],
    resumeUrl: "https://drive.google.com/file/d/1KP8GFw-dhfPwWRe7hxtCHXH-KeZU7nFb/view?usp=sharing",
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/akashag55" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/akash-agarwal-2a2297150/" },
    { label: "Medium", href: "https://medium.com/@akashag55" },
    { label: "Email", href: "mailto:agarwalakash551999@gmail.com" },
  ] as SocialLink[],
  metrics: [
    { label: "Experience", value: "5+ Years" },
    { label: "Frontend Stack", value: "React / Next.js / TS" },
    { label: "Delivery Style", value: "Reusable, Performant, Product-first" },
  ],
  skillGroups: [
    {
      title: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Mantine UI"],
    },
    { title: "Backend", items: ["Node.js", "Express.js", "Prisma"] },
    { title: "Data", items: ["MongoDB", "MySQL", "PostgreSQL"] },
    { title: "Workflow", items: ["Git", "GitHub", "Jira", "Postman", "Swagger", "Figma"] },
  ],
  experience: [
    {
      company: "PaveSoft Technologies",
      role: "Senior Software Engineer",
      start: "Apr 2024",
      end: "Present",
      highlights: [
        "Led multiple frontend projects using React.js, Next.js, and Tailwind CSS.",
        "Built a full-featured food delivery product with onboarding, cart, and payment flows.",
        "Improved desktop proctoring app performance with 30% faster render and 20% lower memory usage.",
        "Created reusable components and hooks to improve consistency and speed of delivery.",
      ],
    },
    {
      company: "RevDau Industries Pvt. Ltd.",
      role: "Software Engineer",
      start: "Feb 2023",
      end: "Mar 2024",
      highlights: [
        "Developed a CMS with backend integration using Node.js, Prisma, and PostgreSQL.",
        "Designed responsive interfaces with React.js, Mantine UI, and Figma.",
        "Built dashboard-heavy network management features with API integration.",
      ],
    },
    {
      company: "Celebal Technologies Pvt. Ltd.",
      role: "Associate Frontend Developer",
      start: "Mar 2021",
      end: "Nov 2022",
      highlights: [
        "Contributed to ACS-based communication features in collaboration with R&D teams.",
        "Supported HRMS development for large user scale with focus on stability and performance.",
        "Worked in Agile sprint cycles with continuous client feedback integration.",
      ],
    },
  ] as Experience[],
  projects: [
    {
      title: "Expense Tracker",
      category: "Full Stack",
      summary: "Expense tracking with categorized entries and financial visibility dashboards.",
      tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Dynamic Form Builder",
      category: "Frontend",
      summary: "Schema-driven form builder with real-time preview and dynamic field behavior.",
      tech: ["Next.js", "TypeScript", "MySQL"],
    },
    {
      title: "Prime Focus",
      category: "Desktop",
      summary: "Pomodoro desktop app with customizable themes and focus-break planning.",
      tech: ["Electron", "Next.js", "Mantine UI"],
    },
    {
      title: "CV Advisor",
      category: "Frontend",
      summary: "Real-time CV feedback platform to improve job application quality.",
      tech: ["Next.js", "TypeScript", "OpenAI API"],
      repo: "https://github.com/akashag55/cv-compass-ai-advisor",
      live: "https://ai-resumemate.vercel.app/",
    },
    {
      title: "Brick Breaker",
      category: "Frontend",
      summary: "Arcade game with collision logic, level pacing, and smooth keyboard controls.",
      tech: ["Next.js", "TypeScript"],
      repo: "https://github.com/akashag55/brick-breaker",
      live: "https://brick-breaker-aa1a.vercel.app/",
    },
  ] as Project[],
} as const;
