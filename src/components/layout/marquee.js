"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn, prefersReducedMotion } from "../../lib/utils";
/**
 * Native Marquee - Infinite horizontal scrolling
 * Pure CSS + Framer Motion, no dependencies
 */
export const Marquee = React.forwardRef(({ children, pauseOnHover = false, reverse = false, fade = false, speed = "normal", repeat = 2, className, ...props }, ref) => {
    const prefersReduced = prefersReducedMotion();
    const speedConfig = {
        slow: 60,
        normal: 40,
        fast: 20,
    };
    const duration = speedConfig[speed];
    return (_jsxs("div", { ref: ref, className: cn("group relative flex overflow-hidden", pauseOnHover && "hover:pause", className), ...props, children: [Array.from({ length: repeat }).map((_, i) => (_jsx(motion.div, { className: "flex min-w-full shrink-0 items-center justify-around gap-4", animate: prefersReduced
                    ? {}
                    : {
                        x: reverse ? ["0%", "100%"] : ["0%", "-100%"],
                    }, transition: {
                    x: {
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        duration,
                        ease: "linear",
                    },
                }, children: children }, i))), fade && (_jsxs(_Fragment, { children: [_jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background to-transparent" }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background to-transparent" })] }))] }));
});
Marquee.displayName = "Marquee";
