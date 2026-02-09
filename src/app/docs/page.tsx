import { DocsPageSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const DocsPageContent = dynamic(() => import("@/content/docs-content").then((mod) => ({ default: mod.DocsPageContent })), {
  loading: () => <DocsPageSkeleton />,
  ssr: true,
})

export default function DocsPage() {
  return <DocsPageContent />
}
