import { Badge, Card, Skeleton } from "@unicorn-ui/ui"

export function HomePageSkeleton() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 text-center">
        <Skeleton className="mb-4 h-7 w-64" variant="rounded" />
        <Skeleton className="mb-6 h-24 w-full max-w-4xl" variant="rounded" />
        <Skeleton className="mb-8 h-16 w-full max-w-2xl" variant="rounded" />
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Skeleton className="h-12 w-40" variant="rounded" />
          <Skeleton className="h-12 w-48" variant="rounded" />
        </div>

        {/* Stats Grid */}
        <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="relative overflow-hidden p-6 text-center">
              <Skeleton className="h-10 w-16 mx-auto mb-2" />
              <Skeleton className="h-4 w-24 mx-auto" />
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-[500px] mx-auto" />
          </div>

          {/* Bento Grid */}
          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className={`p-8 ${i === 0 || i === 3 ? 'md:col-span-1' : 'md:col-span-2'}`}>
                <Skeleton className="h-12 w-12 mb-4" variant="circular" />
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-full" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Styles Section */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Skeleton className="h-12 w-80 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-12 w-12" variant="circular" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-32 mb-2" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card className="mx-auto max-w-md p-8 text-center">
              <Skeleton className="h-8 w-48 mx-auto mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <Skeleton className="h-10 w-40 mx-auto" variant="rounded" />
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto mb-8" />

          <Card className="relative overflow-hidden p-8">
            <Skeleton className="h-16 w-full mb-6" variant="rounded" />
            <div className="flex flex-wrap justify-center gap-4">
              <Skeleton className="h-12 w-48" variant="rounded" />
              <Skeleton className="h-12 w-40" variant="rounded" />
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
