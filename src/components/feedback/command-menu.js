"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
/**
 * Command Menu - Cmd+K style command palette
 */
export const CommandMenu = React.forwardRef(({ open: controlledOpen, onOpenChange, placeholder = "Type a command...", commands = [] }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = controlledOpen ?? isOpen;
    const setOpen = (value) => {
        setIsOpen(value);
        onOpenChange?.(value);
    };
    // Group commands
    const groupedCommands = React.useMemo(() => {
        const filtered = commands.filter((cmd) => cmd.label.toLowerCase().includes(search.toLowerCase()));
        const groups = {};
        filtered.forEach((cmd) => {
            const group = cmd.group || "Commands";
            if (!groups[group])
                groups[group] = [];
            groups[group].push(cmd);
        });
        return groups;
    }, [commands, search]);
    const flatCommands = React.useMemo(() => {
        return Object.values(groupedCommands).flat();
    }, [groupedCommands]);
    // Keyboard shortcuts
    React.useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(!open);
            }
            if (!open)
                return;
            if (e.key === "Escape") {
                setOpen(false);
            }
            else if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev + 1) % flatCommands.length);
            }
            else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev - 1 + flatCommands.length) % flatCommands.length);
            }
            else if (e.key === "Enter" && flatCommands[selectedIndex]) {
                e.preventDefault();
                flatCommands[selectedIndex].onSelect();
                setOpen(false);
                setSearch("");
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [open, setOpen, selectedIndex, flatCommands]);
    // Reset selection when search changes
    React.useEffect(() => {
        setSelectedIndex(0);
    }, [search]);
    return (_jsx(AnimatePresence, { children: open && (_jsxs("div", { ref: ref, className: "fixed inset-0 z-50 flex items-start justify-center pt-[20vh]", onClick: () => setOpen(false), children: [_jsx(motion.div, { className: "absolute inset-0 bg-black/50 backdrop-blur-sm", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }), _jsxs(motion.div, { className: "relative w-full max-w-2xl rounded-lg border border-border bg-card shadow-2xl", initial: { opacity: 0, scale: 0.95, y: -20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: -20 }, onClick: (e) => e.stopPropagation(), children: [_jsx("div", { className: "border-b border-border p-4", children: _jsx("input", { type: "text", placeholder: placeholder, value: search, onChange: (e) => setSearch(e.target.value), className: "w-full bg-transparent text-lg outline-none placeholder:text-muted-foreground" }) }), _jsx("div", { className: "max-h-96 overflow-y-auto p-2", children: Object.keys(groupedCommands).length === 0 ? (_jsx("div", { className: "py-8 text-center text-muted-foreground", children: "No results found" })) : (Object.entries(groupedCommands).map(([group, cmds]) => (_jsxs("div", { className: "mb-4", children: [_jsx("div", { className: "mb-2 px-2 text-xs font-medium text-muted-foreground", children: group }), cmds.map((cmd) => {
                                        const globalIdx = flatCommands.findIndex((c) => c.id === cmd.id);
                                        return (_jsxs(motion.button, { className: cn("flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors cursor-pointer", globalIdx === selectedIndex
                                                ? "bg-primary text-primary-foreground"
                                                : "hover:bg-accent"), onClick: () => {
                                                cmd.onSelect();
                                                setOpen(false);
                                                setSearch("");
                                            }, whileHover: { scale: 1.01 }, whileTap: { scale: 0.99 }, children: [cmd.icon && _jsx("span", { className: "shrink-0", children: cmd.icon }), _jsx("span", { className: "flex-1", children: cmd.label }), cmd.shortcut && (_jsx("span", { className: "flex gap-1", children: cmd.shortcut.map((key) => (_jsx("kbd", { className: "rounded bg-muted px-1.5 py-0.5 text-xs font-mono", children: key }, key))) }))] }, cmd.id));
                                    })] }, group)))) }), _jsx("div", { className: "border-t border-border px-4 py-2 text-xs text-muted-foreground", children: "Navigate with \u2191\u2193, select with Enter, close with Esc" })] })] })) }));
});
CommandMenu.displayName = "CommandMenu";
