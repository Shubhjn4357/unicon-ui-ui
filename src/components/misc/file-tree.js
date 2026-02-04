"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { cn } from "../../lib/utils";
const FileTreeItem = ({ node, level, onFileClick }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const isFolder = node.type === "folder";
    return (_jsxs("div", { className: "select-none", children: [_jsxs(motion.div, { className: cn("flex items-center gap-2 rounded px-2 py-1 hover:bg-accent cursor-pointer", level > 0 && "ml-4"), onClick: () => {
                    if (isFolder) {
                        setIsOpen(!isOpen);
                    }
                    else {
                        onFileClick?.(node);
                    }
                }, whileHover: { x: 2 }, initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: { delay: level * 0.05 }, children: [isFolder && (_jsx(motion.span, { className: "text-muted-foreground", animate: { rotate: isOpen ? 90 : 0 }, transition: { duration: 0.2 }, children: "\u25B6" })), !isFolder && _jsx("span", { className: "w-3" }), _jsx("span", { className: cn(isFolder ? "font-medium text-[hsl(var(--primary))]" : "text-[hsl(var(--foreground))]"), children: node.name })] }), isFolder && isOpen && node.children && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.2 }, children: node.children.map((child, idx) => (_jsx(FileTreeItem, { node: child, level: level + 1, onFileClick: onFileClick }, `${child.name}-${idx}`))) }))] }));
};
/**
 * File Tree - Collapsible file/folder tree structure
 */
export const FileTree = React.forwardRef(({ data, onFileClick, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4", className), ...props, children: data.map((node, idx) => (_jsx(FileTreeItem, { node: node, level: 0, onFileClick: onFileClick }, `${node.name}-${idx}`))) }));
});
FileTree.displayName = "FileTree";
