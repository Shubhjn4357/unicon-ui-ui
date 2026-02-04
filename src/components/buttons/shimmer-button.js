"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native ShimmerButton - Shine/shimmer effect on hover
 */
export const ShimmerButton = React.forwardRef(({ children, className, shimmerColor = "hsla(var(--primary-foreground), 0.3)", shimmerSize = "200%", ...props }, ref) => {
    return (_jsxs(motion.button, { ref: ref, className: cn("group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-lg bg-[hsl(var(--primary))] px-8 font-medium text-primary-foreground transition-all duration-200", className), whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, ...props, children: [_jsx("span", { className: "relative z-10 inline-flex", children: children }), _jsx(motion.div, { className: "absolute inset-0 -translate-x-full", style: {
                    background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
                    width: shimmerSize,
                }, animate: {
                    translateX: ["-100%", "200%"],
                }, transition: {
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                } })] }));
});
ShimmerButton.displayName = "ShimmerButton";
