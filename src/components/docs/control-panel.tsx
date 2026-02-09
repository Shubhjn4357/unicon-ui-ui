"use client"

/**
 * ============================================================================
 * CONTROL PANEL COMPONENT
 * ============================================================================
 * 
 * This component provides a dynamic control panel for the component playground.
 * It automatically generates appropriate input controls based on prop definitions.
 * 
 * Architecture:
 * - ControlPanel: Main component that renders all controls
 * - ControlInput: Generic input component that renders specific control types
 * - IconPicker: Specialized picker for Lucide icons
 * 
 * Supported Control Types:
 * - text: Text input
 * - number: Number input with optional range slider
 * - boolean: Switch/toggle
 * - select: Dropdown select
 * - radio: Radio button group
 * - color: Color picker with hex input
 * - json/object: JSON editor textarea
 * - icon: Lucide icon picker
 * - src: URL input with file upload (for images, videos, files)
 * ============================================================================
 */

import React from "react"
import { cn } from "../../lib/utils"
import { Input } from "../core/input"
import { Label } from "../core/label"
import { RadioGroup, RadioGroupItem } from "../core/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../core/select"
import { Switch } from "../core/switch"
import { Textarea } from "../core/textarea"
import type { PropDefinition } from "./types"

/**
 * Props for the ControlPanel component
 */
interface ControlPanelProps {
  /** Array of prop definitions to generate controls for */
  props: PropDefinition[]
  /** Current values for all props */
  values: Record<string, any>
  /** Callback when a control value changes */
  onChange: (name: string, value: any) => void
}

/**
 * ============================================================================
 * CONTROL PANEL
 * ============================================================================
 * 
 * Renders a list of controls for component props.
 * Only renders props that have a control definition.
 * 
 * Each control shows:
 * - Label with prop name
 * - Type badge
 * - Appropriate input control
 * - Optional description
 * ============================================================================
 */
export function ControlPanel({ props, values, onChange }: ControlPanelProps) {
  // Safety check: ensure props is always an array
  const safeProps = props || []

  return (
    <div className="space-y-6">
      {safeProps
        .filter((p) => p.control)
        .map((prop) => (
          <div key={prop.name} className="space-y-2">
            {/* Control Header: Label and Type Badge */}
            <div className="flex items-center justify-between">
              <Label
                htmlFor={`control-${prop.name}`}
                className="text-xs font-medium text-foreground/80"
              >
                {prop.name}
              </Label>
              <span className="text-[10px] text-muted-foreground font-mono">{prop.type}</span>
            </div>

            {/* Control Input */}
            <ControlInput
              definition={prop}
              value={values[prop.name]}
              onChange={(val) => onChange(prop.name, val)}
            />

            {/* Optional Description */}
            {prop.description && (
              <p className="text-[10px] text-muted-foreground">{prop.description}</p>
            )}
          </div>
        ))}
    </div>
  )
}

/**
 * ============================================================================
 * CONTROL INPUT
 * ============================================================================
 * 
 * Generic input component that renders the appropriate control type
 * based on the prop definition.
 * 
 * This component uses a switch statement to determine which control to render.
 * Each case handles a specific control type and its unique behavior.
 * ============================================================================
 */
