import { useGetProject } from "@workspace/api-client-react"
import { useParams, Link } from "wouter"
import { ArrowLeft, ArrowUpRight, Github, Globe } from "lucide-react"

export default function ProjectDetail() {
  const { slug } = useParams()
  const { data: project, isLoading } = useGetProject(slug || "")

  if (isLoading) {
    return <div className="p-12 text-center text-muted-foreground">Chargement...</div>
  }

  if (!project) {
    return <div className="p-12 text-center text-muted-foreground">Projet non trouvé.</div>
  }

  return (
    <div className="p-6 md:p-12 lg:p-20 max-w-5xl mx-auto">
      <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary mb-12">
        <ArrowLeft className="w-4 h-4" /> Retour aux projets
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">{project.name}</h1>
        <p className="text-xl text-muted-foreground">{project.tagline}</p>
      </div>

      <div className="aspect-[16/9] w-full bg-card border border-border mb-12 relative flex items-center justify-center overflow-hidden">
         {project.screenshots && project.screenshots.length > 0 ? (
             <img src={project.screenshots[0]} alt={project.name} className="w-full h-full object-cover" />
         ) : (
            <div className="text-muted-foreground/30 font-mono text-6xl font-bold tracking-tighter">
              {project.name.toUpperCase()}
            </div>
         )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-foreground border-b border-border pb-2">Le Projet</h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed whitespace-pre-wrap">{project.description}</p>
          </section>

          <section>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-foreground border-b border-border pb-2">Problématique</h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">{project.problem}</p>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-card border border-border p-6 space-y-6">
            <div>
              <h3 className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-2">Rôle</h3>
              <p className="text-sm text-foreground font-medium">{project.role}</p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-2">Durée</h3>
              <p className="text-sm text-foreground font-medium">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-background border border-border text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {project.githubRepo && (
              <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-card border border-border text-xs font-bold uppercase tracking-wider text-foreground hover:border-primary transition-colors">
                <Github className="w-4 h-4" /> Code Source
              </a>
            )}
            <a href="#" className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors">
                Voir en ligne <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
