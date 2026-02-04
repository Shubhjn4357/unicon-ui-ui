"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
export const CoolMode = ({ children }) => {
    const [particles, setParticles] = React.useState([]);
    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        setParticles((prev) => [...prev, { id, x, y }]);
        setTimeout(() => {
            setParticles((prev) => prev.filter((p) => p.id !== id));
        }, 1000);
    };
    return (_jsxs("div", { className: "relative inline-block", onClick: handleClick, children: [children, particles.map((particle) => (_jsx(motion.div, { className: "pointer-events-none absolute text-2xl", style: { left: particle.x, top: particle.y }, initial: { opacity: 1, scale: 0, y: 0 }, animate: {
                    opacity: 0,
                    scale: 1.5,
                    y: -50,
                    x: (Math.random() - 0.5) * 100,
                }, transition: { duration: 1 }, children: "\u2728" }, particle.id)))] }));
};
