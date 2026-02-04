"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
const TabsContext = React.createContext(null);
export const Tabs = React.forwardRef(({ value: controlledValue, defaultValue, onValueChange, children, className, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "");
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;
    const handleValueChange = (newValue) => {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        onValueChange?.(newValue);
    };
    return (_jsx(TabsContext.Provider, { value: { value, onValueChange: handleValueChange }, children: _jsx("div", { ref: ref, className: cn("w-full", className), ...props, children: children }) }));
});
Tabs.displayName = "Tabs";
export const TabsList = React.forwardRef(({ children, className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("inline-flex items-center justify-center rounded-(--radius) bg-muted p-1", "unicorn-tabs-list", className), ...props, children: children })));
TabsList.displayName = "TabsList";
export const TabsTrigger = React.forwardRef(({ value, children, className, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context)
        throw new Error("TabsTrigger must be used within Tabs");
    const isActive = context.value === value;
    return (_jsxs("button", { ref: ref, type: "button", role: "tab", "aria-selected": isActive, onClick: () => context.onValueChange(value), className: cn("relative inline-flex items-center justify-center whitespace-nowrap rounded-[calc(var(--radius)*0.75)] px-3 py-1.5 text-sm font-medium transition-all", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2", "disabled:pointer-events-none disabled:opacity-50", "unicorn-tabs-trigger", isActive
            ? "text-[hsl(var(--foreground))] shadow-sm"
            : "text-[hsl(var(--foreground))]-secondary hover:text-[hsl(var(--foreground))]", className), ...props, children: [isActive && (_jsx(motion.div, { layoutId: "activeTab", className: "absolute inset-0 rounded-[calc(var(--radius)*0.75)] bg-[hsl(var(--card))]", transition: { type: "spring", stiffness: 400, damping: 30 } })), _jsx("span", { className: "relative z-10", children: children })] }));
});
TabsTrigger.displayName = "TabsTrigger";
export const TabsContent = React.forwardRef(({ value, children, className, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context)
        throw new Error("TabsContent must be used within Tabs");
    if (context.value !== value)
        return null;
    return (_jsx(motion.div, { ref: ref, role: "tabpanel", className: cn("mt-2", className), initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.2 }, ...props, children: children }));
});
TabsContent.displayName = "TabsContent";
