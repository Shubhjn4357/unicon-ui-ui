import { ShowcaseSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const ShowcasePageContent = dynamic(() => import("@/content/showcase-content").then((mod) => ({ default: mod.ShowcasePageContent })), {
  loading: () => <ShowcaseSkeleton />,
  ssr: true,
})

export const metadata = {
  title: "Showcase - Unicorn UI",
  description: "Beautiful applications built with Unicorn UI",
}

export default function ShowcasePage() {
  return <ShowcasePageContent />
}
