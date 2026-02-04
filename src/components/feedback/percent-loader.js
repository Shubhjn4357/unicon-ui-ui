"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
export function PercentLoader({ onComplete, duration = 2000, className }) {
    const [progress, setProgress] = React.useState(0);
    const [isComplete, setIsComplete] = React.useState(false);
    React.useEffect(() => {
        let startTime;
        let animationFrame;
        const animate = (timestamp) => {
            if (!startTime)
                startTime = timestamp;
            const elapsed = timestamp - startTime;
            const nextProgress = Math.min((elapsed / duration) * 100, 100);
            setProgress(nextProgress);
            if (nextProgress < 100) {
                animationFrame = requestAnimationFrame(animate);
            }
            else {
                setIsComplete(true);
                if (onComplete)
                    onComplete();
            }
        };
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [duration, onComplete]);
    return (_jsx(AnimatePresence, { children: !isComplete && (_jsxs(motion.div, { initial: { opacity: 1 }, exit: { opacity: 0, y: -50 }, transition: { duration: 0.8, ease: "easeInOut" }, className: cn("fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background", className), children: [_jsx("div", { className: "relative", children: _jsxs(motion.span, { className: "text-8xl font-bold font-mono tracking-tighter", children: [Math.floor(progress), "%"] }) }), _jsx("div", { className: "w-64 h-1 bg-muted mt-4 overflow-hidden rounded-full", children: _jsx(motion.div, { className: "h-full bg-primary", style: { width: `${progress}%` } }) })] })) }));
}
