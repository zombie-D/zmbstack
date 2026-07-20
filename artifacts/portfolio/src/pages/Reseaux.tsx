import React from 'react';
import { Music, Youtube, Github, MessageCircle, ShieldAlert, Mail, TrendingUp, ExternalLink } from 'lucide-react';
import linksData from '../data/links-page-data.json';
import { ContactModal } from '@/components/ui/ContactModal';

const platformIcon = (platform: string) => {
  switch (platform) {
    case 'tiktok': return <Music className="w-5 h-5 flex-shrink-0" />;
    case 'youtube': return <Youtube className="w-5 h-5 flex-shrink-0" />;
    case 'whatsapp': return <MessageCircle className="w-5 h-5 flex-shrink-0" />;
    case 'github': return <Github className="w-5 h-5 flex-shrink-0" />;
    default: return <ExternalLink className="w-5 h-5 flex-shrink-0" />;
  }
};

const platformStyle = (platform: string): React.CSSProperties => {
  switch (platform) {
    case 'tiktok': return { background: 'rgba(255,255,255,0.05)', color: '#fff' };
    case 'youtube': return { background: 'rgba(255,0,0,0.08)', color: '#ff0000' };
    case 'whatsapp': return { background: 'rgba(37,211,102,0.08)', color: '#25D366' };
    case 'github': return { background: 'rgba(255,255,255,0.05)', color: '#fff' };
    default: return { background: 'rgba(255,255,255,0.05)', color: '#fff' };
  }
};

export default function Reseaux() {
  const openModal = () => window.dispatchEvent(new CustomEvent('open-contact-modal'));

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 max-w-[1000px] mx-auto min-h-screen flex flex-col">

      {/* Header Profile Section - Horizontale sur Grand Écran */}
      <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[2rem] p-6 md:p-10 mb-8 md:mb-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 shadow-sm relative overflow-hidden group">

        {/* Glow décoratif */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-blue)] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 rounded-full blur-3xl pointer-events-none" />

        {/* Profil Photo */}
        <div className="w-32 h-32 md:w-44 md:h-44 shrink-0 rounded-full border-[4px] border-[var(--bg-primary)] ring-2 ring-[var(--border-subtle)] overflow-hidden shadow-xl bg-[#0a0a0f] z-10 relative">
          <img
            src="/mee.png"
            className="w-full h-full object-cover object-[50%_20%]"
            alt="ZMB Stack"
          />
        </div>

        {/* Profile Info Orientée Dashoboard */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 z-10 pt-2">
          <div className="inline-flex items-center gap-2 bg-[var(--badge-bg)] text-[var(--accent-blue)] rounded-full px-3 py-1.5 text-[0.7rem] font-bold uppercase mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse" />
            Connectons-nous
          </div>

          <h1 className="text-[1.8rem] md:text-[2.5rem] font-[800] text-white leading-tight mb-3">
            ZMB <span className="text-[var(--accent-blue)]">STACK</span>
          </h1>
          <p className="text-[0.95rem] text-[var(--text-secondary)] mb-6 max-w-lg leading-relaxed">
            Formateur & Développeur Web · Cybersécurité offensive. Retrouvez-moi sur mes différents canaux pour parler tech et échanger.
          </p>

          <div className="inline-flex items-center gap-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-white font-[600] text-[0.85rem] px-5 py-3 rounded-xl shadow-inner">
            <TrendingUp className="w-4 h-4 text-[var(--accent-blue)]" />
            {linksData.totalViewsBadge}
          </div>
        </div>
      </div>

      <h2 className="text-[0.8rem] font-[700] text-[var(--text-muted)] tracking-[0.15em] uppercase mb-5 ml-2">
        Liens officiels
      </h2>

      {/* Social Links Grid (2 colonnes sur Bureau) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {linksData.socials.map((social, i) => (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-4 md:p-5 hover:border-[rgba(59,130,246,0.3)] shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
              style={platformStyle(social.platform)}
            >
              {platformIcon(social.platform)}
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[0.95rem] font-[700] text-white truncate transition-colors group-hover:text-[var(--accent-blue)]">
                {social.label}
              </span>
              <span className="text-[0.8rem] text-[var(--text-secondary)] mt-0.5 truncate">
                {social.sub}
              </span>
            </div>

            <div className="text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] transition-colors flex-shrink-0 p-2 opacity-50 group-hover:opacity-100">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>

      {/* Bloc Avertissement Premium (Horizontal sur Desktop) */}
      <div className="bg-[#13131a] border border-red-500/20 rounded-2xl p-6 md:p-8 mt-auto shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-2 text-red-400 font-[700] text-[0.9rem] mb-3 justify-center lg:justify-start">
              <ShieldAlert className="w-4 h-4" />
              <span>Avant de me contacter</span>
            </div>
            <p className="text-[0.85rem] text-[var(--text-secondary)] leading-[1.6]">
              Je ne traite aucune demande liée à des projets illégaux, à de la publicité
              frauduleuse, au piratage malveillant ou à toute activité non éthique — la
              cybersécurité que je pratique est exclusivement réalisée avec l'accord explicite
              des personnes ou entreprises concernées. Ce type de message sera ignoré sans
              réponse.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex items-center lg:pt-2">
            <button
              onClick={openModal}
              className="w-full lg:w-auto whitespace-nowrap bg-[var(--accent-blue)] hover:bg-[#2563eb] text-white font-[700] text-[0.9rem] py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              Projet sérieux
            </button>
          </div>
        </div>
      </div>

      <p className="text-[var(--text-muted)] text-[0.7rem] text-center mt-12 pb-8">
        © 2026 ZMB Stack — Tous droits réservés
      </p>

    </div>
  );
}
