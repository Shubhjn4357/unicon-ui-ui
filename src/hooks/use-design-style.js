"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
const DesignStyleContext = React.createContext(undefined);
/**
 * DesignStyleProvider - Global design style management
 *
 * Provides a context for managing design styles across your application.
 * Supports localStorage persistence and includes 5 beautiful style presets.
 *
 * @example
 * ```tsx
 * import { DesignStyleProvider } from '@unicorn-ui/ui'
 *
 * export default function App({ children }) {
 *   return (
 *     <DesignStyleProvider defaultStyle="glass" storageKey="my-app-style">
 *       {children}
 *     </DesignStyleProvider>
 *   )
 * }
 * ```
 */
export function DesignStyleProvider({ children, defaultStyle = "none", storageKey = "unicorn-ui-design-style", }) {
    const [designStyle, setDesignStyleState] = React.useState(defaultStyle);
    // Load style from localStorage on mount and sync with DOM
    React.useEffect(() => {
        try {
            const stored = localStorage.getItem(storageKey);
            const styleToSet = (stored && ["clay", "glass", "liquid-glass", "skeu", "minimal", "none"].includes(stored))
                ? stored
                : defaultStyle;
            setDesignStyleState(styleToSet);
            // Sync to DOM immediately
            document.body.dataset.designStyle = styleToSet;
        }
        catch (error) {
            console.warn("Failed to load design style from localStorage:", error);
            // Fallback
            document.body.dataset.designStyle = defaultStyle;
        }
    }, [storageKey, defaultStyle]);
    // Save to localStorage when changed and update DOM
    const setDesignStyle = React.useCallback((style) => {
        setDesignStyleState(style);
        // Update DOM
        document.body.dataset.designStyle = style;
        try {
            localStorage.setItem(storageKey, style);
        }
        catch (error) {
            console.warn("Failed to save design style to localStorage:", error);
        }
    }, [storageKey]);
    return (_jsx(DesignStyleContext.Provider, { value: { designStyle, setDesignStyle }, children: children }));
}
/**
 * useDesignStyle - Access and update the current design style
 *
 * Hook to access the current design style and change it programmatically.
 * Must be used within a DesignStyleProvider.
 *
 * @returns Object with current designStyle and setDesignStyle function
 *
 * @example
 * ```tsx
 * import { useDesignStyle } from '@unicorn-ui/ui'
 *
 * export function StyleSwitcher() {
 *   const { designStyle, setDesignStyle } = useDesignStyle()
 *
 *   return (
 *     <div className={designStyle !== 'none' ? designStyle : ''}>
 *       <button onClick={() => setDesignStyle('glass')}>
 *         Apply Glass Style
 *       </button>
 *       <p>Current: {designStyle}</p>
 *     </div>
 *   )
 * }
 * ```
 */
export function useDesignStyle() {
    const context = React.useContext(DesignStyleContext);
    if (context === undefined) {
        throw new Error("useDesignStyle must be used within a DesignStyleProvider");
    }
    return context;
}
