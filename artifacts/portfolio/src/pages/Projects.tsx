import { useListProjects } from "@workspace/api-client-react"
import { ArrowRight } from "lucide-react"
import { Link } from "wouter"

export default function Projects() {
  const { data: projects, isLoading: projectsLoading } = useListProjects()

  return (
    <div className="p-6 md:p-12 lg:p-20">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">PORTFOLIO</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">MES PROJETS</h1>
        <p className="text-[15px] text-muted-foreground max-w-2xl leading-relaxed">
          Une sélection de mes travaux récents, allant d'applications full-stack complexes à des expériences frontend interactives.
        </p>
      </div>

      {projectsLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="border border-border bg-card">
              <div className="aspect-[16/10] bg-border/50 animate-pulse" />
              <div className="p-6 space-y-4">
                <div className="h-5 bg-border/50 w-2/3 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-3 bg-border/50 w-full animate-pulse" />
                  <div className="h-3 bg-border/50 w-4/5 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className="group flex flex-col bg-card border border-border transition-colors hover:border-primary/50">
              <div className="aspect-[16/10] relative overflow-hidden bg-background/50 border-b border-border flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
                <div className="text-muted-foreground/30 font-mono text-4xl font-bold tracking-tighter mix-blend-overlay">
                  {project.name.substring(0, 2).toUpperCase()}
                </div>
                {project.screenshots && project.screenshots.length > 0 && (
                   <img src={project.screenshots[0]} alt={project.name} className="absolute inset-0 w-full h-full object-cover z-10" />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[16px] font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-[12px] text-muted-foreground line-clamp-2 mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase border border-border text-muted-foreground bg-background">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border mt-auto flex items-center text-[11px] font-bold text-primary tracking-wider uppercase">
                  VOIR LE PROJET <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
