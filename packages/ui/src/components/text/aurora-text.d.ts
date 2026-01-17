import * as React from "react";
import { type HTMLMotionProps } from "framer-motion";
export interface AuroraTextProps extends HTMLMotionProps<"span"> {
    children: React.ReactNode;
}
/**
 * Native AuroraText - Aurora borealis gradient effect
 */
export declare const AuroraText: React.ForwardRefExoticComponent<Omit<AuroraTextProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=aurora-text.d.ts.map