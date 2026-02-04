"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native Card Component
 */
export const Card = React.forwardRef(({ children, hover = false, glass = false, className, ...props }, ref) => {
    return (_jsx(motion.div, { ref: ref, className: cn("rounded-(--radius) border border-border bg-card p-6 shadow-sm transition-all duration-200", hover && "hover:shadow-md hover:border-primary/20", "unicorn-card", className), whileHover: hover ? { y: -2, scale: 1.01 } : undefined, transition: { type: "spring", stiffness: 400, damping: 17 }, ...props, children: children }));
});
Card.displayName = "Card";
export const CardHeader = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("flex flex-col space-y-1.5", className), ...props, children: children }));
});
CardHeader.displayName = "CardHeader";
export const CardTitle = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("h3", { ref: ref, className: cn("text-2xl font-semibold leading-none tracking-tight text-[hsl(var(--foreground))]", className), ...props, children: children }));
});
CardTitle.displayName = "CardTitle";
export const CardDescription = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("p", { ref: ref, className: cn("text-sm text-muted-foreground", className), ...props, children: children }));
});
CardDescription.displayName = "CardDescription";
export const CardContent = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("pt-0", className), ...props, children: children }));
});
CardContent.displayName = "CardContent";
export const CardFooter = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("flex items-center pt-4", className), ...props, children: children }));
});
CardFooter.displayName = "CardFooter";
