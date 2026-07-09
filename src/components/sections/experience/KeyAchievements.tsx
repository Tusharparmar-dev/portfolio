"use client";

import { motion } from "framer-motion";
import { keyAchievements } from "@/content/experience";
import { Container } from "@/components/ui/Container";

export function KeyAchievements() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <div className="rounded-3xl border border-black/5 bg-white/60 p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:p-12">
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                        Key Achievements
                    </h2>

                    <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
                        {keyAchievements.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                className="text-center"
                            >
                                <p className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 sm:text-sm">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}