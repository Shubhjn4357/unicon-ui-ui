"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useMotionValue, useSpring } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native Lens - Magnifying glass effect
 */
export const Lens = React.forwardRef(({ children, lensSize = 150, magnification = 1.5, className, ...props }, _ref) => {
    const containerRef = React.useRef(null);
    const [isHovering, setIsHovering] = React.useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 300 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);
    const handleMouseMove = (e) => {
        if (!containerRef.current)
            return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };
    return (_jsxs("div", { ref: containerRef, onMouseMove: handleMouseMove, onMouseEnter: () => setIsHovering(true), onMouseLeave: () => setIsHovering(false), className: cn("relative overflow-hidden", className), ...props, children: [children, isHovering && (_jsx(motion.div, { className: "pointer-events-none absolute rounded-full border-2 border-primary/50 backdrop-blur-sm", style: {
                    width: lensSize,
                    height: lensSize,
                    left: x,
                    top: y,
                    x: `-${lensSize / 2}px`,
                    y: `-${lensSize / 2}px`,
                }, initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.5 } }))] }));
});
Lens.displayName = "Lens";
