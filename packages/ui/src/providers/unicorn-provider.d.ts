import * as React from "react";
import { type UnicornConfig, type UserConfig } from "../config";
interface UnicornProviderProps {
    children: React.ReactNode;
    config?: UserConfig;
}
export declare function UnicornProvider({ children, config: userConfig }: UnicornProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useUnicornConfig(): UnicornConfig;
export {};
//# sourceMappingURL=unicorn-provider.d.ts.map