function ControlInput<T = any>({
  definition,
  value,
  onChange,
}: {
  definition: PropDefinition
    value: T
    onChange: (val: T) => void
}) {
  const { control } = definition

  if (!control) return null

  switch (control.type) {
    // ========================================================================
    // TEXT INPUT
    // ========================================================================
    case "text":
      return (
        <Input
          type="text"
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value as T)}
          className="h-8 text-sm"
        />
      )
    // ========================================================================
    // NUMBER INPUT
    // Includes optional range slider if min/max are defined
    // ========================================================================
    case "number":
      return (
        <div className="flex gap-2 items-center">
          <Input
            type="number"
            value={(value as number) || 0}
            onChange={(e) => onChange(Number(e.target.value) as T)}
            min={control.min}
            max={control.max}
            step={control.step}
            className="h-8 text-sm w-20"
          />
          {(control.min !== undefined && control.max !== undefined) && (
            <Input
              type="range"
              min={control.min}
              max={control.max}
              step={control.step || 1}
              value={(value as number) || 0}
              onChange={(e) => onChange(Number(e.target.value) as T)}
              className="flex-1 h-8 cursor-pointer accent-primary"
            />
          )}
        </div>
      )
    // ========================================================================
    // BOOLEAN SWITCH
    // ========================================================================
    case "boolean":
      return (
        <div className="flex items-center h-8">
          <Switch checked={!!value} onCheckedChange={(val) => onChange(val as T)} size="sm" />
        </div>
      )
    // ========================================================================
    // SELECT DROPDOWN
    // Uses custom Select component for better UI
    // ========================================================================
    case "select":
      return (
        <Select value={value as string} onValueChange={(val) => onChange(val as T)}>
          <SelectTrigger className="h-8">
            <SelectValue placeholder="Select a value" />
          </SelectTrigger>
          <SelectContent>
            {control.options?.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )
    // ========================================================================
    // RADIO BUTTON GROUP
    // Uses RadioGroup component for better UI
    // ========================================================================
    case "radio":
      return (
        <RadioGroup value={value as string} onValueChange={(val) => onChange(val as T)}>
          <div className="flex flex-wrap gap-3">
            {control.options?.map((opt) => (
              <div key={opt} className="flex items-center space-x-2">
                <RadioGroupItem value={opt} id={`radio-${definition.name}-${opt}`} />
                <Label
                  htmlFor={`radio-${definition.name}-${opt}`}
                  className="text-sm font-medium cursor-pointer"
                >
                  {opt}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      )
    // ========================================================================
    // COLOR PICKER
    // Includes visual color picker and hex input with better styling
    // ========================================================================
    case "color":
      return (
        <div className="flex gap-2 items-center">
          <div className="relative overflow-hidden rounded-md border-2 border-input shadow-sm w-12 h-8 hover:border-primary transition-colors">
            <input
              type="color"
              value={(value as string) || "#000000"}
              onChange={(e) => onChange(e.target.value as T)}
              className="absolute -inset-2 w-16 h-16 p-0 border-0 cursor-pointer"
            />
          </div>
          <Input
            type="text"
            value={(value as string) || ""}
            onChange={(e) => onChange(e.target.value as T)}
            className="h-8 text-sm flex-1 font-mono"
            placeholder="#000000"
          />
        </div>
      )
    // ========================================================================
    // JSON/OBJECT EDITOR
    // Uses Textarea component with JSON parsing
    // ========================================================================
    case "json":
    case "object":
      return (
        <Textarea
          className="min-h-[80px] font-mono text-sm"
          value={typeof value === 'object' ? JSON.stringify(value, null, 2) : (value as string)}
          onChange={(e) => {
            try {
              const parsed = JSON.parse(e.target.value)
              onChange(parsed as T)
            } catch {
              // Invalid JSON - ignore
            }
          }}
        />
      )
    // ========================================================================
    // ICON PICKER
    // Specialized picker for Lucide icons
    // Passes the actual icon React node to the component
    // ========================================================================
    case "icon":
      return <IconPicker value={value as string} onChange={(iconName: string) => {
        // Get the icon component from our curated list and pass it as a React node
        const IconComponent = AVAILABLE_ICONS[iconName as IconName]
        onChange(IconComponent ? <IconComponent /> : iconName as any)
      }} />

    // ========================================================================
    // SRC/FILE/URL INPUT
    // For images, videos, audio, and other file sources
    // Provides both URL input and file upload
    // ========================================================================
    case "src":
      return (
        <div className="space-y-2">
          {/* URL Input */}
          <Input
            type="url"
            value={(value as string) || ""}
            onChange={(e) => onChange(e.target.value as T)}
            placeholder="https://example.com/image.jpg"
            className="h-8 text-sm font-mono"
          />
          {/* File Upload */}
          <Input
            type="file"
            accept={(control as any).accept || "image/*,video/*,audio/*"}
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) {
                const url = URL.createObjectURL(file)
                onChange(url as T)
              }
            }}
            className="h-8 text-sm"
          />
        </div>
      )

    default:
      return null
  }
}


// ============================================================================
// ICON PICKER IMPORTS
// ============================================================================
// Import a curated set of commonly used icons for demo purposes
import {
  Heart, Star, Home, Settings, User, Mail, Bell, Search,
  Calendar, Clock, Download, Upload, Edit, Trash, Plus,
  Check, X, ChevronRight, Menu, ChevronsUpDown, CircleHelp
} from "lucide-react"

// Map of available icons for the picker
const AVAILABLE_ICONS = {
  Heart,
  Star,
  Home,
  Settings,
  User,
  Mail,
  Bell,
  Search,
  Calendar,
  Clock,
  Download,
  Upload,
  Edit,
  Trash,
  Plus,
  Check,
  X,
  ChevronRight,
  Menu,
  CircleHelp,
} as const

type IconName = keyof typeof AVAILABLE_ICONS

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../core/command"
import { Popover, PopoverContent, PopoverTrigger } from "../core/popover"

/**
 * ============================================================================
 * ICON PICKER
 * ============================================================================
 * 
 * Specialized picker component for selecting Lucide icons.
 * 
 * Features:
 * - Searchable dropdown with all Lucide icons
 * - Visual preview of selected icon
 * - Filterable list with command palette
 * - Shows all available icons (not limited)
 * 
 * @param value - Currently selected icon name
 * @param onChange - Callback when icon selection changes
 * ============================================================================
 */
interface IconPickerProps {
  value: string
  onChange: (icon: string) => void
}

function IconPicker({ value, onChange }: IconPickerProps) {
  const [open, setOpen] = React.useState(false)

  // Get icon names from our curated list
  const iconNames = Object.keys(AVAILABLE_ICONS) as IconName[]

  // Get the icon component, fallback to CircleHelp if not found
  const SelectedIcon = AVAILABLE_ICONS[value as IconName] || CircleHelp

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex items-center gap-2 cursor-pointer border border-input rounded-md p-1.5 w-full hover:bg-accent/50 transition-colors text-left">
        <div className="p-1 bg-muted rounded-full">
          <SelectedIcon className="w-4 h-4" />
        </div>
        <span className="text-sm text-foreground flex-1 truncate">{value || "Select Icon"}</span>
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[300px]" align="start">
        <Command>
          <CommandInput placeholder="Search icon..." />
          <CommandList>
            <CommandEmpty>No icon found.</CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-y-auto">
              {iconNames.map((iconName) => {
                const Icon = AVAILABLE_ICONS[iconName]
                return (
                  <CommandItem
                    key={iconName}
                    value={iconName}
                    keywords={[iconName.toLowerCase()]}
                    onSelect={() => {
                      onChange(iconName === value ? "" : iconName)
                      setOpen(false)
                    }}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    <span>{iconName}</span>
                    {value === iconName && <Check className="ml-auto h-4 w-4" />}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
