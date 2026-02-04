"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native AuroraText - Aurora borealis gradient effect
 */
export const AuroraText = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx(motion.span, { ref: ref, className: cn("inline-block bg-clip-text text-transparent", className), animate: {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }, transition: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
        }, style: {
            backgroundImage: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        }, ...props, children: children }));
});
AuroraText.displayName = "AuroraText";
