"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native Magnifier - Image zoom glass
 */
export const Magnifier = React.forwardRef(({ imgSrc, magnifierSize = 100, zoomLevel = 2, className, ...props }, ref) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [showMagnifier, setShowMagnifier] = React.useState(false);
    const [imgSize, setImgSize] = React.useState({ width: 0, height: 0 });
    const handleMouseMove = (e) => {
        const elem = e.currentTarget;
        const { top, left, width, height } = elem.getBoundingClientRect();
        const x = e.clientX - left - window.pageXOffset;
        const y = e.clientY - top - window.pageYOffset;
        setPosition({ x, y });
        setImgSize({ width, height });
    };
    return (_jsxs("div", { ref: ref, className: cn("relative inline-block cursor-none", className), onMouseEnter: () => setShowMagnifier(true), onMouseLeave: () => setShowMagnifier(false), onMouseMove: handleMouseMove, ...props, children: [_jsx("img", { src: imgSrc, alt: "magnifiable", className: "block max-w-full" }), showMagnifier && (_jsx("div", { className: "absolute pointer-events-none border border-border rounded-full bg-background shadow-lg", style: {
                    height: `${magnifierSize}px`,
                    width: `${magnifierSize}px`,
                    top: `${position.y - magnifierSize / 2}px`,
                    left: `${position.x - magnifierSize / 2}px`,
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: `${imgSize.width * zoomLevel}px ${imgSize.height * zoomLevel}px`,
                    backgroundPositionX: `${-position.x * zoomLevel + magnifierSize / 2}px`,
                    backgroundPositionY: `${-position.y * zoomLevel + magnifierSize / 2}px`,
                    backgroundRepeat: "no-repeat",
                } }))] }));
});
Magnifier.displayName = "Magnifier";
