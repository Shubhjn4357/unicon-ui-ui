"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native BentoGrid - Masonry-style grid layout
 */
export const BentoGrid = React.forwardRef(({ children, variant = "default", className, ...props }, ref) => {
    const variantClasses = {
        default: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        featured: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    };
    return (_jsx("div", { ref: ref, className: cn("grid w-full gap-4", variantClasses[variant], className), ...props, children: children }));
});
BentoGrid.displayName = "BentoGrid";
export const BentoCard = React.forwardRef(({ Icon, name, title, description, href, cta, background, featured, className, children, ...props }, ref) => {
    const content = (_jsxs(motion.div, { ref: ref, className: cn("group relative flex flex-col justify-between overflow-hidden rounded-(--radius) p-6", "bg-card transition-all duration-300", featured ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1", className), whileHover: { y: -4, scale: 1.01 }, transition: { type: "spring", stiffness: 400, damping: 17 }, ...props, children: [background && (_jsx("div", { className: "absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30", children: background })), _jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex flex-row items-center gap-2", children: [_jsx("div", { className: "rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-foreground", children: Icon && React.createElement(Icon, { className: "h-4 w-4" }) }), _jsx("h3", { className: "text-lg font-semibold text-foreground", children: name || title })] }), description && (_jsx("p", { className: "mt-2 max-w-lg text-sm text-muted-foreground", children: description })), children] }), cta && (_jsxs("div", { className: "mt-4 flex items-center gap-2 text-sm font-medium text-primary", children: [cta, _jsx(motion.div, { animate: { x: [0, 4, 0] }, transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 }, children: _jsx(ArrowRight, { className: "h-4 w-4" }) })] }))] })] }));
    if (href) {
        return (_jsx("a", { href: href, className: "block", children: content }));
    }
    return content;
});
BentoCard.displayName = "BentoCard";
