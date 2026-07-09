"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { aboutHero } from "@/content/about";
import { Container } from "@/components/ui/Container";

export function AboutHero() {
    return (
        <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                            {aboutHero.eyebrow}
                        </span>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
                            {aboutHero.heading}
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                            {aboutHero.description}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-sm font-medium text-neutral-700 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-neutral-200">
                                {aboutHero.badge}
                            </span>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98] dark:bg-white dark:text-neutral-900"
                            >
                                Let&apos;s Connect
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-black/5 bg-neutral-100 dark:border-white/10 dark:bg-neutral-900"
                    >
                        <Image
                            src={aboutHero.imageSrc}
                            alt={aboutHero.imageAlt}
                            fill
                            sizes="(min-width: 1024px) 28rem, 90vw"
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}