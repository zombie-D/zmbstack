import { Link } from "wouter"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center">
      <div className="text-[120px] font-bold text-muted-foreground/20 leading-none mb-6 font-mono tracking-tighter">404</div>
      <h1 className="text-2xl font-bold text-foreground mb-4">PAGE INTROUVABLE</h1>
      <p className="text-muted-foreground mb-8 max-w-md">La page que vous recherchez n'existe pas ou a été déplacée.</p>
      
      <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors">
        <ArrowLeft className="w-4 h-4" /> RETOUR À L'ACCUEIL
      </Link>
    </div>
  )
}
