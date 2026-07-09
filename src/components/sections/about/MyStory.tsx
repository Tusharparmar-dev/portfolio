"use client";

import { motion } from "framer-motion";
import { myStory } from "@/content/about";
import { Container } from "@/components/ui/Container";

export function MyStory() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
                    >
                        {myStory.heading}
                    </motion.h2>

                    <div className="mt-8 space-y-5">
                        {myStory.paragraphs.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}