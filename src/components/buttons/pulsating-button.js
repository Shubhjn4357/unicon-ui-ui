"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
/**
 * Native PulsatingButton - Pulsing/ripple ring effect
 */
export const PulsatingButton = React.forwardRef(({ children, className, pulseColor = "rgba(var(--color-brand-rgb, 99, 102, 241), 0.7)", duration = "1.5s", ...props }, ref) => {
    return (_jsxs(motion.button, { ref: ref, className: cn("relative inline-flex h-11 items-center justify-center rounded-lg bg-[hsl(var(--primary))] px-8 font-medium text-white", className), whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, ...props, children: [_jsx("span", { className: "relative z-10", children: children }), _jsx(motion.div, { className: "absolute inset-0 rounded-lg", style: {
                    boxShadow: `0 0 0 0 ${pulseColor}`,
                }, animate: {
                    boxShadow: [`0 0 0 0 ${pulseColor}`, "0 0 0 20px rgba(0, 0, 0, 0)"],
                }, transition: {
                    duration: Number.parseFloat(duration),
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeOut",
                } })] }));
});
PulsatingButton.displayName = "PulsatingButton";
export const RippleButton = React.forwardRef(({ children, className, ...props }, ref) => {
    const [ripples, setRipples] = React.useState([]);
    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        setRipples((prev) => [...prev, { x, y, id }]);
        setTimeout(() => {
            setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
        }, 600);
        props.onClick?.(e);
    };
    return (_jsxs(motion.button, { ref: ref, className: cn("relative inline-flex h-11 items-center justify-center overflow-hidden rounded-lg bg-[hsl(var(--primary))] px-8 font-medium text-white", className), onClick: handleClick, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, ...props, children: [_jsx("span", { className: "relative z-10", children: children }), ripples.map((ripple) => (_jsx(motion.span, { className: "absolute rounded-full bg-white/30", style: {
                    left: ripple.x,
                    top: ripple.y,
                    width: 0,
                    height: 0,
                }, initial: { width: 0, height: 0, opacity: 1 }, animate: { width: 300, height: 300, opacity: 0 }, transition: { duration: 0.6 } }, ripple.id)))] }));
});
RippleButton.displayName = "RippleButton";
