import { Card } from "@unicorn-ui/ui"
import { Check, X } from "lucide-react"

const features = [
    { name: "TypeScript Support", unicorn: true, others: "partial" },
    { name: "Accessibility Built-in", unicorn: true, others: "partial" },
    { name: "Dark Mode", unicorn: true, others: true },
    { name: "Custom Theming", unicorn: true, others: "partial" },
    { name: "Tree Shaking", unicorn: true, others: true },
    { name: "Design System", unicorn: true, others: false },
    { name: "Animation Library", unicorn: true, others: false },
    { name: "Figma Files", unicorn: true, others: false },
]

export function ComparisonSection() {
    return (
        <section className="py-24 bg-surface-elevated/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose Unicorn UI?</h2>
                    <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                        See how we compare to other popular component libraries
                    </p>
                </div>

                <Card className="bg-surface border-border max-w-3xl mx-auto overflow-hidden p-0">
                    <div className="grid grid-cols-3 text-center border-b border-border">
                        <div className="p-4 font-medium text-foreground-secondary">Feature</div>
                        <div className="p-4 font-medium text-brand bg-brand/5">Unicorn UI</div>
                        <div className="p-4 font-medium text-foreground-secondary">Others</div>
                    </div>
                    {features.map((feature) => (
                        <div key={feature.name} className="grid grid-cols-3 text-center border-b border-border last:border-b-0">
                            <div className="p-4 text-sm text-foreground text-left">{feature.name}</div>
                            <div className="p-4 bg-brand/5 flex items-center justify-center">
                                <Check className="h-5 w-5 text-brand" />
                            </div>
                            <div className="p-4 flex items-center justify-center">
                                {feature.others === true ? (
                                    <Check className="h-5 w-5 text-foreground-muted" />
                                ) : feature.others === false ? (
                                    <X className="h-5 w-5 text-foreground-muted/50" />
                                ) : (
                                    <span className="text-xs text-foreground-secondary">Partial</span>
                                )}
                            </div>
                        </div>
                    ))}
                </Card>
            </div>
        </section>
    )
}
