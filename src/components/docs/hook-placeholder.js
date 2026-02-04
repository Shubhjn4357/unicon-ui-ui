"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, AlertDescription, AlertTitle } from "@/components/core/alert";
import { AlertCircle } from "lucide-react";
export function HookPlaceholder({ example }) {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center p-6 space-y-4 w-full", children: [_jsxs(Alert, { children: [_jsx(AlertCircle, { className: "h-4 w-4" }), _jsx(AlertTitle, { children: "Hook Documentation" }), _jsx(AlertDescription, { children: "This is a React Hook. It does not have a visual component preview. Please refer to the code example below." })] }), example && (_jsx("div", { className: "w-full rounded-md border bg-muted p-4 overflow-x-auto", children: _jsx("pre", { className: "text-sm font-mono text-foreground", children: example.code }) }))] }));
}
