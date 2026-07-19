import { Code2, Server, Wrench, Smartphone, Monitor, Database, GitBranch, Terminal } from "lucide-react"

export default function Competences() {
  const skillCategories = [
    {
      title: "FRONTEND",
      icon: Monitor,
      skills: ["React.js", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      title: "BACKEND",
      icon: Server,
      skills: ["Node.js", "Express", "NestJS", "Python", "Django", "PHP"]
    },
    {
      title: "BASE DE DONNÉES",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Prisma ORM"]
    },
    {
      title: "OUTILS & DÉPLOIEMENT",
      icon: Wrench,
      skills: ["Docker", "Vercel", "AWS", "Git/GitHub", "Linux", "CI/CD"]
    }
  ]

  return (
    <div className="p-6 md:p-12 lg:p-20 max-w-5xl">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">MON EXPERTISE</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">COMPÉTENCES</h1>
        <p className="text-[15px] text-muted-foreground max-w-2xl leading-relaxed">
          Un ensemble de technologies maîtrisées pour concevoir des applications web modernes, performantes et évolutives. De la conception de l'interface utilisateur à l'architecture backend complexe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, i) => (
          <div key={i} className="border border-border bg-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-background border border-border">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-sm font-bold tracking-widest uppercase">{category.title}</h2>
            </div>
            
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, j) => (
                <span key={j} className="px-3 py-1.5 text-xs font-medium text-foreground bg-background border border-border">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 border border-border bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2">Vous cherchez un profil spécifique ?</h3>
          <p className="text-sm text-muted-foreground">Je m'adapte rapidement aux nouvelles technologies et environnements techniques.</p>
        </div>
        <a href="/contact" className="px-6 py-3 bg-primary text-white text-xs font-bold uppercase tracking-wider shrink-0 hover:bg-primary/90 transition-colors">
          PARLONS DE VOTRE STACK
        </a>
      </div>
    </div>
  )
}
