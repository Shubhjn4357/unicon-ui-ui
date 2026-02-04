"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "../core/input";
import { Label } from "../core/label"; // Assuming
import { Switch } from "../core/switch";
export function ControlPanel({ props, values, onChange }) {
    return (_jsx("div", { className: "space-y-6", children: props
            .filter((p) => p.control)
            .map((prop) => (_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Label, { htmlFor: `control-${prop.name}`, className: "text-xs font-medium text-foreground/80", children: prop.name }), _jsx("span", { className: "text-[10px] text-muted-foreground font-mono", children: prop.type })] }), _jsx(ControlInput, { definition: prop, value: values[prop.name], onChange: (val) => onChange(prop.name, val) }), prop.description && (_jsx("p", { className: "text-[10px] text-muted-foreground", children: prop.description }))] }, prop.name))) }));
}
function ControlInput({ definition, value, onChange, }) {
    const { control } = definition;
    if (!control)
        return null;
    switch (control.type) {
        case "text":
            return (_jsx(Input, { type: "text", value: value || "", onChange: (e) => onChange(e.target.value), className: "h-8 text-sm" }));
        case "number":
            return (_jsx(Input, { type: "number", value: value || 0, onChange: (e) => onChange(Number(e.target.value)), min: control.min, max: control.max, step: control.step, className: "h-8 text-sm" }));
        case "boolean":
            return (_jsx("div", { className: "flex items-center h-8", children: _jsx(Switch, { checked: !!value, onCheckedChange: onChange, size: "sm" }) }));
        case "select":
            return (_jsx("select", { className: "flex h-8 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", value: value, onChange: (e) => onChange(e.target.value), children: control.options?.map((opt) => (_jsx("option", { value: opt, children: opt }, opt))) }));
        case "color":
            return (_jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { type: "color", value: value || "#000000", onChange: (e) => onChange(e.target.value), className: "h-8 w-8 p-1 cursor-pointer rounded-md" }), _jsx(Input, { type: "text", value: value || "", onChange: (e) => onChange(e.target.value), className: "h-8 text-sm flex-1" })] }));
        default:
            return null;
    }
}
