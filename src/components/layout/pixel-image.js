"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Pixel Image - Canvas-based image pixelation effect
 */
export const PixelImage = React.forwardRef(({ src, pixelSize = 10, className, onLoad }, ref) => {
    const canvasRef = React.useRef(null);
    const imgRef = React.useRef(null);
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
    React.useEffect(() => {
        if (!src)
            return;
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        img.onload = () => {
            imgRef.current = img;
            setDimensions({ width: img.width, height: img.height });
            drawPixelated();
            onLoad?.();
        };
        const drawPixelated = () => {
            const canvas = canvasRef.current;
            if (!canvas || !imgRef.current)
                return;
            const ctx = canvas.getContext("2d");
            if (!ctx)
                return;
            canvas.width = imgRef.current.width;
            canvas.height = imgRef.current.height;
            // Draw original image scaled down
            const scaleFactor = pixelSize;
            const smallWidth = Math.ceil(canvas.width / scaleFactor);
            const smallHeight = Math.ceil(canvas.height / scaleFactor);
            ctx.imageSmoothingEnabled = false;
            // Draw scaled down
            ctx.drawImage(imgRef.current, 0, 0, smallWidth, smallHeight);
            // Scale back up
            ctx.drawImage(canvas, 0, 0, smallWidth, smallHeight, 0, 0, canvas.width, canvas.height);
        };
        return () => {
            img.onload = null;
        };
    }, [src, pixelSize, onLoad]);
    return (_jsx("canvas", { ref: (node) => {
            canvasRef.current = node;
            if (typeof ref === "function")
                ref(node);
            else if (ref)
                ref.current = node;
        }, className: cn("max-w-full", className), style: { width: dimensions.width || "auto", height: dimensions.height || "auto" } }));
});
PixelImage.displayName = "PixelImage";
