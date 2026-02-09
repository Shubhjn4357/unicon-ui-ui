import { Card, Skeleton } from "@unicorn-ui/ui"

export function ThemeGeneratorSkeleton() {
  return (
    <div className="relative min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Skeleton className="h-12 w-96" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Editor Panel */}
          <Card className="p-6 space-y-6">
            <Skeleton className="h-8 w-48" />
            
            {/* Color Pickers */}
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <div className="flex gap-2">
                    <Skeleton className="h-10 w-10" variant="circular" />
                    <Skeleton className="h-10 flex-1" variant="rounded" />
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="space-y-4 pt-4 border-t">
              <Skeleton className="h-6 w-40" />
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-20" variant="rounded" />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Skeleton className="h-10 flex-1" variant="rounded" />
              <Skeleton className="h-10 flex-1" variant="rounded" />
            </div>
          </Card>

          {/* Preview Panel */}
          <Card className="p-6 space-y-6">
            <Skeleton className="h-8 w-32" />
            
            {/* Component Previews */}
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="p-4">
                  <Skeleton className="h-24 w-full" variant="rounded" />
                </Card>
              ))}
            </div>
          </Card>
        </div>

        {/* Export Section */}
        <Card className="p-6">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-32 w-full" variant="rounded" />
        </Card>
      </div>
    </div>
  )
}
