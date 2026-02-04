"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle, Info, X } from "lucide-react";
import { createContext, useCallback, useContext, useState } from "react";
const ToastContext = createContext(undefined);
export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const addToast = useCallback(({ title, description, type = "default", duration = 3000 }) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, title, description, type, duration }]);
        if (duration > 0) {
            setTimeout(() => {
                removeToast(id);
            }, duration);
        }
    }, []);
    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);
    return (_jsxs(ToastContext.Provider, { value: { addToast, removeToast }, children: [children, _jsx(ToastContainer, { toasts: toasts, removeToast: removeToast })] }));
}
function ToastContainer({ toasts, removeToast, }) {
    return (_jsx("div", { className: "fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm pointer-events-none p-4", children: _jsx(AnimatePresence, { mode: "popLayout", children: toasts.map((toast) => (_jsx(ToastItem, { toast: toast, onClose: () => removeToast(toast.id) }, toast.id))) }) }));
}
function ToastItem({ toast, onClose }) {
    const icons = {
        success: _jsx(CheckCircle, { className: "w-5 h-5 text-green-500" }),
        error: _jsx(AlertCircle, { className: "w-5 h-5 text-red-500" }),
        info: _jsx(Info, { className: "w-5 h-5 text-blue-500" }),
        default: null,
    };
    return (_jsxs(motion.div, { layout: true, initial: { opacity: 0, y: 50, scale: 0.9 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }, className: "pointer-events-auto w-full bg-card border border-border rounded-xl shadow-lg p-4 flex items-start gap-3", children: [icons[toast.type || "default"], _jsxs("div", { className: "flex-1", children: [toast.title && (_jsx("h4", { className: "text-sm font-semibold text-neutral-900 dark:text-neutral-100", children: toast.title })), toast.description && (_jsx("p", { className: "text-sm text-neutral-500 dark:text-neutral-400 mt-1", children: toast.description }))] }), _jsx("button", { onClick: onClose, className: "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors", children: _jsx(X, { className: "w-4 h-4" }) })] }));
}
