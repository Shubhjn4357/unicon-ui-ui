"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";
const DropdownContext = React.createContext(undefined);
export function DropdownMenu({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (_jsx(DropdownContext.Provider, { value: { isOpen, setIsOpen }, children: _jsx("div", { className: "relative inline-block text-left", ref: menuRef, children: children }) }));
}
export function DropdownMenuTrigger({ children, className, asChild }) {
    const context = React.useContext(DropdownContext);
    if (!context)
        throw new Error("DropdownMenuTrigger must be used within DropdownMenu");
    const { isOpen, setIsOpen } = context;
    if (asChild && React.isValidElement(children)) {
        const childElement = children;
        return React.cloneElement(childElement, {
            onClick: (e) => {
                childElement.props.onClick?.(e);
                setIsOpen(!isOpen);
            },
            className: cn(childElement.props.className, className, "cursor-pointer"),
        });
    }
    return (_jsx("div", { onClick: () => setIsOpen(!isOpen), className: cn("cursor-pointer", className), role: "button", children: children }));
}
export function DropdownMenuContent({ children, className, width = 220, align = "start", }) {
    const context = React.useContext(DropdownContext);
    if (!context)
        throw new Error("DropdownMenuContent must be used within DropdownMenu");
    const { isOpen } = context;
    const alignmentClasses = {
        start: "left-0",
        end: "right-0",
        center: "left-1/2 -translate-x-1/2",
    };
    return (_jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, y: -10, scale: 0.95 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -10, scale: 0.95 }, transition: { duration: 0.2, ease: "easeOut" }, style: { width }, className: cn("absolute z-50 mt-2 bg-popover text-popover-foreground rounded-xl shadow-xl border border-border overflow-hidden", alignmentClasses[align], className), children: _jsx("div", { className: "p-1", children: children }) })) }));
}
export function DropdownMenuItem({ children, onClick, icon, className, destructive, }) {
    const context = React.useContext(DropdownContext);
    const { setIsOpen } = context || {};
    const handleClick = () => {
        onClick?.();
        setIsOpen?.(false);
    };
    return (_jsxs("button", { onClick: handleClick, className: cn("bg-transparent flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground", destructive && "text-destructive hover:bg-destructive/10", className), children: [icon && _jsx("span", { className: "h-4 w-4 shrink-0", children: icon }), children] }));
}
export function DropdownMenuSeparator() {
    return _jsx("div", { className: "h-px bg-border my-1 mx-1" });
}
export function DropdownMenuLabel({ children }) {
    return (_jsx("div", { className: "px-3 py-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider", children: children }));
}
