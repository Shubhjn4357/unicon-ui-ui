"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native AvatarCircles - Stacked avatar group
 */
export const AvatarCircles = React.forwardRef(({ avatars, max = 5, className, ...props }, ref) => {
    const visibleAvatars = avatars.slice(0, max);
    const remainingCount = Math.max(0, avatars.length - max);
    return (_jsxs("div", { ref: ref, className: cn("flex items-center -space-x-3", className), ...props, children: [visibleAvatars.map((avatar, i) => (_jsx(motion.div, { className: "relative h-10 w-10 overflow-hidden rounded-full border-2 border-surface bg-[hsl(var(--primary))]/10", initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: { delay: i * 0.1 }, whileHover: { scale: 1.1, zIndex: 10 }, children: avatar.src ? (_jsx("img", { src: avatar.src, alt: avatar.name, className: "h-full w-full object-cover" })) : (_jsx("div", { className: "flex h-full w-full items-center justify-center text-sm font-medium text-[hsl(var(--primary))]", children: avatar.name.charAt(0).toUpperCase() })) }, i))), remainingCount > 0 && (_jsxs(motion.div, { className: "relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-surface bg-muted text-xs font-medium text-foreground", initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: { delay: visibleAvatars.length * 0.1 }, children: ["+", remainingCount] }))] }));
});
AvatarCircles.displayName = "AvatarCircles";
