import { useListBlogPosts } from "@workspace/api-client-react"
import { Link } from "wouter"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { GlassSurface, FloatingCard } from "@/components/glass"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { staggerContainer, staggerItem } from "@/lib/animations"

export default function Blog() {
  const { data: posts, isLoading } = useListBlogPosts()
  const { ref: postsRef, controls: postsControls } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="p-4 sm:p-6 md:p-12 lg:p-20 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div 
        className="mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GlassSurface 
          blur="md" 
          tint="light" 
          border="subtle" 
          elevation={1}
          className="p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
              ARTICLES
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
            BLOG
          </h1>
          <p className="text-[13px] sm:text-[15px] text-muted-foreground max-w-2xl leading-relaxed">
            Réflexions, tutoriels et retours d'expérience sur le développement web, l'architecture logicielle et l'enseignement.
          </p>
        </GlassSurface>
      </motion.div>

      {isLoading ? (
        <div className="space-y-4 md:space-y-6">
          {[1, 2, 3].map(i => (
            <GlassSurface 
              key={i} 
              blur="md" 
              tint="light" 
              border="subtle" 
              elevation={1}
              className="p-4 sm:p-6 md:p-8"
            >
              <div className="h-4 bg-white/5 w-24 mb-4 animate-pulse rounded" />
              <div className="h-6 bg-white/5 w-3/4 mb-3 animate-pulse rounded" />
              <div className="h-4 bg-white/5 w-full mb-6 animate-pulse rounded" />
              <div className="h-3 bg-white/5 w-32 animate-pulse rounded" />
            </GlassSurface>
          ))}
        </div>
      ) : (
        <motion.div 
          ref={postsRef}
          className="space-y-4 md:space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate={postsControls}
        >
          {posts?.filter(p => p.published).map((post) => (
            <motion.div key={post.id} variants={staggerItem}>
              <Link href={`/blog/${post.slug}`}>
                <FloatingCard 
                  blur="md" 
                  tint="light" 
                  border="subtle" 
                  elevation={1}
                  enableFloat={true}
                  maxTilt={3}
                  className="p-4 sm:p-6 md:p-8"
                >
                  {/* Meta info - responsive */}
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[10px] sm:text-xs font-medium text-muted-foreground mb-3 md:mb-4">
                    <span className="flex items-center gap-1 md:gap-1.5">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('fr-FR') : 'Récent'}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{post.readingTime} min de lecture</span>
                  </div>
                  
                  {/* Title - responsive */}
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt - responsive */}
                  <p className="text-xs sm:text-[13px] md:text-[15px] text-muted-foreground leading-relaxed mb-4 md:mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Footer - responsive */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-muted-foreground bg-white/5 px-2 py-0.5 rounded-md border border-white/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Read more link */}
                    <div className="text-[10px] sm:text-[11px] font-bold text-primary tracking-wider uppercase flex items-center group">
                      LIRE 
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </FloatingCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
