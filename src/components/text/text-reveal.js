"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useInView } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native TextReveal - Scroll-based text reveal animation
 * Using Framer Motion's useInView hook
 */
export const TextReveal = React.forwardRef(({ text, children, className, ...props }, _) => {
    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const content = text || children;
    const words = typeof content === "string" ? content.split(" ") : [];
    return (_jsx("div", { ref: containerRef, className: cn("overflow-hidden", className), ...props, children: _jsxs(motion.div, { initial: { opacity: 0 }, animate: isInView ? { opacity: 1 } : {}, transition: { duration: 0.5 }, children: [words.map((word, i) => (_jsx(motion.span, { className: "inline-block mr-2", initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.5, delay: i * 0.05 }, children: word }, i))), typeof children !== "string" && children] }) }));
});
TextReveal.displayName = "TextReveal";
