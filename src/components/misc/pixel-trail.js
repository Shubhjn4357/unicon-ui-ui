"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native PixelTrail - Mouse cursor pixel trail
 */
export const PixelTrail = React.forwardRef(({ pixelSize = 20, fadeDuration = 500, color = "rgba(var(--color-brand-rgb, 99, 102, 241), 0.5)", className, ...props }, ref) => {
    // TODO: Implement grid logic for full screen pixel trail or container based
    // For now, simple implementation
    return _jsx(motion.div, { ref: ref, className: cn("hidden", className), ...props });
});
PixelTrail.displayName = "PixelTrail";
// Adding a more robust implementation inline as placeholder was too simple
export const PixelTrailImpl = React.forwardRef(({ pixelSize = 40, fadeDuration = 0.5, color = "bg-[hsl(var(--primary))]", className, ...props }, ref) => {
    // React.useEffect(() => {
    //    // Grid generation logic would go here
    // }, [])
    return (_jsx(motion.div, { ref: ref, className: cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className), ...props }));
});
