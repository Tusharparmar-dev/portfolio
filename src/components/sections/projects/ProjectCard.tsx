"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/projects";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="overflow-hidden rounded-3xl border border-black/5 bg-white/60 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
        >
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <Image
                    src={project.thumbnail}
                    alt={`${project.name} thumbnail`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                />
                <span
                    className={cn(
                        "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md",
                        project.status === "Completed"
                            ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                            : project.status === "In Progress"
                                ? "bg-amber-500/15 text-amber-700 dark:text-amber-300"
                                : "bg-blue-500/15 text-blue-700 dark:text-blue-300"
                    )}
                >
                    {project.status}
                </span>
            </div>

            <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white sm:text-2xl">
                        {project.name}
                    </h3>
                    <span className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                        {project.category}
                    </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                    {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-white/10 dark:text-neutral-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
                    <span>Duration: {project.duration}</span>
                    <span>Role: {project.role}</span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98] dark:bg-white dark:text-neutral-900"
                        >
                            Live Demo
                            <ExternalLink size={14} />
                        </Link>
                    )}
                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/10"
                        >
                            <Github size={14} />
                            Code
                        </Link>
                    )}

                    <button
                        type="button"
                        onClick={() => setIsExpanded((prev) => !prev)}
                        aria-expanded={isExpanded}
                        aria-controls={`project-details-${project.id}`}
                        className="ml-auto inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:text-neutral-200 dark:hover:bg-white/10 dark:focus-visible:ring-white"
                    >
                        {isExpanded ? "Hide Details" : "View Case Study"}
                        <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-flex"
                        >
                            <ChevronDown size={16} />
                        </motion.span>
                    </button>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            id={`project-details-${project.id}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="mt-6 space-y-6 border-t border-black/5 pt-6 dark:border-white/10">
                                <DetailBlock title="Key Features" items={project.keyFeatures} />
                                <DetailBlock title="Technical Challenges" items={project.technicalChallenges} />
                                <DetailText title="Solution Implemented" text={project.solutionImplemented} />
                                <DetailBlock title="Performance Improvements" items={project.performanceImprovements} />
                                <DetailBlock title="SEO Improvements" items={project.seoImprovements} />
                                <DetailText title="Responsive Support" text={project.responsiveSupport} />
                                <DetailText title="Accessibility Support" text={project.accessibilitySupport} />
                                <DetailBlock title="Architecture Highlights" items={project.architectureHighlights} />

                                <div className="rounded-2xl bg-neutral-900/5 p-5 dark:bg-white/5">
                                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Case Study</h4>
                                    <div className="mt-3 space-y-3">
                                        <DetailText title="Problem" text={project.caseStudy.problem} compact />
                                        <DetailText title="Solution" text={project.caseStudy.solution} compact />
                                        <DetailText title="Implementation" text={project.caseStudy.implementation} compact />
                                        <DetailText title="Result" text={project.caseStudy.result} compact />
                                        <DetailText title="What I Learned" text={project.caseStudy.learned} compact />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.article>
    );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
    return (
        <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{title}</h4>
            <ul className="mt-2 space-y-1.5">
                {items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function DetailText({ title, text, compact }: { title: string; text: string; compact?: boolean }) {
    return (
        <div>
            <h4 className={cn("font-semibold text-neutral-900 dark:text-white", compact ? "text-xs uppercase tracking-wide" : "text-sm")}>
                {title}
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{text}</p>
        </div>
    );
}