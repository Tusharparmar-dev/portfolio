"use client";

import { motion } from "framer-motion";
import { careerGoals } from "@/content/about";
import { Container } from "@/components/ui/Container";

export function CareerGoals() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Career Goals
                    </h2>

                    <ul className="mt-8 space-y-4">
                        {careerGoals.map((goal, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                className="flex items-start gap-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-200"
                            >
                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900 dark:bg-white" />
                                {goal}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}