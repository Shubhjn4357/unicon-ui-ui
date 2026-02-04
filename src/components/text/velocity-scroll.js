"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
function ParallaxText({ children, baseVelocity = 100, className }) {
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
    const x = useTransform(baseX, (v) => `${v}%`);
    const directionFactor = React.useRef(1);
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
    return (_jsx("div", { className: "parallax flex whitespace-nowrap overflow-hidden", children: _jsxs(motion.div, { className: cn("scroller flex whitespace-nowrap flex-nowrap", className), style: { x }, children: [_jsxs("span", { className: "block mr-8", children: [children, " "] }), _jsxs("span", { className: "block mr-8", children: [children, " "] }), _jsxs("span", { className: "block mr-8", children: [children, " "] }), _jsxs("span", { className: "block mr-8", children: [children, " "] })] }) }));
}
/**
 * Native VelocityScroll - Scroll speed reveals text
 */
export const VelocityScroll = React.forwardRef(({ text, defaultVelocity = 5, className, ...props }, ref) => {
    return (_jsxs("section", { ref: ref, className: cn("relative w-full", className), ...props, children: [_jsx(ParallaxText, { baseVelocity: defaultVelocity, className: className, children: text }), _jsx(ParallaxText, { baseVelocity: -defaultVelocity, className: className, children: text })] }));
});
VelocityScroll.displayName = "VelocityScroll";
