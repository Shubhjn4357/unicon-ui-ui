"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
export function HoverRevealCard({ title, subtitle, image, children, className, }) {
    return (_jsxs(motion.div, { className: cn("group relative h-[400px] w-full overflow-hidden rounded-xl bg-muted", className), whileHover: "hover", children: [_jsxs("div", { className: "absolute inset-0 z-10 flex flex-col justify-end p-6 bg-linear-to-t from-[hsl(var(--background))]/80 to-transparent", children: [_jsx("h3", { className: "text-2xl font-bold text-[hsl(var(--foreground))] translate-y-4 group-hover:translate-y-0 transition-transform duration-300", children: title }), subtitle && (_jsx("p", { className: "text-[hsl(var(--foreground))]/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75", children: subtitle }))] }), _jsx(motion.img, { src: image, alt: title, className: "absolute inset-0 h-full w-full object-cover", variants: {
                    hover: { scale: 1.1 },
                }, transition: { duration: 0.5 } }), children && (_jsx("div", { className: "absolute inset-0 bg-[hsl(var(--background))]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", children: children }))] }));
}
