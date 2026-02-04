"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../lib/utils";
export const AnimatedShinyText = ({ children, className, shimmerWidth = 100, }) => {
    return (_jsx("p", { style: {
            "--shimmer-width": `${shimmerWidth}px`,
        }, className: cn("mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50 ", 
        // Shimmer effect
        "mx-auto max-w-md text-muted-foreground/50 bg-clip-text bg-no-repeat bg-position-[0_0] bg-size-[var(--shimmer-width)_100%] transition-[background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]", 
        // Shimmer gradient
        "animate-shiny-text bg-linear-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80", className), children: children }));
};
