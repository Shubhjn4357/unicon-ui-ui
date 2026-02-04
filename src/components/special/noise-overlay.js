"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../lib/utils";
export function NoiseOverlay({ className, opacity = 0.05 }) {
    return (_jsx("div", { className: cn("pointer-events-none fixed inset-0 z-50 h-screen w-screen", className), style: {
            opacity: opacity,
        }, children: _jsxs("svg", { className: "h-full w-full", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("filter", { id: "noiseFilter", children: _jsx("feTurbulence", { type: "fractalNoise", baseFrequency: "0.8", numOctaves: "3", stitchTiles: "stitch" }) }), _jsx("rect", { width: "100%", height: "100%", filter: "url(#noiseFilter)" })] }) }));
}
