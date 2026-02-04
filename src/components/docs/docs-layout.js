"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CollapsibleSidebar, SidebarItem, SidebarSection, } from "@/components/layout/collapsible-sidebar-new";
import { Accordion } from "@unicorn-ui/ui";
import { BookOpen, Download, Layers, LayoutGrid, Settings, Terminal, } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSidebarData } from "@/data/component-docs";
export function DocsLayout({ children }) {
    const pathname = usePathname();
    const sidebarData = getSidebarData();
    const componentAccordionItems = sidebarData.map((category) => ({
        id: category.name,
        title: category.name,
        content: (_jsx("div", { className: "flex flex-col space-y-1 pl-2", children: category.items.map((item) => {
                const href = `/docs/components/${item.slug}`;
                return (_jsx(Link, { href: href, className: "block", children: _jsx(SidebarItem, { active: pathname === href, className: "text-sm py-1.5 h-auto text-muted-foreground aria-[current=page]:text-foreground", children: item.title }) }, item.slug));
            }) })),
    }));
    return (_jsxs("div", { className: "flex h-[calc(100vh-3.5rem)] overflow-hidden", children: [_jsx(CollapsibleSidebar, { className: "w-64 border-r bg-background/50 backdrop-blur-xl", children: _jsxs("div", { className: "py-4 px-2 space-y-6", children: [_jsxs(SidebarSection, { title: "Getting Started", children: [_jsx(Link, { href: "/docs", className: "block", children: _jsx(SidebarItem, { icon: _jsx(BookOpen, { className: "h-4 w-4" }), active: pathname === "/docs", children: "Introduction" }) }), _jsx(Link, { href: "/docs/installation", className: "block", children: _jsx(SidebarItem, { icon: _jsx(Download, { className: "h-4 w-4" }), active: pathname === "/docs/installation", children: "Installation" }) }), _jsx(Link, { href: "/docs/theming", className: "block", children: _jsx(SidebarItem, { icon: _jsx(Layers, { className: "h-4 w-4" }), active: pathname === "/docs/theming", children: "Theming" }) }), _jsx(Link, { href: "/docs/configuration", className: "block", children: _jsx(SidebarItem, { icon: _jsx(Settings, { className: "h-4 w-4" }), active: pathname === "/docs/configuration", children: "Configuration" }) }), _jsx(Link, { href: "/docs/configuration/templates", className: "block", children: _jsx(SidebarItem, { icon: _jsx(LayoutGrid, { className: "h-4 w-4" }), active: pathname === "/docs/configuration/templates", children: "Templates" }) }), _jsx(Link, { href: "/docs/cli", className: "block", children: _jsx(SidebarItem, { icon: _jsx(Terminal, { className: "h-4 w-4" }), active: pathname === "/docs/cli", children: "CLI" }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "mb-2 px-2 text-xs font-semibold text-muted-foreground tracking-wider uppercase", children: "Components" }), _jsx(Accordion, { items: componentAccordionItems, type: "multiple", defaultValue: [], className: "w-full space-y-1" })] })] }) }), _jsx("main", { className: "flex-1 overflow-y-auto bg-background", children: children })] }));
}
