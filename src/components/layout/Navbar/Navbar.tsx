"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isHidden, isScrolled } = useScrollDirection();
    const pathname = usePathname();
    const scrollActiveId = useActiveSection(NAV_LINKS.map((l) => l.id));
    const activeId =
        pathname === "/"
            ? scrollActiveId
            : NAV_LINKS.find((l) => l.href === pathname)?.id ?? "";
    const shouldReduceMotion = useReducedMotion();

    const closeMenu = useCallback(() => setIsOpen(false), []);

    return (
        <motion.header
            initial={{ y: shouldReduceMotion ? 0 : -100, opacity: 0 }}
            animate={{ y: isHidden && !isOpen ? "-100%" : 0, opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 right-0 top-0 z-50"
            role="banner"
        >
            <div
                className={cn(
                    "transition-colors duration-300",
                    isScrolled || isOpen
                        ? "border-b border-black/5 bg-white/70 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/70"
                        : "border-b border-transparent bg-transparent"
                )}
            >
                <nav
                    className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
                    aria-label="Primary navigation"
                >
                    <Link
                        href="/"
                        className="rounded-sm text-lg font-semibold tracking-tight text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:text-white dark:focus-visible:ring-white"
                        aria-label="Tushar Parmar, go to home"
                    >
                        Tushar<span className="text-neutral-400">.dev</span>
                    </Link>

                    <DesktopNav activeId={activeId} />

                    <div className="hidden items-center gap-2 lg:flex">
                        <Link
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="GitHub profile"
                            className="rounded-full p-2 text-neutral-600 transition-colors hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-white"
                        >
                            <Github size={18} strokeWidth={1.75} />
                        </Link>
                        <Link
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="LinkedIn profile"
                            className="rounded-full p-2 text-neutral-600 transition-colors hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-white"
                        >
                            <Linkedin size={18} strokeWidth={1.75} />
                        </Link>
                        <Link
                            href={SOCIAL_LINKS.resume}
                            download
                            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:focus-visible:ring-white"
                        >
                            Resume
                            <Download size={15} strokeWidth={2} />
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="inline-flex items-center justify-center rounded-full p-2 text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:text-white dark:focus-visible:ring-white lg:hidden"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen ? (
                                <motion.span
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="block"
                                >
                                    <X size={22} />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="block"
                                >
                                    <Menu size={22} />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </nav >
            </div >

            <AnimatePresence>
                {isOpen && <MobileMenu activeId={activeId} onLinkClick={closeMenu} />}
            </AnimatePresence>
        </motion.header >
    );
}