import type { Metadata } from "next";
import { ExperienceHero } from "@/components/sections/experience/ExperienceHero";
import { ProfessionalTimeline } from "@/components/sections/experience/ProfessionalTimeline";
import { DailyWorkflow } from "@/components/sections/experience/DailyWorkflow";
import { TechnicalExpertise } from "@/components/sections/experience/TechnicalExpertise";
import { ToolsWorkflow } from "@/components/sections/experience/ToolsWorkflow";
import { KeyAchievements } from "@/components/sections/experience/KeyAchievements";
import { CareerGrowth } from "@/components/sections/experience/CareerGrowth";
import { ExperienceCTA } from "@/components/sections/experience/ExperienceCTA";

export const metadata: Metadata = {
    title: "Experience",
    description:
        "Explore Tushar Parmar's professional experience as a Frontend Developer, including timeline, technical expertise, workflow, and key achievements.",
    openGraph: {
        title: "Experience | Tushar Parmar",
        description:
            "Explore Tushar Parmar's professional experience as a Frontend Developer.",
        type: "profile",
    },
};

export default function ExperiencePage() {
    return (
        <>
            <ExperienceHero />
            <ProfessionalTimeline />
            <DailyWorkflow />
            <TechnicalExpertise />
            <ToolsWorkflow />
            <KeyAchievements />
            <CareerGrowth />
            <ExperienceCTA />
        </>
    );
}