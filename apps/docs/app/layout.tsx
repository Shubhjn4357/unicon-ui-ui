import "@unicorn-ui/ui/styles"
import "./globals.css"
// import { AppLayout } from "@/components/layout/app-layout"
import { ThemeCustomizer } from "@/components/theme-customizer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-surface font-sans antialiased">
        {children}
        <ThemeCustomizer />
      </body>
    </html>
  )
}
