import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
export const BackgroundBeams = React.forwardRef(({ className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("pointer-events-none absolute inset-0 overflow-hidden", className), ...props, children: Array.from({ length: 5 }).map((_, i) => (_jsx(motion.div, { className: "absolute left-1/4 top-0 h-[500px] w-px bg-linear-to-b from-transparent via-brand/50 to-transparent", style: {
                left: `${20 + i * 15}%`,
            }, animate: {
                y: ["-100%", "100vh"],
                opacity: [0, 1, 0],
            }, transition: {
                duration: 3 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "linear",
            } }, `beam-${i}`))) }));
});
BackgroundBeams.displayName = "BackgroundBeams";
