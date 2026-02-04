"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native ResizablePanel - Draggable width panel
 */
export const ResizablePanel = React.forwardRef(({ children, minWidth = 200, maxWidth = 600, className, ...props }, ref) => {
    const [width, setWidth] = React.useState(300);
    return (_jsxs("div", { className: "flex h-full", children: [_jsxs(motion.div, { ref: ref, className: cn("relative overflow-hidden border-r border-border bg-card", className), style: { width }, ...props, children: [children, _jsx(motion.div, { className: "absolute right-0 top-0 bottom-0 w-1.5 cursor-col-resize hover:bg-primary active:bg-primary", drag: "x", dragConstraints: { left: 0, right: 0 }, dragElastic: 0, dragMomentum: false, onDrag: (_, info) => {
                            setWidth((prev) => Math.min(maxWidth, Math.max(minWidth, prev + info.delta.x)));
                        } })] }), _jsx("div", { className: "flex-1 p-4", children: "Main Content" })] }));
});
ResizablePanel.displayName = "ResizablePanel";
