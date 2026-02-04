"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native TextHighlighter - Highlight specific words in text
 */
export const TextHighlighter = React.forwardRef(({ text, highlight, highlightClassName, className, ...props }, ref) => {
    const highlights = Array.isArray(highlight) ? highlight : [highlight];
    const highlightText = (text) => {
        let parts = [text];
        highlights.forEach((word) => {
            const newParts = [];
            parts.forEach((part) => {
                if (typeof part === "string") {
                    const splitParts = part.split(new RegExp(`(${word})`, "gi"));
                    splitParts.forEach((p, i) => {
                        if (p.toLowerCase() === word.toLowerCase()) {
                            newParts.push(_jsx(motion.span, { className: cn("bg-[hsl(var(--primary))]/20 px-1 font-semibold text-[hsl(var(--primary))]", highlightClassName), initial: { opacity: 0, y: -5 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * 0.05 }, children: p }, `${word}-${i}`));
                        }
                        else {
                            newParts.push(p);
                        }
                    });
                }
                else {
                    newParts.push(part);
                }
            });
            parts = newParts;
        });
        return parts;
    };
    return (_jsx("span", { ref: ref, className: cn(className), ...props, children: highlightText(text) }));
});
TextHighlighter.displayName = "TextHighlighter";
