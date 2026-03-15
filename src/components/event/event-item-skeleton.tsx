export default function EventItemSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md flex flex-col md:flex-row gap-6">
      <div className="shrink-0">
        <div className="bg-neutral-200 rounded-lg w-24 h-24 animate-pulse" />
      </div>
      <div className="flex-1 space-y-3">
        <div className="h-7 w-3/4 bg-neutral-200 rounded animate-pulse" />
        <div className="flex gap-4">
          <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-32 bg-neutral-200 rounded animate-pulse" />
        </div>
        <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-neutral-200 rounded animate-pulse" />
      </div>
      <div className="flex items-center">
        <div className="h-12 w-32 bg-neutral-200 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}
