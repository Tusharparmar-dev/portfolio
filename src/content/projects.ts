export interface CaseStudy {
    problem: string;
    solution: string;
    implementation: string;
    result: string;
    learned: string;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    technologies: string[];
    category: string;
    status: "Completed" | "In Progress" | "Maintained";
    duration: string;
    role: string;
    keyFeatures: string[];
    technicalChallenges: string[];
    solutionImplemented: string;
    performanceImprovements: string[];
    seoImprovements: string[];
    responsiveSupport: string;
    accessibilitySupport: string;
    architectureHighlights: string[];
    githubUrl?: string;
    liveUrl?: string;
    caseStudy: CaseStudy;
}

export const projectsHero = {
    eyebrow: "My Work",
    heading: "Projects built with care, performance, and purpose.",
    description:
        "A collection of production-focused frontend projects where I've applied clean architecture, performance optimization, and accessible design to solve real problems.",
    stats: [
        { label: "Projects Completed", value: "6+" },
        { label: "Technologies Used", value: "12+" },
        { label: "Avg. Lighthouse Score", value: "95+" },
    ],
};

export const projects: Project[] = [
    {
        id: "ecommerce-platform",
        name: "E-Commerce Platform",
        description:
            "A full-featured e-commerce storefront with product filtering, cart management, and a fast, SEO-optimized product catalog.",
        thumbnail: "/images/projects/ecommerce-platform.jpg",
        technologies: ["Next.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS"],
        category: "E-Commerce",
        status: "Completed",
        duration: "3 months",
        role: "Frontend Developer",
        keyFeatures: [
            "Dynamic product filtering and search",
            "Persistent cart with Redux Toolkit",
            "Server-rendered product pages for SEO",
            "Optimized image loading with next/image",
        ],
        technicalChallenges: [
            "Managing complex cart and filter state without prop drilling",
            "Keeping bundle size small while adding rich UI interactions",
        ],
        solutionImplemented:
            "Implemented Redux Toolkit for predictable global state, paired with TanStack Query for server-state caching, and used dynamic imports to keep the initial bundle lean.",
        performanceImprovements: [
            "Reduced initial load time through code-splitting and image optimization",
            "Implemented caching strategy with TanStack Query to cut redundant API calls",
        ],
        seoImprovements: [
            "Server-rendered metadata per product page",
            "Structured data for products using JSON-LD",
        ],
        responsiveSupport: "Fully responsive from 320px to 1440px+ with a mobile-first layout.",
        accessibilitySupport: "Keyboard-navigable filters, semantic HTML, and ARIA labels on interactive controls.",
        architectureHighlights: [
            "Feature-based folder structure for scalability",
            "Reusable UI component library shared across pages",
        ],
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://your-ecommerce-demo.vercel.app",
        caseStudy: {
            problem:
                "The client needed a fast, SEO-friendly storefront that could handle a growing product catalog without sacrificing performance.",
            solution:
                "Built a Next.js App Router storefront with server-rendered product pages, client-side state isolated to cart and filters only.",
            implementation:
                "Used Redux Toolkit for cart state, TanStack Query for data fetching and caching, and Tailwind CSS for a consistent, responsive design system.",
            result:
                "Achieved fast page loads, improved search visibility through structured data, and a smooth shopping experience across devices.",
            learned:
                "Deepened my understanding of balancing server and client state, and the real-world impact of caching strategy on perceived performance.",
        },
    },
    {
        id: "analytics-dashboard",
        name: "Analytics Dashboard",
        description:
            "A real-time analytics dashboard with interactive charts, filterable data tables, and role-based views.",
        thumbnail: "/images/projects/analytics-dashboard.jpg",
        technologies: ["React.js", "TypeScript", "TanStack Query", "REST APIs", "Framer Motion"],
        category: "Dashboard",
        status: "Completed",
        duration: "2 months",
        role: "Frontend Developer",
        keyFeatures: [
            "Real-time data visualization with interactive charts",
            "Filterable and sortable data tables",
            "Role-based dashboard views",
            "Smooth transitions between dashboard states",
        ],
        technicalChallenges: [
            "Rendering large datasets without UI jank",
            "Keeping the UI in sync with frequently updating data",
        ],
        solutionImplemented:
            "Used TanStack Query for efficient data fetching and background refetching, combined with virtualized rendering for large tables to maintain smooth performance.",
        performanceImprovements: [
            "Reduced re-renders through memoization and query caching",
            "Virtualized long lists to keep interactions smooth",
        ],
        seoImprovements: [
            "N/A — authenticated internal tool, optimized for performance instead",
        ],
        responsiveSupport: "Optimized for desktop and tablet, with a simplified mobile summary view.",
        accessibilitySupport: "Accessible chart summaries, focus management in filters, and keyboard-operable tables.",
        architectureHighlights: [
            "Clear separation between data layer and presentation components",
            "Reusable chart and table components across dashboard views",
        ],
        githubUrl: "https://github.com/yourusername/analytics-dashboard",
        caseStudy: {
            problem:
                "The team needed a way to visualize growing volumes of data in real time without the dashboard becoming slow or cluttered.",
            solution:
                "Designed a component architecture that separated data fetching from presentation, allowing charts and tables to update independently.",
            implementation:
                "Implemented TanStack Query for caching and background updates, and used Framer Motion for subtle transitions that kept the UI feeling responsive.",
            result:
                "The dashboard handled larger datasets smoothly and gave users clearer, faster insights into their data.",
            learned:
                "Learned how to profile and optimize React rendering performance under real data loads, not just synthetic benchmarks.",
        },
    },
];

export const techStackGroups: { category: string; items: string[] }[] = [
    { category: "Core", items: ["React.js", "Next.js", "TypeScript", "JavaScript"] },
    { category: "State & Data", items: ["Redux Toolkit", "TanStack Query", "REST APIs"] },
    { category: "Animation", items: ["Framer Motion", "GSAP"] },
    { category: "Styling", items: ["Tailwind CSS"] },
];

export const devProcessSteps: { step: string; description: string }[] = [
    { step: "Planning", description: "Defining requirements, scope, and technical approach before writing code." },
    { step: "UI Design", description: "Translating requirements into clean, consistent, and accessible interface designs." },
    { step: "Development", description: "Building with reusable components and clean, maintainable architecture." },
    { step: "Testing", description: "Verifying functionality, responsiveness, and accessibility across devices." },
    { step: "Optimization", description: "Improving performance, bundle size, and rendering efficiency." },
    { step: "Deployment", description: "Shipping to production with attention to SEO and best practices." },
    { step: "Maintenance", description: "Monitoring, fixing issues, and iterating based on real usage." },
];

export const achievementStats: { label: string; value: string }[] = [
    { label: "Projects Completed", value: "6+" },
    { label: "Technologies Used", value: "12+" },
    { label: "Avg. Performance Score", value: "95+" },
    { label: "Continuous Learning", value: "Ongoing" },
];