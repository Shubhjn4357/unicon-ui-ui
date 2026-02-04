"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Reorder } from "framer-motion";
import { cn } from "../../lib/utils";
export function ReorderableList({ items, setItems, className }) {
    return (_jsx(Reorder.Group, { axis: "y", values: items, onReorder: setItems, className: cn("flex flex-col gap-4", className), children: items.map((item) => (_jsx(Reorder.Item, { value: item, className: "p-4 rounded-xl border bg-card cursor-grab active:cursor-grabbing shadow-xs", whileDrag: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }, children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "font-medium", children: item }), _jsx("span", { className: "text-muted-foreground", children: "::" })] }) }, item))) }));
}
