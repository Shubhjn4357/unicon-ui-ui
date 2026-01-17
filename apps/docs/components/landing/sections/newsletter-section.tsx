"use client"

import { useState } from "react"
import { Button, Input, Card } from "@unicorn-ui/ui"

export function NewsletterSection() {
    const [email, setEmail] = useState("")

    return (
        <section className="py-24 bg-surface-elevated/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Card className="bg-surface border-border max-w-2xl mx-auto p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay in the loop</h2>
                    <p className="text-foreground-secondary mb-8">
                        Get notified about new components, updates, and exclusive content.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-surface-elevated"
                        />
                        <Button type="submit" className="bg-brand hover:bg-brand-hover text-white shadow-lg shadow-brand/30">
                            Subscribe
                        </Button>
                    </form>
                    <p className="text-xs text-foreground-secondary mt-4">No spam, unsubscribe at any time.</p>
                </Card>
            </div>
        </section>
    )
}
