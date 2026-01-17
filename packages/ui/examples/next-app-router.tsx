// Example usage in a Next.js app

import { UnicornProvider } from "@unicorn-ui/ui"
import type { UserConfig } from "@unicorn-ui/ui"

// Your custom theme configuration
const myTheme: UserConfig = {
  colors: {
    primary: {
      DEFAULT: "#6366f1", // Indigo
      50: "#eef2ff",
      500: "#6366f1",
      900: "#312e81",
    },
    secondary: {
      DEFAULT: "#8b5cf6", // Purple
    },
  },
  radius: {
    md: "0.75rem", // Slightly more rounded
  },
  spacing: {
    md: "1.25rem", // Slightly more spacious
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <UnicornProvider config={myTheme}>{children}</UnicornProvider>
      </body>
    </html>
  )
}
