"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
    activeId: string;
}

export function DesktopNav({ activeId }: DesktopNavProps) {
    return (
        <ul className="hidden items-center gap-1 lg:flex" role="list">
            {NAV_LINKS.map((link) => {
                const isActive = activeId === link.id;
                return (
                    <li key={link.id} className="relative">
                        <Link
                            href={link.href}
                            className={cn(
                                "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white",
                                isActive
                                    ? "text-neutral-900 dark:text-white"
                                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                            )}
                            aria-current={isActive ? "page" : undefined}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="nav-active-pill"
                                    className="absolute inset-0 -z-10 rounded-full bg-neutral-900/5 dark:bg-white/10"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}