"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
const RippleButton = React.forwardRef(({ className, children, rippleColor = "rgba(255, 255, 255, 0.5)", duration = "600ms", onClick, ...props }, ref) => {
    const [buttonRipples, setButtonRipples] = useState([]);
    const handleClick = (e) => {
        createRipple(e);
        onClick?.(e);
    };
    const createRipple = (e) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        const newRipple = { x, y, size, key: Date.now() };
        setButtonRipples([...buttonRipples, newRipple]);
    };
    useEffect(() => {
        if (buttonRipples.length > 0) {
            const lastRipple = buttonRipples[buttonRipples.length - 1];
            const timeout = setTimeout(() => {
                setButtonRipples((prevState) => prevState.filter((ripple) => ripple.key !== lastRipple.key));
            }, Number.parseInt(duration));
            return () => clearTimeout(timeout);
        }
        return undefined;
    }, [buttonRipples, duration]);
    return (_jsxs("button", { className: cn("relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 bg-[hsl(var(--primary))] px-6 py-3 text-center text-white shadow-sm transition-all duration-300 hover:scale-[0.98]", className), onClick: handleClick, ref: ref, ...props, children: [_jsx("div", { className: "relative z-10", children: children }), _jsx("span", { className: "pointer-events-none absolute inset-0", children: buttonRipples.map((ripple) => (_jsx("span", { className: "absolute animate-ripple rounded-full bg-white opacity-30", style: {
                        width: ripple.size,
                        height: ripple.size,
                        left: ripple.x,
                        top: ripple.y,
                        backgroundColor: rippleColor,
                        transform: "scale(0)",
                        transformOrigin: "center",
                        animationDuration: duration,
                    } }, ripple.key))) })] }));
});
RippleButton.displayName = "RippleButton";
export { RippleButton };
