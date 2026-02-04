"use client";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
export function SmoothScroll({ children }) {
    const pathname = usePathname();
    const isDocs = pathname?.startsWith("/docs");
    if (isDocs) {
        return _jsx(_Fragment, { children: children });
    }
    return (_jsx(ReactLenis, { root: true, options: { lerp: 0.1, duration: 1.5, smoothWheel: true }, children: children }));
}
