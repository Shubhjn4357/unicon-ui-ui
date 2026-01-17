"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { COMPONENT_CATEGORIES } from "@/data/component-docs"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="w-full">
      <div className="space-y-6 py-4">
        {/* Getting Started */}
        <div className="space-y-2">
          <h3 className="px-4 text-sm font-semibold text-foreground">Getting Started</h3>
          <div className="space-y-1">
            <SidebarLink href="/docs" isActive={pathname === "/docs"}>
              Introduction
            </SidebarLink>
            <SidebarLink href="/docs/installation" isActive={pathname === "/docs/installation"}>
              Installation
            </SidebarLink>
            <SidebarLink href="/docs/theming" isActive={pathname === "/docs/theming"}>
              Theming
            </SidebarLink>
          </div>
        </div>

        {/* Components by Category */}
        {Object.entries(COMPONENT_CATEGORIES).map(([category, components]) => (
          <div key={category} className="space-y-2">
            <h3 className="px-4 text-sm font-semibold text-foreground">{category}</h3>
            <div className="space-y-1">
              {components.map((component) => (
                <SidebarLink
                  key={component.slug}
                  href={`/docs/components/${component.slug}`}
                  isActive={pathname === `/docs/components/${component.slug}`}
                >
                  {component.data.title}
                </SidebarLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}

function SidebarLink({
  href,
  isActive,
  children,
}: {
  href: string
  isActive: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={`
        block px-4 py-2 text-sm transition-colors
        ${isActive
          ? "bg-brand/10 text-brand font-medium border-r-2 border-brand"
          : "text-foreground-secondary hover:text-foreground hover:bg-surface-elevated"
        }
      `}
    >
      {children}
    </Link>
  )
}
