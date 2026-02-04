"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native ScrollProgress - Document scroll indicator
 */
export const ScrollProgress = React.forwardRef(({ position = "top", className, ...props }, ref) => {
    const [scrollProgress, setScrollProgress] = React.useState(0);
    React.useEffect(() => {
        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / scrollHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener("scroll", updateScrollProgress);
        updateScrollProgress();
        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);
    return (_jsx("div", { ref: ref, className: cn("fixed left-0 right-0 z-50 h-1 bg-muted", position === "top" ? "top-0" : "bottom-0", className), ...props, children: _jsx(motion.div, { className: "h-full bg-[hsl(var(--primary))]", style: { width: `${scrollProgress}%` }, initial: { width: 0 }, animate: { width: `${scrollProgress}%` }, transition: { duration: 0.1 } }) }));
});
ScrollProgress.displayName = "ScrollProgress";
