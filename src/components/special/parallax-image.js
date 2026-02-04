"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
export function ParallaxImage({ src, alt, className, containerClassName, speed = 150, }) {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    // Smooth out the parallax movement
    const smoothProgress = useSpring(scrollYProgress, {
        damping: 20,
        stiffness: 200,
    });
    // Map scroll progress to y-translation
    const y = useTransform(smoothProgress, [0, 1], [-speed, speed]);
    return (_jsx("div", { ref: ref, className: cn("relative overflow-hidden aspect-video w-full", containerClassName), children: _jsx(motion.img, { src: src, alt: alt, style: { y, scale: 1.1 }, className: cn("h-[120%] w-full object-cover", className) }) }));
}
