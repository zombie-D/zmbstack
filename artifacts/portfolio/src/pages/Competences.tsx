import React from 'react';
import { Server, Monitor, Settings, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const categoryIcons = {
  "Backend & Bases de données": Server,
  "Frontend": Monitor,
  "Outils & DevOps": Settings,
  "Pédagogie & Formation": GraduationCap
};

export default function Competences() {
  // Convert object to array for mapping
  const categories = Object.entries(skillsData);

  return (
    <div className="px-6 lg:px-12 py-12 lg:py-16 min-h-[calc(100vh-65px)] lg:min-h-screen">
      <style>{`
        .comp-categories { display: flex; flex-direction: column; gap: 36px; }
        .comp-cat-title {
          font-size: .95rem; font-weight: 700; color: #fff;
          margin-bottom: 18px; display: flex; align-items: center; gap: 10px;
        }
        .icon-sq {
          width: 34px; height: 34px; border-radius: 9px; background: var(--badge-bg);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent-blue); font-size: 1rem; font-weight: 800;
        }
        .skills-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        @media (max-width: 1024px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .skills-grid { grid-template-columns: 1fr; } }
        
        .skill-card {
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: 12px; padding: 18px;
          display: flex; flex-direction: column; gap: 12px;
          transition: all 0.2s ease;
        }
        .skill-card:hover { border-color: rgba(59,130,246,0.3); transform: translateY(-2px); }
        .skill-top { display: flex; align-items: center; justify-content: space-between; }
        .skill-name { font-size: .88rem; font-weight: 700; color: #fff; }
        .skill-pct { font-size: .75rem; color: var(--accent-blue); font-weight: 700; }
        .skill-bar-track { height: 6px; background: var(--bg-card-hover); border-radius: 4px; overflow: hidden; }
        .skill-bar-fill {
          height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa);
          border-radius: 4px;
        }
        .skill-icon {
          width: 38px; height: 38px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: .85rem; color: #fff;
        }
      `}</style>

      {/* Header */}
      <div className="mb-12">
        <span className="inline-flex items-center gap-2 bg-[var(--badge-bg)] text-[var(--accent-blue)] rounded-full px-4 py-2 text-[0.75rem] font-bold uppercase mb-6">
          <div className="w-2 h-2 rounded-full bg-[var(--badge-dot)] animate-pulse" />
          Expertise technique
        </span>
        <h1 className="text-[2rem] md:text-[2.5rem] font-[800] text-white mb-4">
          Mes <span className="text-[var(--accent-blue)]">Compétences</span>
        </h1>
        <p className="text-[0.9rem] text-[var(--text-secondary)] max-w-[520px] leading-relaxed">
          Un aperçu des technologies, langages et outils que je
          maîtrise, acquis au fil de mes projets professionnels et de mon parcours
          de formateur.
        </p>
      </div>

      {/* Catégories de compétences */}
      <div className="comp-categories">
        {categories.map(([catName, skills]) => {
          const IconStyle = categoryIcons[catName as keyof typeof categoryIcons] || Server;
          return (
            <div key={catName}>
              <h3 className="comp-cat-title">
                <div className="icon-sq">
                  <IconStyle className="w-[18px] h-[18px]" strokeWidth={2.5} />
                </div>
                {catName}
              </h3>

              <div className="skills-grid">
                {skills.map((skill: any) => (
                  <div key={skill.name} className="skill-card">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="skill-icon" style={{ background: skill.iconBg, color: skill.iconTextColor || '#fff' }}>
                        {skill.iconText}
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="skill-top">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-pct">{skill.level}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar-track mt-1">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-10px" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
