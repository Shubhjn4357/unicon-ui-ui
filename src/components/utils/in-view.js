"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useInView } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
export function InView({ children, className, options = { once: true, amount: 0.3 }, }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, options);
    return (_jsx("div", { ref: ref, className: cn(className), children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6, ease: "easeOut" }, children: children }) }));
}
