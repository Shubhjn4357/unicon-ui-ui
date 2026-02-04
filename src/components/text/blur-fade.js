"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native BlurFade - Blur fade-in animation
 */
export const BlurFade = React.forwardRef(({ children, delay = 0, duration = 0.4, yOffset = 6, blur = "6px", className, ...props }, ref) => {
    return (_jsx(motion.div, { ref: ref, initial: { opacity: 0, y: yOffset, filter: `blur(${blur})` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, transition: { duration, delay }, className: cn(className), ...props, children: children }));
});
BlurFade.displayName = "BlurFade";
