export const personalInfo = {
  name: "Arfan Safut Pranoto",
  handle: "ARFAN // v2.077",
  title: "Mobile Web Developer & UI/UX Architect",
  roles: [
    "Mobile Web Developer",
    "UI/UX Architect",
    "Cloud & AI Systems Integrator",
    "Frontend Specialist (React / Next.js)"
  ],
  bio: `Passionate Developer operating at the intersection of modern Web Frameworks, Futuristic UI/UX Design, and High-Performance Backend Systems. Obsessed with clean architecture, micro-animations, and building dark cybernetic digital experiences that leave a lasting impression.`,
  terminalBio: {
    system: "CYBERNETIC_OS v2.077",
    user: "arfan@cyber-core",
    status: "ONLINE // READY_FOR_DEPLOYMENT",
    location: "Trenggalek, Indonesia [UTC+7]",
    coreFocus: ["React/Next.js Architecture", "Tailwind Design Systems", "Node.js & Microservices", "Generative AI Integration"],
    clearance: "LEVEL_5_DEVELOPER",
    stats: {
      experienceYears: 1,
      projectsCompleted: 15,
      commitsThisYear: 123,
      caffeineEfficiency: "74.8%"
    }
  },
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "usabar304@gmail.com",
    discord: "arfan_cyber#0001",
    telegram: "https://t.me/arfan_cyber"
  }
};

export const techStackData = [
  {
    category: "Frontend Core",
    icon: "SiReact",
    color: "#00fff2", // neon cyan
    skills: [
      { name: "React 19", level: 95, icon: "SiReact", desc: "Hooks, Fiber, Server Components, Custom Hooks" },
      { name: "JavaScript / TypeScript", level: 92, icon: "SiTypescript", desc: "ESNext, Async/Await, Strict Types, Generics" },
      { name: "Next.js", level: 88, icon: "SiNextdotjs", desc: "App Router, SSR, ISR, Edge API Routes" },
      { name: "Tailwind CSS", level: 96, icon: "SiTailwindcss", desc: "Custom themes, Design Tokens, Glow FX, Utilities" },
      { name: "Framer Motion", level: 90, icon: "SiFramer", desc: "Scroll animations, Layout transitions, Gesture control" },
      { name: "HTML5 & CSS3", level: 98, icon: "SiHtml5", desc: "Semantic tags, Grid, Flexbox, Canvas & SVG Animation" }
    ]
  },
  {
    category: "Backend & Cloud",
    icon: "SiNodejs",
    color: "#ff00e5", // neon magenta
    skills: [
      { name: "Node.js & Express", level: 90, icon: "SiNodedotjs", desc: "RESTful APIs, Middleware, WebSockets, JWT Auth" },
      { name: "Python & Fast API", level: 85, icon: "SiPython", desc: "Async microservices, Data parsing, AI script integration" },
      { name: "PostgreSQL & Prisma", level: 86, icon: "SiPostgresql", desc: "Relational schemas, ORM modeling, Query optimization" },
      { name: "MongoDB & Redis", level: 84, icon: "SiMongodb", desc: "NoSQL document store, Caching, Session store" },
      { name: "Docker & CI/CD", level: 80, icon: "SiDocker", desc: "Containerization, GitHub Actions, Automated deployments" }
    ]
  },
  {
    category: "Tools & Ecosystem",
    icon: "SiGit",
    color: "#9d00ff", // electric purple
    skills: [
      { name: "Git & GitHub", level: 94, icon: "SiGithub", desc: "Branching strategies, PR reviews, Actions automation" },
      { name: "Vite & Webpack", level: 92, icon: "SiVite", desc: "HMR, Build optimization, Bundling strategies" },
      { name: "Figma to Code", level: 90, icon: "SiFigma", desc: "Design systems, UI prototyping, Component specs" },
      { name: "Postman & Insomnia", level: 95, icon: "SiPostman", desc: "API testing, Mock servers, Automated collections" },
      { name: "VS Code / Cursor", level: 98, icon: "FiCode", desc: "Custom cyber themes, Keybindings, Copilot workflows" }
    ]
  }
];

