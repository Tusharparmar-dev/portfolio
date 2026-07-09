import type { Metadata } from "next";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";
import { FeaturedProjects } from "@/components/sections/projects/FeaturedProjects";
import { TechShowcase } from "@/components/sections/projects/TechShowcase";
import { DevProcess } from "@/components/sections/projects/DevProcess";
import { ProjectsCTA } from "@/components/sections/projects/ProjectsCTA";
import { Achievements } from "@/components/sections/projects/Achievements";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore frontend projects by Tushar Parmar, built with React, Next.js, and TypeScript — focused on performance, accessibility, and clean architecture.",
    openGraph: {
        title: "Projects | Tushar Parmar",
        description:
            "Explore frontend projects by Tushar Parmar, built with React, Next.js, and TypeScript.",
        type: "website",
    },
};

export default function ProjectsPage() {
    return (
        <>
            <ProjectsHero />
            <FeaturedProjects />
            <TechShowcase />
            <DevProcess />
            <Achievements />
            <ProjectsCTA />
        </>
    );
}