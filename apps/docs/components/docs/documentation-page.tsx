"use client"

import { ComponentDemo } from "@/components/docs/shared/component-demo"
import { ComponentSection } from "@/components/docs/shared/component-section"
import { InstallationSteps } from "@/components/docs/shared/installation-steps"
import { TableOfContents } from "@/components/docs/shared/table-of-contents"
import { type PropItem, PropsTable } from "@/components/docs/shared/props-table"
import { Badge, BlurFade } from "@unicorn-ui/ui"
import type { ComponentType, ReactNode } from "react"

export interface ExampleSection {
    id: string
    title: string
    description?: string
    preview: ReactNode
    code: string
}

export interface AccessibilityNote {
    title: string
    description: string
}

export interface BestPractice {
    dos: string[]
    donts: string[]
}

export interface DocumentationPageProps<T = Record<string, unknown>> {
    // Header
    title: string
    category: string
    version?: string
    description: string

    // Component (optional - for auto-generating simple demos)
    component?: ComponentType<T>
    componentProps?: T

    // Installation
    packageName?: string
    importStatement: string

    // Examples
    examples: ExampleSection[]

    // Props
    props?: PropItem[]

    // Accessibility
    accessibility?: AccessibilityNote[]

    // Best Practices
    bestPractices?: BestPractice

    // Optional custom sections
    customSections?: {
        id: string
        title: string
        content: ReactNode
    }[]
}

export function DocumentationPage<T = Record<string, unknown>>({
    title,
    category,
    version = "v1.0.0",
    description,
    component: Component,
    componentProps,
    packageName = "@unicorn-ui/ui",
    importStatement,
    examples,
    props,
    accessibility,
    bestPractices,
    customSections,
}: DocumentationPageProps<T>) {
    // Generate TOC items
    const tocItems = [
        { id: "installation", title: "Installation", level: 2 },
        ...examples.map((ex) => ({ id: ex.id, title: ex.title, level: 2 })),
        ...(props ? [{ id: "props", title: "Props", level: 2 }] : []),
        ...(accessibility ? [{ id: "accessibility", title: "Accessibility", level: 2 }] : []),
        ...(bestPractices ? [{ id: "best-practices", title: "Best Practices", level: 2 }] : []),
        ...(customSections?.map((s) => ({ id: s.id, title: s.title, level: 2 })) || []),
    ]

    return (
        <div className="flex gap-8 relative">
            <div className="flex-1 space-y-12 pb-16">
                {/* Header */}
                <BlurFade delay={0.1}>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 flex-wrap">
                            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
                            <Badge>{category}</Badge>
                            <Badge variant="secondary">{version}</Badge>
                        </div>
                        <p className="text-lg text-foreground-secondary max-w-3xl">{description}</p>
                    </div>
                </BlurFade>

                {/* Installation */}
                <BlurFade delay={0.2}>
                    <ComponentSection id="installation" title="Installation">
                        <InstallationSteps packageName={packageName} importStatement={importStatement} />
                    </ComponentSection>
                </BlurFade>

                {/* Auto-generated basic example if component provided */}
                {Component && componentProps && (
                    <BlurFade delay={0.3}>
                        <ComponentSection id="live-demo" title="Live Demo" description="Interactive component demo">
                            <div className="flex justify-center p-8 rounded-lg border border-border bg-surface-elevated">
                                <Component {...componentProps} />
                            </div>
                        </ComponentSection>
                    </BlurFade>
                )}

                {/* Examples */}
                {examples.map((example, index) => (
                    <BlurFade key={example.id} delay={0.3 + index * 0.1}>
                        <ComponentSection id={example.id} title={example.title} description={example.description}>
                            <ComponentDemo preview={example.preview} code={example.code} />
                        </ComponentSection>
                    </BlurFade>
                ))}

                {/* Props */}
                {props && (
                    <BlurFade delay={0.3 + examples.length * 0.1}>
                        <ComponentSection id="props" title="Props" description="Complete props reference">
                            <PropsTable data={props} />
                        </ComponentSection>
                    </BlurFade>
                )}

                {/* Accessibility */}
                {accessibility && (
                    <BlurFade delay={0.4 + examples.length * 0.1}>
                        <ComponentSection
                            id="accessibility"
                            title="Accessibility"
                            description="Built-in accessibility features"
                        >
                            <div className="rounded-lg border border-border bg-surface-elevated p-6 space-y-4">
                                {accessibility.map((note, index) => (
                                    <div key={index} className="space-y-2">
                                        <h4 className="font-semibold">{note.title}</h4>
                                        <p className="text-sm text-foreground-secondary">{note.description}</p>
                                    </div>
                                ))}
                            </div>
                        </ComponentSection>
                    </BlurFade>
                )}

                {/* Best Practices */}
                {bestPractices && (
                    <BlurFade delay={0.5 + examples.length * 0.1}>
                        <ComponentSection id="best-practices" title="Best Practices">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="rounded-lg border border-success/20 bg-success/5 p-6 space-y-3">
                                    <h4 className="font-semibold text-success flex items-center gap-2">
                                        <span>✓</span> Do
                                    </h4>
                                    <ul className="space-y-2 text-sm text-foreground-secondary">
                                        {bestPractices.dos.map((item, index) => (
                                            <li key={index}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="rounded-lg border border-error/20 bg-error/5 p-6 space-y-3">
                                    <h4 className="font-semibold text-error flex items-center gap-2">
                                        <span>✗</span> Don't
                                    </h4>
                                    <ul className="space-y-2 text-sm text-foreground-secondary">
                                        {bestPractices.donts.map((item, index) => (
                                            <li key={index}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ComponentSection>
                    </BlurFade>
                )}

                {/* Custom Sections */}
                {customSections?.map((section, index) => (
                    <BlurFade key={section.id} delay={0.6 + index * 0.1}>
                        <ComponentSection id={section.id} title={section.title}>
                            {section.content}
                        </ComponentSection>
                    </BlurFade>
                ))}
            </div>

            {/* Table of Contents - Sticky Sidebar */}
            <aside className="hidden xl:block w-64 shrink-0">
                <div className="sticky top-20">
                    <TableOfContents items={tocItems} />
                </div>
            </aside>
        </div>
    )
}
