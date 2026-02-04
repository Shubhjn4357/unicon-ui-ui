"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Input, useCopyToClipboard, useTheme, useWindowSize } from "@unicorn-ui/ui";
import { Check, Copy, Monitor, Moon, Smartphone, Sun } from "lucide-react";
import { useState } from "react";
export function ThemeDemo() {
    const { theme, setTheme } = useTheme();
    return (_jsxs("div", { className: "flex flex-col items-center gap-4 p-4 border rounded-lg bg-background", children: [_jsxs("p", { className: "font-medium", children: ["Current Theme: ", _jsx("span", { className: "font-mono", children: theme })] }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsxs(Button, { variant: theme === "light" ? "default" : "outline", onClick: () => setTheme("light"), className: "gap-2", children: [_jsx(Sun, { className: "w-4 h-4" }), " Light"] }), _jsxs(Button, { variant: theme === "dark" ? "default" : "outline", onClick: () => setTheme("dark"), className: "gap-2", children: [_jsx(Moon, { className: "w-4 h-4" }), " Dark"] }), _jsxs(Button, { variant: theme === "system" ? "default" : "outline", onClick: () => setTheme("system"), className: "gap-2", children: [_jsx(Monitor, { className: "w-4 h-4" }), " System"] })] })] }));
}
export function WindowSizeDemo() {
    const { width, height } = useWindowSize();
    return (_jsxs("div", { className: "flex flex-col gap-2 items-center justify-center p-8 bg-muted rounded-lg border border-dashed w-full", children: [_jsxs("div", { className: "text-4xl font-bold flex items-center gap-2", children: [width < 768 ? _jsx(Smartphone, { className: "w-8 h-8" }) : _jsx(Monitor, { className: "w-8 h-8" }), width, "px ", _jsx("span", { className: "text-muted-foreground", children: "x" }), " ", height, "px"] }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Resize your window to see updates" })] }));
}
export function CopyDemo() {
    const [text, setText] = useState("Hello Unicorn UI!");
    const [copied, copy] = useCopyToClipboard();
    return (_jsxs("div", { className: "flex gap-2 max-w-sm w-full p-4 border rounded-lg", children: [_jsx(Input, { value: text, onChange: (e) => setText(e.target.value) }), _jsx(Button, { onClick: () => copy(text), variant: "outline", className: "w-12 shrink-0", children: copied ? _jsx(Check, { className: "w-4 h-4 text-green-500" }) : _jsx(Copy, { className: "w-4 h-4" }) })] }));
}
