import { Github, Linkedin, Youtube, Mail, MapPin, Terminal } from "lucide-react"

export default function About() {
  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-500">
      <header className="space-y-4 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Identity</h1>
        <p className="text-muted-foreground max-w-2xl font-light text-lg">
          Hanis Agnila / ZMB Stack. Computer Science student, Web Developer, and Trainer.
        </p>
      </header>

      <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-sm font-mono tracking-widest text-primary uppercase border-b border-border/50 pb-2">01 // Background</h2>
            <div className="prose prose-invert max-w-none text-foreground prose-p:leading-relaxed prose-p:font-light">
              <p>
                I operate at the intersection of engineering and education. As a Computer Science student (SIL) and practicing Web Developer, my focus is on building resilient systems while simultaneously codifying that knowledge to train the next generation of developers.
              </p>
              <p>
                Under the moniker <strong>ZMB Stack</strong>, I create content spanning web development architectures, modern tooling, and cybersecurity fundamentals. I believe that teaching a concept is the ultimate stress-test of one's understanding of it.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-sm font-mono tracking-widest text-primary uppercase border-b border-border/50 pb-2">02 // Philosophy</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold tracking-tight">Form Follows Function</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Design should serve the underlying system, not obscure it. Clean interfaces require clean architecture beneath them. I build tools that feel precise because the code running them is structured with intent.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold tracking-tight">Security by Default</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  In a landscape of continuous threats, security isn't a feature applied at the end of development—it's a foundational constraint considered during initial architecture.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-sm font-mono tracking-widest text-primary uppercase border-b border-border/50 pb-2">03 // Presence Map</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "GitHub", url: "https://github.com", icon: Github, desc: "Source code & OSS" },
                { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin, desc: "Professional network" },
                { name: "YouTube", url: "https://youtube.com", icon: Youtube, desc: "Technical content" },
                { name: "TikTok", url: "https://tiktok.com", icon: Terminal, desc: "Bite-sized dev logs" },
              ].map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="p-4 border border-border bg-card/30 hover:border-primary hover:bg-primary/5 transition-all group flex flex-col gap-3">
                  <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <div className="font-bold text-sm tracking-tight">{link.name}</div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase mt-1">{link.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="aspect-[3/4] border border-border bg-card relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="w-full h-full border border-dashed border-border/50 flex items-center justify-center text-muted-foreground/30 font-mono text-xs uppercase text-center relative z-0">
              [ Portrait Data <br/> Missing ]
            </div>
            
            <div className="absolute bottom-4 left-4 z-20 font-mono text-[10px] text-muted-foreground uppercase tracking-widest space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-primary" /> Location Unknown
              </div>
              <div className="pl-5 text-primary/70">Sys_Admin // 01</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
