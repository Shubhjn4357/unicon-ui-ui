"use client"

import type * as React from "react"

import type { UserConfig } from "../../types/config"

export interface UnicornThemeProviderProps {
  children?: React.ReactNode
  config?: UserConfig
}

export const UnicornThemeProvider = ({ children, config }: UnicornThemeProviderProps) => {
  return <>{children}</>
}

UnicornThemeProvider.displayName = "UnicornThemeProvider"
