import { Link } from "wouter"
import { AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-6 text-center animate-in fade-in duration-500">
      <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-full mb-4">
        <AlertCircle className="w-12 h-12 text-destructive" />
      </div>
      
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter uppercase font-mono">404 // Node Missing</h1>
        <p className="text-muted-foreground max-w-md mx-auto font-light">
          The requested trajectory does not exist in the current system state. The route may have been archived or relocated.
        </p>
      </div>

      <Link 
        href="/" 
        className="mt-8 border border-border px-6 py-3 font-mono text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
      >
        Return to Root
      </Link>
    </div>
  )
}
