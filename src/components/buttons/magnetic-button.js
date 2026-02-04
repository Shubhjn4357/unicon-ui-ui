"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useMotionValue, useSpring } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native MagneticButton - Mouse attraction effect
 */
export const MagneticButton = React.forwardRef(({ children, strength = 30, className, ...props }, _ref) => {
    const buttonRef = React.useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left - centerX;
        const mouseY = e.clientY - rect.top - centerY;
        x.set(mouseX / strength);
        y.set(mouseY / strength);
    };
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    return (_jsx(motion.button, { ref: buttonRef, className: cn("relative inline-flex items-center justify-center rounded-lg bg-[hsl(var(--primary))] px-6 py-2 font-medium text-white", className), style: { x: xSpring, y: ySpring }, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, ...props, children: _jsx("span", { className: "relative z-10", children: children }) }));
});
MagneticButton.displayName = "MagneticButton";
