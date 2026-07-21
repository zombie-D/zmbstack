import { Music2, Youtube, TrendingUp, Eye, Play } from "lucide-react"
import { motion, Variants } from "framer-motion"
import videosData from '../data/content-videos.json'

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { stiffness: 100 } }
};

export default function Contenu() {
  return (
    <div className="px-6 lg:px-12 py-12 lg:py-16 min-h-screen">
      <div className="max-w-5xl mx-auto">

        {/* --- HEADER --- */}
        <motion.div
          className="mb-10 text-left relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[var(--accent-blue)]" />
            <span className="text-[0.75rem] font-[700] uppercase tracking-[0.2em] text-[var(--accent-blue)]">
              CRÉATION DE CONTENU
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[800] text-white leading-tight mb-5">
            CONTENU
          </h1>
          <p className="text-[0.95rem] md:text-[1.05rem] text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Je partage mes connaissances, mes astuces de développement et mon quotidien de développeur/formateur à travers des vidéos courtes et longues.
          </p>
        </motion.div>

        {/* --- STATS DU HAUT (2 Cards) --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 md:my-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Card TikTok */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[14px] p-6">
            <div className="flex items-center gap-2.5 mb-4 text-[var(--text-secondary)] text-[0.8rem] font-bold uppercase tracking-wider">
              <Music2 className="w-4 h-4 text-white" /> TIKTOK
            </div>
            <div className="text-[2rem] font-[800] text-white leading-none">99,6K</div>
            <div className="text-[0.8rem] text-[var(--text-secondary)] mt-2 leading-[1.4]">
              Abonnés cumulés · 2 comptes actifs (ZMB Stack + ZMB Stack | Apprendre)
            </div>
          </div>

          {/* Card YouTube */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[14px] p-6">
            <div className="flex items-center gap-2.5 mb-4 text-[var(--text-secondary)] text-[0.8rem] font-bold uppercase tracking-wider">
              <Youtube className="w-4 h-4 text-red-500" /> YOUTUBE
            </div>
            <div className="text-[2rem] font-[800] text-white leading-none">Bientôt relancée</div>
            <div className="text-[0.8rem] text-[var(--text-secondary)] mt-2 leading-[1.4]">
              Nouveau contenu à venir prochainement
            </div>
          </div>
        </motion.div>

        {/* --- BANDEAU VUES TOTALES --- */}
        <motion.div
          className="flex items-center gap-2.5 bg-[var(--badge-bg)] border border-[rgba(59,130,246,0.2)] rounded-[10px] px-5 py-3.5 text-[var(--accent-blue)] text-[0.85rem] mb-12"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TrendingUp className="w-5 h-5 shrink-0" />
          <span className="leading-snug">
            <strong className="text-[1rem] font-bold">10,2M+</strong> vues cumulées sur l'ensemble des plateformes
          </span>
        </motion.div>

        {/* --- SECTION VIDÉOS RÉCENTES --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-[1.2rem] font-[800] text-white mb-6 uppercase tracking-wider">Vidéos Récentes</h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {videosData.map((v) => (
              <motion.div key={v.id} variants={itemAnim}>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[14px] overflow-hidden cursor-pointer transition-all duration-200 hover:border-[rgba(59,130,246,0.3)] hover:-translate-y-1 block group h-full flex flex-col"
                >
                  {/* Vignette avec image de couverture */}
                  <div
                    className="aspect-square relative flex items-center justify-center overflow-hidden shrink-0 bg-[#0a0a0f]"
                    style={!v.thumbnail ? { background: `linear-gradient(135deg, ${v.gradientFrom}, ${v.gradientTo})` } : undefined}
                  >
                    {/* Image de couverture réelle si disponible */}
                    {v.thumbnail ? (
                      <img
                        src={v.thumbnail}
                        alt={v.title}
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    ) : (
                      <>
                        {/* Motif de grille fallback */}
                        <div
                          className="absolute inset-0 z-0"
                          style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                          }}
                        />
                        {/* Glow coloré flouté */}
                        <div
                          className="absolute w-[180px] h-[180px] rounded-full blur-[60px] opacity-35 z-0"
                          style={{ backgroundColor: v.glowColor }}
                        />
                      </>
                    )}

                    {/* Overlay sombre pour lisibilité */}
                    <div className="absolute inset-0 bg-black/20 z-[1]" />

                    {/* Play Icon */}
                    <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white z-10 transition-transform duration-200 group-hover:scale-110">
                      <Play className="w-5 h-5 ml-1" fill="currentColor" />
                    </div>

                    {/* Badge Plateforme */}
                    <div className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-sm text-white text-[0.65rem] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 z-10">
                      {v.platform === 'tiktok' ? (
                        <Music2 className="w-3 h-3 text-white" />
                      ) : (
                        <Youtube className="w-3 h-3 text-red-500" />
                      )}
                      <span className="capitalize">{v.platform}</span>
                    </div>
                  </div>

                  {/* Infos Vidéo */}
                  <div className="p-3.5 flex flex-col grow">
                    <h3 className="text-[0.85rem] font-bold text-white leading-[1.4] mb-2 line-clamp-2">
                      {v.title}
                    </h3>
                    <div className="mt-auto flex items-center gap-1.5 text-[0.75rem] text-[var(--text-secondary)]">
                      <Eye className="w-3.5 h-3.5 shrink-0" />
                      <span>{v.views} vues</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
