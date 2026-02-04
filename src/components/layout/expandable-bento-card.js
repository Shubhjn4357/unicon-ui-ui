"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * ExpandableBentoCard - Bento-style card with expand animation
 * Features smooth expand/collapse animation with glassmorphism effect
 */
export const ExpandableBentoCard = React.forwardRef(({ title, description, icon, expandedContent, className, gradient = "from-purple-500/10 to-pink-500/10", }, ref) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    return (_jsxs(motion.div, { ref: ref, className: cn("glass-effect group relative cursor-pointer overflow-hidden rounded-2xl p-6", "border border-border/50 shadow-lg transition-all hover:shadow-xl", className), layout: true, onClick: () => setIsExpanded(!isExpanded), whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [_jsx("div", { className: cn("absolute inset-0 -z-10 bg-linear-to-br opacity-50", gradient) }), _jsxs("div", { className: "flex items-start gap-4", children: [icon && (_jsx(motion.div, { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]", whileHover: { rotate: 360 }, transition: { duration: 0.6 }, children: icon })), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-xl font-semibold", children: title }), _jsx("p", { className: "mt-1 text-sm text-[hsl(var(--foreground))]-secondary", children: description })] }), _jsx(motion.div, { animate: { rotate: isExpanded ? 180 : 0 }, transition: { duration: 0.3 }, className: "text-[hsl(var(--foreground))]-secondary", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }) })] }), _jsx(AnimatePresence, { children: isExpanded && expandedContent && (_jsx(motion.div, { initial: { opacity: 0, height: 0, marginTop: 0 }, animate: { opacity: 1, height: "auto", marginTop: 16 }, exit: { opacity: 0, height: 0, marginTop: 0 }, transition: { duration: 0.3, ease: "easeInOut" }, className: "overflow-hidden", children: _jsx("div", { className: "rounded-lg border border-[hsl(var(--border))]/50 bg-[hsl(var(--card))]/50 p-4", children: expandedContent }) })) })] }));
});
ExpandableBentoCard.displayName = "ExpandableBentoCard";
