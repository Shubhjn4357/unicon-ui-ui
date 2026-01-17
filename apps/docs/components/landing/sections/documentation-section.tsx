import { Card, Button } from "@unicorn-ui/ui"
import { Book, Video, FileText, MessageCircle } from "lucide-react"

const resources = [
    {
        icon: Book,
        title: "Documentation",
        description: "Comprehensive guides and API references",
        action: "Read Docs",
    },
    {
        icon: Video,
        title: "Video Tutorials",
        description: "Step-by-step video guides",
        action: "Watch Now",
    },
    {
        icon: FileText,
        title: "Examples",
        description: "Real-world code examples",
        action: "View Examples",
    },
    {
        icon: MessageCircle,
        title: "Community",
        description: "Join our Discord community",
        action: "Join Discord",
    },
]

export function DocumentationSection() {
    return (
        <section className="py-24" id="docs">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn at your own pace</h2>
                    <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                        Comprehensive documentation and resources to help you succeed
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((resource) => (
                        <Card key={resource.title} className="bg-surface border-border hover:border-brand/50 transition-colors p-6">
                            <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                                <resource.icon className="h-6 w-6 text-brand" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                            <p className="text-foreground-secondary text-sm mb-4">{resource.description}</p>
                            <Button variant="ghost" size="sm" className="p-0 h-auto text-brand hover:text-brand-hover">
                                {resource.action} →
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
