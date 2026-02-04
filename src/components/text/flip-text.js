"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native FlipText - Flip text animation
 */
export const FlipText = React.forwardRef(({ word = "Flip Text", duration = 0.5, delayMultiple = 0.08, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("flex justify-center space-x-2", className), ...props, children: _jsx(AnimatePresence, { mode: "wait", children: word.split("").map((char, i) => (_jsx(motion.span, { initial: { opacity: 0, rotateX: -90 }, animate: { opacity: 1, rotateX: 0 }, exit: { opacity: 0, rotateX: 90 }, transition: { duration, delay: i * delayMultiple }, className: "origin-center drop-shadow-sm", children: char }, i))) }) }));
});
FlipText.displayName = "FlipText";
