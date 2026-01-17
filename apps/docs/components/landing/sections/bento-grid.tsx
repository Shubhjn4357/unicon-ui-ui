import { Card } from "@unicorn-ui/ui"
import { Palette, Layers, Zap, Code2 } from "lucide-react"

export function BentoGridSection() {
    return (
        <section className="py-24 bg-surface-elevated/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for developers who care</h2>
                    <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                        Every feature designed with developer experience in mind
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Large card */}
                    <Card className="md:col-span-2 bg-surface border-border overflow-hidden relative p-6">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />
                        <div className="relative">
                            <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                                <Palette className="h-6 w-6 text-brand" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Customizable Design System</h3>
                            <p className="text-foreground-secondary mb-6">
                                Our design tokens and CSS variables make it easy to customize every aspect of your components. Match
                                your brand identity perfectly with minimal effort.
                            </p>
                            <div className="grid grid-cols-5 gap-2">
                                {["bg-brand", "bg-brand-hover", "bg-surface", "bg-surface-elevated", "bg-border"].map((color) => (
                                    <div key={color} className={`h-8 rounded-md ${color}`} />
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* Small card */}
                    <Card className="bg-surface border-border p-6">
                        <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                            <Layers className="h-6 w-6 text-brand" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Composable APIs</h3>
                        <p className="text-foreground-secondary">
                            Build complex UIs by combining simple, focused components together.
                        </p>
                    </Card>

                    {/* Small card */}
                    <Card className="bg-surface border-border p-6">
                        <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                            <Zap className="h-6 w-6 text-brand" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Zero Config</h3>
                        <p className="text-foreground-secondary">
                            Works out of the box with sensible defaults. No complex setup required.
                        </p>
                    </Card>

                    {/* Large card */}
                    <Card className="md:col-span-2 bg-surface border-border p-6">
                        <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                            <Code2 className="h-6 w-6 text-brand" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Developer Experience First</h3>
                        <p className="text-foreground-secondary mb-4">
                            Comprehensive TypeScript support, detailed documentation, and intuitive APIs designed to make your
                            development workflow as smooth as possible.
                        </p>
                        <div className="p-4 rounded-lg bg-surface-elevated font-mono text-sm text-foreground-secondary">
                            {`import { Button } from "@unicorn-ui/ui"`}
                            <br />
                            {`<Button variant="primary">Click me</Button>`}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
