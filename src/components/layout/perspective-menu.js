"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
export function PerspectiveMenu({ items, isOpen, onClose, className }) {
    return (_jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: cn("fixed inset-0 z-[50] flex items-center justify-center bg-background/90 backdrop-blur-sm", className), onClick: onClose, children: _jsx("nav", { className: "flex flex-col gap-6 perspective-[1000px]", children: items.map((item, i) => (_jsx(motion.a, { href: item.href, initial: { opacity: 0, rotateX: 90, y: 50 }, animate: { opacity: 1, rotateX: 0, y: 0 }, exit: { opacity: 0, rotateX: -90, y: -50 }, transition: {
                        delay: i * 0.1,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                    }, className: "text-6xl font-black uppercase tracking-tighter hover:text-primary transition-colors cursor-pointer", children: item.label }, item.label))) }) })) }));
}
