"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native GridPattern - SVG grid background pattern
 */
export const GridPattern = React.forwardRef(({ width = 40, height = 40, x = -1, y = -1, strokeDasharray = "0", strokeWidth = 1, strokeColor = "currentColor", className, ...props }, ref) => {
    const id = React.useId();
    return (_jsx("div", { ref: ref, className: cn("pointer-events-none absolute inset-0", className), ...props, children: _jsxs("svg", { className: "h-full w-full", children: [_jsx("defs", { children: _jsx("pattern", { id: id, width: width, height: height, patternUnits: "userSpaceOnUse", x: x, y: y, children: _jsx("path", { d: `M.5 ${height}V.5H${width}`, fill: "none", stroke: strokeColor, strokeWidth: strokeWidth, strokeDasharray: strokeDasharray }) }) }), _jsx("rect", { width: "100%", height: "100%", fill: `url(#${id})`, opacity: "0.5" })] }) }));
});
GridPattern.displayName = "GridPattern";
