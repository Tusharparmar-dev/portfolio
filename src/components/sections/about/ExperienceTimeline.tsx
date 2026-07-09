"use client";

import { motion } from "framer-motion";
import { experienceTimeline } from "@/content/about";
import { Container } from "@/components/ui/Container";

export function ExperienceTimeline() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Professional Experience
                    </h2>

                    <div className="relative mt-12 space-y-10 border-l border-black/10 pl-8 dark:border-white/10">
                        {experienceTimeline.map((item, index) => (
                            <motion.div
                                key={`${item.company}-${index}`}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full bg-neutral-900 dark:bg-white" />
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                                        {item.role} · {item.company}
                                    </h3>
                                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                        {item.duration}
                                    </span>
                                </div>

                                <ul className="mt-4 space-y-2">
                                    {item.responsibilities.map((resp, i) => (
                                        <li
                                            key={i}
                                            className="flex gap-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                                        >
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                                            {resp}
                                        </li>
                                    ))}
                                </ul>

                                {item.achievements.length > 0 && (
                                    <div className="mt-4 space-y-2">
                                        {item.achievements.map((ach, i) => (
                                            <p
                                                key={i}
                                                className="text-sm font-medium leading-relaxed text-neutral-800 dark:text-neutral-100"
                                            >
                                                ✓ {ach}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}