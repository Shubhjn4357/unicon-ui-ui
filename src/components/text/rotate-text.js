"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native RotateText - Rotating text animation
 */
export const RotateText = React.forwardRef(({ words, duration = 3000, className, ...props }, ref) => {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, duration);
        return () => clearInterval(interval);
    }, [words, duration]);
    return (_jsx("span", { ref: ref, className: cn("inline-flex w-max", className), ...props, children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.span, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: "inline-block", children: words[index] }, index) }) }));
});
RotateText.displayName = "RotateText";
