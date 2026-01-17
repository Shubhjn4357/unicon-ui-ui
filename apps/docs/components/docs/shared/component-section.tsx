"use client"

import { cn } from "@unicorn-ui/ui"

interface ComponentSectionProps {
  title: string
  description?: string
  id?: string
  children: React.ReactNode
  className?: string
}

export function ComponentSection({
  title,
  description,
  id,
  children,
  className,
}: ComponentSectionProps) {
  // Generate ID from title if not provided
  const sectionId = id || title.toLowerCase().replace(/\s+/g, "-")

  return (
    <section id={sectionId} className={cn("space-y-6 scroll-m-20", className)}>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          <a
            href={`#${sectionId}`}
            className="group inline-flex items-center gap-2 hover:underline"
          >
            {title}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">
              #
            </span>
          </a>
        </h2>
        {description && <p className="text-foreground-secondary">{description}</p>}
      </div>
      {children}
    </section>
  )
}
