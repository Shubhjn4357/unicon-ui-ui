"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native LetterPullup - Staggered letter pull up animation
 */
export const LetterPullup = React.forwardRef(({ text, delay = 0.05, className, ...props }, ref) => {
    const letters = text.split("");
    const pullupVariant = {
        initial: { y: 100, opacity: 0 },
        animate: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * delay,
            },
        }),
    };
    return (_jsx("div", { ref: ref, className: cn("flex justify-center", className), ...props, children: letters.map((letter, i) => (_jsx(motion.h1, { variants: pullupVariant, initial: "initial", animate: "animate", custom: i, className: cn("text-center font-display font-bold tracking-[-0.02em] drop-shadow-sm"), children: letter === " " ? _jsx("span", { children: "\u00A0" }) : letter }, i))) }));
});
LetterPullup.displayName = "LetterPullup";
