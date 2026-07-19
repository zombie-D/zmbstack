import * as React from "react"
import { Link, useLocation } from "wouter"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Youtube, Mail, Menu, X, Terminal, MonitorPlay, MessageSquare, User, FileText, LayoutDashboard } from "lucide-react"

const NAV_ITEMS = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/about", label: "Identity", icon: User },
  { href: "/projects", label: "Work", icon: Terminal },
  { href: "/teaching", label: "Teaching", icon: MonitorPlay },
  { href: "/blog", label: "Log", icon: FileText },
  { href: "/contact", label: "Communicate", icon: MessageSquare },
]

const SOCIAL_LINKS = [
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://youtube.com", label: "YouTube", icon: Youtube },
  { href: "mailto:hello@zmbstack.com", label: "Email", icon: Mail },
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
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-card/50 backdrop-blur-sm sticky top-0 h-screen">
        <div className="p-6">
          <Link href="/" className="flex flex-col gap-1 group">
            <span className="text-xl font-bold tracking-tight text-foreground uppercase">ZMB Stack</span>
            <span className="text-xs text-muted-foreground font-mono transition-colors group-hover:text-primary">Hanis Agnila</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm font-medium transition-all group",
                  isActive ? "text-primary bg-primary/10 border-r-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <item.icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex gap-4 items-center justify-center">
            {SOCIAL_LINKS.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={item.label}
              >
                <item.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile Topbar */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-border bg-background sticky top-0 z-50">
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="text-lg font-bold tracking-tight uppercase">ZMB Stack</span>
        </Link>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-muted-foreground hover:text-foreground p-2"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-background z-40 border-b border-border flex flex-col">
          <nav className="p-4 space-y-2 flex-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors border",
                    isActive ? "text-primary border-primary/50 bg-primary/5" : "text-muted-foreground border-transparent hover:border-border hover:bg-muted"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 max-w-full relative">
        <div className="flex-1 w-full max-w-5xl mx-auto p-4 sm:p-8 md:p-12 relative">
          {children}
        </div>
      </main>
    </div>
  )
}
