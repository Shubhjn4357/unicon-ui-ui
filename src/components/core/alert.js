"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
export const Alert = React.forwardRef(({ children, variant = "default", dismissible = false, onDismiss, icon, className, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true);
    const handleDismiss = () => {
        setIsVisible(false);
        setTimeout(() => onDismiss?.(), 200);
    };
    const variantStyles = {
        default: "bg-primary/10 text-primary border-primary/20",
        destructive: "bg-destructive/10 text-destructive border-destructive/20",
        success: "bg-success/10 text-success border-success/20",
        warning: "bg-warning/10 text-warning border-warning/20",
        glass: "glass backdrop-blur-md bg-background/60 border-border/50 shadow-lg",
    };
    return (_jsx(AnimatePresence, { children: isVisible && (_jsx(motion.div, { ref: ref, role: "alert", className: cn("relative rounded-(--radius) border p-4", variantStyles[variant], className), initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, x: 100 }, transition: { duration: 0.2 }, ...props, children: _jsxs("div", { className: "flex gap-3", children: [icon && _jsx("div", { className: "shrink-0 pt-0.5", children: icon }), _jsx("div", { className: "flex-1", children: children }), dismissible && (_jsx("button", { type: "button", onClick: handleDismiss, className: "shrink-0 rounded-sm opacity-70 transition-opacity hover:opacity-100", "aria-label": "Dismiss", children: _jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }))] }) })) }));
});
Alert.displayName = "Alert";
export const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (_jsx("h5", { ref: ref, className: cn("mb-1 font-semibold leading-none tracking-tight", className), ...props })));
AlertTitle.displayName = "AlertTitle";
export const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (_jsx("p", { ref: ref, className: cn("text-sm opacity-90", className), ...props })));
AlertDescription.displayName = "AlertDescription";
