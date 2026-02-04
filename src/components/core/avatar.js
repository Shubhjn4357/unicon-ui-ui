"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
export const Avatar = React.forwardRef(({ src, alt, fallback, size = "md", status, children, className, ...props }, ref) => {
    const [imgError, setImgError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const sizeStyles = {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-lg",
    };
    const statusColors = {
        online: "bg-green-500",
        offline: "bg-gray-400",
        away: "bg-yellow-500",
        busy: "bg-red-500",
    };
    return (_jsxs(motion.div, { ref: ref, className: cn("relative inline-flex shrink-0 overflow-hidden rounded-full", sizeStyles[size], className), whileHover: { scale: 1.05 }, transition: { type: "spring", stiffness: 400, damping: 17 }, ...props, children: [children ||
                (src && !imgError ? (_jsxs(_Fragment, { children: [isLoading && (_jsx("div", { className: "absolute inset-0 animate-pulse bg-muted ring-1 ring-inset ring-white/10" })), _jsx("img", { src: src, alt: alt || "Avatar", className: "h-full w-full object-cover", onLoad: () => setIsLoading(false), onError: () => {
                                setImgError(true);
                                setIsLoading(false);
                            } })] })) : (_jsx("div", { className: "flex h-full w-full items-center justify-center bg-[hsl(var(--primary))]/10 font-medium text-[hsl(var(--primary))]", children: fallback || alt?.charAt(0).toUpperCase() || "?" }))), status && (_jsx(motion.div, { className: cn("absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-surface", statusColors[status]), initial: { scale: 0 }, animate: { scale: 1 }, transition: { delay: 0.1 } }))] }));
});
Avatar.displayName = "Avatar";
export const AvatarImage = ({ src, alt, ...props }) => (_jsx("img", { src: src, alt: alt, "aria-hidden": !alt, className: "h-full w-full object-cover", ...props }));
export const AvatarFallback = ({ children, ...props }) => (_jsx("div", { className: "flex h-full w-full items-center justify-center bg-[hsl(var(--primary))]/10 font-medium text-[hsl(var(--primary))]", ...props, children: children }));
