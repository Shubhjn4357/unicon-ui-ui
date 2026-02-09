import { ComponentPageSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const HomePageContent = dynamic(() => import("@/content/home-content").then((mod) => ({ default: mod.HomePageContent })), {
  loading: () => <ComponentPageSkeleton />,
  ssr: true,
})

export default function HomePage() {
  return <HomePageContent />
}
