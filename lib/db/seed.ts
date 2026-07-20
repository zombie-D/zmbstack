import { db, projectsTable, blogPostsTable } from "./src/index";

async function seed() {
  console.log("🌱 Seeding database...");

  // Ajouter des projets de démonstration
  const projects = await db.insert(projectsTable).values([
    {
      slug: "portfolio-moderne",
      name: "Portfolio Moderne",
      tagline: "Un portfolio élégant et responsive",
      description: "Portfolio personnel développé avec les dernières technologies web pour présenter mes projets et compétences de manière professionnelle.",
      problem: "Besoin d'une présence en ligne professionnelle pour présenter mes réalisations et attirer de nouvelles opportunités.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
      architecture: "Architecture frontend moderne avec composants réutilisables",
      features: [
        "Design responsive et moderne",
        "Navigation fluide entre les pages",
        "Galerie de projets interactive",
        "Section blog intégrée",
        "Formulaire de contact",
        "Mode sombre/clair"
      ],
      challenges: [
        {
          title: "Performance optimale",
          description: "Assurer un temps de chargement rapide",
          solution: "Utilisation de lazy loading et optimisation des images"
        },
        {
          title: "Responsive design",
          description: "Adapter l'interface à tous les écrans",
          solution: "Mobile-first approach avec TailwindCSS"
        }
      ],
      status: "completed" as const,
      role: "Développeur Full-Stack",
      duration: "2 mois",
      screenshots: [],
      featured: true,
      order: 1
    },
    {
      slug: "app-gestion-taches",
      name: "Application de Gestion de Tâches",
      tagline: "Organisez votre travail efficacement",
      description: "Application web complète pour gérer projets et tâches avec système de collaboration en temps réel.",
      problem: "Les équipes ont besoin d'un outil simple pour suivre l'avancement de leurs projets et coordonner leurs efforts.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "WebSocket"],
      architecture: "Architecture client-serveur avec API REST et WebSocket pour les mises à jour en temps réel",
      features: [
        "Création et gestion de projets",
        "Attribution de tâches aux membres",
        "Suivi de progression en temps réel",
        "Notifications instantanées",
        "Tableaux Kanban interactifs",
        "Système de commentaires"
      ],
      challenges: [
        {
          title: "Synchronisation en temps réel",
          description: "Maintenir la cohérence des données entre utilisateurs",
          solution: "Implémentation de WebSocket avec gestion optimiste des updates"
        }
      ],
      status: "in-progress" as const,
      role: "Lead Developer",
      duration: "4 mois",
      screenshots: [],
      githubRepo: "https://github.com/username/task-manager",
      featured: true,
      order: 2
    },
    {
      slug: "plateforme-elearning",
      name: "Plateforme E-Learning",
      tagline: "Apprenez à votre rythme",
      description: "Plateforme d'apprentissage en ligne interactive avec vidéos, quiz et système de progression.",
      problem: "Les apprenants ont besoin d'une plateforme moderne et engageante pour suivre des formations en ligne.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AWS S3"],
      architecture: "Architecture microservices avec séparation des services vidéo, quiz et progression",
      features: [
        "Streaming vidéo adaptatif",
        "Système de quiz interactifs",
        "Suivi de progression personnalisé",
        "Certificats de complétion",
        "Forum de discussion",
        "Dashboard enseignant/étudiant"
      ],
      challenges: [
        {
          title: "Streaming vidéo performant",
          description: "Gérer la diffusion de vidéos HD de manière efficace",
          solution: "CDN avec encodage adaptatif et mise en cache intelligente"
        },
        {
          title: "Gestion des utilisateurs",
          description: "Système robuste de permissions et rôles",
          solution: "Implémentation d'un système RBAC avec JWT"
        }
      ],
      status: "completed" as const,
      role: "Développeur Full-Stack & Formateur",
      duration: "6 mois",
      screenshots: [],
      featured: true,
      order: 3
    }
  ]).returning();

  console.log(`✅ ${projects.length} projets ajoutés`);

  // Ajouter des articles de blog
  const blogPosts = await db.insert(blogPostsTable).values([
    {
      slug: "debuter-avec-react",
      title: "Débuter avec React en 2024",
      excerpt: "Guide complet pour commencer votre aventure React avec les meilleures pratiques actuelles.",
      content: `# Débuter avec React en 2024

React est devenu l'une des bibliothèques JavaScript les plus populaires pour créer des interfaces utilisateur modernes.

## Pourquoi React ?

- **Composants réutilisables** : Créez une fois, utilisez partout
- **Virtual DOM** : Performance optimale
- **Écosystème riche** : Des milliers de bibliothèques disponibles
- **Communauté active** : Support et ressources abondantes

## Installation

\`\`\`bash
npm create vite@latest mon-app -- --template react-ts
cd mon-app
npm install
npm run dev
\`\`\`

## Premier Composant

\`\`\`tsx
function Welcome({ name }: { name: string }) {
  return <h1>Bonjour, {name}!</h1>;
}
\`\`\`

## Prochaines étapes

1. Apprendre les hooks (useState, useEffect)
2. Comprendre la gestion d'état
3. Explorer React Router
4. Découvrir les tests avec Vitest

Bon apprentissage ! 🚀`,
      tags: ["React", "JavaScript", "Tutorial", "Web Development"],
      readingTime: 5,
      published: true,
      publishedAt: new Date("2024-01-15")
    },
    {
      slug: "typescript-pour-debutants",
      title: "TypeScript pour les débutants",
      excerpt: "Découvrez comment TypeScript peut améliorer votre code JavaScript avec le typage statique.",
      content: `# TypeScript pour les débutants

TypeScript ajoute le typage statique à JavaScript, ce qui permet d'éviter de nombreuses erreurs.

## Avantages

- ✅ Détection des erreurs avant l'exécution
- ✅ Meilleure autocomplétion dans l'IDE
- ✅ Code plus maintenable
- ✅ Documentation intégrée

## Types de base

\`\`\`typescript
let nom: string = "Alice";
let age: number = 25;
let estDeveloppeur: boolean = true;
\`\`\`

## Interfaces

\`\`\`typescript
interface Utilisateur {
  nom: string;
  email: string;
  age?: number; // Optionnel
}
\`\`\`

Commencez dès aujourd'hui !`,
      tags: ["TypeScript", "JavaScript", "Programming"],
      readingTime: 4,
      published: true,
      publishedAt: new Date("2024-02-01")
    }
  ]).returning();

  console.log(`✅ ${blogPosts.length} articles de blog ajoutés`);
  console.log("✨ Seeding terminé !");
}

seed()
  .catch((error) => {
    console.error("❌ Erreur lors du seeding:", error);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
