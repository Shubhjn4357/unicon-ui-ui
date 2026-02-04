"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
export const Progress = React.forwardRef(({ value = 0, max = 100, variant = "default", showLabel = false, animated = true, onValueChange, className, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const variantStyles = {
        default: "bg-primary",
        success: "bg-success",
        warning: "bg-warning",
        error: "bg-destructive",
    };
    return (_jsxs("div", { ref: ref, className: cn("relative w-full", className), ...props, children: [_jsx("div", { className: "h-2 w-full overflow-hidden rounded-full bg-muted", children: _jsx(motion.div, { className: cn("h-full rounded-full transition-colors", variantStyles[variant]), initial: { width: 0 }, animate: { width: `${percentage}%` }, transition: {
                        duration: animated ? 0.5 : 0,
                        ease: "easeOut",
                    } }) }), showLabel && (_jsxs("div", { className: "mt-1 text-right text-xs text-muted-foreground", children: [Math.round(percentage), "%"] }))] }));
});
Progress.displayName = "Progress";
