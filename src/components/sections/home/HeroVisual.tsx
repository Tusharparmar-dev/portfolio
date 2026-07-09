"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Clock3 } from "lucide-react";

export function HeroVisual() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[480px]">
            <div
                aria-hidden="true"
                className="absolute inset-6 rounded-[2rem] border border-border bg-surface/60 backdrop-blur-sm"
            />

            <motion.div
                role="img"
                aria-label="Tushar Parmar, Frontend Developer"
                className="relative flex h-64 w-64 items-center justify-center rounded-[2rem] border border-border text-6xl font-semibold text-foreground font-heading shadow-2xl bg-[linear-gradient(135deg,var(--color-surface-elevated),var(--color-surface))]"
                animate={shouldReduceMotion ? undefined : { y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                TP
            </motion.div>

            <motion.div
                className="absolute -left-2 top-8 flex items-center gap-2 rounded-2xl border border-border bg-surface/90 px-4 py-3 text-sm text-foreground shadow-lg backdrop-blur"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>1+ Years Experience</span>
            </motion.div>

            <motion.div
                className="absolute -right-4 bottom-10 flex items-center gap-2 rounded-2xl border border-border bg-surface/90 px-4 py-3 text-sm text-foreground shadow-lg backdrop-blur"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
                <span>Available for Hire</span>
            </motion.div>
        </div>
    );
}