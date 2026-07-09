import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Motion";
import { experience } from "@/content/home";

export function ExperiencePreview() {
    return (
        <section id="experience" aria-label="Experience" className="py-24 sm:py-32">
            <Container>
                <SectionHeading eyebrow="Experience" title="Where I've put this into practice." />

                <div className="relative mt-14 space-y-10 border-l border-border pl-8">
                    {experience.map((item) => (
                        <Reveal key={item.role}>
                            <div className="relative">
                                <span
                                    aria-hidden="true"
                                    className="absolute -left-[2.35rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-primary"
                                />
                                <h3 className="text-lg font-semibold text-foreground font-heading">
                                    {item.role}
                                </h3>
                                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                                    <Briefcase className="h-4 w-4" aria-hidden="true" />
                                    {item.company} · {item.duration}
                                </p>
                                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                                    {item.summary}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        href="/experience"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80"
                    >
                        View Full Experience
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}