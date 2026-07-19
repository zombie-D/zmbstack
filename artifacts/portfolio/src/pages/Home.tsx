import { useListProjects } from "@workspace/api-client-react"
import { ArrowUpRight, Calendar, Grid, GraduationCap, Users, ArrowRight } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useListProjects()

  const topProjects = projects?.slice(0, 3) || []

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="sticky top-0 md:top-0 z-30 flex items-center justify-between px-6 py-4 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">FORMATEUR & DÉVELOPPEUR WEB</span>
        </div>
        <Button asChild variant="outline" size="sm" className="h-8 text-[11px] font-bold uppercase tracking-wider border-border hover:bg-border/50">
          <Link href="/contact" className="flex items-center gap-1.5">
            ME CONTACTER <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row flex-1 relative border-b border-border">
        {/* Left Text Content */}
        <div className="flex-1 p-6 md:p-12 lg:p-20 flex flex-col justify-center">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-foreground">Je conçois des solutions</span><br/>
            <span className="text-foreground">digitales. </span>
            <span className="text-primary">Je transmets</span>
            <span className="text-foreground"> une</span><br/>
            <span className="text-foreground">expertise. </span>
            <span className="text-primary">J'inspire</span>
            <span className="text-foreground"> l'avenir.</span>
          </h1>
          
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[540px] mb-10">
            Développeur passionné spécialisé dans la création d'applications web performantes et formateur engagé dans l'accompagnement des apprenants vers l'excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-xs font-bold uppercase tracking-wider">
              <Link href="/projects" className="flex items-center gap-2">
                DÉCOUVRIR MES PROJETS <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-xs font-bold uppercase tracking-wider border-muted-foreground/30 hover:bg-border/50">
              <Link href="/contact" className="flex items-center gap-2">
                ME CONTACTER <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Photo */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative bg-card flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10 hidden md:block w-32" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 md:hidden h-32 bottom-0 top-auto" />
          <img 
            src="/hero-photo.jpg" 
            alt="Portrait ZMB Stack" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-b border-border bg-card">
        {[
          { icon: Calendar, stat: "+3", subtitle1: "Années", subtitle2: "d'expérience" },
          { icon: Grid, stat: "10+", subtitle1: "Projets", subtitle2: "réalisés" },
          { icon: GraduationCap, stat: "Formateur", subtitle1: "Développement", subtitle2: "Web" },
          { icon: Users, stat: "Accompagnement", subtitle1: "Étudiants &", subtitle2: "Apprenants" }
        ].map((item, i) => (
          <div key={i} className="p-6 md:p-8 flex flex-col items-start gap-4 border-r border-border last:border-r-0 border-b md:border-b-0">
            <item.icon className="w-6 h-6 text-primary" />
            <div>
              <div className="text-xl md:text-2xl font-bold text-foreground mb-1">{item.stat}</div>
              <div className="text-xs text-muted-foreground leading-tight">
                {item.subtitle1}<br/>{item.subtitle2}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="p-6 md:p-12 lg:p-20">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <h2 className="text-[12px] font-bold text-foreground uppercase tracking-widest">MES PROJETS RÉCENTS</h2>
          </div>
          <Link href="/projects" className="text-[11px] font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 uppercase tracking-wider">
            VOIR TOUS LES PROJETS <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {projectsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
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
            {topProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.slug}`} className="group flex flex-col bg-card border border-border transition-colors hover:border-primary/50">
                <div className="aspect-[16/10] relative overflow-hidden bg-background/50 border-b border-border flex items-center justify-center">
                  {/* Subtle placeholder since we don't have real screenshots */}
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
      </section>
    </div>
  )
}
