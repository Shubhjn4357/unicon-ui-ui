import type React from "react";
import { type HTMLMotionProps } from "framer-motion";
interface LineShadowTextProps extends HTMLMotionProps<"h1"> {
    shadowColor?: string;
    children: React.ReactNode;
}
export declare function LineShadowText({ children, shadowColor, className, ...props }: LineShadowTextProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=line-shadow-text.d.ts.map