"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
export function LineShadowText({ children, shadowColor = "black", className, ...props }) {
    return (_jsxs(motion.h1, { className: cn("relative inline-block text-(--shadow-color)", className), style: {
            "--shadow-color": shadowColor,
        }, ...props, children: [_jsx("span", { className: "absolute top-0 left-0 -z-10 translate-x-0.5 translate-y-0.5 text-(--shadow-color) opacity-30 blur-[2px]", children: children }), _jsx("span", { className: "absolute top-0 left-0 -z-20 translate-x-1 translate-y-1 text-(--shadow-color) opacity-20 blur-xs", children: children }), _jsx("span", { className: "absolute left-[0.3em] top-[0.3em] -z-30 block h-full w-full text-(--shadow-color) opacity-10 blur-[6px]", children: children }), _jsx("span", { className: "relative z-10", children: children })] }));
}
