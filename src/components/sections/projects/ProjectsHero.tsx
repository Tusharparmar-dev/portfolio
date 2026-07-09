"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projectsHero } from "@/content/projects";
import { Container } from "@/components/ui/Container";

export function ProjectsHero() {
    return (
        <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                        {projectsHero.eyebrow}
                    </span>
                    <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
                        {projectsHero.heading}
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {projectsHero.description}
                    </p>

                    <div className="mt-8 flex justify-center">
                        <Link
                            href="#featured-projects"
                            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98] dark:bg-white dark:text-neutral-900"
                        >
                            View Featured Work
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 sm:gap-8"
                >
                    {projectsHero.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-black/5 bg-white/60 p-5 text-center backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                        >
                            <p className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
                                {stat.value}
                            </p>
                            <p className="mt-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 sm:text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}