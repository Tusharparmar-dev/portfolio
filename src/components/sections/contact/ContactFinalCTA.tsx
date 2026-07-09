"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { contactInfo } from "@/content/contact";
import Link from "next/link";

export function ContactFinalCTA() {
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
                        Let&apos;s Build Something Amazing Together
                    </h2>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        {contactInfo.email}
                    </p>
                    <Link
                        href={`mailto:${contactInfo.email}`}
                        className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98] dark:bg-white dark:text-neutral-900"
                    >
                        Say Hello
                    </Link>
                </motion.div>
            </Container>
        </section >
    );
}