export const projectsData = [
  {
    id: "proj-1",
    title: "SAVORA // Goals & Savings Tracker",
    category: "Web App",
    badge: "FEATURED SYSTEM",
    description: "Modern financial savings & goal tracking platform with interactive progress indicators, target analytics, and multi-currency management.",
    longDescription: "Savora delivers a sleek dark UI experience for tracking savings goals, calculating overall financial progress, and organizing target milestones. Built with React, Tailwind CSS, and Framer Motion.",
    image: "/savora.png",
    color: "#00fff2",
    tags: ["React 19", "Tailwind CSS", "Savings Tracker", "Analytics", "Framer Motion"],
    demoUrl: "https://goal-tracker-two-jade.vercel.app/",
    githubUrl: "https://github.com/example/savora-savings",
    stats: { stars: 142, forks: 38, systemStatus: "99.9% Uptime" }
  },
  {
    id: "proj-2",
    title: "WORKSYNC // Enterprise Task Board",
    category: "Fullstack",
    badge: "ENTERPRISE",
    description: "Enterprise daily task & activity management suite featuring interactive Kanban boards, workload telemetry, and real-time team productivity analytics.",
    longDescription: "WorkSync Enterprise streamlines daily agile task workflows, status tracking (To Do, In Progress, In Review, Done), and team collaboration for modern engineering teams. Built with React, Tailwind CSS, and TypeScript.",
    image: "/worksync.png",
    color: "#ff00e5",
    tags: ["TypeScript", "React 19", "Kanban Board", "Tailwind CSS", "Enterprise"],
    demoUrl: "https://worksync-enterprise.vercel.app/",
    githubUrl: "https://github.com/example/worksync-enterprise",
    stats: { stars: 198, forks: 42, systemStatus: "LIVE SYSTEM" }
  },
  {
    id: "proj-3",
    title: "VEKTOR // Corporate Fleet & Asset Protection",
    category: "B2B Platform",
    badge: "B2B ENTERPRISE",
    description: "B2B corporate fleet & asset insurance management portal equipped with instant premium calculators, RFP proposal builders, and centralized policy control.",
    longDescription: "Vektor Protection is a comprehensive B2B insurance portal tailored for fleet managers and corporate admins to manage commercial vehicle risk, calculate coverage premiums instantly, and handle corporate asset policies.",
    image: "/vektor.png",
    color: "#39ff14",
    tags: ["React", "Tailwind CSS", "B2B Insurance", "Fleet Telemetry", "Calculator"],
    demoUrl: "https://vektor-protection.vercel.app/",
    githubUrl: "https://github.com/example/vektor-protection",
    stats: { stars: 215, forks: 45, systemStatus: "ACTIVE PORTAL" }
  },
];

export const experienceData = [
  {
    period: "2023 - 2024",
    role: "Mobile Web Developer (Internship)",
    company: "Government Institution",
    location: "Trenggalek, Indonesia",
    description: "Designed, developed, and deployed web & mobile attendance services for government staff, incorporating real-time GPS tracking, photo verification, and automated leave submission workflows.",
    achievements: [
      "Engineered daily attendance system featuring real-time GPS geolocation and camera photo capture validation",
      "Developed integrated digital employee leave request module, replacing manual paper-based approval processes",
      "Significantly enhanced administrative operational efficiency and attendance monitoring accuracy for government staff"
    ],
    skills: ["Mobile Web", "GPS Geolocation", "Camera API", "JavaScript", "RESTful API", "UI/UX Design"]
  }
];

export const terminalCommandsHelp = [
  { cmd: "help", desc: "Display available system commands" },
  { cmd: "about", desc: "Print executive developer overview" },
  { cmd: "skills", desc: "List core technical proficiencies" },
  { cmd: "projects", desc: "Display list of active systems / projects" },
  { cmd: "clear", desc: "Clear terminal buffer" },
  { cmd: "contact", desc: "Trigger direct transmission form" },
  { cmd: "sudo hire", desc: "Initiate priority recruitment sequence" }
];
