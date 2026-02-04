"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native OrbitingCircles - Animated orbiting elements
 * Pure CSS animations + Framer Motion
 */
export const OrbitingCircles = React.forwardRef(({ radius = 100, duration = 20, delay = 0, reverse = false, icons = [], iconSize, // Destructure to prevent DOM warning
className, children, ...props }, ref) => {
    const content = icons.length > 0 ? icons : React.Children.toArray(children);
    return (_jsxs("div", { ref: ref, className: cn("relative flex h-full w-full items-center justify-center", className), ...props, children: [_jsx("div", { className: "absolute z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-card", children: _jsx("div", { className: "h-8 w-8 rounded-full bg-primary" }) }), content.map((item, i) => {
                const angle = (360 / content.length) * i;
                const delayCalc = delay + (i * duration) / content.length;
                return (_jsx(motion.div, { className: "absolute flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-md", style: {
                        transformOrigin: "0 0",
                    }, animate: {
                        rotate: reverse ? -360 : 360,
                    }, transition: {
                        duration,
                        delay: delayCalc,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }, initial: {
                        x: radius * Math.cos((angle * Math.PI) / 180),
                        y: radius * Math.sin((angle * Math.PI) / 180),
                    }, children: _jsx("div", { style: {
                            transform: `rotate(${reverse ? 360 : -360}deg)`,
                        }, children: item }) }, i));
            })] }));
});
OrbitingCircles.displayName = "OrbitingCircles";
