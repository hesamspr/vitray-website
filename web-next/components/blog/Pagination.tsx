import Link from 'next/link'

export const BLOG_PAGE_SIZE = 12

export function blogPageHref(page: number): string {
  return page <= 1 ? '/blog' : `/blog/page/${page}`
}

const faNumber = (n: number) => n.toLocaleString('fa-IR')

const baseClass = 'inline-flex h-9 min-w-9 items-center justify-center rounded-lg border px-3 text-sm transition-colors'

// Plain crawlable links (not client-side state) — every post must be reachable
// from /blog through real <a href>s, otherwise older posts end up orphaned.
export function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav aria-label="صفحه‌بندی مقالات" className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {page > 1 && (
        <Link href={blogPageHref(page - 1)} rel="prev" className={`${baseClass} border-border/60 text-muted-foreground hover:border-border hover:text-foreground`}>
          قبلی
        </Link>
      )}
      {pages.map((n) =>
        n === page ? (
          <span key={n} aria-current="page" className={`${baseClass} border-primary bg-primary/10 text-foreground`}>
            {faNumber(n)}
          </span>
        ) : (
          <Link key={n} href={blogPageHref(n)} className={`${baseClass} border-border/60 text-muted-foreground hover:border-border hover:text-foreground`}>
            {faNumber(n)}
          </Link>
        )
      )}
      {page < totalPages && (
        <Link href={blogPageHref(page + 1)} rel="next" className={`${baseClass} border-border/60 text-muted-foreground hover:border-border hover:text-foreground`}>
          بعدی
        </Link>
      )}
    </nav>
  )
}
