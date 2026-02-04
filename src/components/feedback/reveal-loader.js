"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * RevealLoader - Loading animation with mask-based reveal effect
 * Features smooth reveal animation with progress indicator
 */
export const RevealLoader = React.forwardRef(({ children, loading = true, duration = 1.5, className }, ref) => {
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        if (!loading) {
            setProgress(100);
            return;
        }
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90)
                    return prev;
                return prev + Math.random() * 10;
            });
        }, 200);
        return () => clearInterval(interval);
    }, [loading]);
    if (!loading && progress === 100) {
        return (_jsx(motion.div, { ref: ref, className: className, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 }, children: children }));
    }
    return (_jsxs("div", { ref: ref, className: cn("relative overflow-hidden", className), children: [_jsx(motion.div, { className: "absolute inset-0 z-50 flex items-center justify-center bg-[hsl(var(--card))]", initial: { x: "-100%" }, animate: { x: loading ? "0%" : "100%" }, transition: { duration, ease: "easeInOut" }, children: _jsxs("div", { className: "text-center", children: [_jsx(motion.div, { className: "mb-4 h-1 w-48 overflow-hidden rounded-full bg-border", initial: { opacity: 0 }, animate: { opacity: 1 }, children: _jsx(motion.div, { className: "h-full bg-[hsl(var(--primary))]", style: { width: `${progress}%` }, transition: { duration: 0.3 } }) }), _jsxs("p", { className: "text-sm text-muted-foreground", children: [Math.round(progress), "%"] })] }) }), _jsx("div", { className: "opacity-0", children: children })] }));
});
RevealLoader.displayName = "RevealLoader";
