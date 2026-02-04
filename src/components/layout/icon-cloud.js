"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
export const IconCloud = React.forwardRef(({ icons, radius = 250, className, ...props }, ref) => {
    const angleStep = (2 * Math.PI) / icons.length;
    return (_jsx("div", { ref: ref, className: cn("relative flex items-center justify-center", className), style: { width: radius * 2, height: radius * 2 }, ...props, children: _jsx(motion.div, { className: "relative h-full w-full", animate: { rotateY: 360 }, transition: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }, style: { transformStyle: "preserve-3d" }, children: icons.map((icon, i) => {
                const angle = i * angleStep;
                const x = Math.sin(angle) * radius;
                const z = Math.cos(angle) * radius;
                return (_jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", style: {
                        transform: `translate3d(${x}px, 0, ${z}px)`,
                    }, children: icon }, i));
            }) }) }));
});
IconCloud.displayName = "IconCloud";
