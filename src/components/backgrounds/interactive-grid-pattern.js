"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { cn } from "../../lib/utils";
export function InteractiveGridPattern({ width = 40, height = 40, squares = [
    [4, 4],
    [5, 1],
    [8, 2],
    [5, 3],
    [5, 5],
    [10, 10],
    [12, 15],
    [15, 10],
    [10, 15],
    [15, 10],
    [10, 15],
    [15, 10],
], className, squaresClassName, ...props }) {
    const [hoveredSquare, setHoveredSquare] = useState(null);
    return (_jsxs("svg", { width: "100%", height: "100%", className: cn("absolute inset-0 h-full w-full border-neutral-200/50", className), ...props, onMouseMove: ({ clientX, clientY, currentTarget }) => {
            const { left, top } = currentTarget.getBoundingClientRect();
            const x = clientX - left;
            const y = clientY - top;
            const squareX = Math.floor(x / width);
            const squareY = Math.floor(y / height);
            setHoveredSquare(squareX * 1000 + squareY); // Simple hash
        }, onMouseLeave: () => setHoveredSquare(null), children: [_jsx("defs", { children: _jsx("pattern", { id: "grid-pattern", width: width, height: height, patternUnits: "userSpaceOnUse", children: _jsx("path", { d: `M ${width} 0 L 0 0 0 ${height}`, fill: "none", stroke: "currentColor", strokeOpacity: "0.1" }) }) }), _jsx("rect", { width: "100%", height: "100%", fill: "url(#grid-pattern)", strokeOpacity: "0.1" }), squares && (_jsx("svg", { x: -1, y: -1, className: "overflow-visible", children: squares.map(([x, y], index) => (_jsx("rect", { strokeWidth: "0", width: width - 1, height: height - 1, x: x * width + 1, y: y * height + 1, className: cn("fill-gray-400/30 transition-all duration-100", squaresClassName, hoveredSquare === x * 1000 + y && "fill-gray-400/80") }, `grid-square-${x}-${y}`))) })), hoveredSquare !== null && (_jsx("rect", { x: Math.floor(hoveredSquare / 1000) * width + 1, y: (hoveredSquare % 1000) * height + 1, width: width - 1, height: height - 1, className: "fill-gray-400/50 pointer-events-none transition-all duration-100" }))] }));
}
