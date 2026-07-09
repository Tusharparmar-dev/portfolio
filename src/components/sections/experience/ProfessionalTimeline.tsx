"use client";

import { motion } from "framer-motion";
import { timeline } from "@/content/experience";
import { Container } from "@/components/ui/Container";

export function ProfessionalTimeline() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Professional Timeline
                    </h2>

                    <div className="relative mt-12 space-y-12 border-l border-black/10 pl-8 dark:border-white/10">
                        {timeline.map((entry, index) => (
                            <motion.div
                                key={`${entry.company}-${index}`}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full bg-neutral-900 dark:bg-white" />

                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                                        {entry.role} · {entry.company}
                                    </h3>
                                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                        {entry.duration}
                                    </span>
                                </div>

                                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
                                    <span>{entry.employmentType}</span>
                                    <span>{entry.location}</span>
                                    {entry.teamSize && <span>Team: {entry.teamSize}</span>}
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {entry.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-white/10 dark:text-neutral-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-5 space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Responsibilities</h4>
                                        <ul className="mt-2 space-y-1.5">
                                            {entry.responsibilities.map((item, i) => (
                                                <li key={i} className="flex gap-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Major Contributions</h4>
                                        <ul className="mt-2 space-y-1.5">
                                            {entry.contributions.map((item, i) => (
                                                <li key={i} className="flex gap-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Achievements</h4>
                                        <div className="mt-2 space-y-1.5">
                                            {entry.achievements.map((item, i) => (
                                                <p key={i} className="text-sm font-medium leading-relaxed text-neutral-800 dark:text-neutral-100">
                                                    ✓ {item}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}