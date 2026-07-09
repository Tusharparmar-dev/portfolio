import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
}

interface LinkButtonProps extends BaseProps {
    href: string;
    external?: boolean;
    onClick?: never;
    type?: never;
}

interface NativeButtonProps extends BaseProps {
    href?: undefined;
    onClick?: () => void;
    type?: "button" | "submit";
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_8px_30px_-8px_var(--color-primary)]",
    secondary: "bg-surface-elevated text-foreground border border-border hover:border-primary/40",
    outline: "bg-transparent text-foreground border border-border hover:border-primary/50 hover:text-primary",
    ghost: "bg-transparent text-muted hover:text-foreground",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "h-9 px-4 text-sm gap-1.5",
    md: "h-11 px-6 text-sm gap-2",
    lg: "h-14 px-8 text-base gap-2.5",
};

export function Button(props: ButtonProps) {
    const { children, variant = "primary", size = "md", className, icon, iconPosition = "right" } = props;

    const classes = cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className
    );

    const content = (
        <>
            {icon && iconPosition === "left" ? icon : null}
            {children}
            {icon && iconPosition === "right" ? icon : null}
        </>
    );

    if (props.href) {
        const { href, external } = props;

        if (external) {
            return (
                <Link href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                    {content}
                </Link>
            );
        }

        return (
            <Link href={href} className={classes}>
                {content}
            </Link>
        );
    }

    const { onClick, type = "button" } = props as NativeButtonProps;

    return (
        <button type={type} onClick={onClick} className={classes}>
            {content}
        </button>
    );
}