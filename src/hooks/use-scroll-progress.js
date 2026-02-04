"use client";
import { useScroll, useSpring } from "framer-motion";
export function useScrollProgress(targetRef) {
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });
    const smoothProgress = useSpring(scrollYProgress, {
        damping: 20,
        stiffness: 100,
        restDelta: 0.001,
    });
    return { scrollYProgress, smoothProgress };
}
