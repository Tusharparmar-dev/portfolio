import { Github, Linkedin, Globe, Download } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/navigation";
import Link from "next/link";

export function SocialLinks() {
    const links = [
        { icon: Github, label: "GitHub", href: SOCIAL_LINKS.github, external: true },
        { icon: Linkedin, label: "LinkedIn", href: SOCIAL_LINKS.linkedin, external: true },
        { icon: Globe, label: "Portfolio", href: "/", external: false },
    ];

    return (
        <div className="rounded-3xl border border-black/5 bg-white/60 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:p-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Connect</h3>
            <div className="mt-6 flex flex-col gap-3">
                {links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer noopener" : undefined}
                        className="flex items-center gap-3 rounded-xl border border-black/5 px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/10"
                    >
                        <link.icon size={16} strokeWidth={1.75} />
                        {link.label}
                    </Link>
                ))}
                <Link
                    href={SOCIAL_LINKS.resume}
                    download
                    className="flex items-center gap-3 rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:opacity-90 dark:bg-white dark:text-neutral-900"
                >
                    <Download size={16} strokeWidth={1.75} />
                    Download Resume
                </Link>
            </div>
        </div >
    );
}