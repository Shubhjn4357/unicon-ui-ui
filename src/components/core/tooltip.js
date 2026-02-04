"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, createContext, useContext } from "react";
import { cn } from "../../lib/utils";
const TooltipContext = createContext(undefined);
const useTooltip = () => {
    const context = useContext(TooltipContext);
    if (!context)
        throw new Error("useTooltip must be used within a Tooltip");
    return context;
};
// --- Components ---
export function TooltipProvider({ children, delayDuration = 0, }) {
    return _jsx("div", { className: "contents", children: children });
}
export function Tooltip({ children, delayDuration = 0.2, }) {
    const [open, setOpen] = useState(false);
    return (_jsx(TooltipContext.Provider, { value: { open, setOpen, delay: delayDuration }, children: _jsx("div", { className: "relative inline-flex items-center justify-center", children: children }) }));
}
export function TooltipTrigger({ children, asChild, }) {
    const { setOpen, delay } = useTooltip();
    const timeoutRef = React.useRef(null);
    const handleMouseEnter = () => {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setOpen(true), delay * 1000);
    };
    const handleMouseLeave = () => {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        setOpen(false);
    };
    return (_jsx("div", { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, className: "inline-block", children: children }));
}
export function TooltipContent({ children, className, side = "top", }) {
    const { open } = useTooltip();
    const positions = {
        top: { top: -10, left: "50%", x: "-50%", y: "-100%" },
        bottom: { bottom: -10, left: "50%", x: "-50%", y: "100%" },
        left: { left: -10, top: "50%", x: "-100%", y: "-50%" },
        right: { right: -10, top: "50%", x: "100%", y: "-50%" },
    };
    const animations = {
        top: { y: 10, opacity: 0 },
        bottom: { y: -10, opacity: 0 },
        left: { x: 10, opacity: 0 },
        right: { x: -10, opacity: 0 },
    };
    const getPositionStyle = () => {
        const pos = positions[side];
        return {
            top: "top" in pos ? pos.top : "auto",
            bottom: "bottom" in pos ? pos.bottom : "auto",
            left: "left" in pos ? pos.left : "auto",
            right: "right" in pos ? pos.right : "auto",
        };
    };
    return (_jsx(AnimatePresence, { children: open && (_jsx(motion.div, { initial: { ...animations[side], scale: 0.9 }, animate: { x: positions[side].x, y: positions[side].y, opacity: 1, scale: 1 }, exit: { ...animations[side], scale: 0.9, opacity: 0 }, transition: { type: "spring", stiffness: 400, damping: 20 }, style: { position: "absolute", ...getPositionStyle() }, className: cn("z-50 px-3 py-1.5 text-xs text-primary-foreground bg-primary rounded-md shadow-xl whitespace-nowrap", className), children: children })) }));
}
