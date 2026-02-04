"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native WordRotate - Rotating word animation
 */
export const WordRotate = React.forwardRef(({ words = ["Word 1", "Word 2"], duration = 2500, className, ...props }, ref) => {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, duration);
        return () => clearInterval(interval);
    }, [words.length, duration]);
    return (_jsx("div", { ref: ref, className: cn("relative inline-block h-auto", className), ...props, children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.span, { initial: { opacity: 0, y: 20, rotateX: 90 }, animate: { opacity: 1, y: 0, rotateX: 0 }, exit: { opacity: 0, y: -20, rotateX: -90 }, transition: { duration: 0.3 }, className: "inline-block", children: words[index] }, words[index]) }) }));
});
WordRotate.displayName = "WordRotate";
