import { Container } from "@/components/ui/Container";
import { stats } from "@/content/home";
import { StatCounter } from "./StatCounter";

export function Stats() {
    return (
        <section aria-label="Key statistics" className="border-y border-border bg-surface/40 py-14">
            <Container>
                <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center sm:text-left">
                            <dt className="sr-only">{stat.label}</dt>
                            <dd>
                                <StatCounter value={stat.value} />
                                <p className="mt-2 text-sm text-muted">{stat.label}</p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </Container>
        </section>
    );
}