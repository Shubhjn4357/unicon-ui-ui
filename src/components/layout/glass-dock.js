"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * GlassDock - Glassmorphism dock component with hover magnification
 * Features backdrop blur, hover effects, and smooth icon scaling
 */
export const GlassDock = React.forwardRef(({ items, className, magnification = 1.5, distance = 100 }, ref) => {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const mouseX = React.useRef(0);
    const handleMouseMove = (e) => {
        mouseX.current = e.clientX;
    };
    return (_jsx(motion.div, { ref: ref, className: cn("glass-effect-strong flex items-center gap-2 rounded-2xl p-3 shadow-xl", className), onMouseMove: handleMouseMove, onMouseLeave: () => setHoveredIndex(null), initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { type: "spring", stiffness: 300, damping: 30 }, children: items.map((item, index) => (_jsx(DockItem, { item: item, index: index, hoveredIndex: hoveredIndex, setHoveredIndex: setHoveredIndex, magnification: magnification, distance: distance }, index))) }));
});
GlassDock.displayName = "GlassDock";
function DockItem({ item, index, hoveredIndex, setHoveredIndex, magnification }) {
    const ref = React.useRef(null);
    const [scale, setScale] = React.useState(1);
    React.useEffect(() => {
        if (hoveredIndex === null) {
            setScale(1);
            return;
        }
        const diff = Math.abs(hoveredIndex - index);
        const scaleFactor = Math.max(0, 1 - diff * 0.3);
        setScale(1 + (magnification - 1) * scaleFactor);
    }, [hoveredIndex, index, magnification]);
    const handleClick = () => {
        if (item.onClick) {
            item.onClick();
        }
        else if (item.href) {
            window.location.href = item.href;
        }
    };
    return (_jsxs(motion.button, { ref: ref, className: cn("group relative flex h-12 w-12 items-center justify-center rounded-xl transition-colors", "hover:bg-white/10 dark:hover:bg-white/5"), onMouseEnter: () => setHoveredIndex(index), onClick: handleClick, animate: { scale }, transition: { type: "spring", stiffness: 300, damping: 20 }, children: [_jsx("div", { className: "relative z-10", children: item.icon }), _jsx(motion.div, { className: cn("absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium", "glass-effect-strong opacity-0 group-hover:opacity-100 transition-opacity"), initial: { y: 10, opacity: 0 }, whileHover: { y: 0, opacity: 1 }, children: item.label })] }));
}
