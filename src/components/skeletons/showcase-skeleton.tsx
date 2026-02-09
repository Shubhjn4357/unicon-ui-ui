import { Card, Skeleton } from "@unicorn-ui/ui"

export function ShowcaseSkeleton() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero */}
      <section className="container py-24 space-y-8">
        <div className="max-w-3xl space-y-4">
          <Skeleton className="h-7 w-40" variant="rounded" />
          <Skeleton className="h-14 w-96" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-24" variant="rounded" />
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-64 w-full" />
              <div className="p-6 space-y-3">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex gap-2 pt-2">
                  <Skeleton className="h-6 w-16" variant="rounded" />
                  <Skeleton className="h-6 w-20" variant="rounded" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Load More */}
      <section className="container pb-24 text-center">
        <Skeleton className="h-12 w-40 mx-auto" variant="rounded" />
      </section>
    </div>
  )
}
