import { Card, Button, Avatar } from "@unicorn-ui/ui"

const contributors = [
    { name: "Alex", color: "bg-brand" },
    { name: "Sam", color: "bg-brand-hover" },
    { name: "Jordan", color: "bg-success" },
    { name: "Taylor", color: "bg-info" },
    { name: "Morgan", color: "bg-warning" },
    { name: "+500", color: "bg-surface-elevated" },
]

export function CommunitySection() {
    return (
        <section className="py-24 bg-surface-elevated/30" id="community">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join our growing community</h2>
                        <p className="text-lg text-foreground-secondary mb-6">
                            Connect with thousands of developers, share ideas, and contribute to the project.
                        </p>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex -space-x-3">
                                {contributors.map((contributor) => (
                                    <Avatar key={contributor.name} className="border-2 border-surface">
                                        <div className={`h-full w-full ${contributor.color} text-white text-xs flex items-center justify-center font-semibold`}>
                                            {contributor.name.slice(0, 2)}
                                        </div>
                                    </Avatar>
                                ))}
                            </div>
                            <span className="text-foreground-secondary">500+ contributors</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button>Join Discord</Button>
                            <Button variant="outline">GitHub</Button>
                            <Button variant="outline">Twitter</Button>
                        </div>
                    </div>
                    <Card className="bg-surface border-border p-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                                <div className="h-8 w-8 rounded-full bg-brand flex items-center justify-center text-xs text-white font-medium">
                                    DK
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-foreground">Just shipped a new feature!</div>
                                    <div className="text-xs text-foreground-secondary">2 minutes ago</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                                <div className="h-8 w-8 rounded-full bg-brand-hover flex items-center justify-center text-xs text-white font-medium">
                                    AL
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-foreground">New dark mode variants 🌙</div>
                                    <div className="text-xs text-foreground-secondary">15 minutes ago</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                                <div className="h-8 w-8 rounded-full bg-success flex items-center justify-center text-xs text-white font-medium">
                                    MJ
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-foreground">Fixed accessibility issues</div>
                                    <div className="text-xs text-foreground-secondary">1 hour ago</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
