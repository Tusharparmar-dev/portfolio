"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
    value: string;
}

export function StatCounter({ value }: StatCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });
    const shouldReduceMotion = useReducedMotion();
    const [display, setDisplay] = useState(value);

    const numericMatch = value.match(/\d+/);
    const target = numericMatch ? parseInt(numericMatch[0], 10) : null;
    const suffix = numericMatch ? value.replace(numericMatch[0], "") : "";

    useEffect(() => {
        if (!isInView || target === null) return;

        if (shouldReduceMotion) {
            setDisplay(value);
            return;
        }

        let frame: number;
        const duration = 900;
        const start = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setDisplay(`${current}${suffix}`);
            if (progress < 1) {
                frame = requestAnimationFrame(tick);
            }
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [isInView, target, suffix, shouldReduceMotion, value]);

    return (
        <span
            ref={ref}
            className="block text-3xl font-semibold tabular-nums text-foreground font-heading sm:text-4xl"
        >
            {display}
        </span>
    );
}