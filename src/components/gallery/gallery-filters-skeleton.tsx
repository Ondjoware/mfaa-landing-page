export default function GalleryFiltersSkeleton() {
  return (
    <section className="bg-white border-b border-neutral-200 sticky top-20 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search skeleton */}
          <div className="relative flex-1 max-w-md">
            <div className="w-full h-10 bg-neutral-200 rounded-lg animate-pulse" />
          </div>

          {/* View mode toggle skeleton */}
          <div className="flex items-center gap-2 bg-neutral-100 rounded-lg p-1">
            <div className="size-9 bg-neutral-200 rounded animate-pulse" />
            <div className="size-9 bg-neutral-200 rounded animate-pulse" />
          </div>
        </div>

        {/* Category filters skeleton */}
        <div className="flex flex-wrap gap-2 mt-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-9 bg-neutral-200 rounded-full animate-pulse"
              style={{ width: `${60 + i * 15}px` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
