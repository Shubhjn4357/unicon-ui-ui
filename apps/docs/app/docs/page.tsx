"use client"

import {
  AnimatedGradientText,
  BentoCard,
  BentoGrid,
  BlurFade,
  Button,
  FileTree,
  RainbowButton,
  ShimmerButton,
} from "@unicorn-ui/ui"
import { ArrowRight, Box, Code, Layers, Sparkles, Zap, Rocket, Terminal } from "lucide-react"
import Link from "next/link"

export default function DocsIntroPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <BlurFade delay={0.1}>
        <section className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Welcome to Unicorn UI
          </h1>
          <p className="text-lg text-foreground-secondary md:text-xl max-w-3xl leading-relaxed">
            150+ free and open-source animated components built with React, TypeScript, Tailwind
            CSS, and Framer Motion. Copy, paste, and customize to build beautiful interfaces in
            minutes.
          </p>
        </section>
      </BlurFade>

      {/* Quick Start */}
      <BlurFade delay={0.2}>
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
            <Terminal className="h-6 w-6 text-brand" />
            Quick Start
          </h2>
          <div className="rounded-xl border border-border bg-surface-elevated p-8" style={{ borderRadius: 'calc(var(--radius, 0.5rem) * 2)' }}>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-foreground-secondary mb-4 font-medium">1. Install the package:</p>
                <div className="relative rounded-lg bg-surface border border-border p-5 font-mono text-sm" style={{ borderRadius: 'var(--radius, 0.5rem)' }}>
                  <code className="text-brand">npm install @unicorn-ui/ui</code>
                </div>
              </div>
              <div>
                <p className="text-sm text-foreground-secondary mb-4 font-medium">
                  2. Import and use components:
                </p>
                <div className="relative rounded-lg bg-surface border border-border p-5 font-mono text-sm" style={{ borderRadius: 'var(--radius, 0.5rem)' }}>
                  <pre className="overflow-x-auto text-foreground/90">
                    {`import { Button, ShimmerButton } from "@unicorn-ui/ui"

export default function App() {
  return (
    <div className="flex gap-4">
      <Button>Click me</Button>
      <ShimmerButton>Fancy Button</ShimmerButton>
    </div>
  )
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BlurFade>

      {/* Why Unicorn UI */}
      <BlurFade delay={0.3}>
        <section className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-brand" />
            Why Unicorn UI?
          </h2>

          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BentoCard className="p-8 space-y-4" style={{ borderRadius: 'calc(var(--radius, 0.5rem) * 2)' }}>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Lightning Fast</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Optimized for performance with minimal bundle size and butter-smooth 60fps animations.
              </p>
            </BentoCard>

            <BentoCard className="p-8 space-y-4" style={{ borderRadius: 'calc(var(--radius, 0.5rem) * 2)' }}>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">TypeScript First</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Fully typed components with excellent IntelliSense support and autocomplete.
              </p>
            </BentoCard>

            <BentoCard className="p-8 space-y-4" style={{ borderRadius: 'calc(var(--radius, 0.5rem) * 2)' }}>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Highly Customizable</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Easy to customize with Tailwind CSS and CSS variables for theming.
              </p>
            </BentoCard>

            <BentoCard className="p-8 space-y-4" style={{ borderRadius: 'calc(var(--radius, 0.5rem) * 2)' }}>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Beautiful Animations</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Smooth animations powered by Framer Motion and CSS transitions.
              </p>
            </BentoCard>

            <BentoCard className="p-8 space-y-4" style={{ borderRadius: 'calc(var(--radius, 0.5rem) * 2)' }}>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center">
                <Box className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">150+ Components</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Comprehensive collection of beautiful UI components and effects.
              </p>
            </BentoCard>

            <BentoCard className="p-8 space-y-4" style={{ borderRadius: 'calc(var(--radius, 0.5rem) * 2)' }}>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Easy to Use</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Just copy, paste, and customize. No complex setup required.
              </p>
            </BentoCard>
          </BentoGrid>
        </section>
      </BlurFade>

      {/* Project Structure */}
      <BlurFade delay={0.4}>
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Project Structure</h2>
          <div className="rounded-xl border border-border bg-surface-elevated p-8" style={{ borderRadius: 'calc(var(--radius, 0.5rem) * 2)' }}>
            <FileTree
              data={[
                {
                  name: "src",
                  isFolder: true,
                  children: [
                    {
                      name: "components",
                      isFolder: true,
                      children: [
                        { name: "ui" }
                      ]
                    },
                    {
                      name: "app",
                      isFolder: true,
                      children: [
                        { name: "layout.tsx" },
                        { name: "page.tsx" },
                        { name: "globals.css" }
                      ]
                    }
                  ]
                }
              ]}
            />
          </div>
        </section>
      </BlurFade>

      {/* Ready to Build */}
      <BlurFade delay={0.45}>
        <section className="rounded-xl border border-border bg-gradient-to-br from-brand/10 via-surface-elevated to-surface-elevated p-10" style={{ borderRadius: 'calc(var(--radius, 0.5rem) * 2)' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-brand flex items-center justify-center shrink-0">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Ready to Build?</h2>
              <p className="text-foreground-secondary mt-2 leading-relaxed">
                Start building beautiful interfaces with our extensive component library.
                Each component is designed to be accessible, customizable, and production-ready.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/docs/components/button">
              <RainbowButton>
                <span className="flex items-center gap-2">
                  Explore Components <ArrowRight className="h-4 w-4" />
                </span>
              </RainbowButton>
            </Link>
            <Link href="/docs/components/shimmer-button">
              <Button variant="outline" size="lg">
                View Button Styles
              </Button>
            </Link>
          </div>
        </section>
      </BlurFade>

      {/* Next Steps */}
      <BlurFade delay={0.5}>
        <section className="rounded-xl border border-border bg-surface-elevated p-10 space-y-6" style={{ borderRadius: 'calc(var(--radius, 0.5rem) * 2)' }}>
          <div className="inline-flex items-center rounded-lg bg-brand/10 px-4 py-2 text-sm font-medium text-brand">
            Next Steps
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Get started in minutes</h2>
          <p className="text-foreground-secondary leading-relaxed max-w-2xl">
            Follow the installation guide to set up Unicorn UI in your project, or browse the
            component library to see what's available.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/docs/installation">
              <ShimmerButton className="shadow-lg">
                <span className="text-sm font-semibold text-white flex items-center gap-2">
                  Installation Guide <ArrowRight className="h-4 w-4" />
                </span>
              </ShimmerButton>
            </Link>
            <Link href="/docs/components/button">
              <Button variant="outline" size="lg">
                Browse Components
              </Button>
            </Link>
          </div>
        </section>
      </BlurFade>
    </div>
  )
}

