"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
export const Timeline = React.forwardRef(({ data, className, ...props }, ref) => {
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        if (containerRef.current) {
            setHeight(containerRef.current.getBoundingClientRect().height);
        }
    }, [containerRef]);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });
    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    return (_jsx("div", { className: cn("w-full font-sans md:px-10", className), ref: containerRef, ...props, children: _jsxs("div", { className: "relative max-w-7xl mx-auto pb-20", children: [data.map((item, index) => (_jsxs("div", { className: "flex justify-start pt-10 md:pt-40 md:gap-10", children: [_jsxs("div", { className: "sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full", children: [_jsx("div", { className: "h-10 absolute left-3 md:left-3 w-10 rounded-full bg-card border border-border flex items-center justify-center", children: _jsx("div", { className: "h-4 w-4 rounded-full bg-primary/20 border border-primary p-2" }) }), _jsx("h3", { className: "hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-muted-foreground/50", children: item.title })] }), _jsxs("div", { className: "relative pl-20 pr-4 md:pl-4 w-full", children: [_jsx("h3", { className: "md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground/50", children: item.title }), _jsx("div", { className: "bg-card/50 backdrop-blur-sm border border-border p-6 rounded-(--radius)", children: item.content })] })] }, index))), _jsx("div", { style: {
                        height: `${height}px`,
                    }, className: "absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-linear-to-b from-transparent via-border to-transparent", children: _jsx(motion.div, { style: {
                            height: heightTransform,
                            opacity: opacityTransform,
                        }, className: "absolute inset-x-0 top-0 w-[2px] bg-linear-to-b from-primary/50 via-primary to-primary/50 rounded-full" }) })] }) }));
});
Timeline.displayName = "Timeline";
