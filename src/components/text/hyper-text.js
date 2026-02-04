"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
/**
 * Native HyperText - Scramble text animation
 * Pure Framer Motion, no dependencies
 */
export const HyperText = React.forwardRef(({ text = "Hyper Text", duration = 800, delay = 0, className, ...props }, ref) => {
    const [displayText, setDisplayText] = React.useState(text.split(""));
    // const [isAnimating, setIsAnimating] = React.useState(false)
    const iterations = React.useRef(0);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            // setIsAnimating(true)
            iterations.current = 0;
            const interval = setInterval(() => {
                setDisplayText((prev) => prev.map((_, index) => {
                    if (index < iterations.current) {
                        return text[index];
                    }
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                }));
                if (iterations.current >= text.length) {
                    clearInterval(interval);
                    // setIsAnimating(false)
                }
                iterations.current += 1 / 3;
            }, duration / text.length / 3);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, duration, delay]);
    return (_jsx("span", { ref: ref, className: cn("inline-block", className), ...props, children: _jsx(AnimatePresence, { mode: "wait", children: displayText.map((char, i) => (_jsx(motion.span, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "inline-block", children: char === " " ? "\u00A0" : char }, i))) }) }));
});
HyperText.displayName = "HyperText";
