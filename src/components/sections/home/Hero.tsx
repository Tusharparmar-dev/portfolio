"use client";

import { useCallback, useRef } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroVisual } from "./HeroVisual";
import { heroBadges } from "@/content/home";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.09, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export function Hero() {
    const shouldReduceMotion = useReducedMotion();
    const sectionRef = useRef<HTMLElement>(null);

    // Mouse-reactive spotlight: writes CSS custom properties directly to the
    // DOM node instead of React state, so the effect is GPU-composited and
    // never triggers a re-render on move.
    const handlePointerMove = useCallback(
        (event: React.PointerEvent<HTMLElement>) => {
            if (shouldReduceMotion) return;
            const bounds = sectionRef.current?.getBoundingClientRect();
            if (!bounds) return;
            const x = ((event.clientX - bounds.left) / bounds.width) * 100;
            const y = ((event.clientY - bounds.top) / bounds.height) * 100;
            sectionRef.current?.style.setProperty("--spot-x", `${x}%`);
            sectionRef.current?.style.setProperty("--spot-y", `${y}%`);
        },
        [shouldReduceMotion]
    );

    return (
        <section
            ref={sectionRef}
            id="home"
            aria-label="Introduction"
            onPointerMove={handlePointerMove}
            className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
            style={{ ["--spot-x" as string]: "50%", ["--spot-y" as string]: "20%" }}
        >
            {/* Ambient background: blobs, mouse spotlight, grid */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <motion.div
                    className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : { y: [0, 24, 0], x: [0, -16, 0] }
                    }
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute right-[-10%] bottom-[-10%] h-[360px] w-[360px] rounded-full bg-accent/10 blur-[120px]"
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : { y: [0, -20, 0], x: [0, 14, 0] }
                    }
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                    className="absolute left-[8%] bottom-[5%] h-[220px] w-[220px] rounded-full bg-primary/10 blur-[100px]"
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : { y: [0, 18, 0] }
                    }
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Grid overlay, faded toward the edges */}
                <div
                    className="absolute inset-0 text-foreground opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                        maskImage:
                            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
                    }}
                />

                {/* Cursor spotlight */}
                <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                        background:
                            "radial-gradient(500px circle at var(--spot-x) var(--spot-y), color-mix(in srgb, var(--color-primary) 12%, transparent), transparent 65%)",
                    }}
                />
            </div>

            <Container>
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur"
                        >
                            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                            <span>Hey, I&apos;m building for the web</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground font-heading sm:text-5xl lg:text-6xl"
                        >
                            Tushar Parmar —{" "}
                            <span className="bg-[linear-gradient(90deg,var(--color-primary),var(--color-accent))] bg-clip-text text-transparent">
                                Frontend Developer
                            </span>{" "}
                            crafting fast, production-ready interfaces.
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
                        >
                            I build accessible, high-performance web applications with React,
                            Next.js, and TypeScript — engineered for real users, measured
                            against real metrics, and shipped with an AI-assisted workflow
                            that keeps quality high without slowing down.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="mt-8 flex flex-wrap items-center gap-3"
                        >
                            {heroBadges.map((tech) => (
                                <Badge key={tech} variant="outline">
                                    {tech}
                                </Badge>
                            ))}
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-10 flex flex-wrap items-center gap-4"
                        >
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
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                    >
                        <HeroVisual />
                    </motion.div>
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