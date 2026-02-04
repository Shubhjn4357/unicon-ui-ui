"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
export function HorizontalScroll({ children, className }) {
    const targetRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });
    // useSpring for smoother scrub feel
    const smoothProgress = useSpring(scrollYProgress, {
        damping: 30,
        stiffness: 100,
    });
    const x = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]); // Adjust -50% based on content width logic
    return (_jsx("div", { ref: targetRef, className: cn("relative h-[300vh]", className), children: _jsx("div", { className: "sticky top-0 flex h-screen items-center overflow-hidden", children: _jsx(motion.div, { style: { x }, className: "flex gap-10 p-10", children: children }) }) }));
}
