"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native TextAnimate - Various text entrance animations
 */
export const TextAnimate = React.forwardRef(({ text, type = "popIn", by = "character", duration = 0.5, delay = 0, className, ...props }, ref) => {
    const items = by === "character" ? text.split("") : text.split(" ");
    const variants = {
        popIn: {
            initial: { scale: 0, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
        },
        slideUp: {
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
        },
        fadeIn: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
        },
    };
    const currentVariant = variants[type];
    return (_jsx("div", { ref: ref, className: cn("inline-flex flex-wrap", className), ...props, children: items.map((item, i) => (_jsx(motion.span, { className: "inline-block", initial: currentVariant.initial, animate: currentVariant.animate, transition: {
                duration,
                delay: delay + i * 0.05,
            }, children: item === " " ? "\u00A0" : item }, i))) }));
});
TextAnimate.displayName = "TextAnimate";
