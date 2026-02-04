"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../lib/utils";
export function ShineBorder({ children, className, color = "hsl(var(--primary))", borderWidth = 1, duration = 14, }) {
    return (_jsxs("div", { className: cn("relative flex h-full w-full items-center justify-center rounded-(--radius) border border-transparent bg-card p-px", className), children: [_jsx("div", { className: "pointer-events-none absolute inset-0 rounded-(--radius) transition-opacity", style: {
                    background: Array.isArray(color) ? `linear-gradient(90deg, ${color.join(", ")})` : color,
                    padding: borderWidth,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                } }), _jsx("div", { className: "relative z-10 w-full h-full rounded-(--radius) bg-card overflow-hidden", children: children })] }));
}
