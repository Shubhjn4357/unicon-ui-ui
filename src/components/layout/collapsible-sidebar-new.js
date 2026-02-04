"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
export function CollapsibleSidebar({ children, defaultCollapsed = false, collapsedWidth = 80, expandedWidth = 280, position = "left", mobileBreakpoint = 768, showToggle = true, className, contentClassName, onCollapsedChange, }) {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const sidebarRef = useRef(null);
    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < mobileBreakpoint;
            setIsMobile(mobile);
            if (!mobile) {
                setIsMobileOpen(false);
            }
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, [mobileBreakpoint]);
    // Handle collapse toggle
    const toggleCollapse = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        onCollapsedChange?.(newState);
    };
    // Handle mobile toggle
    const toggleMobile = () => {
        setIsMobileOpen(!isMobileOpen);
    };
    // Close on outside click (mobile)
    useEffect(() => {
        if (!isMobile || !isMobileOpen)
            return;
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsMobileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMobile, isMobileOpen]);
    // Mobile menu button
    if (isMobile) {
        return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: toggleMobile, className: cn("fixed top-4 z-50 rounded-lg bg-background p-2 shadow-lg border border-border", position === "left" ? "left-4" : "right-4"), "aria-label": "Toggle sidebar", children: isMobileOpen ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" }) }), _jsx(AnimatePresence, { children: isMobileOpen && (_jsxs(_Fragment, { children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 z-40 bg-black/50", onClick: () => setIsMobileOpen(false) }), _jsx(motion.div, { ref: sidebarRef, initial: { x: position === "left" ? "-100%" : "100%" }, animate: { x: 0 }, exit: { x: position === "left" ? "-100%" : "100%" }, transition: { type: "spring", damping: 30, stiffness: 300 }, className: cn("fixed top-0 z-50 h-full bg-background shadow-2xl border-r border-border", position === "left" ? "left-0" : "right-0", className), style: { width: expandedWidth }, children: _jsx("div", { className: cn("h-full overflow-y-auto p-4", contentClassName), children: children }) })] })) })] }));
    }
    // Desktop sidebar
    return (_jsxs(motion.div, { ref: sidebarRef, animate: {
            width: isCollapsed ? collapsedWidth : expandedWidth,
        }, transition: { type: "spring", damping: 30, stiffness: 300 }, className: cn("relative h-full bg-background border-r border-border", className), children: [showToggle && (_jsx("button", { onClick: toggleCollapse, className: cn("absolute top-4 z-10 rounded-full bg-background p-1.5 shadow-md border border-border hover:bg-accent transition-colors", position === "left" ? "-right-3" : "-left-3"), "aria-label": isCollapsed ? "Expand sidebar" : "Collapse sidebar", children: position === "left" ? (isCollapsed ? (_jsx(ChevronRight, { className: "h-4 w-4" })) : (_jsx(ChevronLeft, { className: "h-4 w-4" }))) : isCollapsed ? (_jsx(ChevronLeft, { className: "h-4 w-4" })) : (_jsx(ChevronRight, { className: "h-4 w-4" })) })), _jsx("div", { className: cn("h-full overflow-hidden", contentClassName), children: _jsx(motion.div, { animate: {
                        opacity: isCollapsed ? 0 : 1,
                        x: isCollapsed ? (position === "left" ? -20 : 20) : 0,
                    }, transition: { duration: 0.2 }, className: "h-full overflow-y-auto p-4", children: children }) })] }));
}
// Sidebar content components
export function SidebarHeader({ children, className, }) {
    return _jsx("div", { className: cn("mb-6 border-b border-border pb-4", className), children: children });
}
export function SidebarSection({ title, children, className, }) {
    return (_jsxs("div", { className: cn("mb-6", className), children: [title && (_jsx("h3", { className: "mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: title })), _jsx("div", { className: "space-y-1", children: children })] }));
}
export function SidebarItem({ icon, children, active, onClick, className, }) {
    return (_jsxs("button", { onClick: onClick, className: cn("flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors", active
            ? "bg-primary text-primary-foreground"
            : "hover:bg-accent hover:text-accent-foreground", className), children: [icon && _jsx("span", { className: "shrink-0", children: icon }), _jsx("span", { className: "truncate", children: children })] }));
}
