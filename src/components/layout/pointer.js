"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
export const Pointer = React.forwardRef(({ name, color = "#FF3366", className, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn("relative", className), ...props, children: [_jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "none", className: "relative top-[-8px] left-[-8px] drop-shadow-md", children: _jsx("path", { d: "M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8647L0.500002 1.14143L14.8464 15.6601H7.71213L5.65376 12.3673Z", fill: color }) }), _jsx("div", { className: "absolute top-4 left-4 rounded-full px-2 py-1 text-xs font-bold text-white whitespace-nowrap", style: { backgroundColor: color }, children: name })] }));
});
Pointer.displayName = "Pointer";
/**
 * Native PointerGroup - Multiplayer cursor simulation container
 */
export const PointerGroup = ({ children }) => {
    return (_jsx("div", { className: "relative w-full h-[300px] overflow-hidden rounded-(--radius) border border-border bg-card", children: children }));
};
