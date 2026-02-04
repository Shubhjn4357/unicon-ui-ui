"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * GlowButton - Button with animated glow effect
 * Features pulsing glow animation with customizable color and intensity
 */
export const GlowButton = React.forwardRef(({ children, className, glowColor = "#22c55e", glowIntensity = 20, ...props }, ref) => {
    return (_jsxs(motion.button, { ref: ref, className: cn("relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg px-8 font-medium", "bg-linear-to-r from-brand to-green-600 text-white shadow-lg", "transition-all duration-300 hover:scale-105 hover:shadow-xl", className), whileTap: { scale: 0.95 }, ...props, children: [_jsx(motion.div, { className: "absolute inset-0 -z-10 rounded-lg blur-xl", style: {
                    background: glowColor,
                }, animate: {
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.1, 1],
                }, transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                } }), _jsx("span", { className: "relative z-10", children: children }), _jsx(motion.div, { className: "absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent", initial: { x: "-100%" }, animate: { x: "200%" }, transition: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    repeatDelay: 1,
                } })] }));
});
GlowButton.displayName = "GlowButton";
