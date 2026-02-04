"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
export const OrbitingDots = ({ count = 3, dotSize = 4, color = "hsl(var(--primary))", speed = 20, radius = 100, ...props }) => {
    return (_jsx("div", { className: cn("relative w-full h-full", props.className), ...props, children: [...Array(count)].map((_, i) => (_jsx(motion.div, { className: "absolute rounded-full", style: {
                width: dotSize,
                height: dotSize,
                backgroundColor: color,
            }, animate: {
                rotate: [0, 360],
                scale: [1, 1.2, 0.8, 1],
                x: [0, 100, 0, -100, 0],
                y: [0, 100, 0, -100, 0],
            }, transition: {
                duration: speed,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
            } }, i))) }));
};
OrbitingDots.displayName = "OrbitingDots";
