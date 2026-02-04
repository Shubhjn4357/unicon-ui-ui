"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
export const TypingAnimation = ({ text = "Typing Animation", duration = 200, className }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [i, setI] = useState(0);
    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prevState) => prevState + text.charAt(i));
                setI(i + 1);
            }
            else {
                clearInterval(typingEffect);
            }
        }, duration);
        return () => {
            clearInterval(typingEffect);
        };
    }, [duration, i, text]);
    return (_jsxs("h1", { className: cn("font-display text-center text-4xl font-bold leading-20 tracking-[-0.02em] drop-shadow-sm", className), children: [displayedText, _jsx("span", { className: "inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse align-middle" })] }));
};
