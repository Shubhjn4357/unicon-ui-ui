"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
export const Accordion = React.forwardRef(({ items, type = "single", defaultValue, collapsible = true, className, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState(() => {
        if (defaultValue) {
            return new Set(Array.isArray(defaultValue) ? defaultValue : [defaultValue]);
        }
        return new Set();
    });
    const toggleItem = (id) => {
        setOpenItems((prev) => {
            const newSet = new Set(prev);
            const isOpen = newSet.has(id);
            if (type === "single") {
                newSet.clear();
                if (!isOpen)
                    newSet.add(id);
            }
            else {
                if (isOpen && collapsible) {
                    newSet.delete(id);
                }
                else if (!isOpen) {
                    newSet.add(id);
                }
            }
            return newSet;
        });
    };
    return (_jsx("div", { ref: ref, className: cn("space-y-2", className), ...props, children: items.map((item, idx) => {
            const isOpen = openItems.has(item.id);
            return (_jsxs("div", { className: cn("overflow-hidden rounded-(--radius) border border-border", "unicorn-card" // Treat each accordion item like a card for themes
                ), children: [_jsxs("button", { type: "button", onClick: () => toggleItem(item.id), className: "flex w-full items-center justify-between bg-card px-4 py-3 text-left font-medium transition-colors hover:bg-accent/50 cursor-pointer", children: [_jsx("span", { children: item.title }), _jsx(motion.svg, { className: "h-5 w-5 shrink-0 text-muted-foreground", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", animate: { rotate: isOpen ? 180 : 0 }, transition: { duration: 0.2 }, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), _jsx(AnimatePresence, { initial: false, children: isOpen && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.3, ease: "easeInOut" }, className: "overflow-hidden", children: _jsx("div", { className: "bg-card px-4 py-3 text-sm text-muted-foreground", children: item.content }) })) })] }, item.id || idx));
        }) }));
});
Accordion.displayName = "Accordion";
