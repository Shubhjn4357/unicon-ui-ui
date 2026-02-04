"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "../../lib/utils";
export const Safari = React.forwardRef(({ className, url = "unicorn.ui", src, children, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn("relative min-h-[300px] w-full overflow-hidden rounded-xl border bg-background shadow-xl", className), ...props, children: [_jsxs("div", { className: "flex items-center gap-2 border-b bg-muted/50 px-4 py-3", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx("div", { className: "h-3 w-3 rounded-full bg-destructive/80" }), _jsx("div", { className: "h-3 w-3 rounded-full bg-warning/80" }), _jsx("div", { className: "h-3 w-3 rounded-full bg-success/80" })] }), _jsx("div", { className: "flex flex-1 items-center justify-center", children: _jsx("div", { className: "flex h-8 w-full max-w-sm items-center justify-center rounded-md bg-background px-3 text-xs text-muted-foreground shadow-sm", children: _jsx("span", { className: "truncate", children: url }) }) }), _jsx("div", { className: "w-16" }), " "] }), _jsx("div", { className: "relative h-full w-full bg-background", children: src ? (_jsx("img", { src: src, alt: "Safari Content", className: "h-full w-full object-cover" })) : (children) })] }));
});
Safari.displayName = "Safari";
