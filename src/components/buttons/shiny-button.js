"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native ShinyButton - Metallic shine reflection effect
 */
export const ShinyButton = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsxs(motion.button, { ref: ref, className: cn("group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-lg bg-linear-to-r from-brand to-accent px-8 font-medium text-white shadow-lg transition-transform", className), whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, ...props, children: [_jsx("span", { className: "relative z-10", children: children }), _jsx("div", { className: "absolute inset-0 -translate-x-full transform-gpu opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100", children: _jsx("div", { className: "h-full w-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" }) })] }));
});
ShinyButton.displayName = "ShinyButton";
