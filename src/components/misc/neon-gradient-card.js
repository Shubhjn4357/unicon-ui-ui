"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native NeonGradientCard - Animated neon border effect
 */
export const NeonGradientCard = React.forwardRef(({ children, borderSize = 2, borderRadius = 20, neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
}, className, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn("relative", className), style: {
            padding: borderSize,
            borderRadius: `${borderRadius}px`,
        }, ...props, children: [_jsx(motion.div, { className: "absolute inset-0 rounded-[inherit]", style: {
                    background: `conic-gradient(from 0deg, ${neonColors.firstColor}, ${neonColors.secondColor}, ${neonColors.firstColor})`,
                }, animate: {
                    rotate: 360,
                }, transition: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                } }), _jsx("div", { className: "relative z-10 h-full rounded-[inherit] bg-[hsl(var(--card))] p-6", children: children })] }));
});
NeonGradientCard.displayName = "NeonGradientCard";
