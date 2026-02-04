"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
export function SpotlightCard({ children, spotlightColor = "rgba(var(--primary-rgb), 0.15)", className, ...props }) {
    const containerRef = React.useRef(null);
    const [mouseX, setMouseX] = React.useState(0);
    const [mouseY, setMouseY] = React.useState(0);
    const [opacity, setOpacity] = React.useState(0);
    const handleMouseMove = (e) => {
        if (!containerRef.current)
            return;
        const rect = containerRef.current.getBoundingClientRect();
        setMouseX(e.clientX - rect.left);
        setMouseY(e.clientY - rect.top);
    };
    return (_jsxs("div", { ref: containerRef, onMouseMove: handleMouseMove, onMouseEnter: () => setOpacity(1), onMouseLeave: () => setOpacity(0), className: cn("group relative overflow-hidden rounded-(--radius) border border-border bg-card p-6 transition-all duration-300", className), ...props, children: [_jsx("div", { className: "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100", style: {
                    background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 40%)`,
                } }), _jsx("div", { className: "relative z-10", children: children })] }));
}
