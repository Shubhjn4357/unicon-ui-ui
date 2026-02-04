"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { Button } from "../core/button";
import { ThemeToggle } from "../feedback/theme-toggle";
export function TopNav({ brandName = "Unicorn UI", brandLogo = _jsx(Sparkles, { className: "h-6 w-6 text-indigo-500" }), brandHref = "/", links = [
    { label: "Docs", href: "/docs" },
    { label: "Components", href: "/components" },
    { label: "Hooks", href: "/hooks" },
    { label: "CLI", href: "/docs/cli" },
], rightContent, showThemeToggle = true, githubHref, className, }) {
    return (_jsx("nav", { className: cn("sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md", className), children: _jsxs("div", { className: "container flex h-14 items-center", children: [_jsxs("div", { className: "mr-4 hidden md:flex", children: [_jsxs(Link, { href: brandHref, className: "mr-6 flex items-center space-x-2", children: [brandLogo, brandName && _jsx("span", { className: "hidden font-bold sm:inline-block", children: brandName })] }), _jsx("nav", { className: "flex items-center space-x-6 text-sm font-medium", children: links.map((link) => (_jsx(Link, { href: link.href, target: link.external ? "_blank" : undefined, rel: link.external ? "noreferrer" : undefined, className: "text-muted-foreground transition-colors hover:text-foreground", children: link.label }, link.href))) })] }), _jsxs("div", { className: "flex flex-1 items-center justify-between space-x-2 md:justify-end", children: [_jsx("div", { className: "w-full flex-1 md:w-auto md:flex-none" }), _jsxs("nav", { className: "flex items-center space-x-2", children: [rightContent, githubHref && (_jsx(Link, { href: githubHref, target: "_blank", rel: "noreferrer", children: _jsxs(Button, { variant: "ghost", size: "icon", children: [_jsx(Github, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "GitHub" })] }) })), showThemeToggle && _jsx(ThemeToggle, {})] })] })] }) }));
}
