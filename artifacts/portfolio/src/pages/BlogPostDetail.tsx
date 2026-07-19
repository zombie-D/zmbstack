import { useGetBlogPost, getGetBlogPostQueryKey } from "@workspace/api-client-react"
import { useLocation, useParams } from "wouter"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogPostDetail() {
  const { slug } = useParams()
  const [_, setLocation] = useLocation()
  
  const { data: post, isLoading, error } = useGetBlogPost(slug || "", {
    query: {
      enabled: !!slug,
      queryKey: getGetBlogPostQueryKey(slug || "")
    }
  })

  if (error || (post && !post.published)) {
    return (
      <div className="py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">Record Not Found</h1>
        <p className="text-muted-foreground">The requested log entry is unavailable or restricted.</p>
        <Button onClick={() => setLocation('/blog')} variant="outline" className="rounded-none font-mono uppercase text-xs">
          Return to Logs
        </Button>
      </div>
    )
  }

  if (isLoading || !post) {
    return (
      <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in">
        <div className="space-y-4 border-b border-border pb-8">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-3/4" />
        </div>
        <div className="space-y-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-32 w-full mt-8" />
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto pb-20 animate-in fade-in duration-500">
      <header className="space-y-8 mb-12 border-b border-border pb-12">
        <button 
          onClick={() => setLocation('/blog')}
          className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Logs
        </button>
        
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary/70" />
              {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Draft'}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary/70" />
              {post.readingTime} MIN READ
            </div>
          </div>
        </div>
      </header>

      <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-none">
        {/* Render markdown content. In a real app we'd use react-markdown, 
            but using dangerouslySetInnerHTML for simplicity if HTML, or plain text if plain */}
        <div className="whitespace-pre-wrap font-light leading-relaxed text-foreground/90">
          {post.content}
        </div>
      </article>

      <footer className="mt-16 pt-8 border-t border-border border-dashed">
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-mono text-muted-foreground uppercase flex items-center mr-2">Tags:</span>
          {post.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="rounded-none bg-secondary/30 border-border text-[10px] uppercase font-mono">
              {tag}
            </Badge>
          ))}
        </div>
      </footer>
    </div>
  )
}
