import { SiTiktok, SiYoutube, SiInstagram } from "react-icons/si"
import { Play, TrendingUp, Users } from "lucide-react"

export default function Contenu() {
  const stats = [
    { platform: "TikTok", icon: SiTiktok, count: "97.3k", label: "Abonnés", growth: "+12%" },
    { platform: "YouTube", icon: SiYoutube, count: "12.1k", label: "Abonnés", growth: "+5%" },
    { platform: "Vues Totales", icon: Play, count: "5M+", label: "Toutes plateformes", growth: "+8%" }
  ]

  const recentVideos = [
    {
      title: "Apprendre React en 10 minutes",
      platform: "YouTube",
      views: "45K",
      thumbnail: "bg-blue-900/20"
    },
    {
      title: "Le secret des développeurs seniors",
      platform: "TikTok",
      views: "120K",
      thumbnail: "bg-purple-900/20"
    },
    {
      title: "Créer un portfolio de A à Z",
      platform: "YouTube",
      views: "32K",
      thumbnail: "bg-emerald-900/20"
    },
    {
      title: "Pourquoi j'utilise Tailwind CSS",
      platform: "TikTok",
      views: "89K",
      thumbnail: "bg-indigo-900/20"
    }
  ]

  return (
    <div className="p-6 md:p-12 lg:p-20">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">CRÉATION DE CONTENU</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">CONTENU</h1>
        <p className="text-[15px] text-muted-foreground max-w-2xl leading-relaxed">
          Je partage mes connaissances, mes astuces de développement et mon quotidien de développeur/formateur à travers des vidéos courtes et longues.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stats.map((stat, i) => (
          <div key={i} className="border border-border bg-card p-6 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <stat.icon className="w-5 h-5 text-foreground" />
                <span className="text-xs font-bold uppercase tracking-wider">{stat.platform}</span>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.count}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-2.5 py-1">
              <TrendingUp className="w-3.5 h-3.5" />
              {stat.growth}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-3">
          <Play className="w-4 h-4 text-primary" />
          Vidéos Récentes
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentVideos.map((video, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`aspect-[9/16] ${video.thumbnail} border border-border mb-4 relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-background/50 group-hover:bg-transparent transition-colors duration-300" />
                <Play className="w-12 h-12 text-white/50 group-hover:text-primary group-hover:scale-110 transition-all duration-300 z-10" />
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-background border border-border text-[10px] font-bold text-foreground z-10">
                  {video.platform}
                </div>
              </div>
              <h3 className="font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">{video.title}</h3>
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> {video.views} vues
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
