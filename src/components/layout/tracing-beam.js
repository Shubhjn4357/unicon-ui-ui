"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native TracingBeam - Scroll progress beam
 */
export const TracingBeam = React.forwardRef(({ children, className, ...props }, ref) => {
    const { scrollYProgress } = useScroll();
    const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), {
        stiffness: 500,
        damping: 90,
    });
    return (_jsxs("div", { ref: ref, className: cn("relative w-full max-w-4xl mx-auto", className), ...props, children: [_jsxs("div", { className: "absolute -left-4 top-0 bottom-0 w-px bg-border hidden md:block", children: [_jsx(motion.div, { className: "absolute top-0 -left-px w-[3px] h-[3px] rounded-full bg-primary origin-top", style: { top: y }, children: _jsx("div", { className: "absolute top-0 left-[-6px] w-[15px] h-[15px] rounded-full bg-primary/20 animate-pulse" }) }), _jsx(motion.div, { className: "absolute top-0 w-px bg-linear-to-b from-brand to-transparent origin-top", style: { height: y } })] }), _jsx("div", { className: "pl-4 md:pl-12", children: children })] }));
});
TracingBeam.displayName = "TracingBeam";
