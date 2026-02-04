"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
// import { motion } from "framer-motion"
import { cn } from "../../lib/utils";
/**
 * Native FlickeringGrid - Randomized flickering grid squares with mouse interaction
 */
export const FlickeringGrid = React.forwardRef(({ squareSize = 4, gridGap = 6, flickerChance = 0.3, color = "hsl(var(--primary))", maxOpacity = 0.3, interactive = true, interactionRadius = 200, className, ...props
// @ts-ignore
 }, fwRef) => {
    const [squares, setSquares] = React.useState([]);
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
    const containerRef = React.useRef(null);
    React.useEffect(() => {
        const cols = Math.floor(window.innerWidth / (squareSize + gridGap));
        const rows = Math.floor(window.innerHeight / (squareSize + gridGap));
        const newSquares = Array.from({ length: cols * rows }).map((_, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            return {
                id: i,
                opacity: Math.random() * maxOpacity,
                x: col * (squareSize + gridGap) + squareSize / 2,
                y: row * (squareSize + gridGap) + squareSize / 2,
            };
        });
        setSquares(newSquares);
    }, [squareSize, gridGap, maxOpacity]);
    React.useEffect(() => {
        if (!interactive)
            return undefined;
        const handleMouseMove = (e) => {
            if (!containerRef.current)
                return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };
        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
            return () => container.removeEventListener("mousemove", handleMouseMove);
        }
        return undefined;
    }, [interactive]);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setSquares((prev) => prev.map((sq) => {
                let baseFlicker = Math.random() < flickerChance ? Math.random() * maxOpacity : sq.opacity * 0.9;
                if (interactive) {
                    const distance = Math.sqrt((sq.x - mousePos.x) ** 2 + (sq.y - mousePos.y) ** 2);
                    if (distance < interactionRadius) {
                        const intensity = 1 - distance / interactionRadius;
                        baseFlicker = Math.max(baseFlicker, intensity * maxOpacity * 2);
                    }
                }
                return {
                    ...sq,
                    opacity: baseFlicker,
                };
            }));
        }, 100);
        return () => clearInterval(interval);
    }, [flickerChance, maxOpacity, interactive, mousePos, interactionRadius]);
    const cols = Math.floor((typeof window !== "undefined" ? window.innerWidth : 1000) / (squareSize + gridGap));
    return (_jsx("div", { ref: (node) => {
            containerRef.current = node;
            if (typeof fwRef === "function")
                fwRef(node);
            else if (fwRef)
                fwRef.current = node;
        }, className: cn("pointer-events-auto absolute inset-0", className), style: {
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, ${squareSize}px)`,
            gap: `${gridGap}px`,
        }, ...props, children: squares.map((square) => (_jsx("div", { style: {
                width: squareSize,
                height: squareSize,
                backgroundColor: color,
                opacity: square.opacity,
                transition: "opacity 0.1s ease",
            } }, square.id))) }));
});
FlickeringGrid.displayName = "FlickeringGrid";
