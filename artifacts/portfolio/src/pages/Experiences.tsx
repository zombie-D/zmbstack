import { GraduationCap, Shield, Users, Calendar, Video, MessageCircle, Briefcase } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import expData from '../data/experiences.json';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemAnim: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Experiences() {
  const { formation, cybersecurite, enseignement } = expData;

  const renderTimeline = (items: any[], Icon: any, primaryColor: string) => (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="relative pl-6 md:pl-10 space-y-8 border-l-2 border-[var(--border-subtle)]"
    >
      {items.map((item, i) => (
        <motion.div key={i} variants={itemAnim} className="relative group">
          {/* Glowing Dot */}
          <div className="absolute -left-[30px] md:-left-[46px] top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 bg-[var(--bg-primary)] z-10 transition-colors duration-300" style={{ borderColor: primaryColor, boxShadow: `0 0 10px ${primaryColor}40` }}>
            <div className="w-full h-full rounded-full opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: primaryColor }} />
          </div>

          {/* Experience Card */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 md:p-8 hover:border-[rgba(255,255,255,0.15)] transition-all hover:shadow-xl hover:-translate-y-1 duration-300 relative overflow-hidden">
            {/* Décoration interne Hover */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: primaryColor }} />

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)]">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
                </div>
                <span className="font-[700] text-[0.85rem] md:text-[0.95rem] text-[var(--text-secondary)] uppercase tracking-wide">
                  {item.org}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[var(--border-subtle)] text-[var(--text-muted)] text-[0.75rem] font-[600] shrink-0">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </div>
            </div>

            <h3 className="text-[1.2rem] md:text-[1.3rem] font-[800] text-white leading-snug mb-3">
              {item.title}
            </h3>

            <p className="text-[0.9rem] text-[var(--text-secondary)] leading-[1.6]">
              {item.description}
            </p>
            {item.description2 && (
              <p className="text-[0.9rem] text-[var(--text-secondary)] leading-[1.6] mt-3">
                {item.description2}
              </p>
            )}

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {item.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-[rgba(255,255,255,0.02)] border border-[var(--border-subtle)] text-[0.75rem] font-[600] text-gray-400 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-12 lg:py-20 min-h-screen">

      <div className="max-w-4xl mx-auto">
        {/* Header de Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 bg-[var(--badge-bg)] text-[var(--accent-blue)] rounded-full px-4 py-2 text-[0.75rem] font-bold uppercase mb-6">
            <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse" />
            Parcours
          </span>
          <h1 className="text-[2rem] md:text-[3rem] font-[800] text-white mb-4 leading-tight">
            Mes <span className="text-[var(--accent-blue)]">Expériences</span>
          </h1>
          <p className="text-[0.95rem] md:text-[1rem] text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Mon évolution professionnelle à travers des projets concrets,
            la formation et une passion constante pour le développement web et la sécurité.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-24">

          {/* SECTION : Formation Académique */}
          <section>
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-[1.5rem] font-[800] text-white">Formation académique</h2>
            </motion.div>

            {renderTimeline(formation, GraduationCap, "#a855f7")}
          </section>

          {/* SECTION : Cybersécurité offensive */}
          <section>
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <Shield className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-[1.5rem] font-[800] text-white">Cybersécurité offensive</h2>
              </div>
              <div className="md:ml-auto inline-flex items-center bg-red-500/10 border border-red-500/20 text-red-400 text-[0.8rem] font-[700] px-4 py-2 rounded-full uppercase tracking-wider">
                {cybersecurite.statBadge}
              </div>
            </motion.div>

            {renderTimeline(cybersecurite.entries, Shield, "#ef4444")}
          </section>

          {/* SECTION : Formation & Enseignement */}
          <section>
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-[1.5rem] font-[800] text-white">Formation & Enseignement</h2>
            </motion.div>

            {renderTimeline(enseignement, Briefcase, "#3b82f6")}
          </section>

        </div>

      </div>
    </div>
  );
}
