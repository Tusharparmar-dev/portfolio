"use client";

import { motion } from "framer-motion";
import { philosophy } from "@/content/about";
import { Container } from "@/components/ui/Container";

export function DevPhilosophy() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                    Development Philosophy
                </h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {philosophy.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="rounded-2xl border border-black/5 bg-white/60 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                        >
                            <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}