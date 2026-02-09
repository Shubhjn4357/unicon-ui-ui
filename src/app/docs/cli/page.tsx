import { ComponentPageSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const CLIPageContent = dynamic(() => import("@/content/cli-content").then((mod) => ({ default: mod.CLIPageContent })), {
  loading: () => <ComponentPageSkeleton />,
  ssr: true,
})

export default function CLIPage() {
  return <CLIPageContent />
}
