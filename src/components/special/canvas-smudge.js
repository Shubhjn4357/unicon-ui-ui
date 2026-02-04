"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Native CanvasSmudge - Interactive drawing smudge (Simplified)
 */
export const CanvasSmudge = React.forwardRef(({ color = "#000", className, ...props }, _ref) => {
    const canvasRef = React.useRef(null);
    const [isDrawing, setIsDrawing] = React.useState(false);
    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        ctx.strokeStyle = color;
        ctx.lineWidth = 20;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
    };
    const draw = (e) => {
        if (!isDrawing)
            return;
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
    };
    const stopDrawing = () => {
        setIsDrawing(false);
    };
    return (_jsx("canvas", { ref: canvasRef, width: 800, height: 600, className: cn("border border-[hsl(var(--border))] cursor-crosshair touch-none bg-background", className), onMouseDown: startDrawing, onMouseMove: draw, onMouseUp: stopDrawing, onMouseLeave: stopDrawing, ...props }));
});
CanvasSmudge.displayName = "CanvasSmudge";
