export interface TimelineItem {
    company: string;
    role: string;
    duration: string;
    responsibilities: string[];
    achievements: string[];
}

export interface SkillItem {
    name: string;
    category: "Core" | "Tooling" | "Craft";
}

export interface PhilosophyItem {
    title: string;
    description: string;
}

export interface AIWorkflowItem {
    step: string;
    description: string;
}

export const aboutHero = {
    eyebrow: "About Me",
    heading: "Frontend Developer crafting fast, accessible interfaces.",
    description:
        "I'm Tushar Parmar, a Frontend Developer with 1+ year of experience building production-grade web applications using React, Next.js, and TypeScript. I focus on performance, accessibility, and clean architecture.",
    badge: "1+ Year Experience",
    imageSrc: "/images/tushar-parmar.jpg",
    imageAlt: "Tushar Parmar, Frontend Developer",
};

export const myStory = {
    heading: "My Journey",
    paragraphs: [
        "My journey into frontend development began with curiosity about how interactive websites are built. That curiosity turned into a deep focus on React and the JavaScript ecosystem.",
        "I learned through hands-on projects, official documentation, and consistent practice — building real applications rather than just following tutorials. This approach helped me understand not just how things work, but why they work.",
        "Today, I work as a Frontend Developer with 1+ year of professional experience, building interfaces with React, Next.js, and TypeScript, while continuously refining my skills in performance optimization, accessibility, and technical SEO.",
        "Going forward, my goal is to grow into a senior frontend engineering role, contribute to products at scale, and deepen my expertise in modern frontend architecture and AI-assisted development workflows.",
    ],
};

export const experienceTimeline: TimelineItem[] = [
    {
        company: "Company Name",
        role: "Frontend Developer",
        duration: "2024 — Present",
        responsibilities: [
            "Built and maintained responsive UI using React and Next.js",
            "Collaborated with designers to implement pixel-accurate interfaces",
            "Integrated REST APIs and managed application state with Redux Toolkit",
        ],
        achievements: [
            "Improved page load performance through code-splitting and image optimization",
            "Reduced UI bugs through consistent component reuse and TypeScript adoption",
        ],
    },
];

export const education = {
    degree: "Bachelor of Computer Applications (BCA)",
    description:
        "Built a strong foundation in programming, data structures, and web technologies during my BCA, which I supplemented with continuous self-learning in modern frontend development.",
    points: [
        "Core computer science and programming fundamentals",
        "Self-taught modern frontend stack: React, Next.js, TypeScript",
        "Ongoing learning through documentation, open source, and real projects",
    ],
};

export const coreSkills: SkillItem[] = [
    { name: "React.js", category: "Core" },
    { name: "Next.js", category: "Core" },
    { name: "TypeScript", category: "Core" },
    { name: "JavaScript", category: "Core" },
    { name: "Redux Toolkit", category: "Tooling" },
    { name: "TanStack Query", category: "Tooling" },
    { name: "REST APIs", category: "Tooling" },
    { name: "Performance Optimization", category: "Craft" },
    { name: "Technical SEO", category: "Craft" },
    { name: "Accessibility", category: "Craft" },
    { name: "Responsive Design", category: "Craft" },
    { name: "Framer Motion", category: "Tooling" },
    { name: "GSAP", category: "Tooling" },
    { name: "AI-assisted Development", category: "Craft" },
];

export const philosophy: PhilosophyItem[] = [
    {
        title: "Reusable Components",
        description: "I build components that are modular and predictable, so they can be reused confidently across a growing codebase.",
    },
    {
        title: "Clean Architecture",
        description: "I structure projects for clarity and scale, keeping concerns separated and code easy to navigate.",
    },
    {
        title: "Maintainable Code",
        description: "I write code that's easy for future me and other developers to read, extend, and debug.",
    },
    {
        title: "Performance First",
        description: "I treat performance as a feature, optimizing rendering, bundle size, and load times from the start.",
    },
    {
        title: "Accessibility First",
        description: "I design and build interfaces usable by everyone, following WCAG guidelines and semantic HTML.",
    },
    {
        title: "SEO First",
        description: "I implement technical SEO fundamentals so the products I build are discoverable and performant in search.",
    },
];

export const aiWorkflow: AIWorkflowItem[] = [
    { step: "Planning", description: "I use AI to explore approaches and structure tasks before writing code." },
    { step: "Research", description: "I use AI to quickly research APIs, patterns, and best practices." },
    { step: "Debugging", description: "I use AI to help identify root causes of bugs faster." },
    { step: "Code Review", description: "I use AI as a second reviewer to catch edge cases and improve quality." },
    { step: "Optimization", description: "I use AI to identify performance improvements in rendering and logic." },
    { step: "Refactoring", description: "I use AI to suggest cleaner, more maintainable structures." },
    { step: "Testing", description: "I use AI to help design test cases and validate edge conditions." },
    { step: "Documentation", description: "I use AI to draft clear documentation, which I then review and refine." },
    { step: "Prompt Engineering", description: "I write precise prompts to get reliable, high-quality AI output." },
];

export const aiPhilosophyNote =
    "AI is a tool I use to move faster and think more clearly — not a replacement for my judgment. I personally understand, review, test, and integrate every piece of code before it becomes part of a project.";

export const careerGoals = [
    "Grow into a senior Frontend Engineering role",
    "Continuously learn modern frontend technologies and patterns",
    "Build products that are fast, accessible, and delightful to use",
    "Contribute to teams that value clean architecture and craftsmanship",
];