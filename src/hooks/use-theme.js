"use client";
import { createContext, createElement, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "./use-async";
const ThemeContext = createContext(undefined);
export function ThemeProvider({ children, defaultTheme = "system", storageKey = "unicorn-ui-theme", }) {
    const [theme, setTheme] = useLocalStorage(storageKey, defaultTheme);
    const [resolvedTheme, setResolvedTheme] = useState("light");
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
            root.classList.add(systemTheme);
            setResolvedTheme(systemTheme);
            return;
        }
        root.classList.add(theme);
        setResolvedTheme(theme);
    }, [theme]);
    return createElement(ThemeContext.Provider, { value: { theme, setTheme, resolvedTheme } }, children);
}
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
