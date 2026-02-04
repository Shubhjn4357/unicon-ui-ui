"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native AnimatedGradientText - Animated gradient text
 * Pure CSS gradient animation
 */
export const AnimatedGradientText = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx(motion.span, { ref: ref, className: cn("inline-block bg-linear-to-r from-primary via-accent to-primary bg-size-[200%_auto] bg-clip-text text-transparent", className), animate: {
            backgroundPosition: ["0% center", "200% center"],
        }, transition: {
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
        }, style: {
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        }, ...props, children: children }));
});
AnimatedGradientText.displayName = "AnimatedGradientText";
export const AnimatedShinyText = React.forwardRef(({ children, shimmerWidth = 100, className, ...props }, ref) => {
    return (_jsxs("span", { ref: ref, className: cn("group relative inline-block overflow-hidden", className), ...props, children: [_jsx("span", { className: "relative z-10", children: children }), _jsx(motion.span, { className: "absolute inset-0 z-0 bg-linear-to-r from-transparent via-white/30 to-transparent", style: { width: `${shimmerWidth}%` }, animate: {
                    x: ["-100%", "200%"],
                }, transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                } })] }));
});
AnimatedShinyText.displayName = "AnimatedShinyText";
