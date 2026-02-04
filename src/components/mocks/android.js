"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "../../lib/utils";
export const Android = React.forwardRef(({ className, src, children, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn("relative aspect-9/19 w-[280px] rounded-[36px] bg-foreground border-8 border-muted overflow-hidden shadow-xl", className), ...props, children: [_jsx("div", { className: "absolute left-1/2 top-4 z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-muted", children: _jsx("div", { className: "absolute inset-1 rounded-full bg-muted-foreground/20" }) }), _jsx("div", { className: "relative h-full w-full overflow-hidden rounded-[28px] bg-background", children: src ? (_jsx("img", { src: src, alt: "Android Content", className: "h-full w-full object-cover" })) : (children) }), _jsx("div", { className: "absolute -right-[10px] top-32 h-10 w-1 rounded-r-md bg-muted" }), _jsx("div", { className: "absolute -right-[10px] top-48 h-16 w-1 rounded-r-md bg-muted" })] }));
});
Android.displayName = "Android";
