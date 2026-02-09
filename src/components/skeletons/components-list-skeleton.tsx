import { Badge, Card, Skeleton } from "@unicorn-ui/ui"

export function ComponentsListSkeleton() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero */}
      <section className="container py-24 space-y-8">
        <div className="max-w-3xl space-y-4">
          <Skeleton className="h-7 w-40" variant="rounded" />
          <Skeleton className="h-14 w-96" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>

        {/* Search */}
        <div className="relative max-w-2xl">
          <Skeleton className="h-12 w-full" variant="rounded" />
        </div>
      </section>

      {/* Components Grid */}
      <section className="container pb-24 space-y-16">
        {Array.from({ length: 3 }).map((_, categoryIdx) => (
          <div key={categoryIdx} className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Skeleton className="h-10 w-48" />
              </div>
              <Skeleton className="h-6 w-12" variant="rounded" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="p-6 h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-4 w-4" variant="circular" />
                    </div>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <Card className="p-12 text-center space-y-6">
          <Skeleton className="h-10 w-96 mx-auto" />
          <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
          <div className="flex items-center justify-center gap-4">
            <Skeleton className="h-12 w-32" variant="rounded" />
            <Skeleton className="h-12 w-48" variant="rounded" />
          </div>
        </Card>
      </section>
    </div>
  )
}
