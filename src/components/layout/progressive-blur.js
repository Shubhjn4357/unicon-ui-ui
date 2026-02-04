"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native ProgressiveBlur - Gradient blur overlay
 */
export const ProgressiveBlur = React.forwardRef(({ direction = "bottom", blurIntensity = 10, className, ...props }, ref) => {
    const masks = {
        bottom: "linear-gradient(to bottom, transparent, black)",
        top: "linear-gradient(to top, transparent, black)",
        left: "linear-gradient(to left, transparent, black)",
        right: "linear-gradient(to right, transparent, black)",
    };
    return (_jsx("div", { ref: ref, className: cn("pointer-events-none absolute inset-0 z-10", className), style: {
            backdropFilter: `blur(${blurIntensity}px)`,
            WebkitBackdropFilter: `blur(${blurIntensity}px)`,
            maskImage: masks[direction],
            WebkitMaskImage: masks[direction],
        }, ...props }));
});
ProgressiveBlur.displayName = "ProgressiveBlur";
