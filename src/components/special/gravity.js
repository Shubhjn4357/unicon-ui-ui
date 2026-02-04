"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Gravity - Elements falling with simulated physics
 */
export const Gravity = React.forwardRef(({ items, className, ...props }, ref) => {
    const containerRef = React.useRef(null);
    return (_jsxs("div", { ref: ref, className: cn("relative h-[400px] w-full border border-border overflow-hidden bg-card rounded-(--radius)", className), ...props, children: [items.map((item, i) => (_jsx(motion.div, { drag: true, dragConstraints: containerRef, className: "absolute rounded-full bg-primary p-4 text-primary-foreground shadow-lg cursor-grab active:cursor-grabbing", initial: { y: -100, x: Math.random() * 400 }, animate: { y: 350 - Math.random() * 50 }, transition: {
                    type: "spring",
                    damping: 10,
                    stiffness: 50,
                    mass: 2,
                    delay: i * 0.1,
                }, whileDrag: { scale: 1.1 }, children: item }, `gravity-item-${i}`))), _jsx("div", { ref: containerRef, className: "absolute inset-0 pointer-events-none" })] }));
});
Gravity.displayName = "Gravity";
