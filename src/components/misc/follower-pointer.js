"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useMotionValue } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native FollowerPointer - Custom content following cursor
 */
export const FollowerPointer = React.forwardRef(({ children, cardContent, className, ...props }, ref) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isInside, setIsInside] = React.useState(false);
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
    };
    return (_jsxs("div", { ref: ref, onMouseMove: handleMouseMove, onMouseEnter: () => setIsInside(true), onMouseLeave: () => setIsInside(false), className: cn("relative cursor-none", className), ...props, children: [_jsx(motion.div, { className: "pointer-events-none absolute z-50 rounded-xl bg-[hsl(var(--primary))]/10 backdrop-blur-sm p-2 border border-[hsl(var(--primary))]/20", style: {
                    x,
                    y,
                    opacity: isInside ? 1 : 0,
                    scale: isInside ? 1 : 0,
                }, transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 300,
                }, children: cardContent }), children] }));
});
FollowerPointer.displayName = "FollowerPointer";
