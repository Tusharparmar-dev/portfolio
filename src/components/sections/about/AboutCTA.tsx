"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function AboutCTA() {
    return (
        <section className="py-20 sm:py-28">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-3xl border border-black/5 bg-white/60 p-10 text-center backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:p-14"
                >
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                        Let&apos;s build something great together.
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/projects"
                            className="inline-flex items-center rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-neutral-900 transition-transform hover:scale-[1.03] active:scale-[0.98] dark:border-white/20 dark:text-white"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98] dark:bg-white dark:text-neutral-900"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}