"use client"

/**
 * ============================================================================
 * COMPONENT PLAYGROUND
 * ============================================================================
 * 
 * Interactive playground for testing and demonstrating UI components.
 * 
 * Features:
 * - Live component preview with real-time prop updates
 * - Responsive viewport testing (desktop, tablet, mobile)
 * - Design style switching (glass, clay, skeuomorphic, etc.)
 * - Dynamic control panel for prop manipulation
 * - Code viewer showing usage examples
 * - API documentation with props table
 * - Story/variant loading
 * 
 * Architecture:
 * - State Management: Uses React hooks to manage component args and UI state
 * - Event Handler Proxy: Automatically connects interactive component events
 * - Control Panel: Dynamically generates controls based on prop definitions
 * - Viewport Simulation: Responsive container for testing different screen sizes
 * ============================================================================
 */

import { Code, Eye, Monitor, RefreshCw, Smartphone, Tablet } from "lucide-react"
import React, { useState } from "react"
import { type DesignStyle, useDesignStyle } from "../../hooks/use-design-style"
import { cn } from "../../lib/utils"
import { Button } from "../core/button"
import { Card } from "../core/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../core/tabs"
import { CodeViewer } from "./code-viewer"
import { ControlPanel } from "./control-panel"
import { PropsTable } from "./props-table"
import type { ComponentDoc, ComponentStory } from "./types"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../core/select"

/**
 * Props for the ComponentPlayground component
 */
interface ComponentPlaygroundProps {
  /** Component documentation including props, stories, and examples */
  doc: ComponentDoc
}

