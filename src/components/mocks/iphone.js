"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "../../lib/utils";
export const Iphone15Pro = React.forwardRef(({ className, src, children, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn("relative aspect-9/19 w-[280px] rounded-[48px] bg-foreground border-8 border-muted overflow-hidden shadow-xl ring-1 ring-border/10", className), ...props, children: [_jsx("div", { className: "absolute left-1/2 top-0 z-20 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-muted", children: _jsx("div", { className: "absolute left-1/2 top-1/2 h-2 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted-foreground/20" }) }), _jsx("div", { className: "relative h-full w-full overflow-hidden rounded-[45px] bg-background", children: src ? (_jsx("img", { src: src, alt: "iPhone Content", className: "h-full w-full object-cover" })) : (children) }), _jsx("div", { className: "absolute -left-[10px] top-24 h-8 w-1 rounded-l-md bg-muted" }), _jsx("div", { className: "absolute -left-[10px] top-40 h-12 w-1 rounded-l-md bg-muted" }), _jsx("div", { className: "absolute -left-[10px] top-56 h-12 w-1 rounded-l-md bg-muted" }), _jsx("div", { className: "absolute -right-[10px] top-40 h-20 w-1 rounded-r-md bg-muted" })] }));
});
Iphone15Pro.displayName = "Iphone15Pro";
export const Iphone = Iphone15Pro;
