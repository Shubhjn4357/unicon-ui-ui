"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native CodeComparison - Side-by-side code diff
 */
export const CodeComparison = React.forwardRef(({ beforeCode, afterCode, language = "typescript", filename, className, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn("flex flex-col gap-4", className), ...props, children: [filename && (_jsx("div", { className: "flex items-center gap-2 rounded-t-lg border border-b-0 px-4 py-2 text-sm font-medium text-muted-foreground bg-muted/30", children: filename })), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs(motion.div, { className: "rounded-(--radius) border border-destructive/20 bg-destructive/10 p-4", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.3 }, children: [_jsx("div", { className: "mb-2 text-xs font-semibold text-destructive", children: "Before" }), _jsx("pre", { className: "overflow-x-auto text-sm", children: _jsx("code", { className: `language-${language}`, children: beforeCode }) })] }), _jsxs(motion.div, { className: "rounded-(--radius) border border-success/20 bg-success/10 p-4", initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.3, delay: 0.1 }, children: [_jsx("div", { className: "mb-2 text-xs font-semibold text-success", children: "After" }), _jsx("pre", { className: "overflow-x-auto text-sm", children: _jsx("code", { className: `language-${language}`, children: afterCode }) })] })] })] }));
});
CodeComparison.displayName = "CodeComparison";
