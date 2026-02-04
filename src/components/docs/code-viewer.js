"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "../core/button";
export function CodeViewer({ componentName, args, defaultArgs }) {
    const [copied, setCopied] = useState(false);
    // Generate code string
    const generateCode = () => {
        const props = Object.entries(args)
            .filter(([key, value]) => {
            // Don't show props matching default values
            return value !== defaultArgs[key] && value !== undefined;
        })
            .map(([key, value]) => {
            if (typeof value === "boolean") {
                return value ? key : `${key}={false}`;
            }
            if (typeof value === "number") {
                return `${key}={${value}}`;
            }
            if (typeof value === "string") {
                return `${key}="${value}"`;
            }
            if (typeof value === "object") {
                return `${key}={${JSON.stringify(value)}}`;
            }
            return `${key}={${value}}`;
        })
            .join("\n  ");
        const propsString = props ? `\n  ${props}\n` : "";
        return `<${componentName}${propsString}/>`;
    };
    const code = generateCode();
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (_jsxs("div", { className: "relative group rounded-lg overflow-hidden border bg-zinc-950", children: [_jsx("div", { className: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity", children: _jsx(Button, { size: "icon", variant: "ghost", className: "h-8 w-8 text-white hover:bg-white/20", onClick: handleCopy, children: copied ? _jsx(Check, { className: "h-4 w-4" }) : _jsx(Copy, { className: "h-4 w-4" }) }) }), _jsx("pre", { className: "p-4 overflow-x-auto text-sm font-mono text-zinc-300", children: _jsx("code", { children: code }) })] }));
}
