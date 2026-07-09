import { Hero } from "@/components/sections/home/Hero";
import { Stats } from "@/components/sections/home/Stats";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { SkillsPreview } from "@/components/sections/home/SkillsPreview";
import { Workflow } from "@/components/sections/home/Workflow";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { ExperiencePreview } from "@/components/sections/home/ExperiencePreview";
import { WhyHireMe } from "@/components/sections/home/WhyHireMe";
import { ContactCTA } from "@/components/sections/home/ContactCTA";
import { Footer } from "@/components/layout/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <div id="home" className="scroll-mt-24">
          <Hero />
        </div>
        <Stats />
        <AboutPreview />
        <SkillsPreview />
        <Workflow />
        <FeaturedProjects />
        <ExperiencePreview />
        <WhyHireMe />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}