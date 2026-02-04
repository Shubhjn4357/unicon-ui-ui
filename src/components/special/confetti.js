"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import confetti from "canvas-confetti";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native Confetti - Canvas confetti particles
 * Using canvas-confetti library
 */
export const Confetti = ({ particleCount = 50, spread = 70, origin = { x: 0.5, y: 0.5 }, }) => {
    React.useEffect(() => {
        confetti({
            particleCount,
            spread,
            origin,
        });
    }, [particleCount, spread, origin]);
    return null;
};
export const ConfettiButton = React.forwardRef(({ children, confettiOptions, onClick, className, ...props }, ref) => {
    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        confetti({
            particleCount: confettiOptions?.particleCount || 50,
            spread: confettiOptions?.spread || 70,
            origin: {
                x: (e.clientX - rect.left) / rect.width,
                y: (e.clientY - rect.top) / rect.height,
            },
        });
        onClick?.(e);
    };
    return (_jsx("button", { ref: ref, onClick: handleClick, className: cn("inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-all hover:bg-primary/90 cursor-pointer", className), ...props, children: children }));
});
ConfettiButton.displayName = "ConfettiButton";
