"use client";

import { motion } from "framer-motion";
import { techStackGroups } from "@/content/projects";
import { Container } from "@/components/ui/Container";

export function TechShowcase() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                    Technology Showcase
                </h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {techStackGroups.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: groupIndex * 0.06 }}
                            className="rounded-2xl border border-black/5 bg-white/60 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                        >
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                                {group.category}
                            </h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-black/10 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:border-white/10 dark:text-neutral-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}