import { Card } from "@unicorn-ui/ui"

const integrations = [
    { name: "Next.js", icon: "▲" },
    { name: "Vite", icon: "⚡" },
    { name: "Remix", icon: "💿" },
    { name: "Gatsby", icon: "🟣" },
    { name: "Astro", icon: "🚀" },
    { name: "Create React App", icon: "⚛️" },
]

export function IntegrationSection() {
    return (
        <section className="py-24 bg-surface-elevated/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Works with your stack</h2>
                    <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                        Seamlessly integrates with all popular React frameworks
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                    {integrations.map((integration) => (
                        <Card
                            key={integration.name}
                            className="bg-surface border-border hover:border-brand/50 transition-colors cursor-pointer p-6"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-3xl mb-2">{integration.icon}</span>
                                <span className="text-sm text-foreground-secondary">{integration.name}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
