"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
export const Skeleton = React.forwardRef(({ variant = "rectangular", animation = "pulse", width, height, className, style, ...props }, ref) => {
    const variantStyles = {
        text: "h-4 rounded",
        circular: "rounded-full",
        rectangular: "rounded-none",
        rounded: "rounded-lg",
    };
    const animationStyles = {
        pulse: "animate-pulse",
        wave: "animate-shimmer bg-linear-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%]",
        none: "",
    };
    return (_jsx("div", { ref: ref, className: cn("bg-muted/50", variantStyles[variant], animationStyles[animation], className), style: {
            width: width,
            height: height,
            ...style,
        }, ...props }));
});
Skeleton.displayName = "Skeleton";
