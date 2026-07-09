import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Motion";

export function AboutPreview() {
    return (
        <section id="about" aria-label="About me" className="py-24 sm:py-32">
            <Container>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <Reveal>
                        <SectionHeading
                            eyebrow="About"
                            title="I care about how software feels, not just how it looks."
                        />
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                            I&apos;m a BCA graduate and frontend developer with 1+ years of
                            hands-on experience turning designs into fast, accessible,
                            production-ready interfaces. My focus sits at the intersection
                            of clean engineering and thoughtful UX — code that scales, and
                            screens that feel effortless to use.
                        </p>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                            Every project I ship is measured against the same bar:
                            performance, accessibility, and technical SEO baked in from the
                            first commit — not patched on at the end.
                        </p>
                        <Link
                            href="/about"
                            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                        >
                            More about me
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-2xl border border-border bg-surface p-6">
                                <p className="text-sm text-muted">Education</p>
                                <p className="mt-1 text-lg font-medium text-foreground font-heading">
                                    BCA Graduate
                                </p>
                            </div>
                            <div className="rounded-2xl border border-border bg-surface p-6">
                                <p className="text-sm text-muted">Experience</p>
                                <p className="mt-1 text-lg font-medium text-foreground font-heading">
                                    1+ Years
                                </p>
                            </div>
                            <div className="rounded-2xl border border-border bg-surface p-6">
                                <p className="text-sm text-muted">Focus</p>
                                <p className="mt-1 text-lg font-medium text-foreground font-heading">
                                    Frontend Engineering
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}