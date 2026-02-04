"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
export const ComicText = ({ children, className, ...props }) => {
    return (_jsx(motion.span, { className: cn("relative inline-block font-black uppercase text-foreground transition-all duration-300 hover:-translate-y-1 hover:translate-x-1", "drop-shadow-[2px_2px_0px_hsl(var(--primary)/0.5)]", className), ...props, children: children }));
};
