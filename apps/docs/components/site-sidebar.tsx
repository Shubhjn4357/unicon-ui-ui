"use client"

import { docsConfig } from "@/lib/docs-config"
import { cn } from "@unicorn-ui/ui"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function DocsSidebarNav() {
  const pathname = usePathname()

  return (
    <div className="w-full py-6 pr-6 pl-8 lg:py-8">
      {docsConfig.map((group, index) => (
        <div key={index} className="pb-8">
          <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold text-foreground">
            {group.title}
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {group.items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:underline",
                  item.disabled && "cursor-not-allowed opacity-60",
                  pathname === item.href
                    ? "font-medium text-brand"
                    : "text-foreground-secondary hover:text-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
