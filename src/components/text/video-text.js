"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * VideoText - High-end video-in-text masking component
 */
export function VideoText({ videoSrc, text, className, ...props }) {
    const [id] = React.useState(() => `mask-${Math.random().toString(36).substr(2, 9)}`);
    return (_jsxs("div", { className: cn("relative inline-block w-full overflow-hidden", className), ...props, children: [_jsx("video", { className: "absolute inset-0 h-full w-full object-cover", autoPlay: true, muted: true, loop: true, playsInline: true, children: _jsx("source", { src: videoSrc, type: "video/mp4" }) }), _jsxs("svg", { className: "relative w-full h-auto pointer-events-none select-none", viewBox: "0 0 500 100", children: [_jsx("defs", { children: _jsxs("mask", { id: id, x: "0", y: "0", width: "100%", height: "100%", children: [_jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "white" }), _jsx("text", { x: "50%", y: "50%", textAnchor: "middle", dominantBaseline: "middle", className: "font-black uppercase", style: { fontSize: "60px" }, fill: "black", children: text })] }) }), _jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", className: "fill-background", mask: `url(#${id})` })] })] }));
}
