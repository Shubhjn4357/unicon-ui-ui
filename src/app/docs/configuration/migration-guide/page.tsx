import { ComponentPageSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const MigrationGuidePageContent = dynamic(() => import("@/content/migration-guide-content").then((mod) => ({ default: mod.MigrationGuidePageContent })), {
  loading: () => <ComponentPageSkeleton />,
  ssr: true,
})

export default function MigrationGuidePage() {
  return <MigrationGuidePageContent />
}
