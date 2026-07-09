import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { MyStory } from "@/components/sections/about/MyStory";
import { ExperienceTimeline } from "@/components/sections/about/ExperienceTimeline";
import { Education } from "@/components/sections/about/Education";
import { CoreSkills } from "@/components/sections/about/CoreSkills";
import { DevPhilosophy } from "@/components/sections/about/DevPhilosophy";
import { AIAssistedDev } from "@/components/sections/about/AIAssistedDev";
import { CareerGoals } from "@/components/sections/about/CareerGoals";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Tushar Parmar, a Frontend Developer with 1+ year of experience building fast, accessible, production-ready interfaces with React, Next.js, and TypeScript.",
    openGraph: {
        title: "About | Tushar Parmar",
        description:
            "Learn about Tushar Parmar, a Frontend Developer with 1+ year of experience building fast, accessible, production-ready interfaces.",
        type: "profile",
    },
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <MyStory />
            <ExperienceTimeline />
            <Education />
            <CoreSkills />
            <DevPhilosophy />
            <AIAssistedDev />
            <CareerGoals />
            <AboutCTA />
        </>
    );
}