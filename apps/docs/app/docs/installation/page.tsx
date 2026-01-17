"use client"

import { BlurFade, ShimmerButton } from "@unicorn-ui/ui"
import { Check, Copy, Terminal as TerminalIcon } from "lucide-react"
import { useState } from "react"

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg border border-border bg-surface overflow-hidden">
      <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-2">
        <span className="text-xs font-medium text-foreground-secondary">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-colors hover:bg-surface"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="p-4">
        <pre className="overflow-x-auto">
          <code className="text-sm font-mono">{code}</code>
        </pre>
      </div>
    </div>
  )
}

export default function InstallationPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <BlurFade delay={0.1}>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Installation</h1>
          <p className="text-lg text-foreground-secondary">
            Get started with Unicorn UI in your Next.js, React, or Vite project.
          </p>
        </div>
      </BlurFade>

      {/* Step 1: Install Package */}
      <BlurFade delay={0.2}>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              1
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Install the Package</h2>
          </div>
          <p className="text-foreground-secondary">
            Install Unicorn UI using your preferred package manager:
          </p>

          <div className="space-y-3">
            <div>
              <p className="mb-2 text-sm font-medium">npm</p>
              <CodeBlock code="npm install @unicorn-ui/ui" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">yarn</p>
              <CodeBlock code="yarn add @unicorn-ui/ui" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">pnpm</p>
              <CodeBlock code="pnpm add @unicorn-ui/ui" />
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Step 2: Import Styles */}
      <BlurFade delay={0.3}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              2
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Import Global Styles</h2>
          </div>
          <p className="text-foreground-secondary">
            Import the global CSS file in your root layout (usually{" "}
            <code className="rounded bg-surface-elevated px-1.5 py-0.5 text-sm">
              app/layout.tsx
            </code>{" "}
            or{" "}
            <code className="rounded bg-surface-elevated px-1.5 py-0.5 text-sm">src/main.tsx</code>
            ):
          </p>

          <div className="space-y-3">
            <p className="text-sm font-medium">Next.js App Router</p>
            <CodeBlock
              language="typescript"
              code={`import "@unicorn-ui/ui/styles"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`}
            />
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">Vite / React</p>
            <CodeBlock
              language="typescript"
              code={`import "@unicorn-ui/ui/styles"
import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`}
            />
          </div>
        </div>
      </BlurFade>

      {/* Step 3: Configure Tailwind */}
      <BlurFade delay={0.4}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              3
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Configure Tailwind CSS</h2>
          </div>
          <p className="text-foreground-secondary">
            Update your{" "}
            <code className="rounded bg-surface-elevated px-1.5 py-0.5 text-sm">
              tailwind.config.js
            </code>{" "}
            to include Unicorn UI's content paths:
          </p>

          <CodeBlock
            language="javascript"
            code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@unicorn-ui/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
          />
        </div>
      </BlurFade>

      {/* Step 4: Start Using */}
      <BlurFade delay={0.5}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              4
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Start Using Components</h2>
          </div>
          <p className="text-foreground-secondary">
            You're all set! Import and use Unicorn UI components in your app:
          </p>

          <CodeBlock
            language="typescript"
            code={`import { Button, ShimmerButton, Badge } from "@unicorn-ui/ui"

export default function Page() {
  return (
    <div className="space-y-4">
      <Button>Regular Button</Button>
      <ShimmerButton>Shimmer Effect</ShimmerButton>
      <Badge>New Feature</Badge>
    </div>
  )
}`}
          />
        </div>
      </BlurFade>

      {/* Next Steps */}
      <BlurFade delay={0.6}>
        <div className="rounded-lg border border-brand/20 bg-brand/5 p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TerminalIcon className="h-5 w-5 text-brand" />
              <h3 className="text-lg font-semibold">What's Next?</h3>
            </div>
            <p className="text-sm text-foreground-secondary">
              Now that you've installed Unicorn UI, explore the component library and learn how to
              customize the theme to match your brand.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/docs/components/button">
                <ShimmerButton>
                  <span className="text-sm font-medium text-white">Browse Components</span>
                </ShimmerButton>
              </a>
              <a
                href="/docs/theming"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-surface px-4 text-sm font-medium transition-colors hover:bg-surface-elevated"
              >
                Customize Theme
              </a>
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  )
}
