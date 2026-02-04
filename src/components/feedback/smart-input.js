"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Search, X } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";
export const SmartInput = React.forwardRef(({ label, error, isLoading, leftIcon, onClear, className, type, value, onChange, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    return (_jsxs("div", { className: "w-full space-y-1.5", children: [label && _jsx("label", { className: "text-sm font-medium text-foreground ml-1", children: label }), _jsx("div", { className: "relative group", children: _jsxs("div", { className: cn("flex items-center rounded-(--radius) border border-border bg-card px-3 py-2 transition-all duration-200", isFocused && "border-primary ring-2 ring-primary/20", error && "border-destructive ring-destructive/20"), children: [(leftIcon && (_jsx("div", { className: "mr-2 text-muted-foreground group-focus-within:text-primary transition-colors", children: leftIcon }))) ||
                            (type === "search" && (_jsx(Search, { className: "mr-2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" }))), _jsx("input", { ref: ref, type: type, className: cn("flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className), onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), value: value, onChange: onChange, ...props }), _jsx(AnimatePresence, { children: value && value.toString().length > 0 && onClear && (_jsx(motion.button, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, onClick: onClear, className: "ml-2 rounded-full p-0.5 hover:bg-accent transition-colors cursor-pointer", children: _jsx(X, { className: "h-4 w-4 text-muted-foreground" }) })) }), isLoading && (_jsx("div", { className: "ml-2", children: _jsx(Loader2, { className: "h-4 w-4 animate-spin text-primary" }) }))] }) }), error && (_jsx(motion.p, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "text-xs font-medium text-destructive ml-1", children: error }))] }));
});
SmartInput.displayName = "SmartInput";
