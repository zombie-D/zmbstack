import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import projectsData from '../data/projects.json';

const FILTERS = ["Tous", "Web App", "Dashboard", "IA & Data", "Mobile"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects = projectsData.filter(p =>
    activeFilter === "Tous" || p.category === activeFilter
  );

  return (
    <div className="px-6 lg:px-12 py-12 lg:py-16 min-h-screen">
      <style>{`
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        .project-card:hover {
          border-color: rgba(59,130,246,0.3);
          transform: translateY(-2px);
        }
        .project-thumb { height: 180px; position: relative; overflow: hidden; }

        /* STYLE A - Dark Glow */
        .thumb-dark-glow {
          background: linear-gradient(135deg, #1b1140, #0a0a0f 70%);
          padding: 20px;
          position: relative;
        }
        .thumb-dark-glow h3 {
          font-size: 1.2rem; font-weight: 800; color: #fff; position: relative; z-index: 2;
        }
        .thumb-dark-glow .accent-word { color: #60a5fa; }
        .glow-dot {
          position: absolute; width: 140px; height: 140px; border-radius: 50%;
          filter: blur(50px); opacity: 0.5; top: -20px; left: -20px;
        }
        .mini-window {
          position: absolute; bottom: 14px; right: 14px; width: 60%;
          background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
          border-radius: 8px; padding: 10px; z-index: 2;
        }
        .mini-bar { height: 6px; border-radius: 3px; margin-bottom: 6px; }
        .mini-bar.filled { background: rgba(59,130,246,.6); }
        .mini-bar.muted { background: rgba(255,255,255,.2); }

        /* STYLE B - Light Dashboard */
        .thumb-light-dashboard { background: #f2f4f8; position: relative; }
        .dash-sidebar { position: absolute; left: 0; top: 0; bottom: 0; width: 60px; background: #e7eaf1; }
        .dash-topbar {
          position: absolute; left: 60px; right: 0; top: 0; height: 38px; background: #fff;
          border-bottom: 1px solid #e2e5ec; display: flex; align-items: center; padding: 0 14px; gap: 6px;
        }
        .dash-chip {
          display: inline-block; background: #3b82f6; color: #fff;
          font-size: .55rem; font-weight: 700; padding: 3px 8px; border-radius: 5px;
        }
        .dash-content { position: absolute; left: 60px; right: 0; top: 38px; bottom: 0; padding: 14px; }
        .dash-chart-bars { display: flex; align-items: flex-end; gap: 5px; height: 50px; margin-top: 10px; }
        .dash-chart-bars div { width: 8px; background: #c7d2fe; border-radius: 2px; }

        /* STYLE C - Light Document */
        .thumb-light-document { background: #f2f4f8; position: relative; }
        .doc-title {
          position: absolute; top: 22px; left: 20px; right: 20px;
          font-size: .85rem; font-weight: 700; color: #111; line-height: 1.3;
        }
        .doc-lines { position: absolute; top: 70px; left: 20px; right: 60px; }
        .doc-line { height: 5px; background: #e2e5ec; border-radius: 3px; margin-bottom: 7px; }
        .doc-badge {
          position: absolute; bottom: 16px; left: 20px; background: #fbbf24; color: #111;
          font-size: .6rem; font-weight: 800; padding: 4px 10px; border-radius: 5px;
        }

        .project-body { padding: 20px; }
        .project-body h4 { font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; color: var(--text-primary); }
        .project-body p { font-size: .82rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 14px; min-height: 58px; }
        .tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .tag {
          font-size: .68rem; font-weight: 600; color: var(--text-secondary);
          background: var(--bg-card-hover); border: 1px solid var(--border-subtle);
          padding: 4px 10px; border-radius: 6px;
        }
        .link-arrow {
          color: var(--accent-blue); font-weight: 700; font-size: .78rem;
          display: inline-flex; align-items: center; gap: 6px;
          transition: gap 0.2s ease;
        }
        .link-arrow:hover { gap: 10px; }

        .fade-in { animation: fadeIn 0.3s ease-in-out both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Header */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-2 bg-[var(--badge-bg)] text-[var(--accent-blue)] rounded-full px-4 py-2 text-[0.75rem] font-bold uppercase mb-6">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse" />
          Portfolio
        </span>
        <h1 className="text-[2rem] md:text-[2.5rem] font-[800] text-white mb-4">
          Mes <span className="text-[var(--accent-blue)]">Projets</span>
        </h1>
        <p className="text-[0.9rem] text-[var(--text-secondary)] max-w-[520px] leading-relaxed">
          Une sélection de projets web, d'applications et d'outils
          développés avec passion et rigueur technique.
        </p>
      </div>

      {/* Bandeau confidentialité */}
      <div className="mb-8 flex items-start gap-3 bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] rounded-xl px-5 py-4 max-w-[700px]">
        <span className="text-[1.1rem] mt-0.5">🔒</span>
        <p className="text-[0.82rem] text-[var(--text-secondary)] leading-relaxed">
          La majorité de mes projets sont <span className="text-white font-semibold">confidentiels ou sous accord de non-divulgation</span>.
          Pour en savoir plus ou accéder à des démonstrations,{" "}
          <button
            onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
            className="text-[var(--accent-blue)] underline underline-offset-2 hover:opacity-80 transition-opacity font-semibold cursor-pointer bg-transparent border-0 p-0"
          >
            contactez-moi directement
          </button>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="project-card fade-in group"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            {/* Zone Image */}
            <div className="w-full aspect-[16/10] overflow-hidden relative bg-[#0a0a0f] border-b border-[var(--border-subtle)]">
              {(project as any).image ? (
                <img
                  src={(project as any).image}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${(project as any).isPortrait
                    ? 'object-contain bg-[#1a0a2e]'
                    : 'object-cover'
                    }`}
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 w-full h-full text-[var(--text-muted)] text-[0.7rem] font-[700] uppercase tracking-widest bg-gradient-to-br from-[#111116] to-[#0a0a0f]">
                  {project.category === 'API REST' ? (
                    <>
                      <span className="text-[1.5rem]">{'{ }'}</span>
                      <span>API sans interface</span>
                    </>
                  ) : project.category === 'Extension VS Code' ? (
                    <>
                      <span className="text-[1.5rem]">⌨️</span>
                      <span>Extension VS Code</span>
                    </>
                  ) : (
                    <span>Capture d'écran à venir</span>
                  )}
                </div>
              )}
              {/* Overlay léger pour éviter l'éblouissement */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>

            <div className="project-body flex flex-col h-full bg-[var(--bg-card)] relative z-10 px-5 pb-5 pt-3">
              <h4 className="text-[1.1rem] font-bold text-white mb-2">{project.title}</h4>
              <p className="text-[0.85rem] text-[var(--text-secondary)] leading-relaxed mb-4">{project.description}</p>

              <div className="tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="mt-auto pt-5">
                {(project as any).isPrivate ? (
                  <div className="inline-flex items-center gap-2 text-[0.7rem] font-[700] text-[var(--text-muted)] uppercase tracking-widest bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] px-3 py-1.5 rounded-md cursor-help" title="Code source sous NDA / Propriété client">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Code Source Privé
                  </div>
                ) : (
                  <a href={(project as any).link || "#"} className="link-arrow text-[var(--accent-blue)]">
                    VOIR LE PROJET <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {projectsData.length > 9 && (
        <div className="mt-12 flex items-center justify-center gap-4">
          <button className="px-4 py-2 border border-[var(--border-subtle)] text-[var(--text-secondary)] rounded-lg text-sm hover:bg-[var(--bg-card)] transition-colors">← Précédent</button>
          <span className="text-white text-sm font-bold bg-[var(--bg-card-hover)] w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--border-subtle)]">1</span>
          <button className="px-4 py-2 border border-[var(--border-subtle)] text-[var(--text-secondary)] rounded-lg text-sm hover:bg-[var(--bg-card)] transition-colors">Suivant →</button>
        </div>
      )}
    </div>
  );
}
