import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    { label: "GitHub", href: "https://github.com/", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
    { label: "Email", href: "mailto:hello@tusharparmar.dev", icon: Mail },
];

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-surface/40">
            <Container>
                <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-3">
                    <div>
                        <p className="text-lg font-semibold text-foreground font-heading">Tushar Parmar</p>
                        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                            Frontend Developer building fast, accessible, production-ready
                            interfaces with React and Next.js.
                        </p>
                    </div>

                    <nav aria-label="Footer navigation">
                        <p className="text-sm font-semibold uppercase tracking-wide text-muted">Navigate</p>
                        <ul className="mt-4 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-muted">Connect</p>
                        <div className="mt-4 flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                const isExternal = social.href.startsWith("http");
                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                        aria-label={social.label}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary/40 hover:text-primary"
                                    >
                                        <Icon className="h-4 w-4" aria-hidden="true" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-xs text-muted sm:flex-row">
                    <p>© {year} Tushar Parmar. All rights reserved.</p>
                    <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
                </div>
            </Container>
        </footer>
    );
}