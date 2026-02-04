"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";
export function ParallaxText({ children, baseVelocity = 100, className }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });
    const x = useTransform(baseX, (v) => `${String(Wrap(-20, -45, v))}%`);
    const directionFactor = useRef(1);
    useAnimationFrame((_t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        }
        else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });
    return (_jsx("div", { className: "w-full overflow-hidden whitespace-nowrap", style: { display: "flex", flexWrap: "nowrap" }, children: _jsxs(motion.div, { className: cn("flex whitespace-nowrap text-nowrap font-bold uppercase tracking-tighter", className), style: { x }, children: [_jsxs("span", { className: "block mr-10", children: [children, " "] }), _jsxs("span", { className: "block mr-10", children: [children, " "] }), _jsxs("span", { className: "block mr-10", children: [children, " "] }), _jsxs("span", { className: "block mr-10", children: [children, " "] }), _jsxs("span", { className: "block mr-10", children: [children, " "] }), _jsxs("span", { className: "block mr-10", children: [children, " "] }), _jsxs("span", { className: "block mr-10", children: [children, " "] }), _jsxs("span", { className: "block mr-10", children: [children, " "] })] }) }));
}
function Wrap(min, max, v) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}
export function ScrollBasedVelocity({ text, default_velocity = 5, className, }) {
    return (_jsxs("section", { className: "relative w-full", children: [_jsx(ParallaxText, { baseVelocity: default_velocity, className: className, children: text }), _jsx(ParallaxText, { baseVelocity: -default_velocity, className: className, children: text })] }));
}
