export interface NavLink {
    label: string;
    href: string;
    id: string;
}

export const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/", id: "home" },
    { label: "About", href: "/about", id: "about" },
    { label: "Projects", href: "/projects", id: "projects" },
    { label: "Experience", href: "/experience", id: "experience" },
    { label: "Contact", href: "/contact", id: "contact" },
];

export const SOCIAL_LINKS = {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    resume: "/resume.pdf",
};