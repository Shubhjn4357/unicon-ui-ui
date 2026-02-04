"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * SocialFlipButton - Button with 3D flip effect on hover
 * Features card-flip animation revealing different content on back
 */
export const SocialFlipButton = React.forwardRef(({ children, className, frontIcon, backIcon, frontText = "Follow", backText = "Following", ...props }, ref) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    return (_jsx("div", { className: cn("perspective-1000", className), style: { perspective: "1000px" }, children: _jsxs(motion.button, { ref: ref, className: "relative h-12 w-40 preserve-3d", onHoverStart: () => setIsFlipped(true), onHoverEnd: () => setIsFlipped(false), animate: { rotateY: isFlipped ? 180 : 0 }, transition: { duration: 0.6, type: "spring", stiffness: 200, damping: 20 }, style: { transformStyle: "preserve-3d" }, ...props, children: [_jsxs("div", { className: cn("backface-hidden absolute inset-0 flex items-center justify-center gap-2 rounded-lg", "bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg", "font-medium"), style: { backfaceVisibility: "hidden" }, children: [frontIcon, _jsx("span", { children: frontText })] }), _jsxs("div", { className: cn("backface-hidden absolute inset-0 flex items-center justify-center gap-2 rounded-lg", "bg-linear-to-r from-green-500 to-green-600 text-white shadow-lg", "font-medium"), style: {
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }, children: [backIcon, _jsx("span", { children: backText })] })] }) }));
});
SocialFlipButton.displayName = "SocialFlipButton";
