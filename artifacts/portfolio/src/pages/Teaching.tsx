import { BookOpen, Users, Award, Code, Database, LayoutTemplate, Share2, Sparkles, Terminal, Target, Rocket, ShieldCheck, ArrowRight } from "lucide-react"
import { motion, Variants } from "framer-motion"

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { stiffness: 80, damping: 15 } }
};

export default function Teaching() {

  const stats = [
    { icon: Users, value: "80+", label: "Apprenants accompagnés" },
    { icon: BookOpen, value: "200h+", label: "Heures de mentoring" },
    { icon: Award, value: "95%", label: "Taux de satisfaction" },
  ];

  const approche = [
    { icon: Target, title: "100% Pratique", desc: "Fini la théorie interminable. On code dès la première heure sur des cas d'usage réels du marché." },
    { icon: Rocket, title: "Projets Concrets", desc: "Chaque concept appris se matérialise par un vrai projet que vous pouvez ajouter à votre portfolio." },
    { icon: ShieldCheck, title: "Suivi Continu", desc: "Correction de code, conseils d'architecture et bonnes pratiques en continu pour écrire du code propre." }
  ];

  const modules = [
    {
      title: "Architecture Frontend",
      description: "Maîtrise fondamentale des standards du web (HTML5 & CSS3). De la sémantique de base aux grilles complexes, intégrez le framework Bootstrap pour prototyper et déployer rapidement des interfaces esthétiques et 100% responsives.",
      level: "Niveau 1",
      icon: LayoutTemplate,
      color: "text-orange-400",
      glow: "group-hover:shadow-[0_0_40px_rgba(251,146,60,0.15)]",
      bgHover: "group-hover:bg-[rgba(251,146,60,0.03)]"
    },
    {
      title: "Interactivité & JavaScript",
      description: "Donnez vie à vos pages web web. Manipulation du DOM (Document Object Model), gestion asynchrone des événements et développement d'une véritable logique algorithmique sans dépendre de bibliothèques lourdes.",
      level: "Niveau 2",
      icon: Code,
      color: "text-cyan-400",
      glow: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
      bgHover: "group-hover:bg-[rgba(34,211,238,0.03)]"
    },
    {
      title: "Développement Backend",
      description: "Découvrez l'envers du décor. Apprenez à concevoir une véritable logique serveur en PHP, à sécuriser vos applications, et à modéliser des bases de données relationnelles performantes via MySQL et le langage SQL.",
      level: "Niveau 3",
      icon: Database,
      color: "text-emerald-400",
      glow: "group-hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]",
      bgHover: "group-hover:bg-[rgba(52,211,153,0.03)]"
    },
    {
      title: "Logique Serveur & Outils",
      description: "Acquisition des bases du terminal Linux pour gagner en autonomie. Compréhension indispensable du dialogue client-serveur (HTTP, cURL) et sensibilisation aux bonnes pratiques de sécurité web.",
      level: "Niveau 3",
      icon: Terminal,
      color: "text-purple-400",
      glow: "group-hover:shadow-[0_0_40px_rgba(192,132,252,0.15)]",
      bgHover: "group-hover:bg-[rgba(192,132,252,0.03)]"
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden pb-20">

      {/* --- BACKGROUND GLOWS INTENSES --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--accent-blue)] rounded-full blur-[150px] opacity-[0.07] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

      <div className="px-6 lg:px-12 pt-16 lg:pt-24 max-w-[1200px] mx-auto relative z-10">

        {/* --- HERO SECTION --- */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-full px-5 py-2.5 text-[0.75rem] font-bold uppercase mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[var(--accent-blue)]" />
            <span className="text-white tracking-widest">Pédagogie & Mentoring</span>
          </div>

          <h1 className="text-[2.8rem] sm:text-[4rem] lg:text-[5rem] font-[800] text-white leading-[1.05] mb-8 tracking-[-0.02em]">
            Transformer le <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-blue)] to-cyan-300">potentiel</span> en <br className="hidden md:block" />
            expertise technique.
          </h1>

          <p className="text-[1rem] md:text-[1.2rem] text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Un accompagnement sur-mesure pour maîtriser le développement web de A à Z. Fini les tutoriels théoriques interminables, on construit de réelles applications.
          </p>
        </motion.div>

        {/* --- STATS BANNER OBER-PREMIUM --- */}
        <motion.div
          className="relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[2.5rem] backdrop-blur-lg mb-24 md:mb-32 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Ligne lumineuse en haut */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-transparent opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.06)]">
            {stats.map((stat, index) => (
              <div key={index} className="p-8 lg:p-12 flex flex-col items-center justify-center text-center group hover:bg-[rgba(255,255,255,0.01)] transition-colors">
                <stat.icon className="w-8 h-8 text-[var(--accent-blue)] mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                <div className="text-[2.5rem] lg:text-[3.5rem] font-[800] text-white leading-none mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[0.8rem] lg:text-[0.9rem] font-[600] text-[var(--text-secondary)] uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- NOTRE APPROCHE (Nouvelle Section) --- */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[2rem] md:text-[2.5rem] font-[800] text-white mb-4">L'Approche Pédagogique</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Une méthodologie basée sur la pratique intensive et calquée sur les exigences réelles du monde de l'entreprise.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {approche.map((item, i) => (
              <motion.div key={i} variants={itemAnim} className="bg-[var(--bg-primary)] border border-[rgba(255,255,255,0.05)] p-8 rounded-[2rem] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[1.2rem] font-[800] text-white mb-3">{item.title}</h3>
                <p className="text-[0.9rem] text-[var(--text-secondary)] leading-[1.6]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- MODULES DU PARCOURS (Bento Design) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[2rem] md:text-[2.5rem] font-[800] text-white">Le Cursus complet</h2>
            <span className="hidden md:inline-flex px-4 py-1.5 rounded-full border border-white/10 text-white/50 text-[0.7rem] uppercase tracking-widest font-bold">
              4 Modules Intenses
            </span>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {modules.map((module, index) => (
              <motion.div key={index} variants={itemAnim} className="h-full">
                <div className={`h-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[2rem] p-8 md:p-10 group hover:border-[rgba(255,255,255,0.15)] transition-all duration-500 relative overflow-hidden ${module.glow} ${module.bgHover}`}>

                  {/* Badge Niveau Premium */}
                  <div className="absolute top-8 right-8 px-4 py-1.5 bg-black/40 border border-white/10 rounded-full text-[0.65rem] font-[800] text-white/70 uppercase tracking-widest backdrop-blur-md z-10">
                    {module.level}
                  </div>

                  {/* Gradient de fond au hover */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full blur-3xl" />

                  <div className="flex items-center gap-5 mb-6 relative z-10">
                    <div className="p-4 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] group-hover:scale-110 transition-transform duration-500">
                      <module.icon className={`w-7 h-7 ${module.color}`} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-[1.4rem] font-[800] text-white mb-4 relative z-10">
                    {module.title}
                  </h3>

                  <p className="text-[1rem] text-[var(--text-secondary)] leading-[1.7] relative z-10">
                    {module.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* --- MASSIVE CTA --- */}
        <motion.div
          className="relative bg-gradient-to-br from-[#0a0a0f] to-[#13131a] border border-[var(--border-subtle)] rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Cercles de fond pour l'effet Wow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-blue)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-[2.5rem] md:text-[3.5rem] font-[800] text-white mb-6 leading-tight relative z-10">
            Prêt à passer au <br className="hidden md:block" /> niveau supérieur ?
          </h2>
          <p className="text-[1rem] md:text-[1.1rem] text-[var(--text-secondary)] max-w-xl mx-auto mb-10 relative z-10">
            Rejoignez-moi et commençons ensemble à construire des fondations solides pour votre carrière dans le développement et la sécurité web.
          </p>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
            className="group relative inline-flex items-center justify-center gap-3 bg-white text-black font-[800] text-[0.9rem] md:text-[1rem] py-4 px-8 rounded-2xl uppercase tracking-widest transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] z-10"
          >
            Démarrer l'accompagnement
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </div>
  )
}
