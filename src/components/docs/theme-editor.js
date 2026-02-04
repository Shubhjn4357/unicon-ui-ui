"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Download, RotateCcw } from "lucide-react";
import { useThemeGenerator } from "../../hooks/use-theme-generator";
import { Button } from "../core/button";
import { Card } from "../core/card";
export function ThemeEditor() {
    const { activePreset, customColors, isCustomTheme, DEFAULT_PRESETS, applyTheme, downloadTheme, resetToPreset, setCustomColors, setIsCustomTheme } = useThemeGenerator();
    const [activePalette, setActivePalette] = React.useState(null);
    React.useEffect(() => {
        const preset = DEFAULT_PRESETS.find(p => p.id === activePreset);
        if (preset) {
            setActivePalette({
                ...preset.palette,
                colors: { ...preset.palette.colors, ...customColors }
            });
        }
    }, [activePreset, customColors, DEFAULT_PRESETS]);
    const handleColorChange = (key, value) => {
        setIsCustomTheme(true);
        setCustomColors(prev => ({ ...prev, [key]: value }));
        // Live update
        if (activePalette) {
            const newPalette = {
                ...activePalette,
                colors: { ...activePalette.colors, [key]: value }
            };
            applyTheme(newPalette);
        }
    };
    const handlePresetSelect = (presetId) => {
        resetToPreset(presetId);
    };
    return (_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8", children: [_jsxs(Card, { className: "lg:col-span-1 p-4 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold mb-4", children: "Presets" }), _jsx("div", { className: "grid grid-cols-2 gap-2", children: DEFAULT_PRESETS.map(preset => (_jsxs("button", { onClick: () => handlePresetSelect(preset.id), className: `p-2 rounded border text-sm text-left transition-all ${activePreset === preset.id && !isCustomTheme
                                        ? "ring-2 ring-primary border-primary bg-primary/5"
                                        : "hover:bg-muted"}`, children: [_jsx("div", { className: "w-full h-8 rounded mb-2", style: { background: preset.preview } }), _jsx("span", { className: "font-medium", children: preset.name })] }, preset.id))) })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "font-semibold", children: "Colors" }), isCustomTheme && (_jsxs(Button, { variant: "ghost", size: "sm", onClick: () => resetToPreset(activePreset), children: [_jsx(RotateCcw, { className: "w-3 h-3 mr-1" }), " Reset"] }))] }), _jsx("div", { className: "space-y-3", children: activePalette && Object.entries(activePalette.colors).map(([key, value]) => {
                                    if (key === 'chart' || key === 'radius')
                                        return null;
                                    return (_jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "text-xs uppercase text-muted-foreground font-semibold", children: key }), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "color", value: value, onChange: (e) => handleColorChange(key, e.target.value), className: "h-9 w-9 p-0.5 rounded border cursor-pointer" }), _jsx("input", { type: "text", value: value, onChange: (e) => handleColorChange(key, e.target.value), className: "flex-1 h-9 px-2 rounded border bg-background text-sm font-mono" })] })] }, key));
                                }) })] }), _jsx("div", { className: "pt-4 border-t sticky bottom-0 bg-card", children: _jsxs(Button, { className: "w-full", onClick: () => activePalette && downloadTheme(activePalette, `custom-theme-${Date.now()}`), children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), " Download Theme"] }) })] }), _jsx("div", { className: "lg:col-span-3 space-y-8", children: _jsxs("div", { className: "bg-background rounded-lg border p-8 space-y-8 transition-colors duration-500", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h2", { className: "text-3xl font-bold", children: "Theme Preview" }), _jsx("p", { className: "text-muted-foreground", children: "See your changes in real-time across various components." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs(Card, { className: "p-6 space-y-4", children: [_jsx("h3", { className: "font-semibold", children: "Typography & Actions" }), _jsxs("div", { className: "space-x-2", children: [_jsx(Button, { children: "Primary Button" }), _jsx(Button, { variant: "secondary", children: "Secondary" }), _jsx(Button, { variant: "outline", children: "Outline" }), _jsx(Button, { variant: "destructive", children: "Destructive" })] })] }), _jsxs(Card, { className: "p-6 space-y-4 bg-muted/50", children: [_jsx("h3", { className: "font-semibold", children: "Inputs & Forms" }), _jsxs("div", { className: "space-y-2", children: [_jsx("input", { className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", placeholder: "Default Input" }), _jsx("input", { className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", disabled: true, placeholder: "Disabled Input" })] })] }), _jsxs(Card, { className: "p-6 md:col-span-2", children: [_jsx("h3", { className: "font-semibold mb-4", children: "Color Palette" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4", children: ['primary', 'secondary', 'accent', 'muted', 'destructive'].map(color => (_jsxs("div", { className: "space-y-1.5", children: [_jsx("div", { className: "h-12 w-full rounded-md border shadow-sm", style: { background: `hsl(var(--${color}))` } }), _jsx("p", { className: "text-xs font-medium text-center capitalize", children: color })] }, color))) })] })] })] }) })] }));
}
