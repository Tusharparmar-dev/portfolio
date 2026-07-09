import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/animations/Motion";
import { hireReasons } from "@/content/home";

export function WhyHireMe() {
    return (
        <section id="why-hire-me" aria-label="Why hire me" className="py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="Why Hire Me"
                    title="What you actually get when we work together."
                    align="center"
                />

                <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {hireReasons.map((reason) => {
                        const Icon = reason.icon;
                        return (
                            <StaggerItem
                                key={reason.title}
                                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-foreground font-heading">
                                    {reason.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted">
                                    {reason.description}
                                </p>
                            </StaggerItem>
                        );
                    })}
                </StaggerGroup>
            </Container>
        </section>
    );
}