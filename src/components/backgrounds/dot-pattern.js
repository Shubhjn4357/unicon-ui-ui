"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native DotPattern - SVG dot background pattern with optional mouse interaction
 */
export const DotPattern = React.forwardRef(({ width = 16, height = 16, x = 0, y = 0, cx = 0.5, cy = 0.5, cr = 0.5, dotColor = "currentColor", interactive = true, maxDistance = 150, className, ...props }, ref) => {
    const id = React.useId();
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const containerRef = React.useRef(null);
    React.useEffect(() => {
        if (!interactive)
            return undefined;
        const onMouseMove = (e) => {
            if (!containerRef.current)
                return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };
        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", onMouseMove);
            return () => container.removeEventListener("mousemove", onMouseMove);
        }
        return undefined;
    }, [interactive]);
    return (_jsx("div", { ref: (node) => {
            containerRef.current = node;
            if (typeof ref === "function")
                ref(node);
            else if (ref)
                ref.current = node;
        }, className: cn("pointer-events-auto absolute inset-0", className), ...props, children: _jsxs("svg", { className: "h-full w-full", children: [_jsxs("defs", { children: [_jsx("pattern", { id: id, width: width, height: height, patternUnits: "userSpaceOnUse", patternContentUnits: "userSpaceOnUse", x: x, y: y, children: _jsx("circle", { cx: width * cx, cy: height * cy, r: cr, fill: dotColor }) }), interactive && (_jsxs("filter", { id: `${id}-glow`, children: [_jsx("feGaussianBlur", { stdDeviation: "2", result: "coloredBlur" }), _jsxs("feMerge", { children: [_jsx("feMergeNode", { in: "coloredBlur" }), _jsx("feMergeNode", { in: "SourceGraphic" })] })] }))] }), _jsx("rect", { width: "100%", height: "100%", fill: `url(#${id})` }), interactive && (_jsx("circle", { cx: mousePosition.x, cy: mousePosition.y, r: maxDistance, fill: dotColor, opacity: "0.15", filter: `url(#${id}-glow)`, style: {
                        transition: "cx 0.1s ease-out, cy 0.1s ease-out",
                    } }))] }) }));
});
DotPattern.displayName = "DotPattern";
