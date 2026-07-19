import { ArrowUpRight, GraduationCap, Users, Layout, Database } from "lucide-react"

export default function Teaching() {
  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-500">
      <header className="space-y-4 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Instruction</h1>
        <p className="text-muted-foreground max-w-2xl font-light text-lg">
          Distilling complex software engineering paradigms into actionable mental models.
        </p>
      </header>

      <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20">
        <div className="space-y-16">
          <section className="space-y-6">
            <h2 className="text-sm font-mono tracking-widest text-muted-foreground uppercase border-b border-border pb-2">Pedagogy</h2>
            <div className="prose prose-invert max-w-none text-foreground prose-p:leading-relaxed prose-p:font-light">
              <p className="text-lg text-muted-foreground">
                I don't teach syntax; I teach systems thinking. Syntax changes every few years, but the principles of good architecture—separation of concerns, data flow, state management, and security—are eternal.
              </p>
              <p>
                My approach bridges the gap between academic theory and production reality. Students don't just build "todo apps"—they architect systems with auth, databases, error boundaries, and deployment pipelines. The goal is to build engineers who understand the "why" behind the "how".
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-sm font-mono tracking-widest text-muted-foreground uppercase border-b border-border pb-2">Curriculum Focus</h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Frontend Architecture", icon: Layout, desc: "React ecosystems, state management strategies, component composition, and performance optimization." },
                { title: "Backend Systems", icon: Database, desc: "API design, database modeling (SQL/NoSQL), authentication, and serverless deployment." },
                { title: "Security Paradigms", icon: Users, desc: "OWASP fundamentals, input sanitization, JWT implementation, and secure data handling." },
                { title: "Engineering Practices", icon: GraduationCap, desc: "Git workflows, CI/CD pipelines, testing strategies, and code review processes." }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-border bg-card/30 hover:border-primary/50 transition-colors">
                  <item.icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="p-6 border border-border bg-secondary/20 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Current Status</h3>
              <p className="font-medium text-lg">Active Trainer / Instructor</p>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-border/50">
              <h4 className="font-mono text-xs uppercase text-muted-foreground">Primary Technologies</h4>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex items-center gap-2 before:content-['>'] before:text-primary">React / Next.js</li>
                <li className="flex items-center gap-2 before:content-['>'] before:text-primary">Node.js / Express</li>
                <li className="flex items-center gap-2 before:content-['>'] before:text-primary">TypeScript</li>
                <li className="flex items-center gap-2 before:content-['>'] before:text-primary">PostgreSQL</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-border/50">
              <h4 className="font-mono text-xs uppercase text-muted-foreground">Target Audience</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bootcamp students, junior developers transitioning to full-stack roles, and teams adopting modern React ecosystems.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
