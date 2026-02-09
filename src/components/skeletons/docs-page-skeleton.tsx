import { Badge, Card, Skeleton } from "@unicorn-ui/ui"

export function DocsPageSkeleton() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero */}
      <section className="container py-24 space-y-8">
        <div className="max-w-3xl space-y-4">
          <Skeleton className="h-7 w-40" variant="rounded" />
          <Skeleton className="h-14 w-96" />
          <Skeleton className="h-6 w-full max-w-2xl" />
          <Skeleton className="h-6 w-full max-w-xl" />
        </div>
      </section>

      {/* Quick Links */}
      <section className="container pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="p-8 h-full">
              <div className="space-y-4">
                <Skeleton className="h-12 w-12" variant="rounded" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Installation Preview */}
      <section className="container pb-24">
        <div className="space-y-8">
          <div className="space-y-2">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-5 w-64" />
          </div>

          <Card className="p-8 space-y-6">
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-6 w-56" />
                  <Skeleton className="h-16 w-full" variant="rounded" />
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <Skeleton className="h-10 w-48" variant="rounded" />
              <Skeleton className="h-10 w-40" variant="rounded" />
            </div>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="container pb-24">
        <div className="space-y-8">
          <div className="space-y-2">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-5 w-80" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="p-6 space-y-3">
                <Skeleton className="h-10 w-10" variant="rounded" />
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
