
import * as HookDemos from "@/components/docs/hook-demos"
import type { HookDoc } from "@/components/docs/types"

export const hooks: HookDoc[] = [
  {
    slug: "use-theme",
    title: "useTheme",
    description: "A hook to manage the application theme (light/dark).",
    data: {
      title: "useTheme",
      description: "Easily switch between light and dark modes with this hook.",
      examples: [
        {
          title: "Basic Usage",
          preview: HookDemos.UseThemeDemo,
          code: `
import { useTheme } from "@unicorn-ui/ui"

export function UseThemeDemo() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex flex-col gap-2">
      <p>Current Theme: {theme}</p>
      <div className="flex gap-2">
        <Button onClick={() => setTheme("light")}>Light</Button>
        <Button onClick={() => setTheme("dark")}>Dark</Button>
      </div>
    </div>
  )
}
          `.trim(),
        },
      ],
      props: [
        {
          name: "defaultTheme",
          type: "string",
          description: "The initial theme to use (e.g., 'light', 'dark', 'system').",
          default: "system",
        },
        {
          name: "storageKey",
          type: "string",
          description: "The key used to store the theme in localStorage.",
          default: "unicorn-ui-theme"
        }
      ],
    },
  },
  {
    slug: "use-window-size",
    title: "useWindowSize",
    description: "A hook to get the current window dimensions.",
    data: {
      title: "useWindowSize",
      description: "Track window width and height reactively.",
      examples: [
        {
          title: "Display Window Size",
          preview: HookDemos.UseWindowSizeDemo,
          code: `
import { useWindowSize } from "@unicorn-ui/ui"

export function UseWindowSizeDemo() {
  const { width, height } = useWindowSize()
  return (
    <div>
      {width}px x {height}px
    </div>
  )
}
          `.trim(),
        },
      ],
      props: [],
    },
  },
  {
    slug: "use-copy-to-clipboard",
    title: "useCopyToClipboard",
    description: "A hook to copy text to the clipboard.",
    data: {
      title: "useCopyToClipboard",
      description: "Copy text to clipboard with a simple function call.",
      examples: [
        {
          title: "Copy Input Value",
          preview: HookDemos.UseCopyToClipboardDemo,
          code: `
import { useCopyToClipboard } from "@unicorn-ui/ui"

export function UseCopyToClipboardDemo() {
  const [text, setText] = useState("Copy me!")
  const [copied, copy] = useCopyToClipboard()

  return (
    <div className="flex gap-2">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => copy(text)}>{copied ? "Copied!" : "Copy"}</button>
    </div>
  )
}
          `.trim(),
        },
      ],
      props: [],
    },
  },
  {
    slug: "use-async",
    title: "useAsync",
    description: "A hook to handle async operations with loading and error states.",
    data: {
      title: "useAsync",
      description: "Simplify async data fetching and state management.",
      examples: [
        {
          title: "Fetch Data simulation",
          preview: HookDemos.UseAsyncDemo,
          code: `
import { useAsync } from "@unicorn-ui/ui"

export function UseAsyncDemo() {
  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return "Success! Data loaded."
  }
  const { execute, data, error, loading } = useAsync(fetchData, false)
  
  return (
    <div>
      <button onClick={execute} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>
      {data && <div>{data}</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  )
}
          `.trim(),
        },
      ],
      props: [
        {
          name: "asyncFunction",
          type: "() => Promise<T>",
          description: "The async function to execute.",
        },
        {
          name: "immediate",
          type: "boolean",
          description: "Whether to execute the function immediately on mount.",
          default: "true"
        }
      ],
    },
  },
  {
    slug: "use-click-outside",
    title: "useClickOutside",
    description: "A hook that detects clicks outside a specified element.",
    data: {
      title: "useClickOutside",
      description: "Useful for closing modals or dropdowns when clicking outside.",
      examples: [
        {
          title: "Close Modal on Click Outside",
          preview: HookDemos.UseClickOutsideDemo,
          code: `
import { useClickOutside } from "@unicorn-ui/ui"

export function UseClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickOutside(() => setIsOpen(false))

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div ref={ref} className="modal-content">
            Click outside to close
          </div>
        </div>
      )}
    </div>
  )
}
          `.trim(),
        },
      ],
      props: [
        {
          name: "handler",
          type: "(event: MouseEvent | TouchEvent) => void",
          description: "Function to call on outside click.",
        }
      ],
    },
  },
  {
    slug: "use-mouse",
    title: "useMouse",
    description: "A hook that tracks the mouse position.",
    data: {
      title: "useMouse",
      description: "Get current mouse coordinates relative to the window or an element.",
      examples: [
        {
          title: "Track Mouse Position",
          preview: HookDemos.UseMouseDemo,
          code: `
import { useMouse } from "@unicorn-ui/ui"

export function UseMouseDemo() {
  const ref = React.useRef(null)
  const state = useMouse(ref)
  
  return (
    <div ref={ref} className="w-full h-64 border relative">
      <p>x: {state.x}, y: {state.y}</p>
       <p>elX: {state.elementX}, elY: {state.elementY}</p>
    </div>
  )
}
          `.trim(),
        },
      ],
      props: [],
    },
  },
  {
    slug: "use-scroll-progress",
    title: "useScrollProgress",
    description: "A hook that tracks vertical scroll progress.",
    data: {
      title: "useScrollProgress",
      description: "Get the scroll progress of the window or a container as a value between 0 and 1.",
      examples: [
        {
          title: "Page Scroll Progress",
          preview: HookDemos.UseScrollProgressDemo,
          code: `
import { useScrollProgress } from "@unicorn-ui/ui"

export function UseScrollProgressDemo() {
  const progress = useScrollProgress()
  
  return (
    <div className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-100" style={{ width: \`\${progress * 100}%\` }} />
  )
}
          `.trim(),
        },
      ],
      props: [],
    },
  },
  {
    slug: "use-announcer",
    title: "useAnnouncer",
    description: "A hook to announce messages to screen readers.",
    data: {
      title: "useAnnouncer",
      description: "Accessibility helper to trigger screen reader announcements.",
      examples: [
        {
          title: "Trigger Announcement",
          preview: HookDemos.UseAnnouncerDemo,
          code: `
import { useAnnouncer } from "@unicorn-ui/ui"

export function UseAnnouncerDemo() {
  const { announce } = useAnnouncer()
  
  return (
    <button onClick={() => announce("Operation successful!")}>
      Click to announce
    </button>
  )
}
          `.trim(),
        },
      ],
      props: [],
    },
  }
]
