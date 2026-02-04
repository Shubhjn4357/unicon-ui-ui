"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native SparklesText - Animated sparkles around text
 */
export const SparklesText = React.forwardRef(({ text, colors = { first: "hsl(var(--primary))", second: "hsl(var(--secondary))" }, sparklesCount = 10, className, ...props }, ref) => {
    const [sparkles, setSparkles] = React.useState([]);
    const memoizedColors = React.useMemo(() => colors, [colors.first, colors.second]);
    React.useEffect(() => {
        const newSparkles = Array.from({ length: sparklesCount }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            color: Math.random() > 0.5 ? memoizedColors.first : memoizedColors.second,
            delay: Math.random() * 2,
            scale: Math.random() * 1 + 0.3,
            duration: 1.5 + Math.random() * 2,
        }));
        setSparkles(newSparkles);
    }, [sparklesCount, memoizedColors]);
    return (_jsxs("span", { ref: ref, className: cn("relative inline-block", className), ...props, children: [_jsx("span", { className: "relative z-10", children: text }), sparkles.map((sparkle) => (_jsx(motion.div, { className: "absolute pointer-events-none", style: {
                    left: `${sparkle.x}%`,
                    top: `${sparkle.y}%`,
                }, initial: { opacity: 0, scale: 0 }, animate: {
                    opacity: [0, 1, 0],
                    scale: [0, sparkle.scale, 0],
                    rotate: [0, 180],
                }, transition: {
                    duration: sparkle.duration,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: sparkle.delay,
                    ease: "easeInOut",
                }, children: _jsx(Sparkle, { className: "h-4 w-4 fill-current", style: { color: sparkle.color } }) }, sparkle.id)))] }));
});
SparklesText.displayName = "SparklesText";
