"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native ParticleImage - Image formed by particles
 */
export const ParticleImage = React.forwardRef(({ src, particleCount = 100, className, ...props }, ref) => {
    // Real particle image analysis requires Canvas pixel data reading
    // This is a visual simulation suitable for UI libraries without heavy processing
    return (_jsxs("div", { ref: ref, className: cn("relative w-64 h-64", className), ...props, children: [_jsx("img", { src: src, className: "opacity-20 absolute inset-0 w-full h-full object-contain filter blur-sm", alt: "reference" }), [...Array(50)].map((_, i) => (_jsx(motion.div, { className: "absolute w-1 h-1 bg-[hsl(var(--primary))] rounded-full", style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }, animate: {
                    x: (Math.random() - 0.5) * 20,
                    y: (Math.random() - 0.5) * 20,
                    opacity: [0.5, 1, 0.5],
                }, transition: {
                    duration: 2 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                } }, i)))] }));
});
ParticleImage.displayName = "ParticleImage";
