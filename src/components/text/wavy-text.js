"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native WavyText - Wave text animation
 */
export const WavyText = React.forwardRef(({ text, delay = 0, duration = 0.5, className, ...props }, ref) => {
    const letters = text.split("");
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: i * delay },
        }),
    };
    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    };
    return (_jsx(motion.div, { ref: ref, style: { display: "flex", overflow: "hidden" }, variants: container, initial: "hidden", animate: "visible", className: cn("justify-center", className), ...props, children: letters.map((letter, index) => (_jsx(motion.span, { variants: child, children: letter === " " ? "\u00A0" : letter }, index))) }));
});
WavyText.displayName = "WavyText";
