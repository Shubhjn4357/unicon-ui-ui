"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
export const AnimatedCircularProgressBar = React.forwardRef(({ value, max = 100, size = 120, strokeWidth = 10, showValue = true, className, ...props }, ref) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const percentage = (value / max) * 100;
    const offset = circumference - (percentage / 100) * circumference;
    return (_jsxs("div", { ref: ref, className: cn("relative inline-flex items-center justify-center", className), ...props, children: [_jsxs("svg", { width: size, height: size, className: "-rotate-90", children: [_jsx("circle", { cx: size / 2, cy: size / 2, r: radius, fill: "none", stroke: "currentColor", strokeWidth: strokeWidth, className: "text-surface-elevated" }), _jsx(motion.circle, { cx: size / 2, cy: size / 2, r: radius, fill: "none", stroke: "currentColor", strokeWidth: strokeWidth, strokeLinecap: "round", strokeDasharray: circumference, className: "text-[hsl(var(--primary))]", initial: { strokeDashoffset: circumference }, animate: { strokeDashoffset: offset }, transition: { duration: 1, ease: "easeInOut" } })] }), showValue && (_jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsxs("span", { className: "text-2xl font-semibold", children: [Math.round(percentage), "%"] }) }))] }));
});
AnimatedCircularProgressBar.displayName = "AnimatedCircularProgressBar";
