import * as React from "react"
import { Link, useLocation } from "wouter"
import { cn } from "@/lib/utils"
import { Menu, X, ArrowDown } from "lucide-react"
import { SiTiktok, SiYoutube, SiGithub, SiWhatsapp } from "react-icons/si"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAV_ITEMS = [
  { href: "/", label: "ACCUEIL" },
  { href: "/projects", label: "PROJETS" },
  { href: "/teaching", label: "ENSEIGNEMENT" },
  { href: "/competences", label: "COMPÉTENCES" },
  { href: "/experiences", label: "EXPÉRIENCES" },
  { href: "/contenu", label: "CONTENU" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
]

const SOCIAL_LINKS = [
  { href: "https://tiktok.com", label: "TikTok", icon: SiTiktok, desc: "97.3k abonnés" },
  { href: "https://youtube.com", label: "YouTube", icon: SiYoutube, desc: "12.1k abonnés" },
  { href: "https://github.com", label: "GitHub", icon: SiGithub, desc: "18 dépôts publics" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin, desc: "+500 relations" },
  { href: "https://wa.me/1234567890", label: "WhatsApp", icon: SiWhatsapp, desc: "Me contacter" },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex w-[240px] flex-col border-r border-border bg-card sticky top-0 h-screen shrink-0">
        <div className="p-8 pb-12">
          <Link href="/" className="flex flex-col">
            <span className="text-[22px] font-bold tracking-tight text-primary leading-none">ZMB</span>
            <span className="text-[22px] font-bold tracking-tight text-foreground leading-none">STACK</span>
          </Link>
        </div>
        
        <nav className="flex-1 flex flex-col space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-8 py-2.5 text-[13px] font-bold tracking-wider transition-all",
                  isActive 
                    ? "text-foreground bg-border/30 border-l-[3px] border-primary" 
                    : "text-muted-foreground hover:text-foreground border-l-[3px] border-transparent"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="px-8 py-6 space-y-6">
          <div>
            <h4 className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase mb-4">PRÉSENCE EN LIGNE</h4>
            <div className="space-y-4">
              {SOCIAL_LINKS.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-[14px] h-[14px] text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-[12px] text-foreground font-medium group-hover:text-primary transition-colors">{item.label}</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground">{item.desc}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Button variant="outline" className="w-full justify-between text-[11px] font-semibold uppercase tracking-wider h-10 border-border text-foreground hover:bg-border/50">
              TÉLÉCHARGER MON CV
              <ArrowDown className="w-3.5 h-3.5" />
            </Button>
          </div>

          <div className="text-[10px] text-muted-foreground leading-relaxed pt-2 border-t border-border">
            © 2025 ZMB Stack<br/>Tous droits réservés.
          </div>
        </div>
      </aside>

      {/* Mobile Topbar */}
      <header className="md:hidden flex items-center justify-between p-5 border-b border-border bg-card sticky top-0 z-50">
        <Link href="/" className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold tracking-tight text-primary leading-none">ZMB</span>
            <span className="text-lg font-bold tracking-tight text-foreground leading-none">STACK</span>
          </div>
        </Link>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-foreground p-1"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[61px] bg-card z-40 border-b border-border flex flex-col overflow-y-auto">
          <nav className="p-6 space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 text-sm font-bold tracking-wider transition-colors",
                    isActive ? "text-primary bg-border/30 border-l-2 border-primary" : "text-muted-foreground hover:text-foreground border-l-2 border-transparent"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="px-10 py-6 border-t border-border">
            <h4 className="text-[11px] font-semibold text-muted-foreground tracking-widest uppercase mb-5">PRÉSENCE EN LIGNE</h4>
            <div className="space-y-5">
              {SOCIAL_LINKS.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">{item.label}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="w-full justify-between text-xs font-semibold uppercase tracking-wider h-12 border-border text-foreground">
                TÉLÉCHARGER MON CV
                <ArrowDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 max-w-full bg-background relative">
        {children}
      </main>
    </div>
  )
}
