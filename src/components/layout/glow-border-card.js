"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
const colorPresets = {
    nature: [
        "#669900",
        "#88bb22",
        "#99cc33",
        "#aaddaa",
        "#ccee66",
        "#006699",
        "#228888",
        "#3399cc",
        "#55aacc",
        "#669900",
    ],
    ocean: [
        "#006699",
        "#1177aa",
        "#2288bb",
        "#3399cc",
        "#44aadd",
        "#55bbee",
        "#66ccff",
        "#44bbee",
        "#2299cc",
        "#006699",
    ],
    sunset: [
        "#ff6600",
        "#ff7711",
        "#ff8822",
        "#ff9900",
        "#ffaa22",
        "#ffbb44",
        "#ffcc00",
        "#ff9933",
        "#ff7722",
        "#ff6600",
    ],
    aurora: [
        "#00ff87",
        "#22ffaa",
        "#44ffcc",
        "#60efff",
        "#88ddff",
        "#bb99ff",
        "#dd77ee",
        "#ff68f0",
        "#ff55cc",
        "#00ff87",
    ],
    custom: [
        "#669900",
        "#99cc33",
        "#ccee66",
        "#006699",
        "#3399cc",
        "#990066",
        "#cc3399",
        "#ff6600",
        "#ff9900",
        "#ffcc00",
    ],
};
/**
 * GlowBorderCard - Card with rotating gradient border inspired by VengenceUI
 * Features conic gradient animation with customizable colors and presets
 */
export const GlowBorderCard = React.forwardRef(({ children, className, width = "320px", height, aspectRatio = "1", borderRadius = "0.75rem", animationDuration = 4, gradientColors, borderWidth = "1.25em", blurAmount = "0.75em", inset = "-1em", colorPreset = "custom", paused = false, style, ...props }, ref) => {
    const colors = gradientColors || colorPresets[colorPreset] || colorPresets.custom;
    const colorVars = {};
    for (let i = 0; i < 10; i++) {
        colorVars[`--glow-color-${i + 1}`] = colors[i % colors.length];
    }
    return (_jsxs("div", { ref: ref, className: cn("relative isolate grid place-content-center overflow-hidden", "bg-card/50 backdrop-blur-md", className), style: {
            width,
            height: height || "auto",
            aspectRatio: height ? "unset" : aspectRatio,
            borderRadius,
            "--glow-animation-duration": `${animationDuration}s`,
            ...colorVars,
            ...style,
        }, ...props, children: [_jsx("div", { className: cn("absolute -z-10 rounded-[inherit] border-solid glow-conic", paused && "[animation-play-state:paused]"), style: {
                    inset,
                    borderWidth,
                    filter: `blur(${blurAmount})`,
                } }), _jsx("div", { className: "relative z-10 flex h-full w-full items-center justify-center bg-transparent p-4", children: children })] }));
});
GlowBorderCard.displayName = "GlowBorderCard";
