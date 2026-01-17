export function LogoCloud() {
    const logos = ["Vercel", "Stripe", "Linear", "Notion", "Figma", "Discord", "Slack"]

    return (
        <section className="py-16 border-y border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-foreground-secondary mb-8">Trusted by developers at leading companies</p>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                    {logos.map((logo) => (
                        <div
                            key={logo}
                            className="text-xl font-semibold text-foreground-muted hover:text-foreground-secondary transition-colors"
                        >
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
