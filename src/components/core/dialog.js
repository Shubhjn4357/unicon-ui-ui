"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../lib/utils";
const DialogContext = createContext(undefined);
const useDialog = () => {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error("useDialog must be used within a Dialog");
    }
    return context;
};
export function Dialog({ children, open, onOpenChange }) {
    const [internalOpen, setInternalOpen] = useState(false);
    const isControlled = open !== undefined;
    const isOpen = isControlled ? open : internalOpen;
    const setIsOpen = (newOpen) => {
        if (!isControlled) {
            setInternalOpen(newOpen);
        }
        onOpenChange?.(newOpen);
    };
    return _jsx(DialogContext.Provider, { value: { isOpen, setIsOpen }, children: children });
}
export function DialogTrigger({ children, className, asChild }) {
    const { setIsOpen } = useDialog();
    return (_jsx("div", { className: cn("inline-flex cursor-pointer", className), onClick: () => setIsOpen(true), role: "button", children: children }));
}
export function DialogContent({ children, className }) {
    const { isOpen, setIsOpen } = useDialog();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);
    if (!mounted)
        return null;
    return createPortal(_jsx(AnimatePresence, { children: isOpen && (_jsxs(_Fragment, { children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", onClick: () => setIsOpen(false) }), _jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, transition: { type: "spring", stiffness: 300, damping: 30 }, className: cn("relative w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-2xl", "unicorn-dialog", className), children: [_jsxs("button", { onClick: () => setIsOpen(false), className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [_jsx(X, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Close" })] }), children] }) })] })) }), document.body);
}
export function DialogHeader({ className, ...props }) {
    return (_jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }));
}
export function DialogFooter({ className, ...props }) {
    return (_jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }));
}
export function DialogTitle({ className, ...props }) {
    return (_jsx("h2", { className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props }));
}
export function DialogDescription({ className, ...props }) {
    return _jsx("p", { className: cn("text-sm text-muted-foreground", className), ...props });
}
