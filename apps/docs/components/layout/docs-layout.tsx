"use client"

import { CollapsibleSidebar } from "@unicorn-ui/ui"
import { DocsSidebarNav } from "@/components/site-sidebar"
import { TableOfContents } from "@/components/docs/toc/table-of-contents"
import { SiteFooter } from "@/components/site-footer"

interface DocsLayoutProps {
  children: React.ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-full overflow-hidden">
      {/* 
        CollapsibleSidebar handles the width and collision.
        We pass the Nav component as children.
      */}
      <CollapsibleSidebar
        className="h-full border-r border-border shrink-0"
        defaultCollapsed={false}
        title="Menu"
      >
        <DocsSidebarNav />
      </CollapsibleSidebar>

      {/* Main Content Area - Takes remaining space */}
      <main className="flex-1 h-full overflow-y-auto bg-surface scroll-smooth relative">
        <div className="flex flex-col min-h-full">
          <div className="flex-1 flex justify-center w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 py-10 items-start w-full max-w-7xl">

              {/* Content */}
              <div className="flex-1 min-w-0 w-full animate-in fade-in duration-500">
                <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-img:rounded-xl">
                  {children}
                </div>
              </div>

              {/* Right Table of Contents */}
              <aside className="hidden xl:block w-64 shrink-0 sticky top-0">
                <TableOfContents />
              </aside>

            </div>
          </div>
          <SiteFooter />
        </div>
      </main>
    </div>
  )
}
