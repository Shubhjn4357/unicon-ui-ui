"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native ShootingStars - SVG animated shooting stars
 */
export const ShootingStars = React.forwardRef(({ minDelay = 1200, maxDelay = 4200, starColor = "#9E00FF", trailColor = "#2EB9DF", starWidth = 10, starHeight = 1, className, ...props }, ref) => {
    const [star, setStar] = React.useState(null);
    const svgRef = React.useRef(null);
    const createStar = React.useCallback(() => {
        if (!svgRef.current)
            return;
        const { width, height } = svgRef.current.getBoundingClientRect();
        const startX = Math.random() * width;
        const startY = Math.random() * height;
        const angle = Math.random() * 360;
        const scale = 0.5 + Math.random();
        const speed = Math.random() * 20 + 10;
        setStar({ x: startX, y: startY, angle, scale, speed });
    }, []);
    React.useEffect(() => {
        createStar();
        const timer = setInterval(() => {
            createStar();
        }, (minDelay + maxDelay) / 2);
        return () => clearInterval(timer);
    }, [createStar, minDelay, maxDelay]);
    React.useEffect(() => {
        if (!star)
            return;
        let animId;
        const moveStar = () => {
            setStar((prev) => {
                if (!prev)
                    return null;
                const newX = prev.x + Math.cos((prev.angle * Math.PI) / 180) * prev.speed;
                const newY = prev.y + Math.sin((prev.angle * Math.PI) / 180) * prev.speed;
                return { ...prev, x: newX, y: newY };
            });
            animId = requestAnimationFrame(moveStar);
        };
        animId = requestAnimationFrame(moveStar);
        return () => cancelAnimationFrame(animId);
    }, [star]);
    return (_jsx("div", { ref: ref, className: cn("pointer-events-none absolute inset-0 overflow-hidden", className), ...props, children: _jsxs("svg", { ref: svgRef, className: "w-full h-full", children: [star && (_jsx("rect", { x: star.x, y: star.y, width: starWidth * star.scale, height: starHeight, fill: "url(#gradient)", transform: `rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})` })), _jsx("defs", { children: _jsxs("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [_jsx("stop", { offset: "0%", style: { stopColor: trailColor, stopOpacity: 0 } }), _jsx("stop", { offset: "100%", style: { stopColor: starColor, stopOpacity: 1 } })] }) })] }) }));
});
ShootingStars.displayName = "ShootingStars";
