"use client";

import { motion } from "framer-motion";
import { education } from "@/content/about";
import { Container } from "@/components/ui/Container";

export function Education() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl rounded-3xl border border-black/5 bg-white/60 p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:p-10"
                >
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                        Education
                    </h2>
                    <p className="mt-2 text-lg font-medium text-neutral-800 dark:text-neutral-100">
                        {education.degree}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {education.description}
                    </p>
                    <ul className="mt-6 space-y-2">
                        {education.points.map((point, i) => (
                            <li
                                key={i}
                                className="flex gap-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </Container>
        </section>
    );
}