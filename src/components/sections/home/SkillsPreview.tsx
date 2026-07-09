import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/animations/Motion";
import { skillCategories } from "@/content/home";

export function SkillsPreview() {
    return (
        <section id="skills" aria-label="Skills" className="py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="Skills"
                    title="A stack built for speed, scale, and search."
                    description="Tools I reach for often, grouped by what they're actually for."
                />

                <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <StaggerItem
                                key={category.label}
                                className="rounded-2xl border border-border bg-surface p-6"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">
                                    {category.label}
                                </h3>
                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-foreground"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </StaggerItem>
                        );
                    })}
                </StaggerGroup>
            </Container>
        </section>
    );
}