"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
const DockContext = React.createContext(null);
export function Dock({ children, className, magnification = 60, distance = 140 }) {
    const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
    return (_jsx(DockContext.Provider, { value: { mouseX, magnification, distance }, children: _jsx(motion.div, { onMouseMove: (e) => mouseX.set(e.pageX), onMouseLeave: () => mouseX.set(Number.POSITIVE_INFINITY), className: cn("mx-auto flex h-16 items-end gap-4 rounded-2xl bg-card border border-border p-2 backdrop-blur-md", className), children: children }) }));
}
export function DockIcon({ children, className }) {
    const context = React.useContext(DockContext);
    if (!context)
        throw new Error("DockIcon must be used within a Dock");
    const ref = React.useRef(null);
    const distanceCalc = useTransform(context.mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });
    const widthSync = useTransform(distanceCalc, [-context.distance, 0, context.distance], [40, context.magnification, 40]);
    const width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    return (_jsx(motion.div, { ref: ref, style: { width }, className: cn("flex aspect-square items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm transition-colors hover:bg-accent/80", className), children: children }));
}
