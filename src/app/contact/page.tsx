import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { SocialLinks } from "@/components/sections/contact/SocialLinks";
import { WhyWorkWithMe } from "@/components/sections/contact/WhyWorkWithMe";
import { ContactFAQ } from "@/components/sections/contact/ContactFAQ";
import { ContactFinalCTA } from "@/components/sections/contact/ContactFinalCTA";
import { Container } from "@/components/ui/Container";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Tushar Parmar, a Frontend Developer available for full-time roles and freelance projects.",
    openGraph: {
        title: "Contact | Tushar Parmar",
        description:
            "Get in touch with Tushar Parmar, a Frontend Developer available for full-time roles and freelance projects.",
        type: "website",
    },
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <section className="pb-20 sm:pb-28">
                <Container>
                    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                        <ContactForm />
                        <div className="flex flex-col gap-6">
                            <ContactInfo />
                            <SocialLinks />
                        </div>
                    </div>
                </Container>
            </section>
            <WhyWorkWithMe />
            <ContactFAQ />
            <ContactFinalCTA />
        </>
    );
}