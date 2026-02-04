"use client";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * AnimatedNumber - Count-up number animation with spring physics
 * Features smooth counting animation with decimal support and prefix/suffix options
 */
export const AnimatedNumber = React.forwardRef(({ value, decimals = 0, prefix = "", suffix = "", duration = 2, className }, ref) => {
    const [displayValue, setDisplayValue] = React.useState(0);
    React.useEffect(() => {
        const controls = {
            from: 0,
            to: value,
        };
        let startTime;
        let animationFrame;
        const animate = (timestamp) => {
            if (!startTime)
                startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            // Easing function (ease-out)
            const easeOut = 1 - (1 - progress) ** 3;
            const current = controls.from + (controls.to - controls.from) * easeOut;
            setDisplayValue(current);
            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };
        animationFrame = requestAnimationFrame(animate);
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [value, duration]);
    const formattedValue = displayValue.toFixed(decimals);
    return (_jsxs(motion.span, { ref: ref, className: cn("tabular-nums", className), initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [prefix, formattedValue, suffix] }));
});
AnimatedNumber.displayName = "AnimatedNumber";
