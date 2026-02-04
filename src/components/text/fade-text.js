"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
export function FadeText({ text, direction = "up", className, framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring" } },
}, ...props }) {
    const directionOffset = direction === "up" ? 10 : direction === "down" ? -10 : 0;
    const xOffset = direction === "left" ? 10 : direction === "right" ? -10 : 0;
    const axisProps = framerProps || {
        hidden: { opacity: 0, y: directionOffset, x: xOffset },
        show: { opacity: 1, y: 0, x: 0, transition: { type: "spring" } },
    };
    return (_jsx(motion.div, { initial: "hidden", animate: "show", variants: axisProps, className: cn("text-foreground", className), ...props, children: text }));
}
