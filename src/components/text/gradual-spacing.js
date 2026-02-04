"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native GradualSpacing - Animate letter spacing
 */
export const GradualSpacing = React.forwardRef(({ text, duration = 0.5, delayMultiple = 0.04, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("flex justify-center space-x-1", className), ...props, children: _jsx(AnimatePresence, { children: text.split("").map((char, i) => (_jsx(motion.h1, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 20 }, transition: { duration, delay: i * delayMultiple }, className: cn("drop-shadow-sm"), children: char === " " ? _jsx("span", { children: "\u00A0" }) : char }, i))) }) }));
});
GradualSpacing.displayName = "GradualSpacing";
