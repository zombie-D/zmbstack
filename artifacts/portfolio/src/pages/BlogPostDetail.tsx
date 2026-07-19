import { useParams, Link } from "wouter"
import { useGetBlogPost } from "@workspace/api-client-react"
import { ArrowLeft, Calendar } from "lucide-react"

export default function BlogPostDetail() {
  const { slug } = useParams()
  const { data: post, isLoading } = useGetBlogPost(slug || "")

  if (isLoading) return <div className="p-12 text-center text-muted-foreground">Chargement...</div>
  if (!post) return <div className="p-12 text-center text-muted-foreground">Article non trouvé</div>

  return (
    <div className="p-6 md:p-12 lg:p-20 max-w-3xl mx-auto">
      <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary mb-12">
        <ArrowLeft className="w-4 h-4" /> Retour aux articles
      </Link>

      <div className="mb-12 border-b border-border pb-12">
        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('fr-FR') : 'Récent'}
          </span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{post.readingTime} min de lecture</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">{post.title}</h1>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase border border-border bg-card text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="prose prose-invert prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  )
}
