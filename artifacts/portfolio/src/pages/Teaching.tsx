import { BookOpen, Users, Award } from "lucide-react"

export default function Teaching() {
  return (
    <div className="p-6 md:p-12 lg:p-20 max-w-5xl mx-auto">
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">PÉDAGOGIE</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">ENSEIGNEMENT</h1>
        <p className="text-[15px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Partager le savoir est au cœur de ma démarche. J'accompagne les futurs développeurs dans leur apprentissage avec une approche pragmatique et orientée projet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card border border-border p-8 text-center">
          <Users className="w-8 h-8 text-primary mx-auto mb-4" />
          <div className="text-3xl font-bold text-foreground mb-2">500+</div>
          <div className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Apprenants accompagnés</div>
        </div>
        <div className="bg-card border border-border p-8 text-center">
          <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" />
          <div className="text-3xl font-bold text-foreground mb-2">1200h</div>
          <div className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Heures de formation</div>
        </div>
        <div className="bg-card border border-border p-8 text-center">
          <Award className="w-8 h-8 text-primary mx-auto mb-4" />
          <div className="text-3xl font-bold text-foreground mb-2">95%</div>
          <div className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Taux de réussite</div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-sm font-bold tracking-widest uppercase text-foreground border-b border-border pb-4 mb-8">Modules enseignés</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border p-6 hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-bold text-foreground mb-3">Fondamentaux du Web</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">HTML5, CSS3, JavaScript moderne (ES6+). Création d'interfaces responsives et accessibles.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-card text-muted-foreground border border-border">Niveau 1</span>
            </div>
          </div>
          
          <div className="border border-border p-6 hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-bold text-foreground mb-3">Écosystème React</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">Composants, Hooks, State management, Next.js et bonnes pratiques d'architecture front-end.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-card text-muted-foreground border border-border">Niveau 2</span>
            </div>
          </div>

          <div className="border border-border p-6 hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-bold text-foreground mb-3">Backend Node.js</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">API REST, Express, bases de données relationnelles et NoSQL, authentification et sécurité.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-card text-muted-foreground border border-border">Niveau 2</span>
            </div>
          </div>

          <div className="border border-border p-6 hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-bold text-foreground mb-3">Architecture Full-Stack</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">Conception d'applications complètes, CI/CD, déploiement Docker, tests automatisés.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-card text-muted-foreground border border-border">Niveau 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
