"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Eye, Lock } from "lucide-react";
import * as React from "react";
import { useTheme } from "../../hooks/use-theme";
import { BackgroundBeams } from "../backgrounds/background-beams";
import { ThemeEditor } from "./theme-editor";
import { SpotlightCard } from "../layout/spotlight-card";
export default function ThemeGeneratorPage() {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = React.useState(theme === "dark");
    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setTheme(newTheme);
        setIsDark(!isDark);
    };
    return (_jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [_jsxs("div", { className: "relative overflow-hidden border-b", children: [_jsx(BackgroundBeams, {}), _jsx("div", { className: "container mx-auto py-12 px-4 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-5xl font-bold mb-4 text-foreground tracking-tight", children: "Theme Generator" }), _jsx("p", { className: "text-lg text-muted-foreground mb-4 max-w-2xl mx-auto", children: "Create beautiful, accessible themes for your Unicorn UI components. Choose from our curated presets or build your own custom palette." })] }) })] }), _jsx("div", { className: "container mx-auto py-8 px-4", children: _jsx(ThemeEditor, {}) }), _jsx("div", { className: "fixed top-4 right-4 z-50", children: _jsx(SpotlightCard, { className: "p-2", children: _jsx("button", { onClick: toggleTheme, className: "flex items-center space-x-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors", children: isDark ? (_jsxs(_Fragment, { children: [_jsx(Lock, { className: "w-4 h-4" }), _jsx("span", { children: "Light Mode" })] })) : (_jsxs(_Fragment, { children: [_jsx(Eye, { className: "w-4 h-4" }), _jsx("span", { children: "Dark Mode" })] })) }) }) }), _jsx("div", { className: "container mx-auto py-12 px-4 text-center border-t mt-12", children: _jsx("p", { className: "text-muted-foreground", children: "Powered by Unicorn UI - The complete component system" }) })] }));
}
