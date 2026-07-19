import { Briefcase, GraduationCap, Calendar } from "lucide-react"

export default function Experiences() {
  const experiences = [
    {
      type: "work",
      title: "Formateur en Développement Web",
      company: "Tech Institute",
      date: "2023 - Présent",
      description: "Accompagnement d'étudiants dans leur parcours d'apprentissage du développement web. Animation de cours sur React, Node.js et l'architecture web. Création de supports pédagogiques et évaluation des projets finaux."
    },
    {
      type: "work",
      title: "Développeur Full-Stack Freelance",
      company: "Indépendant",
      date: "2021 - Présent",
      description: "Conception et développement d'applications web sur mesure pour divers clients. Gestion complète du cycle de vie des projets : recueil des besoins, architecture, développement, déploiement et maintenance."
    },
    {
      type: "work",
      title: "Développeur Front-End",
      company: "Digital Agency Paris",
      date: "2020 - 2021",
      description: "Développement d'interfaces utilisateur interactives avec React et Vue.js. Intégration de maquettes pixel-perfect et optimisation des performances front-end. Collaboration avec les équipes UX/UI."
    },
    {
      type: "education",
      title: "Master en Ingénierie Logicielle",
      company: "Université Tech",
      date: "2018 - 2020",
      description: "Spécialisation en architecture logicielle, bases de données avancées et sécurité informatique."
    }
  ]

  return (
    <div className="p-6 md:p-12 lg:p-20 max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">PARCOURS</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">EXPÉRIENCES</h1>
        <p className="text-[15px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Mon évolution professionnelle à travers des projets concrets, de la formation et une passion constante pour le développement web.
        </p>
      </div>

      <div className="relative border-l border-border ml-4 md:ml-0 md:pl-8 space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 md:pl-0">
            {/* Timeline dot */}
            <div className="absolute -left-[41px] md:-left-[41px] top-1 w-5 h-5 rounded-full bg-card border-2 border-primary flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>

            <div className="bg-card border border-border p-6 md:p-8 hover:border-primary/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {exp.type === 'work' ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary" />
                    )}
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-background px-3 py-1.5 border border-border self-start md:self-auto shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.date}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
