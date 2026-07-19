import { useListProjects, useListGithubRepos, useListBlogPosts } from "@workspace/api-client-react"
import { ArrowRight, Code2, MonitorPlay, TerminalSquare, ShieldAlert } from "lucide-react"
import { Link } from "wouter"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useListProjects()
  const { data: repos, isLoading: reposLoading } = useListGithubRepos()
  const { data: posts, isLoading: postsLoading } = useListBlogPosts()

  const featuredProjects = projects?.filter(p => p.featured).slice(0, 2) || []
  const recentPosts = posts?.filter(p => p.published).slice(0, 3) || []

  return (
    <div className="space-y-24 pb-20 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="space-y-8 pt-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            System Online // Accepting new challenges
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase leading-[1.1]">
            Engineering <br/>
            <span className="text-muted-foreground">Interfaces</span> & <br/>
            <span className="text-primary">Systems.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
            I build robust web applications, teach modern development paradigms, and explore the intersection of clean architecture and cybersecurity.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button asChild size="lg" className="rounded-none h-12 px-8 font-mono tracking-wide uppercase">
            <Link href="/projects">Explore Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-none h-12 px-8 font-mono tracking-wide uppercase border-muted-foreground/30 hover:border-primary">
            <Link href="/contact">Initiate Contact</Link>
          </Button>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="space-y-8 relative">
        <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-border hidden md:block" />
        <h2 className="text-sm font-mono tracking-widest text-muted-foreground uppercase flex items-center gap-4">
          <span>01</span>
          <span className="h-[1px] flex-1 bg-border" />
          <span>Core Domains</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: TerminalSquare, title: "Full-Stack Dev", desc: "Building scalable web systems with React, Node, and deep architectural intent." },
            { icon: MonitorPlay, title: "Technical Training", desc: "Distilling complex computer science concepts into actionable paradigms for students." },
            { icon: ShieldAlert, title: "Cybersecurity", desc: "Approaching development with a security-first mindset and threat modeling." }
          ].map((domain, i) => (
            <Card key={i} className="bg-transparent border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <domain.icon className="w-8 h-8 text-primary" />
                <h3 className="font-bold tracking-tight text-lg">{domain.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{domain.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8 relative">
        <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-border hidden md:block" />
        <h2 className="text-sm font-mono tracking-widest text-muted-foreground uppercase flex items-center gap-4">
          <span>02</span>
          <span className="h-[1px] flex-1 bg-border" />
          <span>Select Work</span>
        </h2>

        {projectsLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            <Skeleton className="h-[400px]" />
            <Skeleton className="h-[400px]" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map(project => (
              <Link key={project.id} href={`/projects/${project.slug}`} className="group block space-y-4">
                <div className="aspect-[4/3] bg-card border border-border relative overflow-hidden flex items-center justify-center p-8">
                  {/* Pseudo-image placeholder since we don't have real images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
                  <Code2 className="w-16 h-16 text-muted-foreground/30 group-hover:text-primary transition-colors duration-500 z-10" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background/90 to-transparent z-0" />
                  
                  <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-mono text-primary flex items-center gap-2 uppercase">
                      View Protocol <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.tagline}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 3).map(tech => (
                      <Badge key={tech} variant="secondary" className="text-[10px] font-mono rounded-none uppercase bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className="pt-4 flex justify-end">
          <Link href="/projects" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 uppercase">
            All Systems <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Latest Logs */}
      <section className="space-y-8 relative">
        <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-border hidden md:block" />
        <h2 className="text-sm font-mono tracking-widest text-muted-foreground uppercase flex items-center gap-4">
          <span>03</span>
          <span className="h-[1px] flex-1 bg-border" />
          <span>Recent Logs</span>
        </h2>

        {postsLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
          </div>
        ) : (
          <div className="space-y-0 border-y border-border">
            {recentPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block group border-b border-border last:border-0 p-6 hover:bg-card/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-2xl">
                    <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                    <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}</span>
                    <span className="px-2 py-1 bg-secondary">{post.readingTime}m read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
