"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native Button Component
 * Uses theme variables: brand, accent, radius, spacing
 */
export const buttonVariants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border-2 border-border bg-background hover:bg-accent",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    link: "text-primary underline-offset-4 hover:underline",
};
export const Button = React.forwardRef(({ children, variant = "default", size = "md", isLoading = false, leftIcon, rightIcon, className, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    const sizeStyles = {
        sm: "h-8 px-3 text-sm rounded-[calc(var(--radius)*0.75)]",
        md: "h-10 px-4 text-base rounded-[var(--radius)]",
        lg: "h-12 px-6 text-lg rounded-[calc(var(--radius)*1.25)]",
        icon: "h-10 w-10 rounded-[var(--radius)]",
    };
    const glassStyles = "glass-button backdrop-blur-md";
    return (_jsxs(motion.button, { ref: ref, className: cn(baseStyles, buttonVariants[variant], sizeStyles[size], "unicorn-button", className), whileHover: { scale: disabled || isLoading ? 1 : 1.02 }, whileTap: { scale: disabled || isLoading ? 1 : 0.98 }, transition: { type: "spring", stiffness: 400, damping: 17 }, disabled: disabled || isLoading, ...props, children: [isLoading ? (_jsxs("svg", { className: "h-4 w-4 animate-spin", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })) : (leftIcon), children, !isLoading && rightIcon] }));
});
Button.displayName = "Button";
