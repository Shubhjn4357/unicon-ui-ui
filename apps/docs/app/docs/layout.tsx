import { DocsLayout as DocsSidebarLayout } from "@/components/layout/docs-layout"
import { TopNav } from "@/components/layout/top-nav"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      {/* 
        TopNav is h-14 (3.5rem). 
        DocsSidebarLayout expects to fill the rest of the screen.
      */}
      <DocsSidebarLayout>{children}</DocsSidebarLayout>
    </div>
  )
}
