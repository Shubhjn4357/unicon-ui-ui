"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button, BorderBeam } from "@unicorn-ui/ui"
import { Menu, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
    { name: "Components", href: "#components" },
    { name: "Features", href: "#features" },
    { name: "Showcase", href: "#showcase" },
    { name: "Docs", href: "/docs" },
]

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-surface/80 backdrop-blur-xl border-border py-2"
                    : "bg-transparent border-transparent py-4"
            )}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-accent overflow-hidden shadow-lg shadow-brand/20">
                            <Sparkles className="h-6 w-6 text-white" />
                            <div className="absolute inset-0 bg-white/20" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Unicorn UI
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/docs" className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors">
                            Log in
                        </Link>
                        <div className="relative group">
                            <Button size="sm" className="relative overflow-hidden bg-brand hover:bg-brand-hover text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand/25">
                                Get Started
                            </Button>
                            <BorderBeam
                                duration={4}
                                size={100}
                                className="from-transparent via-white to-transparent"
                            />
                        </div>
                    </div>

                    <button className="md:hidden p-2 text-foreground-secondary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-border bg-surface/95 backdrop-blur-xl rounded-xl border shadow-xl animate-in slide-in-from-top-2">
                        <div className="flex flex-col gap-1 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-3 text-sm font-medium text-foreground-secondary hover:text-foreground hover:bg-surface-elevated rounded-lg transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 pt-4 border-t border-border mt-2">
                                <Button variant="ghost" size="sm" className="justify-start w-full">
                                    Log in
                                </Button>
                                <Button size="sm" className="w-full bg-brand text-white">
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
