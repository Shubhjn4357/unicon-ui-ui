"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * WarpBackground - Hyperspace tunnel effect
 */
export const WarpBackground = React.forwardRef(({ perspective = 100, beamColor = "rgba(var(--primary-rgb), 0.5)", lineCount = 30, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("pointer-events-none absolute inset-0 overflow-hidden bg-background", className), style: { perspective: `${perspective}px` }, ...props, children: _jsx("div", { className: "absolute inset-0", children: [...Array(lineCount)].map((_, i) => {
                const angle = (360 / lineCount) * i;
                return (_jsx(motion.div, { className: "absolute top-1/2 left-1/2 origin-left h-px", style: {
                        background: `linear-gradient(to right, transparent, ${beamColor})`,
                        transformOrigin: "0 50%",
                        transform: `rotate(${angle}deg)`,
                        width: "50%",
                    }, animate: {
                        scaleX: [1, 2, 1],
                        opacity: [0.2, 0.6, 0.2],
                    }, transition: {
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: (i / lineCount) * 2,
                    } }, `warp-line-${angle}-${i}`));
            }) }) }));
});
WarpBackground.displayName = "WarpBackground";
