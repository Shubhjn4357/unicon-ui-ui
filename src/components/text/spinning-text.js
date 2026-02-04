"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../lib/utils";
export function SpinningText({ children, className, reverse = false, duration = 10, radius = 5, }) {
    const letters = children.split("");
    const deg = 360 / letters.length;
    return (_jsx("div", { className: cn("relative mx-auto flex size-40 items-center justify-center rounded-full border bg-background", className), children: _jsx("div", { className: cn("relative size-full animate-[spin_10s_linear_infinite]", reverse && "animate-reverse"), style: {
                animationDuration: `${duration}s`,
            }, children: letters.map((letter, i) => (_jsx("span", { className: "absolute left-1/2 top-0 -translate-x-1/2 origin-[0_8rem]", style: {
                    transform: `rotate(${i * deg}deg)`,
                    transformOrigin: `0 ${radius}rem`,
                }, children: letter }, i))) }) }));
}
