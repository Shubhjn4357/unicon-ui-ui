"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native GooeyButton - Gooey SVG filter effect
 */
export const GooeyButton = React.forwardRef(({ children, className, backgroundColor = "#3b82f6", foregroundColor = "#ffffff", ...props }, ref) => {
    return (_jsxs("button", { ref: ref, className: cn("relative overflow-hidden rounded-lg bg-[hsl(var(--primary))] px-8 py-3 font-bold text-white transition-all hover:bg-[hsl(var(--primary))]/90", className), style: { filter: "url(#gooey)" }, ...props, children: [_jsx("span", { className: "relative z-10", children: children }), _jsx("div", { className: "absolute inset-0 bg-white/20" }), _jsx("svg", { className: "hidden", children: _jsx("defs", { children: _jsxs("filter", { id: "gooey", children: [_jsx("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "10", result: "blur" }), _jsx("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9", result: "goo" }), _jsx("feComposite", { in: "SourceGraphic", in2: "goo", operator: "atop" })] }) }) })] }));
});
GooeyButton.displayName = "GooeyButton";
