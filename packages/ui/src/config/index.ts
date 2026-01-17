import { defaultConfig } from "./default-config"
import type { UnicornConfig, UserConfig } from "./types"

/**
 * Deep merge two objects
 */
function deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const output = { ...target } as any

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] })
        } else {
          output[key] = deepMerge(target[key], source[key])
        }
      } else {
        Object.assign(output, { [key]: source[key] })
      }
    })
  }

  return output as T
}

function isObject(item: any): item is Record<string, any> {
  return item && typeof item === "object" && !Array.isArray(item)
}

/**
 * Resolve user config with defaults
 */
export function resolveConfig(userConfig?: UserConfig): UnicornConfig {
  if (!userConfig) {
    return defaultConfig
  }

  return deepMerge(defaultConfig, userConfig as Partial<UnicornConfig>)
}

/**
 * Generate CSS custom properties from config
 */
export function generateCSSVariables(config: UnicornConfig): string {
  const vars: string[] = []

  // Colors
  if (config.colors) {
    Object.entries(config.colors).forEach(([colorName, colorValue]) => {
      if (typeof colorValue === "object") {
        Object.entries(colorValue).forEach(([scale, value]) => {
          if (value) {
            const varName =
              scale === "DEFAULT"
                ? `--unicorn-color-${colorName}`
                : `--unicorn-color-${colorName}-${scale}`
            vars.push(`${varName}: ${value};`)
          }
        })
      }
    })
  }

  // Spacing
  if (config.spacing) {
    Object.entries(config.spacing).forEach(([key, value]) => {
      if (value) {
        vars.push(`--unicorn-spacing-${key}: ${value};`)
      }
    })
  }

  // Radius
  if (config.radius) {
    Object.entries(config.radius).forEach(([key, value]) => {
      if (value) {
        vars.push(`--unicorn-radius-${key}: ${value};`)
      }
    })
  }

  // Shadows
  if (config.shadows) {
    Object.entries(config.shadows).forEach(([key, value]) => {
      if (value) {
        vars.push(`--unicorn-shadow-${key}: ${value};`)
      }
    })
  }

  // Typography - Font Family
  if (config.typography?.fontFamily) {
    Object.entries(config.typography.fontFamily).forEach(([key, value]) => {
      if (value) {
        vars.push(`--unicorn-font-${key}: ${value};`)
      }
    })
  }

  // Typography - Font Weight
  if (config.typography?.fontWeight) {
    Object.entries(config.typography.fontWeight).forEach(([key, value]) => {
      if (value) {
        vars.push(`--unicorn-font-weight-${key}: ${value};`)
      }
    })
  }

  // Opacity
  if (config.opacity) {
    Object.entries(config.opacity).forEach(([key, value]) => {
      if (value) {
        vars.push(`--unicorn-opacity-${key}: ${value};`)
      }
    })
  }

  // Transitions
  if (config.transitions?.duration) {
    Object.entries(config.transitions.duration).forEach(([key, value]) => {
      if (value) {
        vars.push(`--unicorn-duration-${key}: ${value};`)
      }
    })
  }

  if (config.transitions?.timing) {
    Object.entries(config.transitions.timing).forEach(([key, value]) => {
      if (value) {
        vars.push(`--unicorn-timing-${key}: ${value};`)
      }
    })
  }

  // Z-index
  if (config.zIndex) {
    Object.entries(config.zIndex).forEach(([key, value]) => {
      if (value) {
        vars.push(`--unicorn-z-${key}: ${value};`)
      }
    })
  }

  return `:root {\n  ${vars.join("\n  ")}\n}`
}

// Export types and defaults
export type { UnicornConfig, UserConfig } from "./types"
export { defaultConfig } from "./default-config"
