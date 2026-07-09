import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "secondary" | "outline" | "success";

const variantStyles: Record<BadgeVariant, string> = {
    primary: "bg-primary/10 text-primary border border-primary/20",
    secondary: "bg-surface-elevated text-foreground border border-border",
    outline: "bg-transparent text-muted border border-border",
    success: "bg-success/10 text-success border border-success/20",
};

interface BadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
    icon?: ReactNode;
    className?: string;
}

export function Badge({ children, variant = "secondary", icon, className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
                variantStyles[variant],
                className
            )}
        >
            {icon}
            {children}
        </span>
    );
}