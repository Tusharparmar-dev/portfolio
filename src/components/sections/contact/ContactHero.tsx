"use client";

import { motion } from "framer-motion";
import { contactHero } from "@/content/contact";
import { Container } from "@/components/ui/Container";

export function ContactHero() {
    return (
        <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                        {contactHero.eyebrow}
                    </span>
                    <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
                        {contactHero.heading}
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {contactHero.description}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-sm font-medium text-neutral-700 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-neutral-200">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            {contactHero.availability}
                        </span>
                        <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-sm font-medium text-neutral-700 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-neutral-200">
                            {contactHero.responseTime}
                        </span>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}