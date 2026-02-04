"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
export function ThreeDCard({ children, className, ...props }) {
    const containerRef = React.useRef(null);
    // Use motion values for better performance (no re-renders)
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);
    const handleMouseMove = (e) => {
        if (!containerRef.current)
            return;
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate normalized position (-0.5 to 0.5)
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;
        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };
    const handleMouseEnter = () => {
        // optional: trigger entry animation
    };
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    return (_jsx("div", { ref: containerRef, className: cn("flex flex-col items-center justify-center py-20", className), style: {
            perspective: "1000px",
        }, onMouseMove: handleMouseMove, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, ...props, children: _jsx(motion.div, { style: {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }, className: "group relative flex h-96 w-80 flex-col rounded-xl bg-card border border-border shadow-xl transition-all duration-200 ease-linear", children: _jsx("div", { style: { transform: "translateZ(75px)", transformStyle: "preserve-3d" }, children: children }) }) }));
}
