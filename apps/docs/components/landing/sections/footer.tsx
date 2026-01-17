import Link from "next/link"
import { Sparkles } from "lucide-react"
import { RetroGrid } from "@unicorn-ui/ui"

const footerLinks = {
    Product: [
        { name: "Components", href: "#components" },
        { name: "Templates", href: "#" },
        { name: "Pricing", href: "#pricing" },
        { name: "Changelog", href: "#" },
    ],
    Resources: [
        { name: "Documentation", href: "/docs" },
        { name: "Examples", href: "#" },
        { name: "Guides", href: "#" },
        { name: "API Reference", href: "#" },
    ],
    Company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
    ],
    Legal: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "License", href: "#" },
    ],
}

export function FooterSection() {
    return (
        <footer className="relative border-t border-border bg-surface-elevated/30 overflow-hidden">
            {/* Background */}
            <RetroGrid className="opacity-15" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand">
                                <Sparkles className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-foreground">Unicorn UI</span>
                        </div>
                        <p className="text-sm text-foreground-secondary">Beautiful components for modern web applications.</p>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-semibold text-foreground mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-foreground-secondary">© 2026 Unicorn UI. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-sm text-foreground-secondary hover:text-foreground transition-colors">
                            Twitter
                        </Link>
                        <Link href="#" className="text-sm text-foreground-secondary hover:text-foreground transition-colors">
                            GitHub
                        </Link>
                        <Link href="#" className="text-sm text-foreground-secondary hover:text-foreground transition-colors">
                            Discord
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
