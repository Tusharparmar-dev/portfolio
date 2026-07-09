import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Motion";

export function ContactCTA() {
    return (
        <section id="contact" aria-label="Contact" className="relative overflow-hidden py-24 sm:py-32">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />
            </div>

            <Container>
                <Reveal className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground font-heading sm:text-4xl">
                        Let&apos;s build your next interface.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                        I&apos;m currently open to new opportunities and freelance work.
                        If you need a frontend developer who ships production-ready
                        interfaces, let&apos;s talk.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Button
                            href="mailto:hello@tusharparmar.dev"
                            size="lg"
                            icon={<Mail className="h-4 w-4" aria-hidden="true" />}
                        >
                            Get In Touch
                        </Button>
                        <Button
                            href="/projects"
                            variant="outline"
                            size="lg"
                            icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                        >
                            See My Work
                        </Button>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}