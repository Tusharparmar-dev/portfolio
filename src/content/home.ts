import {
  Code2,
  Database,
  Sparkles,
  Gauge,
  Compass,
  Hammer,
  Bot,
  Rocket,
  ShieldCheck,
  Zap,
  SearchCheck,
} from "lucide-react";
import type {
  SkillCategory,
  WorkflowStep,
  Project,
  ExperienceItem,
  StatItem,
  HireReason,
} from "@/types";

export const heroBadges = ["React.js", "Next.js", "TypeScript"];

export const stats: StatItem[] = [
  { label: "Years of Experience", value: "1+" },
  { label: "Projects Delivered", value: "10+" },
  { label: "Core Technologies", value: "12+" },
  { label: "Avg. Lighthouse Score", value: "95+" },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Core Stack",
    icon: Code2,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    label: "State & Data",
    icon: Database,
    skills: ["Redux Toolkit", "TanStack Query", "REST APIs"],
  },
  {
    label: "Motion & UI",
    icon: Sparkles,
    skills: ["Framer Motion", "GSAP", "Responsive Design"],
  },
  {
    label: "Performance & SEO",
    icon: Gauge,
    skills: ["Performance Optimization", "Technical SEO", "Schema Markup"],
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Discover & Architect",
    description:
      "Break the problem down, define data flow and types before a single component is built.",
    icon: Compass,
  },
  {
    title: "Build with Precision",
    description:
      "Component-driven development with TypeScript-first, reusable building blocks.",
    icon: Hammer,
  },
  {
    title: "Accelerate with AI",
    description:
      "Use AI-assisted tooling to move faster on boilerplate while reviewing every line shipped.",
    icon: Bot,
  },
  {
    title: "Optimize Relentlessly",
    description:
      "Tune Core Web Vitals, bundle size, and technical SEO before anything ships.",
    icon: Gauge,
  },
  {
    title: "Ship & Iterate",
    description:
      "Deploy, monitor real usage, and refine based on what the data actually shows.",
    icon: Rocket,
  },
];

export const featuredProjects: Project[] = [
  {
    title: "Pulse — Analytics Dashboard",
    description:
      "A real-time analytics dashboard built with Next.js and TanStack Query, visualizing live product metrics for distributed teams.",
    tags: ["Next.js", "TypeScript", "TanStack Query", "Redux Toolkit"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Cartly — E-Commerce Storefront",
    description:
      "A performance-first storefront with sub-second navigation, animated product transitions, and a fully accessible checkout flow.",
    tags: ["Next.js", "REST API", "Framer Motion", "SEO"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Flowboard — Task Management App",
    description:
      "A drag-and-drop task board with optimistic UI updates, built to feel instant even on slow connections.",
    tags: ["React.js", "Redux Toolkit", "TanStack Query"],
    liveUrl: "#",
    sourceUrl: "#",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Add Your Company Name",
    duration: "2025 — Present",
    summary:
      "Built and shipped production React and Next.js interfaces, improved Core Web Vitals across key pages, and introduced an AI-assisted workflow that cut feature turnaround time.",
  },
];

export const hireReasons: HireReason[] = [
  {
    title: "Production-Grade Code",
    description:
      "TypeScript-first, componentized, and built to scale beyond the first release.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Obsessed",
    description:
      "Every build is measured against Core Web Vitals, not just visual polish.",
    icon: Zap,
  },
  {
    title: "AI-Augmented Velocity",
    description:
      "Ships faster using AI-assisted tooling without cutting corners on quality.",
    icon: Bot,
  },
  {
    title: "SEO & Schema Fluent",
    description:
      "Technical SEO and structured data are part of the build, not an afterthought.",
    icon: SearchCheck,
  },
];