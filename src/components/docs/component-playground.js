"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Code, Eye, Monitor, RefreshCw, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";
import { useDesignStyle } from "../../hooks/use-design-style";
import { cn } from "../../lib/utils";
import { Button } from "../core/button";
import { Card } from "../core/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../core/tabs"; // Assuming core components exist
import { CodeViewer } from "./code-viewer";
import { ControlPanel } from "./control-panel";
import { PropsTable } from "./props-table";
export function ComponentPlayground({ doc }) {
    // Initialize args with default values
    const defaultArgs = (doc?.props || []).reduce((acc, prop) => {
        if (prop.defaultValue !== undefined) {
            acc[prop.name] = prop.defaultValue;
        }
        return acc;
    }, {});
    const [args, setArgs] = useState(defaultArgs);
    const [activeTab, setActiveTab] = useState("preview");
    const [key, setKey] = useState(0); // For forcing re-render
    const [viewport, setViewport] = useState("desktop");
    const { designStyle, setDesignStyle } = useDesignStyle();
    const handleArgChange = (name, value) => {
        setArgs((prev) => ({ ...prev, [name]: value }));
    };
    const handleReset = () => {
        setArgs(defaultArgs);
        setKey((prev) => prev + 1);
    };
    const handleReplay = () => {
        setKey((prev) => prev + 1);
    };
    // Load a story
    const loadStory = (story) => {
        setArgs({ ...defaultArgs, ...story.args });
        setKey((prev) => prev + 1);
    };
    // Heuristic to make components interactive in preview
    // We wrap specific event handlers to update the playground state (args)
    const interactiveArgs = { ...args };
    if (doc?.props.some((p) => p.name === "checked")) {
        interactiveArgs.onCheckedChange = (checked) => {
            handleArgChange("checked", checked);
        };
    }
    if (doc?.props.some((p) => p.name === "value")) {
        // For inputs, slider, etc.
        interactiveArgs.onValueChange = (val) => {
            handleArgChange("value", val);
        };
        interactiveArgs.onChange = (e) => {
            if (e && e.target && e.target.value !== undefined) {
                handleArgChange("value", e.target.value);
            }
            else {
                // handleArgChange("value", e) // dangerous if e is event object
            }
        };
    }
    // Specific for Slider which uses onValueChange with number[]
    if (doc?.slug === "slider") {
        interactiveArgs.onValueChange = (val) => {
            handleArgChange("defaultValue", val); // Slider uses defaultValue in args but onValueChange updates it
            // Wait, if args has defaultValue, we should update that?
            // The story uses defaultValue.
        };
    }
    const Component = doc?.component;
    return (_jsxs("div", { className: "space-y-8 w-full max-w-7xl mx-auto p-4", children: [_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("h1", { className: "text-4xl font-bold tracking-tight", children: doc?.title }), _jsx("p", { className: "text-lg text-muted-foreground", children: doc?.description })] }), _jsxs(Tabs, { defaultValue: "preview", value: activeTab, className: "w-full", onValueChange: setActiveTab, children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs(TabsList, { children: [_jsxs(TabsTrigger, { value: "preview", className: "flex items-center gap-2", children: [_jsx(Eye, { className: "w-4 h-4" }), " Preview"] }), _jsxs(TabsTrigger, { value: "code", className: "flex items-center gap-2", children: [_jsx(Code, { className: "w-4 h-4" }), " code"] }), _jsxs(TabsTrigger, { value: "api", className: "flex items-center gap-2", children: [_jsx(Code, { className: "w-4 h-4" }), " API"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("div", { className: "flex items-center bg-muted/50 rounded-md p-1 border", children: [_jsx(Button, { variant: viewport === "desktop" ? "default" : "ghost", size: "sm", className: "p-2 h-8", onClick: () => setViewport("desktop"), children: _jsx(Monitor, { className: "w-4 h-4" }) }), _jsx(Button, { variant: viewport === "tablet" ? "default" : "ghost", size: "sm", className: "p-2 h-8", onClick: () => setViewport("tablet"), children: _jsx(Tablet, { className: "w-4 h-4" }) }), _jsx(Button, { variant: viewport === "mobile" ? "default" : "ghost", size: "sm", className: "p-2 h-8", onClick: () => setViewport("mobile"), children: _jsx(Smartphone, { className: "w-4 h-4" }) })] }), _jsx("div", { className: "h-8 w-px bg-border mx-2" }), _jsxs("select", { value: designStyle, onChange: (e) => setDesignStyle(e.target.value), className: "h-8 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", children: [_jsx("option", { value: "none", children: "Default" }), _jsx("option", { value: "glass", children: "Glass" }), _jsx("option", { value: "liquid-glass", children: "Liquid Glass" }), _jsx("option", { value: "clay", children: "Clay" }), _jsx("option", { value: "skeu", children: "Skeuomorphic" }), _jsx("option", { value: "minimal", children: "Minimal" })] }), _jsxs(Button, { variant: "outline", size: "sm", onClick: handleReplay, children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2" }), " Replay"] }), _jsxs(Button, { variant: "outline", size: "sm", onClick: handleReset, children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2" }), " Reset"] })] })] }), _jsx(TabsContent, { value: "preview", className: "space-y-6", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: [_jsxs(Card, { className: "lg:col-span-3 overflow-hidden border-border bg-background/50 backdrop-blur-sm relative", children: [_jsx("div", { className: "absolute inset-0 bg-grid-white/[0.02] mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]" }), _jsx("div", { className: cn("w-full mx-auto transition-all duration-300 ease-in-out flex items-center justify-center min-h-[400px] p-10 bg-dot-pattern overflow-auto", viewport === "mobile"
                                                ? "max-w-[375px] border-x"
                                                : viewport === "tablet"
                                                    ? "max-w-[768px] border-x"
                                                    : "max-w-full"), children: _jsx("div", { className: cn("w-full h-full flex items-center justify-center", designStyle !== "none" && designStyle), children: _jsx(Component, { ...interactiveArgs }, key) }) })] }), _jsxs("div", { className: "lg:col-span-1 space-y-4", children: [_jsxs(Card, { className: "p-4 h-full", children: [_jsx("h3", { className: "font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground", children: "Controls" }), _jsx(ControlPanel, { props: doc?.props || [], values: args, onChange: handleArgChange })] }), doc?.stories && doc?.stories.length > 0 && (_jsxs(Card, { className: "p-4", children: [_jsx("h3", { className: "font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground", children: "Variants" }), _jsx("div", { className: "flex flex-wrap gap-2", children: doc?.stories.map((story) => (_jsx(Button, { size: "sm", variant: "outline", onClick: () => loadStory(story), children: story.name }, story.name))) })] }))] })] }) }), _jsx(TabsContent, { value: "code", children: _jsx(CodeViewer, { componentName: doc?.title, args: args, defaultArgs: defaultArgs }) }), _jsx(TabsContent, { value: "api", children: _jsx(PropsTable, { props: doc?.props }) })] })] }));
}
