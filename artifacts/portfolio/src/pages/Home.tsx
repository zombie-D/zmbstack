import { ArrowUpRight, Calendar, Code, GraduationCap, Users, ArrowRight, ShoppingCart } from "lucide-react"
import { Link } from "wouter"
import React from 'react'
import { cn } from "@/lib/utils"
import projectsData from "@/data/projects.json"
import { recordVisitAndGetCount } from "@/lib/firebase";

export default function Home() {
  const [visitCount, setVisitCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    recordVisitAndGetCount().then(count => {
      if (count > 0) {
        setVisitCount(count);
      }
    });
  }, []);
  return (
    <div className="flex flex-col pt-2 relative">
      {/* Top Bar - Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 lg:px-10 py-5 gap-y-4 gap-x-2 w-full">
        {/* Terminal Complet (Desktop & Tablet) */}
        <div className="hidden sm:block font-mono bg-[#111115] border border-white/5 rounded-md px-4 py-2.5 w-fit text-[0.75rem] leading-relaxed shadow-lg">
          <div className="text-gray-400 mb-1">
            <span className="text-[var(--accent-blue)] opacity-80 mr-2">&gt;_</span>
            <span>zmb.getRoles()</span>
          </div>
          <div className="font-[500] text-gray-300 pl-3 border-l border-white/10 ml-1.5 flex items-center gap-x-1">
            [<span className="text-[var(--accent-blue)]">"Dev&nbsp;&&nbsp;Cyber"</span>, <span className="text-[var(--accent-blue)]">"Formateur"</span>, <span className="text-[var(--accent-blue)]">"Créateur"</span>]
            <span className="inline-block w-1.5 h-[0.75rem] bg-gray-400 animate-pulse ml-1 align-baseline translate-y-[1px]" />
          </div>
        </div>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
          className="border border-[rgba(255,255,255,0.1)] text-[var(--text-secondary)] hover:text-white rounded-lg px-3 sm:px-4 py-2 font-[600] text-[0.65rem] sm:text-[0.7rem] tracking-widest flex items-center justify-center gap-1 sm:gap-2 hover:bg-[rgba(255,255,255,0.03)] transition-colors uppercase text-center flex-shrink-0"
        >
          CONTACTER MOI <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </button>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row relative items-center mb-0 lg:mb-8 border-b-0 lg:border-b border-[rgba(255,255,255,0.04)] lg:min-h-[600px]">
        {/* Right: Photo — desktop uniquement avec effet glow studio */}
        <div className="hidden lg:flex absolute top-[-60px] right-0 lg:w-[45%] h-[700px] items-end justify-end z-0 pointer-events-none opacity-100">
          {/* Glow lumineux derrière le sujet (style affiche studio) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35)_0%,rgba(120,80,220,0.15)_40%,transparent_70%)] blur-[30px]" />
          </div>
          <img
            src="/desktop.png"
            alt="Portrait"
            className="w-full h-full max-h-[700px] object-contain object-bottom relative z-10"
            style={{
              maskImage: 'linear-gradient(to left, black 50%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
              maskComposite: 'intersect'
            }}
          />
        </div>

        {/* Left: Content */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center px-6 lg:pl-[120px] lg:pr-10 z-10 pt-6 lg:py-16">
          <h1 className="text-[clamp(2.2rem,3.8vw,4.5rem)] font-[700] leading-[1.1] tracking-[-0.015em] mb-6 text-white max-w-[800px]">
            Je conçois des solutions digitales. <span className="text-[var(--accent-blue)]">Je transmets</span> une expertise. <span className="text-[var(--accent-blue)]">Je traque</span> les failles avant les autres.
          </h1>

          <p className="text-[0.9rem] sm:text-[0.95rem] text-[var(--text-secondary)] leading-[1.65] max-w-[500px] mb-8">
            Développeur passionné spécialisé dans la création d'applications web performantes, formateur engagé, et <strong>créateur de contenu éducatif (+100k abonnés)</strong> pour accompagner les passionnés vers l'excellence.
          </p>

          <div className="flex flex-col gap-6 w-full sm:w-auto mb-10 overflow-visible">
            {/* Réseaux Sociaux (Au-dessus des boutons) */}
            <div className="flex items-center justify-center sm:justify-start flex-wrap gap-3">
              {/* TikTok Principal */}
              <a href="https://www.tiktok.com/@zmb_stack?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-[#00f2fe] border border-[#00f2fe]/30 rounded-full px-4 py-2 bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 hover:border-[#00f2fe] transition-all text-[0.75rem] font-[600]">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                TikTok
              </a>
              {/* TikTok Learn (Pédagogique) */}
              <a href="https://www.tiktok.com/@zmb_stack1?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-[#00f2fe] border border-[#00f2fe]/30 rounded-full px-4 py-2 bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 hover:border-[#00f2fe] transition-all text-[0.75rem] font-[600]">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                TikTok Learn
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/@zmb_stack?si=SbG05zarCfwRJRh3" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-[#FF0000] border border-[#FF0000]/30 rounded-full px-4 py-2 bg-[#FF0000]/10 hover:bg-[#FF0000]/20 hover:border-[#FF0000] transition-all text-[0.75rem] font-[600]">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                YouTube
              </a>
              {/* WhatsApp Canal */}
              <a href="https://whatsapp.com/channel/0029Vb6yDBlG3R3m8gEPfL1Q" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-[#25D366] border border-[#25D366]/30 rounded-full px-4 py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 hover:border-[#25D366] transition-all text-[0.75rem] font-[600]">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Canal WhatsApp
              </a>
            </div>

            {/* Boutons Call to action */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <Link
                href="/projects"
                className="bg-[var(--accent-blue)] text-white w-full sm:w-auto font-[600] rounded-lg px-6 py-4 sm:py-3.5 flex items-center justify-center gap-2 hover:bg-[var(--accent-blue-hover)] transition-colors text-[0.75rem] uppercase tracking-wider"
              >
                DÉCOUVRIR MES PROJETS <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>

              <a
                href="https://zmb-stack.mychariow.shop"
                target="_blank"
                rel="noreferrer"
                className="bg-[#8B5CF6] text-white w-full sm:w-auto font-[600] rounded-lg px-6 py-4 sm:py-3.5 flex items-center justify-center gap-2 hover:bg-[#7c3aed] transition-colors text-[0.75rem] uppercase tracking-wider"
              >
                <ShoppingCart className="w-4 h-4" />
                MA BOUTIQUE <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                className="bg-[#0D0D12] border border-[rgba(255,255,255,0.05)] text-white w-full sm:w-auto font-[600] rounded-lg px-6 py-4 sm:py-3.5 flex items-center justify-center gap-2 hover:bg-[rgba(255,255,255,0.03)] transition-colors text-[0.75rem] uppercase tracking-wider"
              >
                CONTACTER MOI <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Photo mobile — dans le flux, après les boutons CTA */}
        <div className="flex lg:hidden w-full px-6 pb-8 justify-center pointer-events-none">
          <img
            src="/mee.png"
            alt="Portrait"
            className="w-[280px] max-w-full object-contain object-bottom opacity-80"
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
            }}
          />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="grid grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:pl-[120px] lg:px-12 py-10 border-t lg:border-t-0 border-b border-[rgba(255,255,255,0.04)] mx-0 z-10 relative">
        {[
          { icon: Calendar, stat: "+3", subtitle1: "Années d'expérience", subtitle2: "" },
          { icon: Code, stat: "10+", subtitle1: "Projets réalisés", subtitle2: "(Inclus confidentiels)" },
          { icon: GraduationCap, stat: "Formateur", subtitle1: "Dev & Cyber Web", subtitle2: "" },
          { icon: Users, stat: "Accompagnement", subtitle1: "Étudiants et apprentis", subtitle2: "" }
        ].map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-start gap-3 lg:gap-4 ${i !== 0 && i !== 2 ? 'pl-2 sm:pl-6 lg:pl-10 lg:border-l lg:border-[rgba(255,255,255,0.04)]' : 'pr-2 sm:pr-0'} ${i === 2 && 'lg:pl-10 lg:border-l lg:border-[rgba(255,255,255,0.04)]'} ${i === 2 || i === 3 ? 'pt-8 lg:pt-0' : 'pb-8 lg:pb-0'} ${(i === 0 || i === 1) ? 'border-b lg:border-b-0 border-[rgba(255,255,255,0.04)]' : ''}`}
          >
            <item.icon className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] text-[var(--accent-blue)] opacity-90" strokeWidth={1.5} />
            <div className="w-full">
              <div className="text-[1.1rem] min-[370px]:text-[1.35rem] sm:text-[1.6rem] md:text-[2rem] font-[700] text-white leading-none mb-2 tracking-tighter whitespace-nowrap">
                {item.stat}
              </div>
              <div className="text-[0.65rem] sm:text-[0.75rem] text-[var(--text-secondary)] leading-[1.4] font-[500] pr-1">
                {item.subtitle1} {item.subtitle2}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* About Section */}

      <section className="px-6 lg:pl-[120px] lg:px-12 py-16 lg:py-20 z-10 relative bg-[#0a0a0f] border-t border-[rgba(255,255,255,0.02)]">
        <div className="max-w-[800px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[6px] h-[6px] rounded-full bg-[var(--accent-blue)] mt-0.5" />
            <h2 className="text-[0.7rem] sm:text-[0.75rem] font-[700] text-[#a1a1aa] uppercase tracking-[0.1em] leading-tight flex items-center">
              À PROPOS DE MOI
            </h2>
          </div>
          <h3 className="text-[1.8rem] sm:text-[2.2rem] font-[800] text-white leading-[1.2] mb-8">
            L'alliance entre le <span className="text-[var(--accent-blue)]">développement web</span> de pointe et la <span className="text-[#8B5CF6]">cybersécurité</span>.
          </h3>
          <div className="flex flex-col gap-5 text-[0.95rem] text-[var(--text-secondary)] leading-[1.75]">
            <p>
              Je suis un <strong className="text-[var(--text-primary)] font-[600]">développeur web passionné</strong>, spécialisé dans la conception, le déploiement et la maintenance d'applications robustes. Des architectures backend complexes (API REST, Webhooks) aux interfaces frontend dynamiques de premier plan, je maîtrise l'ensemble du cycle de vie d'un projet web.
            </p>
            <p>
              En parallèle, j'interviens dans le domaine de la <strong className="text-[var(--text-primary)] font-[600]">cybersécurité (offensive et défensive)</strong>. Je traque les failles de systèmes critiques (pentest, rapports de vulnérabilités) et j'implémente des politiques de sécurité proactives pour le web.
            </p>
            <p className="border-l-2 border-[var(--accent-blue)] pl-4 italic mt-2 text-white/80">
              Mon objectif : produire et déployer des applications non seulement fluides et performantes, mais <strong className="font-[600]">strictement sécurisées</strong> dès la première ligne de code ("Security by Design").
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 lg:pl-[120px] lg:px-12 py-12 lg:py-14 z-10 relative bg-[var(--bg-primary)]">
        {/* Section Header */}
        <div className="flex items-start sm:items-center justify-between mb-8 flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] rounded-full bg-[var(--accent-blue)]" />
            <h2 className="text-[0.7rem] sm:text-[0.75rem] font-[700] text-white uppercase tracking-[0.08em] leading-tight">
              MES PROJETS <br className="sm:hidden" /> RÉCENTS
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-[0.65rem] sm:text-[0.7rem] font-[600] text-[var(--text-secondary)] hover:text-white transition-colors flex items-center gap-2 group uppercase tracking-widest"
          >
            VOIR TOUS LES <br className="sm:hidden" /> PROJETS
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Grid (Vrais projets tirés du JSON) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.slice(0, 3).map(project => (
            <Link key={project.id} href={`/projects`}>
              <div className="bg-[var(--bg-card)] rounded-xl overflow-hidden flex flex-col h-full border border-[var(--border-subtle)] hover:border-[rgba(255,255,255,0.1)] transition-all duration-300 group">

                {/* Zone Image */}
                <div className="w-full aspect-[16/10] overflow-hidden relative bg-[#0a0a0f] border-b border-[var(--border-subtle)]">
                  {(project as any).image ? (
                    <img
                      src={(project as any).image}
                      alt={project.title}
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${(project as any).isPortrait ? 'object-contain bg-[#1a0a2e]' : 'object-cover'
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col flex-1 relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[0.65rem] font-[700] uppercase tracking-widest text-[var(--accent-blue)]">
                      {project.category}
                    </span>
                    {(project as any).isPrivate && (
                      <span className="text-[0.6rem] font-[700] uppercase tracking-[0.05em] px-2 py-0.5 rounded bg-[rgba(255,255,255,0.05)] text-[var(--text-muted)] border border-[rgba(255,255,255,0.05)]">
                        PRIVÉ
                      </span>
                    )}
                  </div>
                  <h3 className="text-[1.1rem] font-[700] text-white mb-2">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] text-[0.85rem] leading-[1.6] flex-1 mb-6">
                    {project.description.length > 130 ? project.description.substring(0, 130) + '...' : project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map(t => (
                      <span key={t} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-[var(--text-secondary)] text-[0.65rem] font-[500] px-2.5 py-1 rounded-[6px] tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center text-[var(--text-secondary)] group-hover:text-white transition-colors text-[0.7rem] font-[700] uppercase tracking-wider">
                    VOIR LE PROJET <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

      {visitCount !== null && (
        <section className="mt-20 mb-4 pt-12 border-t border-[rgba(255,255,255,0.05)] flex flex-col items-center justify-center gap-3 px-6">
          <p className="text-[var(--text-muted)] text-[0.6rem] sm:text-[0.65rem] font-[800] uppercase tracking-[0.2em] text-center">
            Visiteurs uniques
          </p>
          <div className="flex items-baseline gap-3">
            <span className="text-[var(--accent-blue)] font-mono text-[2rem] sm:text-[3rem] opacity-40 leading-none select-none">#</span>
            <span className="font-mono text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] font-[900] text-white leading-none tracking-tight tabular-nums">
              {visitCount.toLocaleString('fr-FR')}
            </span>
          </div>
          <p className="text-[var(--text-muted)] text-[0.6rem] font-[500] tracking-wider text-center uppercase">
            IPs distinctes depuis le lancement
          </p>
        </section>
      )}
    </div>
  )
}

