/// <reference types="react" />

declare module "react" {
  interface HTMLAttributes<T> {
    popover?: "auto" | "manual" | ""
    popoverTarget?: string
    popoverTargetAction?: "toggle" | "show" | "hide"
  }

  interface ButtonHTMLAttributes<T> {
    popoverTarget?: string
    popoverTargetAction?: "toggle" | "show" | "hide"
  }
}

declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => void
  }
}

export {}
