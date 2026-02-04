"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Animated Theme Toggler - Sun/Moon morphing animation
 */
export const AnimatedThemeToggler = React.forwardRef(({ defaultTheme = "light", onThemeChange, className, ...props }, ref) => {
    const [theme, setTheme] = React.useState(defaultTheme);
    const isDark = theme === "dark";
    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setTheme(newTheme);
        onThemeChange?.(newTheme);
        // Apply to document
        if (typeof document !== "undefined") {
            document.documentElement.classList.toggle("dark", newTheme === "dark");
        }
    };
    return (_jsx("button", { ref: ref, onClick: toggleTheme, className: cn("relative h-12 w-12 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-2 transition-all hover:scale-110 active:scale-95 cursor-pointer", className), "aria-label": `Switch to ${isDark ? "light" : "dark"} mode`, ...props, children: _jsxs(motion.div, { className: "relative h-full w-full", animate: { rotate: isDark ? 180 : 0 }, children: [!isDark &&
                    [...Array(8)].map((_, i) => (_jsx(motion.div, { className: "absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-yellow-500", style: {
                            transformOrigin: "0 0",
                        }, initial: { scale: 0, x: 0, y: 0 }, animate: {
                            scale: [1, 1.2, 1],
                            x: [0, Math.cos((i * 45 * Math.PI) / 180) * 16, 0],
                            y: [0, Math.sin((i * 45 * Math.PI) / 180) * 16, 0],
                        }, transition: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.1,
                        } }, i))), _jsx(motion.div, { className: "absolute left-1/2 top-1/2 rounded-full", style: {
                        x: "-50%",
                        y: "-50%",
                    }, animate: {
                        width: isDark ? 24 : 28,
                        height: isDark ? 24 : 28,
                        backgroundColor: isDark ? "#94a3b8" : "#fbbf24",
                    }, transition: { duration: 0.3 }, children: isDark && (_jsxs(_Fragment, { children: [_jsx(motion.div, { className: "absolute rounded-full bg-slate-600", initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, style: {
                                    width: 6,
                                    height: 6,
                                    left: 4,
                                    top: 4,
                                } }), _jsx(motion.div, { className: "absolute rounded-full bg-slate-600", initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.1 }, style: {
                                    width: 4,
                                    height: 4,
                                    left: 14,
                                    top: 12,
                                } })] })) })] }) }));
});
AnimatedThemeToggler.displayName = "AnimatedThemeToggler";
