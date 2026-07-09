import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/animations/Motion";
import { workflowSteps } from "@/content/home";

export function Workflow() {
    return (
        <section id="workflow" aria-label="Development workflow" className="py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="How I Work"
                    title="A process built for production, not just prototypes."
                    description="From architecture to shipping — the same five steps, every time."
                />

                <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
                    <div
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block"
                    />
                    {workflowSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <StaggerItem key={step.title} className="relative">
                                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary">
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <span className="mt-4 block text-xs font-medium uppercase tracking-[0.2em] text-muted">
                                    Step {index + 1}
                                </span>
                                <h3 className="mt-2 text-lg font-semibold text-foreground font-heading">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted">
                                    {step.description}
                                </p>
                            </StaggerItem>
                        );
                    })}
                </StaggerGroup>
            </Container>
        </section>
    );
}