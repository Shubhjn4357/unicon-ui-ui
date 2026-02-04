"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
const SelectContext = createContext(undefined);
const useSelect = () => {
    const context = useContext(SelectContext);
    if (!context) {
        throw new Error("useSelect must be used within a Select");
    }
    return context;
};
export function Select({ children, value: controlledValue, defaultValue, placeholder, onValueChange, disabled, }) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const optionsMap = useRef(new Map()).current;
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;
    const setValue = (newValue) => {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        onValueChange?.(newValue);
    };
    // Close when disabled
    useEffect(() => {
        if (disabled)
            setIsOpen(false);
    }, [disabled]);
    return (_jsx(SelectContext.Provider, { value: { isOpen, setIsOpen, value, setValue, placeholder, optionsMap }, children: _jsx("div", { className: cn("relative w-full", disabled && "opacity-50 pointer-events-none"), children: children }) }));
}
export function SelectTrigger({ children, className }) {
    const { isOpen, setIsOpen } = useSelect();
    return (_jsxs("button", { type: "button", onClick: () => setIsOpen(!isOpen), className: cn("flex h-10 w-full items-center justify-between rounded-md border border-border bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", "unicorn-input", // Behaves like an input visually
        className), children: [children, _jsx(ChevronDown, { className: "h-4 w-4 opacity-50" })] }));
}
export function SelectValue({ placeholder: propPlaceholder }) {
    const { value, placeholder: contextPlaceholder, optionsMap } = useSelect();
    const label = (value && optionsMap.get(value)) || propPlaceholder || contextPlaceholder;
    return _jsx("span", { className: cn(!value && "text-muted-foreground"), children: label || "Select..." });
}
export function SelectContent({ children, className, }) {
    const { isOpen, setIsOpen } = useSelect();
    const ref = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setIsOpen]);
    return (_jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { ref: ref, initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.15 }, className: cn("absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border bg-card p-1 text-foreground shadow-md", "unicorn-card unicorn-select-content", // Uses card styling
            className), children: children })) }));
}
export function SelectGroup({ children, className, }) {
    return _jsx("div", { className: cn("p-1", className), children: children });
}
export function SelectLabel({ children, className, }) {
    return (_jsx("div", { className: cn("px-2 py-1.5 text-xs font-semibold text-muted-foreground", className), children: children }));
}
export function SelectItem({ value, children, className }) {
    const { value: selectedValue, setValue, setIsOpen, optionsMap } = useSelect();
    // Register option label
    if (typeof children === "string") {
        optionsMap.set(value, children);
    }
    const isSelected = selectedValue === value;
    return (_jsxs("div", { onClick: () => {
            setValue(value);
            setIsOpen(false);
        }, className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", isSelected && "bg-accent text-accent-foreground", className), children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: isSelected && _jsx(Check, { className: "h-4 w-4" }) }), children] }));
}
