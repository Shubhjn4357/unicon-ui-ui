# @unicorn-ui/ui

## 1.0.0

### Major Changes

- 5e5438a: # Features

  1. Theme Editor:
     Added a Design Style Selector (Clay, Glass, Skeu, etc.) to the sidebar.
     Updated the preview to use the new Safari mock window component.
     Replaced static progress bars with the interactive Progress component.
  2. Design System:
     Refactored
     design-system.css
     to use semantic CSS variables (e.g., --background, --foreground) instead of hardcoded HSL values. reliable theming across all design styles (Glass, Clay, etc.) and dark mode.
  3. Tailwind Config:
     Extended borderRadius configuration to include dynamic xl, 2xl, and 3xl utilities calculated from the --radius variable.
     Restored a dynamic DEFAULT radius to support the rounded utility class.
     Sunset Theme: Updated the preset to use HSL color values for consistent theming.
  4. Bug Fixes
     Publish Workflow: Fixed the
     .changeset/initial-release.md
     frontmatter to correctly target @unicorn-ui/ui.

### Patch Changes

- 5e39778: # Initial Release

  This is the initial public release of Unicorn UI.

  ## Features

  - 131 production-ready components
  - 5 comprehensive design styles
  - Mobile-first responsive design
  - Full TypeScript support
  - Tailwind CSS v4 compatibility
