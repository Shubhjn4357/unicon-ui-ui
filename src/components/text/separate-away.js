"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native SeparateAway - Text separates to reveal content
 */
export const SeparateAway = React.forwardRef(({ upperText, lowerText, duration = 1.5, className, children, ...props }, ref) => {
    const [separate, setSeparate] = React.useState(false);
    return (_jsxs("div", { ref: ref, className: cn("relative grid place-items-center overflow-hidden", className), onMouseEnter: () => setSeparate(true), onMouseLeave: () => setSeparate(false), ...props, children: [_jsx(motion.h1, { className: "absolute z-10 origin-bottom", animate: { y: separate ? -50 : 0, opacity: separate ? 0 : 1 }, transition: { duration: 0.5, ease: "easeInOut" }, children: upperText }), _jsx(motion.h1, { className: "absolute z-10 origin-top", animate: { y: separate ? 50 : 0, opacity: separate ? 0 : 1 }, transition: { duration: 0.5, ease: "easeInOut" }, children: lowerText }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: separate ? 1 : 0 }, transition: { duration: 0.5, delay: 0.2 }, className: "z-0", children: children })] }));
});
SeparateAway.displayName = "SeparateAway";
