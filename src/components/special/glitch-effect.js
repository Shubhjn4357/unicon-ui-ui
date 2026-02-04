"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native GlitchEffect - Cyberpunk text glitch
 */
export const GlitchEffect = React.forwardRef(({ text, className, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn("relative inline-block font-mono font-bold", className), ...props, children: [_jsx("span", { className: "relative z-10", children: text }), _jsx("span", { className: "absolute top-0 left-0 -z-10 translate-x-[2px] text-destructive opacity-70 animate-pulse", style: { clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }, children: text }), _jsx("span", { className: "absolute top-0 left-0 -z-10 -translate-x-[2px] text-primary opacity-70 animate-pulse", style: {
                    clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)",
                    animationDelay: "0.1s",
                }, children: text })] }));
});
GlitchEffect.displayName = "GlitchEffect";
