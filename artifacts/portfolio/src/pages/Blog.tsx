import { useListBlogPosts } from "@workspace/api-client-react"
import { Link } from "wouter"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Calendar, Clock } from "lucide-react"

export default function Blog() {
  const { data: posts, isLoading } = useListBlogPosts()
  
  // Filter for published posts only and sort by date desc
  const publishedPosts = posts
    ?.filter(p => p.published)
    .sort((a, b) => {
      if (!a.publishedAt) return 1
      if (!b.publishedAt) return -1
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })

  return (
    <div className="space-y-12 pb-20 animate-in fade-in duration-500">
      <header className="space-y-4 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Log</h1>
        <p className="text-muted-foreground max-w-2xl font-light text-lg">
          Technical writings on engineering, security, and the realities of software development.
        </p>
      </header>

      {isLoading ? (
        <div className="space-y-6">
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
        </div>
      ) : (
        <div className="space-y-0">
          {publishedPosts?.map((post) => (
            <article key={post.id} className="group border-b border-border border-dashed last:border-0 py-8 first:pt-0">
              <div className="grid md:grid-cols-[1fr_250px] gap-8">
                <div className="space-y-3 order-2 md:order-1">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors inline-block pb-1 border-b border-transparent group-hover:border-primary/30">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-muted-foreground leading-relaxed font-light line-clamp-2 max-w-3xl">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="rounded-none border-border/50 text-[10px] uppercase font-mono text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs text-muted-foreground order-1 md:order-2 md:text-right pt-1 flex flex-row md:flex-col justify-between md:justify-start">
                  <div className="flex items-center md:justify-end gap-2 uppercase">
                    <Calendar className="w-3 h-3" />
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'Draft'}
                  </div>
                  <div className="flex items-center md:justify-end gap-2 uppercase">
                    <Clock className="w-3 h-3" />
                    {post.readingTime} MIN READ
                  </div>
                </div>
              </div>
            </article>
          ))}

          {(!publishedPosts || publishedPosts.length === 0) && (
            <div className="py-20 text-center text-muted-foreground font-mono uppercase text-sm">
              No transmission data available.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
