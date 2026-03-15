export default function ArticlesSectionSkeleton() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="h-10 w-72 bg-neutral-200 rounded-lg animate-pulse mx-auto mb-4" />
          <div className="h-6 w-96 bg-neutral-200 rounded-lg animate-pulse mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-56 bg-neutral-200 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-4 w-28 bg-neutral-200 rounded animate-pulse" />
                <div className="h-6 w-full bg-neutral-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse" />
                <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
