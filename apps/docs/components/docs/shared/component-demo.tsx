"use client"

import { cn } from "@unicorn-ui/ui"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { CodePreview } from "./code-preview"

interface ComponentDemoProps {
  preview: React.ReactNode
  code: string
  filename?: string
  className?: string
}

type Tab = "preview" | "code"

export function ComponentDemo({ preview, code, filename, className }: ComponentDemoProps) {
  const [activeTab, setActiveTab] = useState<Tab>("preview")

  return (
    <div className={cn("rounded-lg border border-border bg-surface overflow-hidden", className)}>
      {/* Tabs */}
      <div className="flex border-b border-border bg-surface-elevated">
        <button
          onClick={() => setActiveTab("preview")}
          className={cn(
            "relative px-4 py-2 text-sm font-medium transition-colors",
            activeTab === "preview"
              ? "text-brand"
              : "text-foreground-secondary hover:text-foreground"
          )}
        >
          Preview
          {activeTab === "preview" && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={cn(
            "relative px-4 py-2 text-sm font-medium transition-colors",
            activeTab === "code" ? "text-brand" : "text-foreground-secondary hover:text-foreground"
          )}
        >
          Code
          {activeTab === "code" && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === "preview" ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-6 min-h-[200px] flex items-center justify-center"
          >
            {preview}
          </motion.div>
        ) : (
          <motion.div
            key="code"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <CodePreview code={code} filename={filename} className="border-0 rounded-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
