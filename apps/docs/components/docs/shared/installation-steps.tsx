"use client"

import { cn } from "@unicorn-ui/ui"
import { useState } from "react"
import { CopyButton } from "./copy-button"

type PackageManager = "pnpm" | "npm" | "yarn"

interface InstallationStepsProps {
  packageName: string
  importStatement?: string
  className?: string
}

export function InstallationSteps({
  packageName,
  importStatement,
  className,
}: InstallationStepsProps) {
  const [activePM, setActivePM] = useState<PackageManager>("pnpm")

  const installCommands: Record<PackageManager, string> = {
    pnpm: `pnpm add ${packageName}`,
    npm: `npm install ${packageName}`,
    yarn: `yarn add ${packageName}`,
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Package Manager Tabs */}
      <div className="flex gap-2 border-b border-border">
        {(["pnpm", "npm", "yarn"] as PackageManager[]).map((pm) => (
          <button
            key={pm}
            onClick={() => setActivePM(pm)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2",
              activePM === pm
                ? "border-brand text-brand"
                : "border-transparent text-foreground-secondary hover:text-foreground"
            )}
          >
            {pm}
          </button>
        ))}
      </div>

      {/* Install Command */}
      <div className="rounded-lg border border-border bg-surface-elevated p-4">
        <div className="flex items-center justify-between gap-4">
          <code className="text-sm font-mono">{installCommands[activePM]}</code>
          <CopyButton text={installCommands[activePM]} className="flex-shrink-0" />
        </div>
      </div>

      {/* Import Statement */}
      {importStatement && (
        <div className="rounded-lg border border-border bg-surface-elevated p-4">
          <div className="flex items-center justify-between gap-4">
            <code className="text-sm font-mono">{importStatement}</code>
            <CopyButton text={importStatement} className="flex-shrink-0" />
          </div>
        </div>
      )}
    </div>
  )
}
