import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
    className,
}: SectionHeadingProps) {
    return (
        <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground font-heading sm:text-4xl">
                {title}
            </h2>
            {description ? (
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
            ) : null}
        </div>
    );
}