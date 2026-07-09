"use client";

import { motion } from "framer-motion";
import { careerGrowth } from "@/content/experience";
import { Container } from "@/components/ui/Container";

export function CareerGrowth() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Career Growth
                    </h2>

                    <div className="relative mt-12 space-y-10 border-l border-black/10 pl-8 dark:border-white/10">
                        {careerGrowth.map((milestone, index) => (
                            <motion.div
                                key={milestone.label}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full bg-neutral-900 dark:bg-white" />
                                <span className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                                    {milestone.label}
                                </span>
                                <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-white">
                                    {milestone.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                    {milestone.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}