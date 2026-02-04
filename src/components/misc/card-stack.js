"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native CardStack - Stacked swipeable cards
 */
export const CardStack = React.forwardRef(({ items, offset = 10, scaleFactor = 0.06, className, ...props }, ref) => {
    const [cards] = React.useState(items);
    return (_jsx(motion.div, { ref: ref, className: cn("relative h-60 w-60 md:h-60 md:w-96", className), ...props, children: cards.map((card, index) => {
            return (_jsx(motion.div, { className: "absolute h-60 w-60 md:h-60 md:w-96 rounded-3xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-4 shadow-xl flex flex-col justify-between", style: {
                    transformOrigin: "top center",
                }, animate: {
                    top: index * -offset,
                    scale: 1 - index * scaleFactor, // decrease scale for cards behind
                    zIndex: cards.length - index, // decrease z-index
                }, children: _jsxs("div", { className: "group flex h-full w-full flex-col", children: [_jsx("p", { className: "text-lg font-bold text-[hsl(var(--foreground))]", children: card.name }), _jsx("div", { className: "mt-2 text-sm font-normal text-[hsl(var(--muted-foreground))] opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: card.content })] }) }, card.id));
        }) }));
});
CardStack.displayName = "CardStack";
