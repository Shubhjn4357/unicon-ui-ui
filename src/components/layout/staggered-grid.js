"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * StaggeredGrid - Grid with stagger animation for children
 * Features framer-motion stagger animation with customizable columns and timing
 */
export const StaggeredGrid = React.forwardRef(({ children, columns = 3, gap = "1rem", staggerDelay = 0.1, className }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };
    return (_jsx(motion.div, { ref: ref, className: cn("grid w-full", className), style: {
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gap,
        }, variants: container, initial: "hidden", animate: "show", children: childrenArray.map((child, index) => (_jsx(motion.div, { variants: item, transition: { duration: 0.5, ease: "easeOut" }, children: child }, index))) }));
});
StaggeredGrid.displayName = "StaggeredGrid";
