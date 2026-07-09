export interface TimelineEntry {
    company: string;
    role: string;
    employmentType: string;
    duration: string;
    location: string;
    technologies: string[];
    teamSize?: string;
    responsibilities: string[];
    contributions: string[];
    achievements: string[];
}

export interface ExpertiseGroup {
    category: string;
    items: string[];
}

export interface CareerMilestone {
    label: string;
    title: string;
    description: string;
}

export const experienceHero = {
    eyebrow: "Experience",
    heading: "1+ year of building production frontend interfaces.",
    description:
        "A track record of shipping fast, accessible, and maintainable frontend applications using React, Next.js, and TypeScript.",
    stats: [
        { label: "Years of Experience", value: "1+" },
        { label: "Projects Delivered", value: "6+" },
        { label: "Technologies", value: "12+" },
    ],
};

export const timeline: TimelineEntry[] = [
    {
        company: "Company Name",
        role: "Frontend Developer",
        employmentType: "Full-time",
        duration: "2024 — Present",
        location: "Remote",
        technologies: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS"],
        teamSize: "4 Engineers",
        responsibilities: [
            "Developed and maintained responsive UI using React and Next.js",
            "Integrated REST APIs and managed application state with Redux Toolkit",
            "Collaborated with designers and backend engineers to ship features end-to-end",
            "Implemented technical SEO and accessibility improvements across pages",
        ],
        contributions: [
            "Built a reusable component library used across multiple product pages",
            "Introduced TanStack Query for consistent server-state caching",
            "Set up performance monitoring practices to catch regressions early",
        ],
        achievements: [
            "Improved key page load times through code-splitting and image optimization",
            "Reduced UI bugs through consistent TypeScript adoption and component reuse",
            "Raised Lighthouse accessibility scores to 95+ across core pages",
        ],
    },
];

export const dailyWorkflow: { step: string; description: string }[] = [
    { step: "Requirement Analysis", description: "Understanding feature requirements and clarifying edge cases before development." },
    { step: "UI Development", description: "Building responsive, accessible interfaces from design specs." },
    { step: "API Integration", description: "Connecting frontend to REST APIs with proper error and loading states." },
    { step: "State Management", description: "Structuring state with Redux Toolkit and TanStack Query for predictability." },
    { step: "Performance Optimization", description: "Profiling and improving rendering speed and bundle size." },
    { step: "SEO Implementation", description: "Applying metadata, structured data, and semantic HTML for discoverability." },
    { step: "Testing", description: "Verifying functionality and responsiveness across browsers and devices." },
    { step: "Deployment Support", description: "Assisting with releases and monitoring post-deployment behavior." },
    { step: "Bug Fixing", description: "Diagnosing and resolving issues quickly with minimal regression risk." },
];

export const technicalExpertise: ExpertiseGroup[] = [
    { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { category: "State & Data", items: ["Redux Toolkit", "TanStack Query", "REST APIs"] },
    { category: "Performance", items: ["Code Splitting", "Image Optimization", "Bundle Analysis"] },
    { category: "SEO", items: ["Metadata API", "Structured Data", "Semantic HTML"] },
    { category: "Accessibility", items: ["WCAG Guidelines", "ARIA", "Keyboard Navigation"] },
    { category: "AI-Assisted Development", items: ["Prompt Engineering", "AI Code Review", "AI-Assisted Debugging"] },
];

export const toolsWorkflow: string[] = [
    "VS Code",
    "Git",
    "GitHub",
    "Postman",
    "Chrome DevTools",
    "Figma",
    "AI Tools",
    "npm",
];

export const keyAchievements: { label: string; value: string }[] = [
    { label: "Production Projects", value: "6+" },
    { label: "Performance Improvements", value: "95+ Lighthouse" },
    { label: "Responsive Builds", value: "100%" },
    { label: "Reusable Components", value: "20+" },
];

export const careerGrowth: CareerMilestone[] = [
    {
        label: "Learning Journey",
        title: "Building the Foundation",
        description: "Learned React, Next.js, and TypeScript through hands-on projects and consistent practice.",
    },
    {
        label: "Current Position",
        title: "Frontend Developer",
        description: "Building production-grade interfaces with a focus on performance, accessibility, and clean architecture.",
    },
    {
        label: "Future Goals",
        title: "Senior Frontend Engineer",
        description: "Growing into a senior role, contributing to products at scale with deeper frontend architecture expertise.",
    },
];