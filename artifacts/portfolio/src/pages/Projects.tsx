import { useListProjects } from "@workspace/api-client-react"
import { Link } from "wouter"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowUpRight, GitFork } from "lucide-react"

export default function Projects() {
  const { data: projects, isLoading } = useListProjects()

  // Sort by order, then featured
  const sortedProjects = projects?.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  return (
    <div className="space-y-12 pb-20 animate-in fade-in duration-500">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Work Catalog</h1>
        <p className="text-muted-foreground max-w-2xl font-light text-lg">
          A registry of systems, interfaces, and architecture implemented over the years.
        </p>
      </header>

      {isLoading ? (
        <div className="space-y-8">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
      ) : (
        <div className="space-y-8">
          {sortedProjects?.map((project) => (
            <div key={project.id} className="group relative border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-8 flex-1 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold tracking-tight">{project.name}</h2>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono uppercase text-muted-foreground tracking-wider border border-border px-2 py-1 bg-background">
                          {project.status.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground font-light">{project.tagline}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="secondary" className="rounded-none bg-secondary/50 font-mono text-xs uppercase text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50 flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono text-muted-foreground">
                    <div><span className="text-foreground/50">ROLE:</span> {project.role}</div>
                    <div><span className="text-foreground/50">DUR:</span> {project.duration}</div>
                  </div>
                </div>

                <div className="md:w-64 lg:w-80 bg-secondary/20 p-6 md:p-8 border-t md:border-t-0 md:border-l border-border flex flex-col justify-center items-start md:items-end gap-4">
                  <Link href={`/projects/${project.slug}`} className="w-full text-left md:text-right text-sm font-mono text-primary hover:text-foreground transition-colors uppercase group-hover:tracking-widest duration-300 flex items-center md:justify-end gap-2">
                    <span>View Detail</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  {project.githubRepo && (
                    <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="w-full text-left md:text-right text-sm font-mono text-muted-foreground hover:text-foreground transition-colors flex items-center md:justify-end gap-2">
                      <GitFork className="w-4 h-4" /> Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {(!sortedProjects || sortedProjects.length === 0) && (
            <div className="py-20 text-center border border-dashed border-border text-muted-foreground font-mono uppercase text-sm">
              No records found.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
