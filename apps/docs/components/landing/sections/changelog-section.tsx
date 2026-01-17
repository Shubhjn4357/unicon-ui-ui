import { Badge } from "@unicorn-ui/ui"

const updates = [
    {
        version: "v2.5.0",
        date: "Jan 10, 2026",
        title: "New Animation System",
        description: "Introduced a new animation system with better performance and more customization options.",
        type: "feature",
    },
    {
        version: "v2.4.0",
        date: "Dec 20, 2025",
        title: "Dark Mode Improvements",
        description: "Enhanced dark mode with better contrast ratios and automatic system detection.",
        type: "improvement",
    },
    {
        version: "v2.3.0",
        date: "Dec 5, 2025",
        title: "New Components",
        description: "Added 15 new components including Calendar, Command Palette, and Data Table.",
        type: "feature",
    },
]

export function ChangelogSection() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Always improving</h2>
                    <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                        We ship new features and improvements every week
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        {updates.map((update) => (
                            <div key={update.version} className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="h-3 w-3 rounded-full bg-brand" />
                                    <div className="w-px h-full bg-border" />
                                </div>
                                <div className="pb-8">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Badge variant="secondary">{update.version}</Badge>
                                        <span className="text-sm text-foreground-secondary">{update.date}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">{update.title}</h3>
                                    <p className="text-foreground-secondary">{update.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
