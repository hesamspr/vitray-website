export function PostsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col rounded-2xl border border-border/60 bg-card overflow-hidden animate-pulse"
        >
          <div className="aspect-[16/9] bg-muted" />
          <div className="flex flex-col p-5 space-y-3">
            <div className="h-3 w-1/3 bg-muted rounded-full" />
            <div className="h-4 w-full bg-muted rounded-full" />
            <div className="h-4 w-4/5 bg-muted rounded-full" />
            <div className="h-3 w-2/3 bg-muted rounded-full" />
            <div className="h-3 w-1/4 bg-muted rounded-full mt-2" />
          </div>
        </div>
      ))}
    </div>
  )
}
