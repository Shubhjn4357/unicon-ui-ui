"use client"

import { getSidebarData } from "@/lib/docs-utils"
import { Badge, Button, Card, GridPattern, Input } from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import { ArrowRight, Search, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function ComponentsPageContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const sidebarData = getSidebarData()
  const filteredCategories = sidebarData
    .map((category) => ({
      name: category.name,
      components: category.items.filter(
        (component) =>
          component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          component.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
          component.description?.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.components.length > 0 && category.name !== "Docs" && category.name !== "Hooks")

  const totalComponents = sidebarData.reduce((acc: number, cat) => acc + cat.items.length, 0)
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <GridPattern className="absolute inset-0 opacity-10" />
      </div>

      {/* Hero */}
      <section className="container py-24 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl space-y-4"
        >
          <Badge variant="outline" className="gap-2">
            <Sparkles className="h-3 w-3" />
            131+ Production-Ready Components
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight">Component Library</h1>
          <p className="text-xl text-muted-foreground">
            Beautiful, accessible, and customizable React components built with TypeScript and Tailwind CSS.
            Choose from 5 design styles to match your brand.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative max-w-2xl"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </motion.div>
      </section>

      {/* Components Grid */}
      <section className="container pb-24 space-y-16">
        {filteredCategories.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">{category.name}</h2>
              {/* <p className="text-muted-foreground">{category.description}</p> */}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.components.map((component) => (
                <Link
                  key={component.title}
                  href={`/docs/components/${component.title.replace(/[A-Z]/g, (m: string) => `-${m.toLowerCase()}`).replace(/^-/, "")}`}
                  className="group"
                >
                  <Card className="p-6 h-full transition-all hover:shadow-lg hover:border-primary/50">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {component.title}
                        </h3>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </div>
                      <p className="text-sm text-muted-foreground">{component.description}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <Card className="p-12 text-center space-y-6 bg-linear-to-br from-primary/5 to-primary/10">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Install Unicorn UI and start building beautiful interfaces with our production-ready components.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/docs/installation">
              <Button size="lg">Install Now</Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  )
}
