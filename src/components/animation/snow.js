"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
export const Snow = ({ size = 150, className, ...props }) => {
    return (_jsx("div", { className: cn("relative overflow-hidden", className), ...props, children: [...Array(50)].map((_, i) => (_jsx(motion.div, { className: "absolute rounded-full bg-white", style: {
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 - 20 + "%",
                filter: "blur(1px)",
                opacity: Math.random() * 0.8 + 0.1,
            }, animate: {
                y: [100, -100],
                opacity: [0, 1],
            }, transition: {
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
            } }, i))) }));
};
Snow.displayName = "Snow";
