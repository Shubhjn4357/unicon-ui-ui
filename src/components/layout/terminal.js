"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../lib/utils";
export function Terminal({ title = "bash", children, className, ...props }) {
    return (_jsxs("div", { className: cn("overflow-hidden rounded-(--radius) border border-border bg-card font-mono text-sm shadow-xl", className), ...props, children: [_jsxs("div", { className: "flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2", children: [_jsxs("div", { className: "flex gap-1.5", children: [_jsx("div", { className: "h-3 w-3 rounded-full bg-destructive/80" }), _jsx("div", { className: "h-3 w-3 rounded-full bg-warning/80" }), _jsx("div", { className: "h-3 w-3 rounded-full bg-success/80" })] }), _jsx("div", { className: "ml-2 text-xs text-muted-foreground select-none", children: title })] }), _jsx("div", { className: "p-4 text-foreground overflow-x-auto whitespace-pre", children: children })] }));
}
export function TerminalCommand({ command, output }) {
    return (_jsxs("div", { className: "mb-2", children: [_jsxs("div", { className: "flex gap-2 text-primary", children: [_jsx("span", { className: "text-success", children: "\u279C" }), _jsx("span", { className: "text-primary", children: "~" }), _jsx("span", { className: "text-foreground font-bold", children: command })] }), output && _jsx("div", { className: "mt-1 text-muted-foreground pl-4", children: output })] }));
}
