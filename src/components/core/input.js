"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native Input Component
 * Built without shadcn/Radix - pure TypeScript with Framer Motion
 * Uses theme variables: brand, accent, radius, spacing
 */
export const Input = React.forwardRef(({ size = "md", error, leftIcon, rightIcon, label, className, id, ...props }, ref) => {
    const inputId = id || `input-${React.useId()}`;
    const sizeStyles = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-5 text-lg",
    };
    const baseStyles = "w-full rounded-(--radius) border-2 border-border bg-card text-foreground transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50";
    const errorStyles = error ? "border-red-500 focus-visible:ring-red-500" : "";
    return (_jsxs("div", { className: "w-full space-y-1", children: [label && (_jsx("label", { htmlFor: inputId, className: "text-sm font-medium text-foreground", children: label })), _jsxs("div", { className: "relative", children: [leftIcon && (_jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: leftIcon })), _jsx(motion.input, { ref: ref, id: inputId, className: cn(baseStyles, sizeStyles[size], errorStyles, leftIcon && "pl-10", rightIcon && "pr-10", "unicorn-input", className), whileFocus: { scale: 1.01 }, transition: { type: "spring", stiffness: 400, damping: 17 }, ...props }), rightIcon && (_jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: rightIcon }))] }), error && _jsx("p", { className: "text-sm text-red-500", children: error })] }));
});
Input.displayName = "Input";
