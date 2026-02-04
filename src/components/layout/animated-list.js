"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native AnimatedList - Stagger animation for list items
 */
export const AnimatedList = React.forwardRef(({ children, delay = 0, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("space-y-2", className), ...props, children: React.Children.map(children, (child, i) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, whileHover: { opacity: 1, x: 0, scale: 1.05 }, transition: { duration: 0.3, delay: delay + i * 0.1 }, children: child }))) }));
});
AnimatedList.displayName = "AnimatedList";
