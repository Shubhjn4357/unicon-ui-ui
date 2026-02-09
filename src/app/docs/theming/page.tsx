import { ComponentPageSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const ThemingPageContent = dynamic(() => import("@/content/theming-content").then((mod) => ({ default: mod.ThemingPageContent })), {
  loading: () => <ComponentPageSkeleton />,
  ssr: true,
})

export default function ThemingPage() {
  return <ThemingPageContent />
}
