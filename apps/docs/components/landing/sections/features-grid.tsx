import { Card, Badge } from "@unicorn-ui/ui"
import { Palette, Layers, Zap, Code2, Smartphone, Moon, Shield, Sparkles } from "lucide-react"

const features = [
    {
        icon: Palette,
        title: "Beautiful by Default",
        description: "Every component is meticulously designed with attention to detail and modern aesthetics.",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized for performance with tree-shaking and minimal bundle size.",
    },
    {
        icon: Shield,
        title: "Fully Accessible",
        description: "Built with ARIA standards and keyboard navigation support out of the box.",
    },
    {
        icon: Smartphone,
        title: "Mobile First",
        description: "Responsive components that work beautifully on any screen size.",
    },
    {
        icon: Moon,
        title: "Dark Mode Ready",
        description: "Seamless dark mode support with automatic system preference detection.",
    },
    {
        icon: Code2,
        title: "TypeScript Native",
        description: "Full TypeScript support with comprehensive type definitions.",
    },
    {
        icon: Layers,
        title: "Composable",
        description: "Flexible primitives that can be combined to build complex interfaces.",
    },
    {
        icon: Sparkles,
        title: "Animations",
        description: "Smooth, performant animations powered by Framer Motion.",
    },
]

export function FeaturesGrid() {
    return (
        <section className="py-24" id="features">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to build</h2>
                    <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                        Unicorn UI provides all the tools you need to create exceptional user experiences
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-surface border-border hover:border-brand/50 transition-colors group p-6">
                            <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                                <feature.icon className="h-6 w-6 text-brand" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-foreground-secondary text-sm">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
