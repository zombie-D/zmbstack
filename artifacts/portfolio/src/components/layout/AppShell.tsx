import * as React from "react"
import { Link, useLocation } from "wouter"
import { cn } from "@/lib/utils"
// Use smaller icons if possible or rely on Lucide
import { Menu, X, Home, Briefcase, GraduationCap, Shield, Bookmark, FileText, Globe, Music, Youtube, Github, MessageCircle, Mail, ShoppingCart } from "lucide-react"
import { ContactModal } from "@/components/ui/ContactModal"

const NAV_ITEMS = [
  { href: "/", label: "ACCUEIL", icon: Home },
  { href: "/projects", label: "PROJETS", icon: Briefcase },
  { href: "/enseignement", label: "ENSEIGNEMENT", icon: GraduationCap },
  { href: "/competences", label: "COMPÉTENCES", icon: Shield },
  { href: "/experiences", label: "EXPÉRIENCES", icon: Bookmark },
  { href: "/contenu", label: "CONTENU", icon: FileText },
  { href: "/reseaux", label: "RÉSEAUX", icon: Globe },
]

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const SOCIALS = [
  { name: "TikTok", stat: "97.3K abonnés", icon: TiktokIcon, url: "https://www.tiktok.com/@zmb_stack?is_from_webapp=1&sender_device=pc" },
  { name: "TikTok Learn", stat: "2.3K abonnés", icon: TiktokIcon, url: "https://www.tiktok.com/@zmb_stack1?is_from_webapp=1&sender_device=pc" },
  { name: "YouTube", stat: "Bientôt relancée", icon: Youtube, url: "https://youtube.com/@zmb_stack?si=SbG05zarCfwRJRh3" },
  { name: "GitHub", stat: "18 dépôts", icon: Github, url: "https://github.com/zombie-D" },
  { name: "WhatsApp", stat: "Chaîne d'actus", icon: MessageCircle, url: "https://whatsapp.com/channel/0029Vb6yDBlG3R3m8gEPfL1Q" }
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <div className="flex min-h-screen w-full bg-[var(--bg-primary)] text-[var(--text-primary)] font-['Inter'] relative">

      {/* 
        ==============================
        MOBILE HEADER (Visible only < lg)
        ==============================
      */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-[var(--bg-sidebar)] border-b border-[var(--border-subtle)] fixed top-0 left-0 w-full z-40 shadow-sm">
        <Link href="/" className="flex flex-col">
          <span className="text-[var(--accent-blue)] font-[800] text-[1.4rem] leading-none mb-1">ZMB</span>
          <span className="text-white font-[600] text-[1rem] tracking-[0.05em] leading-none">STACK</span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 rounded-lg bg-[rgba(255,255,255,0.05)] text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* OVERLAY MOBILE */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* 
        ==============================
        SIDEBAR (Desktop + Mobile Slide-in)
        ==============================
      */}
      <aside className={cn(
        "flex w-[280px] lg:w-[280px] flex-col bg-[var(--bg-sidebar)] fixed left-0 top-0 h-screen z-50 border-r-0 lg:border-r border-[var(--border-subtle)] transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Close Button on Mobile */}
        <button
          className="lg:hidden absolute top-4 right-4 p-2 rounded-full bg-[rgba(255,255,255,0.05)] text-white hover:bg-[rgba(255,255,255,0.1)] z-50"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="px-8 pt-10 pb-6 tracking-wide">
          <Link href="/">
            <div className="flex flex-col">
              <span className="text-[var(--accent-blue)] font-[800] text-[1.4rem] leading-none mb-1">ZMB</span>
              <span className="text-white font-[600] text-[1.1rem] tracking-[0.05em] leading-none">STACK</span>
            </div>
          </Link>
        </div>

        {/* Nav Icons */}
        <nav className="flex-1 flex flex-col px-4 overflow-y-auto custom-scrollbar gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all relative group",
                  isActive
                    ? "bg-[rgba(255,255,255,0.06)] text-white"
                    : "text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.03)] hover:text-white"
                )}
                title={item.label}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-[var(--accent-blue)] rounded-r-md" />
                )}
                <Icon className={cn("w-[20px] h-[20px] transition-transform group-hover:scale-110", isActive ? "text-[var(--accent-blue)]" : "text-[var(--text-secondary)]")} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[0.75rem] font-[600] tracking-[0.05em] uppercase">{item.label}</span>
              </Link>
            )
          })}

          {/* PRESENCE EN LIGNE */}
          <div className="mt-8 border-t border-[rgba(255,255,255,0.04)] pt-8 pb-4">
            <h4 className="text-[var(--text-muted)] text-[0.65rem] font-[700] tracking-[0.1em] uppercase mb-5 px-4">PRÉSENCE EN LIGNE</h4>
            <div className="flex flex-col gap-2">
              {SOCIALS.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-4 py-2 hover:bg-[rgba(255,255,255,0.03)] rounded-lg transition-colors group cursor-pointer"
                >
                  <div className="flex items-center justify-center flex-shrink-0">
                    <social.icon className="w-[18px] h-[18px] text-[var(--text-secondary)] group-hover:text-white transition-colors group-hover:scale-110" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.85rem] font-[600] text-[var(--text-secondary)] group-hover:text-white transition-colors leading-tight">{social.name}</span>
                    <span className="text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors text-[0.75rem] mt-0.5 leading-tight">{social.stat}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Bouton Contact & Footer */}
        <div className="mt-auto p-6 flex flex-col gap-4">
          <a
            href="https://zmb-stack.mychariow.shop"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-[var(--accent-blue)] font-[700] text-[0.75rem] uppercase tracking-[0.08em] rounded-lg hover:text-white hover:bg-[var(--accent-blue)] transition-all shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>MA BOUTIQUE</span>
          </a>

          <button
            onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[var(--accent-blue)] text-white font-[700] text-[0.75rem] uppercase tracking-[0.08em] rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            <Mail className="w-4 h-4" />
            <span>ME CONTACTER</span>
          </button>

          <div className="text-[var(--text-muted)] text-[0.7rem] font-[500] leading-relaxed mt-2">
            <p>© 2026 ZMB Stack</p>
            <p>Tous droits réservés.</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full lg:ml-[280px] pt-[72px] lg:pt-0 overflow-x-hidden min-h-screen">
        {children}
      </main>

      <ContactModal />
    </div>
  )
}
