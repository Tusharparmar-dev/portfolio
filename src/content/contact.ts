export interface FAQItem {
    question: string;
    answer: string;
}

export interface ReasonItem {
    title: string;
    description: string;
}

export const contactHero = {
    eyebrow: "Get In Touch",
    heading: "Let's talk about your next project.",
    description:
        "I'm a Frontend Developer available for new opportunities. Whether it's a full-time role or a project collaboration, I'd love to hear from you.",
    availability: "Available for opportunities",
    responseTime: "Typically responds within 24 hours",
};

export const contactInfo = {
    email: "hello@tusharparmar.dev",
    phone: "",
    location: "India",
    timezone: "IST (UTC+5:30)",
    availability: "Open to full-time & freelance work",
};

export const reasonsToWork: ReasonItem[] = [
    { title: "Fast Learner", description: "I pick up new tools and technologies quickly and apply them effectively." },
    { title: "Clean Code", description: "I write maintainable, well-structured code that's easy to build on." },
    { title: "Responsive Development", description: "I build interfaces that work seamlessly across every screen size." },
    { title: "SEO Focus", description: "I implement technical SEO fundamentals so products are discoverable." },
    { title: "Performance Optimization", description: "I prioritize fast load times and smooth interactions." },
    { title: "AI-Assisted Development", description: "I use AI tools to move faster while reviewing and owning every solution." },
    { title: "Team Collaboration", description: "I communicate clearly and work well with designers and engineers." },
];

export const faqs: FAQItem[] = [
    {
        question: "Are you available for freelance work?",
        answer: "Yes, I'm open to freelance and contract frontend development projects.",
    },
    {
        question: "Are you available for full-time roles?",
        answer: "Yes, I'm actively open to full-time Frontend Developer opportunities.",
    },
    {
        question: "Do you work remotely?",
        answer: "Yes, I work remotely and I'm comfortable collaborating across time zones.",
    },
    {
        question: "What's your typical response time?",
        answer: "I usually respond within 24 hours on weekdays.",
    },
    {
        question: "What's your preferred way to communicate?",
        answer: "Email is best to start, and I'm happy to move to a call or chat platform from there.",
    },
];