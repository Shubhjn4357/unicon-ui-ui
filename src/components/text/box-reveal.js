"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export const BoxReveal = ({ children, width = "fit-content", boxColor = "hsl(var(--primary))", duration = 0.5, }) => {
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            slideControls.start("visible");
            mainControls.start("visible");
        }
        else {
            slideControls.start("hidden");
            mainControls.start("hidden");
        }
    }, [isInView, mainControls, slideControls]);
    return (_jsxs("div", { ref: ref, style: { position: "relative", width, overflow: "hidden" }, children: [_jsx(motion.div, { variants: {
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }, initial: "hidden", animate: mainControls, transition: { duration, delay: 0.25 }, children: children }), _jsx(motion.div, { variants: {
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }, initial: "hidden", animate: slideControls, transition: { duration, ease: "easeIn" }, style: {
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: boxColor,
                    zIndex: 20,
                } })] }));
};
