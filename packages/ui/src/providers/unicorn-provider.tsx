"use client"

import * as React from "react"
import { type UnicornConfig, type UserConfig, generateCSSVariables, resolveConfig } from "../config"

interface UnicornProviderProps {
  children: React.ReactNode
  config?: UserConfig
}

const UnicornContext = React.createContext<UnicornConfig | null>(null)

export function UnicornProvider({ children, config: userConfig }: UnicornProviderProps) {
  const config = React.useMemo(() => resolveConfig(userConfig), [userConfig])
  const cssVars = React.useMemo(() => generateCSSVariables(config), [config])

  return (
    <UnicornContext.Provider value={config}>
      <style dangerouslySetInnerHTML={{ __html: cssVars }} />
      {children}
    </UnicornContext.Provider>
  )
}

export function useUnicornConfig() {
  const context = React.useContext(UnicornContext)
  if (!context) {
    throw new Error("useUnicornConfig must be used within UnicornProvider")
  }
  return context
}
