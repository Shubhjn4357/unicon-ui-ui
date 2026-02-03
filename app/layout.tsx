import "../dist/styles.css"
import "./globals.css"
import { LayoutContent } from "@/app/components/layout/layout-content"
import { DesignStyleProvider, SmoothScroll, ThemeProvider } from "@unicorn-ui/ui"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `${siteConfig.name} - Modern React Component Library`,
  description:
    siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider defaultTheme="system" storageKey="unicorn-ui-theme">
          <DesignStyleProvider>
            <SmoothScroll>
              <LayoutContent>{children}</LayoutContent>
            </SmoothScroll>
          </DesignStyleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
