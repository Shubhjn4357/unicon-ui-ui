"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native Spotlight

 - Mouse-following spotlight beam
 */
export const Spotlight = React.forwardRef(({ size = 600, color = "hsl(var(--primary) / 0.15)", className, ...props }, ref) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 300 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);
    const background = useMotionTemplate `
      radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 80%)
    `;
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };
    return (_jsx("div", { ref: ref, onMouseMove: handleMouseMove, className: cn("group relative", className), ...props, children: _jsx(motion.div, { className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100", style: { background } }) }));
});
Spotlight.displayName = "Spotlight";
