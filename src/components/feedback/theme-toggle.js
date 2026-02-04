"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
/**
 * Animated theme toggle using View Transitions API
 * Features circular reveal animation and persistent theme storage
 */
export const ThemeToggle = React.forwardRef(({ className, ...props }, ref) => {
    const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);
    // Initialize theme
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        // Check if View Transitions API is supported
        if (document.startViewTransition &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            ;
            document.startViewTransition(() => {
                setTheme(newTheme);
                document.documentElement.classList.toggle("dark", newTheme === "dark");
                localStorage.setItem("theme", newTheme);
            });
        }
        else {
            // Fallback without animation
            setTheme(newTheme);
            document.documentElement.classList.toggle("dark", newTheme === "dark");
            localStorage.setItem("theme", newTheme);
        }
    };
    // Prevent hydration mismatch
    if (!mounted) {
        return (_jsx("button", { ref: ref, className: cn("rounded-lg p-2", "text-muted-foreground", "hover:bg-[hsl(var(--card))]", "transition-colors duration-(--duration-fast)", "cursor-pointer", className), ...props, children: _jsx("div", { className: "h-5 w-5" }) }));
    }
    return (_jsx("button", { ref: ref, onClick: toggleTheme, className: cn("rounded-lg p-2", "text-muted-foreground", "hover:bg-[hsl(var(--card))]", "hover:text-[hsl(var(--foreground))]", "transition-colors duration-(--duration-fast)", "cursor-pointer", className), "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} theme`, ...props, children: theme === "light" ? (
        // Moon icon
        _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }) })) : (
        // Sun icon
        _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("circle", { cx: "12", cy: "12", r: "4" }), _jsx("path", { d: "M12 2v2" }), _jsx("path", { d: "M12 20v2" }), _jsx("path", { d: "m4.93 4.93 1.41 1.41" }), _jsx("path", { d: "m17.66 17.66 1.41 1.41" }), _jsx("path", { d: "M2 12h2" }), _jsx("path", { d: "M20 12h2" }), _jsx("path", { d: "m6.34 17.66-1.41 1.41" }), _jsx("path", { d: "m19.07 4.93-1.41 1.41" })] })) }));
});
ThemeToggle.displayName = "ThemeToggle";
