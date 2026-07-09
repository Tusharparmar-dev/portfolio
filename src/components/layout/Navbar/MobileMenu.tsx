"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
    activeId: string;
    onLinkClick: () => void;
}

const containerVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: "auto",
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1], when: "beforeChildren", staggerChildren: 0.04 },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0 },
};

export function MobileMenu({ activeId, onLinkClick }: MobileMenuProps) {
    return (
        <motion.div
            id="mobile-menu"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-b border-black/5 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/90 lg:hidden"
        >
            <ul className="flex flex-col gap-1 px-5 py-4" role="list">
                {NAV_LINKS.map((link) => {
                    const isActive = activeId === link.id;
                    return (
                        <motion.li key={link.id} variants={itemVariants}>
                            <Link
                                href={link.href}
                                onClick={onLinkClick}
                                className={cn(
                                    "block rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white",
                                    isActive
                                        ? "bg-neutral-900/5 text-neutral-900 dark:bg-white/10 dark:text-white"
                                        : "text-neutral-600 hover:bg-neutral-900/5 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
                                )}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {link.label}
                            </Link>
                        </motion.li>
                    );
                })}
            </ul>

            <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 border-t border-black/5 px-5 py-4 dark:border-white/10"
            >
                <Link
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub profile"
                    onClick={onLinkClick}
                    className="rounded-full p-2 text-neutral-600 hover:bg-neutral-900/5 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"
                >
                    <Github size={18} strokeWidth={1.75} />
                </Link>
                <Link
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn profile"
                    onClick={onLinkClick}
                    className="rounded-full p-2 text-neutral-600 hover:bg-neutral-900/5 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"
                >
                    <Linkedin size={18} strokeWidth={1.75} />
                </Link>
                <Link
                    href={SOCIAL_LINKS.resume}
                    download
                    onClick={onLinkClick}
                    className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"
                >
                    Resume
                    < Download size={15} strokeWidth={2} />
                </Link >
            </motion.div >
        </motion.div >
    );
}