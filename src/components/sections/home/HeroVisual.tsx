"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Code2, Sparkles } from "lucide-react";

interface Stat {
    label: string;
    value: string;
}

const stats: Stat[] = [
    { label: "Years experience", value: "3+" },
    { label: "Projects shipped", value: "40+" },
];

const snippetLines = [
    { indent: 0, text: "export function Hero() {" },
    { indent: 1, text: "return (" },
    { indent: 2, text: "<Interface" },
    { indent: 3, text: "fast" },
    { indent: 3, text: "accessible" },
    { indent: 3, text: "production-ready" },
    { indent: 2, text: "/>" },
    { indent: 1, text: ");" },
    { indent: 0, text: "}" },
];

export function HeroVisual() {
    const shouldReduceMotion = useReducedMotion();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handlePointerMove = useCallback(
        (event: React.PointerEvent<HTMLDivElement>) => {
            if (shouldReduceMotion) return;
            const bounds = wrapperRef.current?.getBoundingClientRect();
            if (!bounds) return;
            const px = (event.clientX - bounds.left) / bounds.width - 0.5;
            const py = (event.clientY - bounds.top) / bounds.height - 0.5;
            setTilt({ x: py * -6, y: px * 8 });
        },
        [shouldReduceMotion]
    );

    const handlePointerLeave = useCallback(() => setTilt({ x: 0, y: 0 }), []);

    return (
        <div
            ref={wrapperRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative mx-auto aspect-square w-full max-w-md [perspective:1200px]"
        >
            <motion.div
                animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="relative h-full w-full [transform-style:preserve-3d]"
            >
                {/* Main glass panel: a stylized code window */}
                <div
                    className="absolute inset-6 rounded-2xl border border-border bg-surface/70 shadow-2xl shadow-black/10 backdrop-blur-xl"
                    style={{ transform: "translateZ(40px)" }}
                >
                    <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                        <span className="ml-2 inline-flex items-center gap-1.5 text-xs text-muted">
                            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                            hero.tsx
                        </span>
                    </div>
                    <pre className="overflow-hidden px-4 py-4 font-mono text-[11px] leading-relaxed text-muted sm:text-xs">
                        {snippetLines.map((line, index) => (
                            <div
                                key={index}
                                style={{ paddingLeft: `${line.indent * 12}px` }}
                                className="whitespace-pre text-foreground/70"
                            >
                                {line.text}
                            </div>
                        ))}
                    </pre>
                </div>

                {/* Floating stat cards */}
                <motion.div
                    style={{ transform: "translateZ(80px)" }}
                    className="absolute -left-2 top-4 flex flex-col gap-1 rounded-xl border border-border bg-surface/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:-left-6"
                    animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-2xl font-semibold text-foreground font-heading">
                        {stats[0].value}
                    </span>
                    <span className="text-xs text-muted">{stats[0].label}</span>
                </motion.div>

                <motion.div
                    style={{ transform: "translateZ(70px)" }}
                    className="absolute -right-2 bottom-10 flex flex-col gap-1 rounded-xl border border-border bg-surface/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:-right-6"
                    animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                    <span className="text-2xl font-semibold text-foreground font-heading">
                        {stats[1].value}
                    </span>
                    <span className="text-xs text-muted">{stats[1].label}</span>
                </motion.div>

                <motion.div
                    style={{ transform: "translateZ(100px)" }}
                    className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-xl"
                    animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    Open to opportunities
                </motion.div>

                <motion.div
                    style={{ transform: "translateZ(60px)" }}
                    className="absolute -top-3 right-8 flex items-center gap-1.5 rounded-full border border-border bg-surface/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-md backdrop-blur-xl"
                    animate={shouldReduceMotion ? undefined : { rotate: [0, 4, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    TypeScript
                </motion.div>
            </motion.div>

            {/* Backdrop glow behind the panel */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-[2rem] bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent))] opacity-20 blur-3xl"
            />
        </div>
    );
}