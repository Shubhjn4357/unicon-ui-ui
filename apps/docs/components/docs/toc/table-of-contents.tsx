"use client"

import { cn } from "@unicorn-ui/ui"
import * as React from "react"

interface TOCItem {
  id: string
  title: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = React.useState<TOCItem[]>([])
  const [activeId, setActiveId] = React.useState<string>("")

  React.useEffect(() => {
    // Get all h2 and h3 elements from the main content
    const main = document.querySelector("main")
    if (!main) return

    const elements = main.querySelectorAll("h2, h3")
    const items: TOCItem[] = []

    elements.forEach((element) => {
      const id = element.id || element.textContent?.toLowerCase().replace(/\s+/g, "-") || ""
      if (!element.id) element.id = id

      items.push({
        id,
        title: element.textContent || "",
        level: element.tagName === "H2" ? 2 : 3,
      })
    })

    setHeadings(items)
  }, [])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-100px 0px -66%",
        threshold: 1,
      }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (headings.length === 0) return null

  return (
    <div className="w-full space-y-3 py-2">
      <p className="text-sm font-semibold text-foreground">On This Page</p>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={cn(
              "block w-full text-left text-sm transition-colors",
              heading.level === 3 && "pl-4",
              activeId === heading.id
                ? "text-brand font-medium"
                : "text-foreground-secondary hover:text-foreground"
            )}
          >
            {heading.title}
          </button>
        ))}
      </nav>
    </div>
  )
}
