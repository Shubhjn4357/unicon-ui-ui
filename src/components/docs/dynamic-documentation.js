"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { ComponentPlayground } from "./component-playground";
export default function DynamicDocumentation({ component }) {
    // Memoize the ComponentDoc to prevent unnecessary re-renders
    const componentDoc = React.useMemo(() => {
        // Dynamic import of the component
        // Note: React.lazy expects a default export or we need to handle named exports
        const Component = React.lazy(async () => {
            try {
                const module = await import(`../components/${component.filePath.split('src/components/')[1]}`);
                // Try to find the component by name, or fallback to default or first export
                if (component.exports && component.exports.includes(component.name)) {
                    // @ts-ignore
                    return { default: module[component.name] };
                }
                // @ts-ignore
                return { default: module.default || module[Object.keys(module)[0]] };
            }
            catch (error) {
                console.error(`Failed to load component ${component.name}:`, error);
                return {
                    default: () => (_jsxs("div", { className: "p-4 border border-destructive/50 text-destructive rounded bg-destructive/10", children: ["Error loading component: ", component.name] }))
                };
            }
        });
        // Map props
        const props = (component.props || []).map(p => ({
            name: p.name,
            type: p.type,
            defaultValue: p.defaultValue,
            description: p.description,
            control: mapControl(p)
        }));
        // Map examples to stories if possible, or create a default story
        const stories = component.usageExample ? [{
                name: "Default",
                args: {},
                description: "Default usage"
            }] : [];
        return {
            slug: component.name.toLowerCase(),
            title: component.name,
            category: component.category,
            description: component.description || "",
            component: Component,
            props,
            stories
        };
    }, [component]);
    if (!component) {
        return (_jsxs("div", { className: "p-8 text-center", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "Component Not Found" }), _jsx("p", { className: "text-muted-foreground", children: "The requested component was not found in the registry." })] }));
    }
    return (_jsx("div", { className: "container mx-auto py-8", children: _jsx(ComponentPlayground, { doc: componentDoc }, component.name) }));
}
function mapControl(prop) {
    // Heuristic mapping
    if (prop.control && typeof prop.control === 'object') {
        return prop.control;
    }
    if (prop.control === 'text')
        return { type: 'text' };
    if (prop.control === 'number')
        return { type: 'number' };
    if (prop.control === 'boolean')
        return { type: 'boolean' };
    if (prop.control === 'select')
        return { type: 'select', options: prop.options || [] };
    if (prop.control === 'color')
        return { type: 'color' };
    // Fallback inference
    if (prop.type === 'boolean')
        return { type: 'boolean' };
    if (prop.type === 'number')
        return { type: 'number' };
    if (typeof prop.type === 'string' && prop.type.includes('|')) {
        return {
            type: 'select',
            options: prop.type.split('|').map((s) => s.trim().replace(/"/g, '').replace(/'/g, ''))
        };
    }
    return { type: 'text' };
}