export function ComponentPlayground({ doc }: ComponentPlaygroundProps) {
  // ========================================================================
  // STATE MANAGEMENT
  // ========================================================================
  
  // Initialize args with default values from prop definitions
  const defaultArgs = (doc?.props || []).reduce(
    (acc, prop) => {
      if (prop.defaultValue !== undefined) {
        acc[prop.name] = prop.defaultValue
      }
      return acc
    },
    {} as Record<string, any>
  )

  const [args, setArgs] = useState(defaultArgs)
  const [activeTab, setActiveTab] = useState("preview")
  const [key, setKey] = useState(0) // For forcing component re-render
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const { designStyle, setDesignStyle } = useDesignStyle()

  // ========================================================================
  // EVENT HANDLERS
  // ========================================================================
  
  /** Update a single prop value */
  const handleArgChange = (name: string, value: any) => {
    setArgs((prev) => ({ ...prev, [name]: value }))
  }

  /** Reset all props to default values */
  const handleReset = () => {
    setArgs(defaultArgs)
    setKey((prev) => prev + 1)
  }

  /** Force component re-render (useful for animations) */
  const handleReplay = () => {
    setKey((prev) => prev + 1)
  }

  /** Load a predefined story/variant */
  const loadStory = (story: ComponentStory) => {
    setArgs({ ...defaultArgs, ...story.args })
    setKey((prev) => prev + 1)
  }

  // ========================================================================
  // EVENT HANDLER PROXY
  // ========================================================================
  // Automatically connects component event handlers to update playground state.
  // This makes components interactive in the playground without manual wiring.
  // 
  // Supported patterns:
  // - onCheckedChange: For checkboxes and switches
  // - onValueChange: For sliders, selects, accordions, tabs, radio groups
  // - onChange: For inputs and textareas
  // - onOpenChange: For dialogs, popovers, dropdowns, collapsibles
  // - onSelect: For select components
  // ========================================================================
  
  const interactiveArgs = { ...args }

  if (doc?.props) {
    doc.props.forEach(prop => {
      // Only process event handler props (start with "on")
      if (prop.name.startsWith("on") && typeof args[prop.name] !== "function") {
        
        // ------------------------------------------------------------------------
        // CHECKBOX/SWITCH: onCheckedChange
        // ------------------------------------------------------------------------
        if (prop.name === "onCheckedChange" || (prop.name === "onChange" && args.checked !== undefined)) {
          interactiveArgs[prop.name] = (val: any) => {
            // Handle both direct boolean and event object
            const newValue = (val && typeof val === 'object' && 'target' in val) ? val.target.checked : val
            handleArgChange("checked", newValue)
          }
        }
        
        // ------------------------------------------------------------------------
        // ACCORDION/TABS/RADIO/SELECT: onValueChange
        // ------------------------------------------------------------------------
        else if (prop.name === "onValueChange") {
          interactiveArgs[prop.name] = (val: any) => {
            handleArgChange("value", val)
            // Also update defaultValue if it exists (for uncontrolled components)
            if (doc.props.find(p => p.name === "defaultValue")) {
              handleArgChange("defaultValue", val)
            }
          }
        }
        
        // ------------------------------------------------------------------------
        // INPUT/TEXTAREA: onChange
        // ------------------------------------------------------------------------
        else if (prop.name === "onChange" && args.value !== undefined) {
          interactiveArgs[prop.name] = (e: any) => {
            if (e?.target) {
              handleArgChange("value", e.target.value)
            }
          }
        }
        
        // ------------------------------------------------------------------------
        // DIALOG/POPOVER/DROPDOWN/COLLAPSIBLE: onOpenChange
        // ------------------------------------------------------------------------
        else if (prop.name === "onOpenChange") {
          interactiveArgs[prop.name] = (val: boolean) => {
            handleArgChange("open", val)
            // Also update defaultOpen if it exists
            if (doc.props.find(p => p.name === "defaultOpen")) {
              handleArgChange("defaultOpen", val)
            }
          }
        }
        
        // ------------------------------------------------------------------------
        // SELECT: onSelect
        // ------------------------------------------------------------------------
        else if (prop.name === "onSelect") {
          interactiveArgs[prop.name] = (val: any) => {
            handleArgChange("value", val)
          }
        }
        
        // ------------------------------------------------------------------------
        // GENERIC: Log other event handlers
        // ------------------------------------------------------------------------
        else {
          interactiveArgs[prop.name] = (...funcArgs: any[]) => {
            console.log(`[Playground] ${prop.name}:`, funcArgs)
          }
        }
      }
    })
  }

  const Component = doc?.component

  // ========================================================================
  // RENDER
  // ========================================================================
  
  return (
    <div className="space-y-8 w-full max-w-7xl mx-auto p-4">
      {/* ================================================================== */}
      {/* PAGE HEADER */}
      {/* ================================================================== */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">{doc?.title}</h1>
        <p className="text-lg text-muted-foreground">{doc?.description}</p>
      </div>

      {/* ================================================================== */}
      {/* TABS: Preview, Code, API */}
      {/* ================================================================== */}
      <Tabs
        defaultValue="preview"
        value={activeTab}
        className="w-full"
        onValueChange={setActiveTab}
      >
        {/* ================================================================ */}
        {/* TAB CONTROLS: Tabs + Viewport + Design Style + Actions */}
        {/* ================================================================ */}
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="w-4 h-4" /> Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center gap-2">
              <Code className="w-4 h-4" /> code
            </TabsTrigger>
            <TabsTrigger value="api" className="flex items-center gap-2">
              <Code className="w-4 h-4" /> API
            </TabsTrigger>
          </TabsList>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">
            {/* Viewport Selector */}
            <div className="flex items-center bg-muted/50 rounded-md p-1 border">
              <Button
                variant={viewport === "desktop" ? "default" : "ghost"}
                size="sm"
                className="p-2 h-8"
                onClick={() => setViewport("desktop")}
              >
                <Monitor className="w-4 h-4" />
              </Button>
              <Button
                variant={viewport === "tablet" ? "default" : "ghost"}
                size="sm"
                className="p-2 h-8"
                onClick={() => setViewport("tablet")}
              >
                <Tablet className="w-4 h-4" />
              </Button>
              <Button
                variant={viewport === "mobile" ? "default" : "ghost"}
                size="sm"
                className="p-2 h-8"
                onClick={() => setViewport("mobile")}
              >
                <Smartphone className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Divider */}
            <div className="h-8 w-px bg-border mx-2" />
            
            {/* Design Style Selector */}
            <Select
              value={designStyle}
              onValueChange={(e) => setDesignStyle(e as DesignStyle)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Design Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Default</SelectItem>
                <SelectItem value="glass">Glass</SelectItem>
                <SelectItem value="liquid-glass">Liquid Glass</SelectItem>
                <SelectItem value="clay">Clay</SelectItem>
                <SelectItem value="skeu">Skeuomorphic</SelectItem>
              <SelectItem value="minimal">Minimal</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Action Buttons */}
            <Button variant="outline" size="sm" onClick={handleReplay}>
              <RefreshCw className="w-4 h-4 mr-2" /> Replay
            </Button>
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RefreshCw className="w-4 h-4 mr-2" /> Reset
            </Button>
          </div>
        </div>

        {/* ================================================================ */}
        {/* PREVIEW TAB */}
        {/* ================================================================ */}
        <TabsContent value="preview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* ============================================================ */}
            {/* COMPONENT CANVAS */}
            {/* ============================================================ */}
            <Card className="lg:col-span-3 overflow-hidden border-border bg-background/50 backdrop-blur-sm relative">
              <div className="absolute inset-0 bg-grid-white/[0.02] mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
              <div
                className={cn(
                  "w-full mx-auto transition-all duration-300 ease-in-out flex items-center justify-center min-h-[400px] p-10 bg-dot-pattern overflow-auto",
                  viewport === "mobile"
                    ? "max-w-[375px] border-x"
                    : viewport === "tablet"
                      ? "max-w-[768px] border-x"
                      : "max-w-full"
                )}
              >
                <div
                  className={cn(
                    "w-full h-full flex items-center justify-center",
                    designStyle !== "none" && designStyle
                  )}
                >
                  <Component key={key} {...interactiveArgs} />
                </div>
              </div>
            </Card>

            {/* ============================================================ */}
            {/* CONTROLS SIDEBAR */}
            {/* ============================================================ */}
            <div className="lg:col-span-1 space-y-4">
              <Card className="p-4 h-full">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  Controls
                </h3>
                <ControlPanel props={doc?.props || []} values={args} onChange={handleArgChange} />
              </Card>

              {/* Variants/Stories */}
              {doc?.stories && doc?.stories.length > 0 && (
                <Card className="p-4">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                    Variants
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doc?.stories.map((story) => (
                      <Button
                        key={story.name}
                        size="sm"
                        variant="outline"
                        onClick={() => loadStory(story)}
                      >
                        {story.name}
                      </Button>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        {/* ================================================================ */}
        {/* CODE TAB */}
        {/* ================================================================ */}
        <TabsContent value="code">
          <CodeViewer componentName={doc?.title} args={args} defaultArgs={defaultArgs} />
        </TabsContent>

        {/* ================================================================ */}
        {/* API TAB */}
        {/* ================================================================ */}
        <TabsContent value="api">
          <PropsTable props={doc?.props} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
