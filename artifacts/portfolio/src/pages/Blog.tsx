import { useListBlogPosts } from "@workspace/api-client-react"
import { Link } from "wouter"
import { ArrowRight, Calendar } from "lucide-react"

export default function Blog() {
  const { data: posts, isLoading } = useListBlogPosts()

  return (
    <div className="p-6 md:p-12 lg:p-20 max-w-4xl mx-auto">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">ARTICLES</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">BLOG</h1>
        <p className="text-[15px] text-muted-foreground max-w-2xl leading-relaxed">
          Réflexions, tutoriels et retours d'expérience sur le développement web, l'architecture logicielle et l'enseignement.
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="border border-border bg-card p-6 md:p-8 animate-pulse">
              <div className="h-4 bg-border/50 w-24 mb-4" />
              <div className="h-6 bg-border/50 w-3/4 mb-3" />
              <div className="h-4 bg-border/50 w-full mb-6" />
              <div className="h-3 bg-border/50 w-32" />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {posts?.filter(p => p.published).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block border border-border bg-card p-6 md:p-8 group hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('fr-FR') : 'Récent'}
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{post.readingTime} min de lecture</span>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="text-[11px] font-bold text-primary tracking-wider uppercase flex items-center">
                  LIRE <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
