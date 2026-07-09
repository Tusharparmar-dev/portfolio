import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroVisual } from "./HeroVisual";
import { heroBadges } from "@/content/home";

export function Hero() {
    return (
        <section
            id="home"
            aria-label="Introduction"
            className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
        >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
                <div className="absolute right-[-10%] bottom-[-10%] h-[360px] w-[360px] rounded-full bg-accent/10 blur-[120px]" />
            </div>

            <Container>
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur">
                            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                            <span>Hey, I&apos;m building for the web</span>
                        </div>

                        <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground font-heading sm:text-5xl lg:text-6xl">
                            Tushar Parmar —{" "}
                            <span className="bg-[linear-gradient(90deg,var(--color-primary),var(--color-accent))] bg-clip-text text-transparent">
                                Frontend Developer
                            </span>{" "}
                            crafting fast, production-ready interfaces.
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                            I build accessible, high-performance web applications with React,
                            Next.js, and TypeScript — engineered for real users, measured
                            against real metrics, and shipped with an AI-assisted workflow
                            that keeps quality high without slowing down.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            {heroBadges.map((tech) => (
                                <Badge key={tech} variant="outline">
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <Button
                                href="#projects"
                                size="lg"
                                icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                            >
                                View Projects
                            </Button>
                            <Button
                                href="/resume.pdf"
                                variant="outline"
                                size="lg"
                                icon={<Download className="h-4 w-4" aria-hidden="true" />}
                            >
                                Download Resume
                            </Button>
                        </div>
                    </div>

                    <HeroVisual />
                </div>
            </Container>

            <div
                aria-hidden="true"
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
            >
                <span className="text-xs uppercase tracking-[0.3em] text-muted">Scroll</span>
                <span className="relative h-9 w-5 rounded-full border border-border">
                    <span className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary motion-safe:animate-scroll-dot" />
                </span>
            </div>
        </section>
    );
}