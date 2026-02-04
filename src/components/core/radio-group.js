"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn, generateId } from "../../lib/utils";
const RadioGroupContext = React.createContext(null);
export const RadioGroup = React.forwardRef(({ value: controlledValue, onValueChange, defaultValue, name, children, className, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "");
    const generatedName = React.useId();
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;
    const handleValueChange = (newValue) => {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        onValueChange?.(newValue);
    };
    return (_jsx(RadioGroupContext.Provider, { value: { value, onValueChange: handleValueChange, name: name || generatedName }, children: _jsx("div", { ref: ref, role: "radiogroup", className: cn("space-y-2", className), ...props, children: children }) }));
});
RadioGroup.displayName = "RadioGroup";
export const RadioGroupItem = React.forwardRef(({ value, label, className, id, ...props }, ref) => {
    const context = React.useContext(RadioGroupContext);
    if (!context)
        throw new Error("RadioGroupItem must be used within RadioGroup");
    const itemId = id || `radio-${generateId()}`;
    const isChecked = context.value === value;
    return (_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("div", { className: "relative", children: [_jsx("input", { ref: ref, type: "radio", id: itemId, value: value, name: context.name, checked: isChecked, onChange: () => context.onValueChange(value), className: "peer sr-only", ...props }), _jsx(motion.div, { className: cn("flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 transition-colors", "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2", "peer-disabled:cursor-not-allowed peer-disabled:opacity-50", isChecked ? "border-primary bg-primary" : "border-border bg-card", className), onClick: () => document.getElementById(itemId)?.click(), whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsx(motion.div, { className: "h-2 w-2 rounded-full bg-white", initial: false, animate: { scale: isChecked ? 1 : 0 }, transition: { duration: 0.2 } }) })] }), label && (_jsx("label", { htmlFor: itemId, className: "cursor-pointer text-sm font-medium text-foreground", children: label }))] }));
});
RadioGroupItem.displayName = "RadioGroupItem";
