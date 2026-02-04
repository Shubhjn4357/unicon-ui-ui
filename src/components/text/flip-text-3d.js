"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { cn } from "../../lib/utils";
/**
 * FlipText3D - 3D character flip animation inspired by VengenceUI
 * Features per-character 3D flip with staggered timing and sine-wave delay distribution
 */
export function FlipText3D({ className, children, duration = 2.2, delay = 0, loop = true, separator = " ", }) {
    const words = useMemo(() => children.split(separator), [children, separator]);
    const totalChars = children.length;
    // Calculate character index for each position
    const getCharIndex = (wordIndex, charIndex) => {
        let index = 0;
        for (let i = 0; i < wordIndex; i++) {
            index += words[i].length + (separator === " " ? 1 : separator.length);
        }
        return index + charIndex;
    };
    return (_jsx("div", { className: cn("flip-text-wrapper inline-block leading-none", className), style: { perspective: "1000px" }, children: words.map((word, wordIndex) => {
            const chars = word.split("");
            return (_jsxs("span", { className: "word inline-block whitespace-nowrap", style: { transformStyle: "preserve-3d" }, children: [chars.map((char, charIndex) => {
                        const currentGlobalIndex = getCharIndex(wordIndex, charIndex);
                        // Calculate delay based on character position
                        const normalizedIndex = currentGlobalIndex / totalChars;
                        const sineValue = Math.sin(normalizedIndex * (Math.PI / 2));
                        const calculatedDelay = sineValue * (duration * 0.25) + delay;
                        return (_jsx("span", { className: "flip-char inline-block relative", "data-char": char, style: {
                                "--flip-duration": `${duration}s`,
                                "--flip-delay": `${calculatedDelay}s`,
                                "--flip-iteration": loop ? "infinite" : "1",
                                transformStyle: "preserve-3d",
                            }, children: char }, charIndex));
                    }), separator === " " && wordIndex < words.length - 1 && (_jsx("span", { className: "whitespace inline-block", children: "\u00A0" })), separator !== " " && wordIndex < words.length - 1 && (_jsx("span", { className: "separator inline-block", children: separator }))] }, wordIndex));
        }) }));
}
FlipText3D.displayName = "FlipText3D";
