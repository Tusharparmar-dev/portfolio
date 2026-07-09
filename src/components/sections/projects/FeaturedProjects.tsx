import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
    return (
        <section id="featured-projects" className="scroll-mt-24 py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                        A closer look at projects where I owned the frontend implementation end to end.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}