import { useGetProject, getGetProjectQueryKey } from "@workspace/api-client-react"
import { useLocation, useParams } from "wouter"
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectDetail() {
  const { slug } = useParams()
  const [_, setLocation] = useLocation()
  
  const { data: project, isLoading, error } = useGetProject(slug || "", {
    query: {
      enabled: !!slug,
      queryKey: getGetProjectQueryKey(slug || "")
    }
  })

  if (error) {
    return (
      <div className="py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">Record Not Found</h1>
        <p className="text-muted-foreground">The requested project data is unavailable.</p>
        <Button onClick={() => setLocation('/projects')} variant="outline" className="rounded-none font-mono uppercase text-xs">
          Return to Catalog
        </Button>
      </div>
    )
  }

  if (isLoading || !project) {
    return (
      <div className="space-y-12 animate-in fade-in">
        <div className="space-y-4">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-16 w-3/4" />
          <Skeleton className="h-8 w-1/2" />
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
          <div className="space-y-8">
            <Skeleton className="h-48 w-full" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-500">
      {/* Header */}
      <header className="space-y-6">
        <button 
          onClick={() => setLocation('/projects')}
          className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Catalog
        </button>
        
        <div className="space-y-4 border-b border-border pb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase">{project.name}</h1>
            <span className="text-xs font-mono text-primary border border-primary/20 bg-primary/10 px-2 py-1 uppercase hidden sm:inline-block">
              {project.status}
            </span>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>
      </header>

      <div className="grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_350px] gap-12 lg:gap-24 relative">
        {/* Main Content */}
        <div className="space-y-16">
          <section className="space-y-4">
            <h2 className="text-sm font-mono tracking-widest text-muted-foreground uppercase border-b border-border pb-2">01 // The Problem</h2>
            <div className="prose prose-invert max-w-none text-foreground prose-p:leading-relaxed prose-p:font-light">
              <p>{project.problem}</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-sm font-mono tracking-widest text-muted-foreground uppercase border-b border-border pb-2">02 // Implementation</h2>
            <div className="prose prose-invert max-w-none text-foreground prose-p:leading-relaxed prose-p:font-light">
              <p>{project.description}</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {project.features.map((feature, i) => (
                <div key={i} className="p-4 border border-border bg-card/50">
                  <span className="text-xs font-mono text-primary block mb-2">F_{String(i+1).padStart(2, '0')}</span>
                  <p className="text-sm font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {project.architecture && (
            <section className="space-y-4">
              <h2 className="text-sm font-mono tracking-widest text-muted-foreground uppercase border-b border-border pb-2">03 // Architecture</h2>
              <div className="prose prose-invert max-w-none text-foreground prose-p:leading-relaxed prose-p:font-light bg-secondary/30 p-6 border border-border border-dashed">
                <p className="font-mono text-sm">{project.architecture}</p>
              </div>
            </section>
          )}

          {project.challenges.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-sm font-mono tracking-widest text-muted-foreground uppercase border-b border-border pb-2">04 // Challenges & Resolution</h2>
              <div className="space-y-8">
                {project.challenges.map((challenge, i) => (
                  <div key={i} className="space-y-3">
                    <h3 className="font-bold text-lg">{challenge.title}</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <span className="text-xs font-mono text-muted-foreground block mb-1">ISSUE</span>
                        <p className="text-sm font-light text-muted-foreground">{challenge.description}</p>
                      </div>
                      <div>
                        <span className="text-xs font-mono text-primary block mb-1">RESOLUTION</span>
                        <p className="text-sm font-light">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Metadata */}
        <aside className="space-y-10">
          <div className="space-y-6 p-6 border border-border bg-card sticky top-24">
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground uppercase">Role</span>
              <p className="font-medium">{project.role}</p>
            </div>
            
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground uppercase">Timeline</span>
              <p className="font-medium">{project.duration}</p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground uppercase">Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="secondary" className="rounded-none bg-background border-border text-[10px] uppercase font-mono">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {(project.githubRepo || project.videoUrl) && (
              <div className="pt-6 border-t border-border space-y-3">
                {project.githubRepo && (
                  <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 border border-border hover:border-primary text-sm font-mono transition-colors group">
                    <span className="flex items-center gap-2"><Github className="w-4 h-4" /> Source</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  </a>
                )}
                {project.videoUrl && (
                  <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 border border-border hover:border-primary text-sm font-mono transition-colors group bg-primary/5 text-primary">
                    <span className="flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
