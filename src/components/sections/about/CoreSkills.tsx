"use client";

import { motion } from "framer-motion";
import { coreSkills } from "@/content/about";
import { Container } from "@/components/ui/Container";

export function CoreSkills() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Core Skills
                    </h2>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {coreSkills.map((skill, index) => (
                            <motion.span
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                whileHover={{ y: -2 }}
                                className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-neutral-700 backdrop-blur-md transition-colors hover:border-neutral-900/20 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:border-white/30"
                            >
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}