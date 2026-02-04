"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
/**
 * Declarative fade-in animation with blur effect
 * Automatically respects user's reduced motion preferences
 */
export function FadeIn({ children, delay = 0, duration = 0.5, className }) {
    return (_jsx(motion.div, { initial: { opacity: 0, y: 10, filter: "blur(5px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, transition: {
            type: "spring",
            stiffness: 150,
            damping: 20,
            delay,
            duration,
        }, className: className, children: children }));
}
