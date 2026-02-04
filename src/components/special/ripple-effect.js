"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native RippleEffect - Interactive click ripple container
 */
export const RippleEffect = React.forwardRef(({ children, rippleColor = "rgba(255, 255, 255, 0.3)", className, ...props }, ref) => {
    const [ripples, setRipples] = React.useState([]);
    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        setRipples((prev) => [...prev, { x, y, id }]);
        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 1000);
    };
    return (_jsxs("div", { ref: ref, className: cn("relative overflow-hidden cursor-pointer select-none", className), onClick: handleClick, ...props, children: [children, _jsx(AnimatePresence, { children: ripples.map((ripple) => (_jsx(motion.span, { className: "absolute rounded-full pointer-events-none", style: {
                        left: ripple.x,
                        top: ripple.y,
                        backgroundColor: rippleColor,
                        transform: "translate(-50%, -50%)",
                    }, initial: { width: 0, height: 0, opacity: 0.5 }, animate: { width: 500, height: 500, opacity: 0 }, exit: { opacity: 0 }, transition: { duration: 0.8 } }, ripple.id))) })] }));
});
RippleEffect.displayName = "RippleEffect";
