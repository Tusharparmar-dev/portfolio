"use client";

import { motion } from "framer-motion";
import { dailyWorkflow } from "@/content/experience";
import { Container } from "@/components/ui/Container";

export function DailyWorkflow() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                    Daily Development Workflow
                </h2>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {dailyWorkflow.map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="rounded-2xl border border-black/5 bg-white/60 p-5 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                        >
                            <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">
                                0{index + 1}
                            </span>
                            <h3 className="mt-2 text-base font-semibold text-neutral-900 dark:text-white">
                                {item.step}
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}