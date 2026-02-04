"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
export function MorphingText({ texts = [], className }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [texts]);
    return (_jsxs("div", { className: cn("relative mx-auto h-16 w-full max-w-3xl text-center leading-none filter-[url(#threshold)_blur(0.6px)] md:h-24", className), children: [texts.map((text, index) => (_jsx("span", { className: cn("absolute top-0 w-full transition-[opacity,filter] duration-1000 ease-in-out", index === currentIndex ? "opacity-100 blur-none" : "opacity-0 blur-[10px]"), children: text }, index))), _jsx("svg", { id: "filters", className: "hidden", children: _jsx("defs", { children: _jsx("filter", { id: "threshold", children: _jsx("feColorMatrix", { in: "SourceGraphic", type: "matrix", values: "1 0 0 0 0\n                                    0 1 0 0 0\n                                    0 0 1 0 0\n                                    0 0 0 255 -140" }) }) }) })] }));
}
