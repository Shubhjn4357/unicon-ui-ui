"use client"

import { Github, Twitter, Mail, Coffee } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="container px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent">
              Unicorn UI
            </h3>
            <p className="text-sm text-foreground-secondary max-w-xs">
              A beautiful component library built with React, TypeScript, and Tailwind CSS.
              Create stunning UIs with ease.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:hello@unicornui.dev"
                className="text-foreground-secondary hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Documentation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-foreground-secondary hover:text-foreground transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/docs/installation" className="text-foreground-secondary hover:text-foreground transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/docs/theming" className="text-foreground-secondary hover:text-foreground transition-colors">
                  Theming
                </Link>
              </li>
            </ul>
          </div>

          {/* Components Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Components</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs/components/button" className="text-foreground-secondary hover:text-foreground transition-colors">
                  Buttons
                </Link>
              </li>
              <li>
                <Link href="/docs/components/input" className="text-foreground-secondary hover:text-foreground transition-colors">
                  Inputs
                </Link>
              </li>
              <li>
                <Link href="/docs/components/modal" className="text-foreground-secondary hover:text-foreground transition-colors">
                  Modals
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Support</h4>
            <p className="text-sm text-foreground-secondary">
              Help keep this project alive!
            </p>
            <Link
              href="https://www.buymeacoffee.com/unicornui"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFDD00] text-[#000000] hover:bg-[#FFDD00]/90 transition-colors text-sm font-medium"
            >
              <Coffee className="h-4 w-4" />
              Buy Me a Coffee
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-secondary">
            Built with ❤️ by the <span className="font-medium text-foreground">Unicorn UI Team</span>
          </p>
          <p className="text-sm text-foreground-secondary">
            © {new Date().getFullYear()} Unicorn UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
