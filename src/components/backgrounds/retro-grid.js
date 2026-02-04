"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
// import { motion } from "framer-motion"
import { cn } from "../../lib/utils";
/**
 * Native RetroGrid - Animated 3D perspective grid background
 * Pure CSS perspective transform with wave animation
 */
export const RetroGrid = React.forwardRef(({ angle = 65, speed = 20, className, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn("pointer-events-none absolute inset-0 overflow-hidden opacity-50 perspective-[200px]", className), ...props, children: [_jsx("div", { className: "absolute inset-0 transform-[rotateX(var(--grid-angle))]", style: {
                    "--grid-angle": `${angle}deg`,
                }, children: _jsx("div", { className: "bg-repeat bg-size-[60px_60px] h-[300vh] inset-[0%_0px] ml-[-50%] origin-[100%_0_0] w-[600vw]", style: {
                        backgroundImage: `
                  linear-gradient(to right, rgba(var(--color-brand-rgb, 99, 102, 241), 0.3) 1px, transparent 0),
                  linear-gradient(to bottom, rgba(var(--color-brand-rgb, 99, 102, 241), 0.3) 1px, transparent 0)
                 
`,
                        animation: `retro-grid-wave ${speed}s linear infinite`,
                    } }) }), _jsx("div", { className: "absolute inset-0 bg-linear-to-t from-surface to-transparent opacity-80" })] }));
});
RetroGrid.displayName = "RetroGrid";
