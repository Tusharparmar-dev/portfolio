import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Motion";
import { featuredProjects } from "@/content/home";

export function FeaturedProjects() {
    return (
        <section id="projects" aria-label="Featured projects" className="py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="Selected Work"
                    title="Projects built to hold up in production."
                    description="A few products where performance, UX, and code quality mattered equally."
                />

                <div className="mt-16 space-y-20">
                    {featuredProjects.map((project, index) => (
                        <Reveal key={project.title} delay={index * 0.05}>
                            <div
                                className={`flex flex-col gap-8 lg:items-center lg:gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                                    }`}
                            >
                                <div className="flex-1">
                                    <div
                                        aria-hidden="true"
                                        className="flex aspect-video w-full items-center justify-center rounded-2xl border border-border text-4xl font-semibold text-muted font-heading bg-[linear-gradient(135deg,var(--color-surface-elevated),var(--color-surface))]"
                                    >
                                        {project.title.charAt(0)}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-foreground font-heading">
                                        {project.title}
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed text-muted">
                                        {project.description}
                                    </p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="outline">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="mt-6 flex items-center gap-6">
                                        {project.liveUrl ? (
                                            <Link
                                                href={project.liveUrl}
                                                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                                            >
                                                View Live
                                                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                            </Link>
                                        ) : null}
                                        {project.sourceUrl ? (
                                            <Link
                                                href={project.sourceUrl}
                                                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
                                            >
                                                Source Code
                                                <Github className="h-4 w-4" aria-hidden="true" />
                                            </Link>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80"
                    >
                        View All Projects
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}