import { docsConfig, siteConfig } from "@/lib/docs-config"
import { Marquee } from "@unicorn-ui/ui"
import { Github, Twitter } from "lucide-react"
import Link from "next/link"

const techStack = ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js", "Radix UI"]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-surface/50 mt-auto">
      {/* Tech Stack Marquee */}
      <section className="border-b border-border/40 bg-surface-elevated/50 py-8">
        <div className="container px-4 mb-4">
          <p className="text-sm font-semibold text-foreground-secondary uppercase tracking-widest text-center">
            Built With
          </p>
        </div>
        <Marquee className="[--duration:30s]" pauseOnHover>
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="mx-6 flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-2"
            >
              <span className="font-semibold text-foreground">{tech}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Footer Content */}
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <h5 className="text-lg font-bold bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent">
              {siteConfig.name}
            </h5>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Documentation Links */}
          <div className="space-y-4">
            <h6 className="text-sm font-semibold text-foreground">Documentation</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="text-foreground-secondary hover:text-brand transition-colors"
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/installation"
                  className="text-foreground-secondary hover:text-brand transition-colors"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/configuration"
                  className="text-foreground-secondary hover:text-brand transition-colors"
                >
                  Configuration
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/theming"
                  className="text-foreground-secondary hover:text-brand transition-colors"
                >
                  Theming
                </Link>
              </li>
            </ul>
          </div>

          {/* Components Links */}
          <div className="space-y-4">
            <h6 className="text-sm font-semibold text-foreground">Components</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/docs/components/button"
                  className="text-foreground-secondary hover:text-brand transition-colors"
                >
                  Buttons
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/badge"
                  className="text-foreground-secondary hover:text-brand transition-colors"
                >
                  Layout
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/animated-gradient-text"
                  className="text-foreground-secondary hover:text-brand transition-colors"
                >
                  Text Effects
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/particles"
                  className="text-foreground-secondary hover:text-brand transition-colors"
                >
                  Special Effects
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="space-y-4">
            <h6 className="text-sm font-semibold text-foreground">Community</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  className="text-foreground-secondary hover:text-brand transition-colors flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  className="text-foreground-secondary hover:text-brand transition-colors flex items-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-foreground-secondary">
          <p>
            Built with ❤️ by{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              className="text-brand hover:underline"
            >
              {siteConfig.author}
            </Link>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
