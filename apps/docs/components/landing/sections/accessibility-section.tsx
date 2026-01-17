import { Card } from "@unicorn-ui/ui"
import { Accessibility, Keyboard, Eye, Volume2 } from "lucide-react"

const features = [
    {
        icon: Accessibility,
        title: "WCAG 2.1 Compliant",
        description: "All components meet WCAG 2.1 AA accessibility standards",
    },
    {
        icon: Keyboard,
        title: "Keyboard Navigation",
        description: "Full keyboard support with focus management",
    },
    {
        icon: Eye,
        title: "Screen Reader Support",
        description: "Proper ARIA labels and announcements",
    },
    {
        icon: Volume2,
        title: "Reduced Motion",
        description: "Respects user motion preferences",
    },
]

export function AccessibilitySection() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Accessibility is not an afterthought</h2>
                        <p className="text-lg text-foreground-secondary mb-8">
                            Every component is built with accessibility at its core. We believe great design should be accessible to
                            everyone.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="h-5 w-5 text-brand" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-foreground">{feature.title}</h3>
                                        <p className="text-sm text-foreground-secondary">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Card className="bg-surface border-border p-8">
                        <div className="space-y-4 font-mono text-sm">
                            <div className="text-foreground-secondary">{`<Button`}</div>
                            <div className="pl-4 text-brand">{`aria-label="Submit form"`}</div>
                            <div className="pl-4 text-brand">{`aria-disabled={isLoading}`}</div>
                            <div className="pl-4 text-brand">{`tabIndex={0}`}</div>
                            <div className="pl-4 text-brand">{`role="button"`}</div>
                            <div className="text-foreground-secondary">{`>`}</div>
                            <div className="pl-4 text-foreground">{`Submit`}</div>
                            <div className="text-foreground-secondary">{`</Button>`}</div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
