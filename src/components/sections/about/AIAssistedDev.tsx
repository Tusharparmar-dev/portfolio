"use client";

import { motion } from "framer-motion";
import { aiWorkflow, aiPhilosophyNote } from "@/content/about";
import { Container } from "@/components/ui/Container";

export function AIAssistedDev() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        AI-Assisted Development
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {aiPhilosophyNote}
                    </p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        {aiWorkflow.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="rounded-xl border border-black/5 bg-white/60 p-5 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                            >
                                <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                                    {item.step}
                                </span>
                                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}