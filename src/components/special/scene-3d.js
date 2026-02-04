"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Center, Environment, Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as React from "react";
import { cn } from "../../lib/utils";
function FloatingShape() {
    const meshRef = React.useRef(null);
    useFrame((state) => {
        if (!meshRef.current)
            return;
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.cos(t / 4) / 4;
        meshRef.current.rotation.y = Math.sin(t / 4) / 4;
        meshRef.current.position.y = Math.sin(t / 1.5) / 10;
    });
    return (_jsxs("mesh", { ref: meshRef, children: [_jsx("torusKnotGeometry", { args: [1, 0.3, 128, 16] }), _jsx("meshStandardMaterial", { color: "#fff", roughness: 0.1, metalness: 0.8 })] }));
}
export function Scene3D({ children, className }) {
    return (_jsx("div", { className: cn("relative h-[400px] w-full", className), children: _jsxs(Canvas, { camera: { position: [0, 0, 5], fov: 45 }, children: [_jsx("ambientLight", { intensity: 0.5 }), _jsx("spotLight", { position: [10, 10, 10], angle: 0.15, penumbra: 1 }), _jsx("pointLight", { position: [-10, -10, -10] }), _jsx(Center, { children: _jsx(Float, { speed: 4, rotationIntensity: 1, floatIntensity: 2, children: children || _jsx(FloatingShape, {}) }) }), _jsx(Environment, { preset: "city" })] }) }));
}
